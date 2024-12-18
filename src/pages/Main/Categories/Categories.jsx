import React from "react";
import { useNavigate } from "react-router-dom";
import AddNewButton from "../../../Components/AddNewButton";
import CategoryCard from "../../../Components/CategoryCard";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-[24px]">
      <AddNewButton text={"Add Category"} />
      <div className="grid grid-cols-4 xl:grid-cols-6 gap-6">
        {[...Array(8)].map((item, inx) => (
          <CategoryCard key={inx} />
        ))}
      </div>
    </div>
  );
};
export default Categories;
