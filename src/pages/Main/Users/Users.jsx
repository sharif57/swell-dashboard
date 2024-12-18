import React, { useState } from "react";
import { Button, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";

const Users = () => {
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Join Date",
      key: "joinDate",
      dataIndex: "joinDate",
      align: "center",

    },
    // {
    //   title: "Phone Number",
    //   key: "phone",
    //   dataIndex: "phone",
    //   // align: "center", 

    // },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-[#033f4d]"
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
      email: "subro@gmal.com",
      phone: '01611198984',
      joinDate: "16 Apr 2024",
      _id: "12112121" + index,
    });
  }
  return (
    <div className="bg-[] font-oxygen rounded-lg py-[16px]">
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-white border text-center border-black px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total User"}</h3>
          <h3 className="text-[38px] font-normal ">
            {`2300`}
          </h3>
        </div>

      </div>
      {/* <div className="w-screen overflow-x-auto"> */}
      <div className="">
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-[25px] font-normal pt-10 font-oxygen text-[#464343]">{"Recent user  "}</h3>

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
            <h6 className="font-medium text-center pt-[18px]">User Details</h6>
            <div className="flex justify-between pt-[18px]">
              <p>User Name :</p>
              <p className="font-medium">{modalData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email :</p>
              <p className="font-medium">{modalData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Phone Number :</p>
              <p className="font-medium">{modalData.phone}</p>
            </div>
            {/* <div className="flex justify-between pt-[18px]">
              <p>Address</p>
              <p className="font-medium">{"Dhaka, Bangladesh"}</p>
            </div> */}
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date :</p>
              <p className="font-medium">{modalData.joinDate}</p>
            </div>

            <div className="flex justify-center items-center pt-8">
              <Button className="flex justify-center items-center text-center bg-primary rounded-full px-12 py-4 text-white">
                Download
              </Button>
            </div>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Users;
