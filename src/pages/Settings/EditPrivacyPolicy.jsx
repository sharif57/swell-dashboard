import { Button } from "antd";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";

const EditPrivacyPolicy = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Enter your update privacy policy...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "60vh",
    }),
    [placeholder]
  );
  console.log(content);
  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      <div className="space-y-6">
        <PageHeading
          title={"Edit Privacy Policy"}
          backPath={"/settings/privacy-policy"}
        />
        <div className="">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            className="text-wrap"
            config={config}
            tabIndex={1}
          />
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          style={{
            backgroundColor: "#033f4d",
            color: "#fff",
          }}
          htmlType="submit"
          className="w-[400px] h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPrivacyPolicy;
