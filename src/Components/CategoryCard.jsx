import { Button } from "antd";
import categoryImg from "../assets/images/category.png";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#E9F2F9] rounded-lg shadow-sm p-6 text-center space-y-4">
      <img
        src={categoryImg}
        alt="Service"
        className="w-full rounded-[12px] px-[10%]"
      />
      <h3 className="text-[18px] font-medium text-[#5C5C5C]">Night Llife</h3>
      <div className="flex gap-4">
        <Button
          //   onClick={() => setModalData(data)}
          style={{ background: "white", color: "#1F8D84" }}
          className="text-white rounded w-full"
          type="default"
          size="middle"
        >
          Delete
        </Button>
        <Button
          style={{ background: "#1F8D84", color: "white" }}
            onClick={() => navigate(`edit/${"564564656"}`)}
          className="rounded w-full"
          type="default"
          size="middle"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
