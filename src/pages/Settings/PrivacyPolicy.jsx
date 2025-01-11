import { Button, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { usePrivacyQuery } from "../../features/PolicySlice";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Fetching Privacy Policy content using the query hook
  const { data, isLoading, error } = usePrivacyQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    message.error("Failed to load Privacy Policy. Please try again.");
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <p className="text-red-500 text-lg">Error loading Privacy Policy.</p>
      </div>
    );
  }

  const privacyDescription = data?.data?.[0]?.description || "No Privacy Policy content available.";

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div className="space-y-4">
        <PageHeading title={"Privacy Policy"} />
        <div className="space-y-4">
          <p className="text-gray-600">{privacyDescription}</p>
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          onClick={() => navigate("edit")}
          style={{
            backgroundColor: "#033f4d",
            color: "#fff",
          }}
          htmlType="submit"
          className="w-[400px] h-[56px] placeholder:text-[#999999] text-[18px] font-medium"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
