import { Button, DatePicker, Input, Pagination } from "antd";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import DealCard from "../../../Components/DealCard";
import { useNavigate } from "react-router-dom";
import DashboardModal from "../../../Components/DashboardModal";

const Deals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const navigate = useNavigate();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="bg-[#e9f4f9] py-[14px] rounded-lg">
      <h1 className="bg-[#1F8D84] text-center text-white p-[10px]">Deals</h1>
      <div className="mt-5 px-4 ">
        <div className="pb-7 flex justify-between items-center">
          <Button
            onClick={() => navigate("add-new")}
            style={{
              backgroundColor: "#070707",
              size: "18px",
              color: "#ffff",
            }}
            className="w-[300px] px-4  rounded-full "
            size="middle"
          >
            Add Deals 🤝
          </Button>
          <div className="flex justify-end gap-x-4">
            <DatePicker
              placeholder="Date"
              style={{ width: "150px" }}
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
              placeholder="Deal Name"
            />
            <Button
              className="bg-[#1F8D84] text-white border-none"
              type="primary"
              shape="circle"
              icon={<IoSearch className="" />}
            />
          </div>
        </div>
        <div className="space-y-5">
          {[...Array(8)].map((item, inx) => (
            <DealCard key={inx} setModalData={showModal} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <Pagination
          defaultCurrent={6}
          total={500}
          pagination={{
            position: ["bottomCenter"],
            showQuickJumper: true,
          }}
        />
      </div>
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        closeIcon={false}
      >
        <div className=" px-3 space-y-5">
          <h1 className="text-[24px] font-semibold">Delete Deal</h1>
          <p>Are you sure you want to delete the Deal Details ?</p>
          <div className="flex gap-6 justify-end py-3">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-white text-[#1F8D84] rounded-full w-[70px]"
              type="default"
              size="large"
            >
              No
            </Button>
            <Button
              // onClick={() => setIsModalOpen(true)}
              style={{ background: "#1F8D84", color: "white" }}
              className="rounded-full w-[70px]"
              type="default"
              size="large"
            >
              Yes
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Deals;
