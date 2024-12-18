import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PageHeading = ({ title, backPath }) => {
  const navigate = useNavigate();
  return (
    <div className=" text-[#033f4d] flex items-center gap-1">
      <button
        className="outline-none px-2"
        onClick={() => navigate(backPath || "/settings")}
      >
        <FaChevronLeft size={22} />
      </button>
      <h1 className="text-[24px] font-medium">{title}</h1>
    </div>
  );
};

export default PageHeading;
