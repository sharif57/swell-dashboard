// import { Button } from "antd";
// import { useMemo, useRef, useState } from "react";
// import JoditEditor from "jodit-react";
// import { useNavigate } from "react-router-dom";
// import PageHeading from "../../Components/PageHeading";

// const EditAboutUs = () => {
//   const navigate = useNavigate();
//   const editor = useRef(null);
//   const [content, setContent] = useState("");
//   const placeholder = "Enter your update about us...";
//   const config = useMemo(
//     () => ({
//       readonly: false,
//       placeholder: placeholder || "Start typing...",
//       height: "60vh",
//     }),
//     [placeholder]
//   );
//   console.log(content);
//   return (
//     <div className="min-h-[75vh] flex flex-col justify-between">
//       <div className="space-y-6">
//         <PageHeading title={"Edit About us"} backPath={"/settings/about-us"} />
//         <div className="">
//           <JoditEditor
//             ref={editor}
//             value={content}
//             onChange={(newContent) => {
//               setContent(newContent);
//             }}
//             className="text-wrap"
//             config={config}
//             tabIndex={1}
//           />
//         </div>
//       </div>
//       <div className="flex justify-end pt-10">
//         <Button
//           style={{
//             backgroundColor: "#033f4d",
//             color: "#fff",
//           }}
//           htmlType="submit"
//           className="w-[400px] h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
//         >
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditAboutUs;

import { Button, message, Spin } from "antd";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { useAboutUsQuery, useUpdateAboutMutation } from "../../features/PolicySlice";

const EditAboutUs = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // Fetch existing About Us content
  const { data, isLoading, error } = useAboutUsQuery();

  // Mutation for updating About Us content
  const [updateAbout, { isLoading: isUpdating }] = useUpdateAboutMutation();

  // Jodit Editor Configuration
  const placeholder = "Enter your update about us...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "60vh",
    }),
    [placeholder]
  );

  // Handle Save Button Click
  const handleSave = async () => {
    if (!content.trim()) {
      message.warning("Content cannot be empty!");
      return;
    }

    try {
      const response = await updateAbout({ description: content }).unwrap();
      message.success(response.message || "About Us updated successfully!");
      navigate("/settings/about-us"); // Navigate back to the About Us page
    } catch (error) {
      console.error("Failed to update About Us:", error);
      message.error(error.data?.message || "Failed to update About Us.");
    }
  };

  // Populate editor with current content once data is loaded
  if (data?.data && !content && !isLoading) {
    setContent(data.data[0]?.description || "");
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[75vh]">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[75vh] flex flex-col justify-center items-center">
        <p className="text-red-500 text-lg">Failed to load About Us data.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      {/* Page Heading */}
      <div className="space-y-6">
        <PageHeading title="Edit About Us" backPath="/settings/about-us" />
        {/* Editor */}
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="text-wrap"
            config={config}
            tabIndex={1}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-10">
        <Button
          style={{
            backgroundColor: "#033f4d",
            color: "#fff",
          }}
          htmlType="button"
          onClick={handleSave}
          loading={isUpdating} // Show loading indicator during update
          className="w-[400px] h-[56px] placeholder:text-[#999999] text-[18px] font-medium"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditAboutUs;
