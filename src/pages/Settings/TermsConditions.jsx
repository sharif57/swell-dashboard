import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { useTermsQuery } from "../../features/PolicySlice";

const TermsConditions = () => {
  const navigate = useNavigate();
  const {data} = useTermsQuery()
  console.log(data)
  const termsDescription = data?.data?.[0]?.description || "No Privacy Policy content available.";

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div className="space-y-4">
        <PageHeading title={"Terms & Conditions"} />
        <div className="space-y-4 ">
          <p>
           {termsDescription}
          </p>

          
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
          className="w-[400px] h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TermsConditions;
