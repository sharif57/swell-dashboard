// import  { useState } from "react";
// import { Button, Form, Input } from "antd";
// import dashProfile from "../../assets/images/dashboard-profile.png";
// import {  useNavigate } from "react-router-dom";
// import { PiCameraPlus } from "react-icons/pi";

// import PhoneCountryInput from "../../Components/PhoneCountryInput";
// import PageHeading from "../../Components/PageHeading";
// import { useAdminProfileQuery } from "../../features/userSlice";

// const EditMyProfile = () => {

//   const { data, isLoading, isError, error } = useAdminProfileQuery();
//   // const { data, isLoading, isError, error } = useUpdateProfileMutation();
//   console.log(data,'admin profile')
//   console.log(data,'update profile')

//   const [code, setCode] = useState();
//   const navigate = useNavigate();
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   const profileData = {
//     name: "Enrique",
//     email: "enrique@gmail.com",
//     phone: "+880 150597212",
//     profile: dashProfile,
//   };
//   console.log(code);

//   return (
//     <div className="h-screen">
//       <div className="space-y-[34px] ">
//         <PageHeading
//           title={"Edit Personal information"}
//           backPath={"/settings/personal-information"}
//         />

//         <Form
//           name="basic"
//           layout="vertical"
//           className="w-full grid grid-cols-12 gap-x-5 p-12 border-2 rounded-lg bg-white"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//           initialValues={{
//             name: profileData.name,
//             email: profileData.email,
//           }}
//         >
//           <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#ffffff]  p-8 rounded-lg border border-[#81888a] space-y-4 shadow-inner">
//             <div className="my-3 relative">
//               <div className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white cursor-pointer">
//                 <PiCameraPlus size={34} />
//               </div>

//               <img
//                 src={dashProfile}
//                 alt=""
//                 className="h-[144px] w-[144px] rounded-full"
//               />
//             </div>
//             <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
//             <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
//           </div>
//           <div className="col-span-8 space-y-[24px]">
//             <Form.Item
//               className="text-lg text-[#1F8D84] font-medium"
//               label="Name"
//               name="name"
//             >
//               <Input
//                 style={{
//                   border: "1px solid #033f4d",
//                 }}
//                 className="h-[56px] rounded-lg mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               className="text-lg text-[#] font-medium"
//               label="Email"
//               name="email"
//             >
//               <Input
//                 style={{
//                   border: "1px solid #033f4d",
//                 }}
//                 className="h-[56px] rounded-lg bg-[#ffffff] mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               className="text-lg text-[#222222] font-medium"
//               label="Phone Number"
//               name="phone"
//             >
//               <PhoneCountryInput />
//             </Form.Item>
//             <div className="flex justify-end">
//               <Button
//                 style={{
//                   backgroundColor: "#033f4d",
//                   color: "#fff",
//                 }}
//                 htmlType="submit"
//                 className="h-[56px] w-[206px]  placeholder:text-[#999999] text-[18px] font-medium"
//                 type="primary"
//               >
//                 Save Changes
//               </Button>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Button, Form, Input, Spin, Upload, message } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { PiCameraPlus } from "react-icons/pi";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import { useAdminProfileQuery, useUpdateProfileMutation } from "../../features/userSlice";

const EditMyProfile = () => {
  const { data: profileData, isLoading, isError, error } = useAdminProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(profileData?.data?.image || dashProfile);
  const [imageFile, setImageFile] = useState(null);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Error loading profile: {error?.message || "Unknown error"}</p>
      </div>
    );
  }

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await updateProfile(formData).unwrap();
      setImageUrl(response.data.image); // Update the image preview with the new URL
      message.success(response.message || "Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      message.error("Failed to update profile. Please try again.");
    }
  };

  const handleUpload = (info) => {
    const { file } = info;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result); // Update the preview image
    };
    reader.readAsDataURL(file.originFileObj);
    setImageFile(file.originFileObj); // Save the file for submission
  };

  return (
    <div className="h-screen">
      <div className="space-y-[34px]">
        <PageHeading
          title={"Edit Personal Information"}
          backPath={"/settings/personal-information"}
        />

        <Form
          form={form}
          name="basic"
          layout="vertical"
          className="w-full grid grid-cols-12 gap-x-5 p-12 border-2 rounded-lg bg-white"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            name: profileData?.data?.name || "",
            email: profileData?.data?.email || "",
            phone: profileData?.data?.phone || "",
          }}
        >
          <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#ffffff] p-8 rounded-lg border border-[#81888a] space-y-4 shadow-inner">
            <Upload
              name="profile"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleUpload}
              accept="image/*"
            >
              <div className="my-3 relative cursor-pointer">
                <div className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white">
                  <PiCameraPlus size={34} />
                </div>
                <img
                  src={imageUrl.startsWith("/images") ? `http://your-backend-url${imageUrl}` : imageUrl}
                  alt="Profile"
                  className="h-[144px] w-[144px] rounded-full object-cover"
                />
              </div>
            </Upload>
            <h5 className="text-lg text-[#222222]">{"Profile"} </h5>
            <h4 className="text-2xl text-[#222222]">
              {profileData?.data?.role || "Admin"}
            </h4>
          </div>
          <div className="col-span-8 space-y-[24px]">
            <Form.Item
              className="text-lg text-[#1F8D84] font-medium"
              label="Name"
              name="name"
            >
              <Input className="h-[56px] rounded-lg mt-3" />
            </Form.Item>
            <Form.Item
              className="text-lg text-[#] font-medium"
              label="Email"
              name="email"
            >
              <Input className="h-[56px] rounded-lg bg-[#ffffff] mt-3 text-black" disabled />
            </Form.Item>
            <Form.Item
              className="text-lg text-[#222222] font-medium"
              label="Phone Number"
              name="phone"
            >
              <PhoneCountryInput />
            </Form.Item>
            <div className="flex justify-end">
              <Button
                style={{
                  backgroundColor: "#033f4d",
                  color: "#fff",
                }}
                htmlType="submit"
                className="h-[56px] w-[206px] text-[18px] font-medium"
                type="primary"
                loading={isUpdating}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditMyProfile;
