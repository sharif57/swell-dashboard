import React from "react";
import categoryImg from "../assets/images/category.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const DealCard = ({ setModalData }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-end justify-between py-2 px-4 bg-[#ECECEC] border border-[#badcd9ea] shadow-sm rounded-xl">
      <div className="flex items-center gap-4">
        <img
          src={categoryImg}
          alt="Deal"
          className="w-[75px] h-[75px] rounded-xl object-cover"
        />
        <div className="space-y-0.5">
          <h2 className="font-semibold">20% off on Dinner</h2>
          <p className="text-gray-600 text-[10px]">Save $2</p>
          <p className="text-gray-600 text-[10px]">Pico Taqueria</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Button
          style={{ background: "#1F8D84", color: "white" }}
          onClick={() => navigate(`edit/${"564564656"}`)}
          className="rounded-xl px-6"
          type="default"
          size="middle"
        >
          Edit
        </Button>
        <Button
          onClick={() => setModalData({})}
          type="default"
          shape="circle"
          size="middle"
          className="text-red-500"
        >
          <FiTrash2 size={21} />
        </Button>
      </div>
    </div>
  );
};

export default DealCard;
