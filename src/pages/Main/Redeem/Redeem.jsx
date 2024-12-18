import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";


const Redeem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const columns = [
    {
      title: "#SI",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Deal",
      dataIndex: "deal",
      key: "deal",
    },
    {
      title: "Place",
      key: "place",
      dataIndex: "place",
    },
    {
      title: "Money",
      key: "money ",
      dataIndex: "money",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-[#FF8400]"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      key: index + 1,
      name: "John Brown",
      email: "subro@gmail.com",
      deal: "20% on Burger",
      place: "Pico Resturant",
      money: "$22",
      date: "16 Apr 2024",
      _id: "12112121" + index,
    });
  }
  return (
    <div className="bg-[#E9F4F3] rounded-lg py-[16px]">
      <div>
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-xl font-medium text-[#464343]">{"Redeem List"}</h3>
          <div className="flex justify-end gap-x-4">
            <DatePicker
              placeholder="Date"
              style={{ width: "150px" }}
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
              placeholder="Place Name"
            />
            <Button
              className="bg-[#1F8D84] text-white border-none"
              type="primary"
              shape="circle"
              icon={<IoSearch className="" />}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
            showQuickJumper: true,
          }}
        />
      </div>
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="h-[560px] flex flex-col justify-between">
          <div className="space-y-[18px] text-sm text-[#181414] pb-2 divide-y">
            <h6 className="font-medium text-center pt-[18px]">Redeem Details</h6>
            <div className="flex justify-between pt-[18px]">
              <p>User Name</p>
              <p className="font-medium">{modalData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email</p>
              <p className="font-medium">{modalData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Deal</p>
              <p className="font-medium">{modalData.deal}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Place</p>
              <p className="">{modalData.place}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Saved money</p>
              <p className="font-medium">{modalData.money}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date</p>
              <p className="font-medium">{modalData.date}</p>
            </div>
          </div>
        </div>
      </DashboardModal>
    </div>
  )
}

export default Redeem