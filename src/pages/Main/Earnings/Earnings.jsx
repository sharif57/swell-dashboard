import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";
const Earnings = () => {
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
      title: "#Tr.ID",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      key: "subscription",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
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
  for (let index = 0; index < 50; index++) {
    data.push({
      transIs: "12345678",
      name: "Henry",
      subscription: "Standard",
      amount: "$9.99",
      date: "16 Apr 2024",
      _id: index,
    });
    // const element = array[index];
  }
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Earnings"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">
            $ {`254.99 `}
          </h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Users"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">6500</h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Subscriber"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">740</h3>
        </div>
        <div className="col-span-3 bg-playground px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total Redeem"}</h3>
          <h3 className="text-[30px] font-medium text-[#1F8D84]">7400</h3>
        </div>
      </div>
      <div className="bg-playground rounded-lg py-[16px]">
        <div>
          <div className="px-6 pb-5 flex justify-between items-center">
            <h3 className="text-xl font-medium text-[#464343]">
              {"Recent Transactions"}
            </h3>
            <div className="flex justify-end gap-x-4">
              <DatePicker
                placeholder="Date"
                style={{ width: "150px" }}
                className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
                onChange={onChange}
              />
              <Input
                className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
                placeholder="Name"
              />
              <Input
                className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[220px]"
                placeholder="Subscription name"
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
        <DashboardModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        >
          <div className="h-[560px] flex flex-col justify-between">
            <div className="space-y-[36px] text-sm text-[#181414] py-2">
              <h6 className="font-medium text-center">Transaction Details</h6>
              <div className="flex justify-between">
                <p>Transaction ID : </p>
                <p className="font-medium">{modalData.transIs}</p>
              </div>
              <div className="flex justify-between">
                <p>Date : </p>
                <p className="font-medium">{modalData.date}</p>
              </div>
              <div className="flex justify-between">
                <p>User name :</p>
                <p className="font-medium">{modalData.name}</p>
              </div>
              <div className="flex justify-between">
                <p>A/C number :</p>
                <p className="font-medium">{"****  ****  ****  *545"}</p>
              </div>
              <div className="flex justify-between">
                <p>A/C holder name :</p>
                <p className="font-medium">{"Henry"}</p>
              </div>
              <div className="flex justify-between">
                <p>Transaction amount :</p>
                <p className="font-medium">{modalData.amount}</p>
              </div>
              <div className="flex justify-between">
                <p>Subscription purchased :</p>
                <p className="font-medium">{modalData.subscription}</p>
              </div>
            </div>
            <div className="flex gap-5 pb-[40px]">
              <Button
                style={{ height: "44px" }}
                className="w-full rounded-xl font-medium"
              >
                Download
              </Button>
              <Button
                style={{
                  height: "44px",
                  backgroundColor: "#1F8D84",
                  color: "white",
                }}
                className="w-full rounded-xl font-medium"
              >
                Print
              </Button>
            </div>
          </div>
        </DashboardModal>
      </div>
    </div>
  );
};

export default Earnings;
