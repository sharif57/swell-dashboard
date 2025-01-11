// import { useState } from "react";
// import { Button, Table } from "antd";
// import { FiAlertCircle } from "react-icons/fi";
// import DashboardModal from "./DashboardModal";
// import { useFetchUsersQuery } from "../features/userSlice";
// const DashboardHomeTable = () => {
//   // const { data: products = [], isLoading, isError } = useFetchUsersQuery();
//   const { data: user, isLoading, isError } = useFetchUsersQuery();
//   console.log(user) 

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});
//   const showModal = (data) => {
//     setIsModalOpen(true);
//     setModalData(data);
//   };
//   const columns = [
//     {
//       title: "#SL",
//       dataIndex: "transIs",
//       key: "transIs",
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       key: "Email",
//       align: "center",
//     },
//     {
//       title: "Address",
//       key: "Address",
//       dataIndex: "Address",
//       align: "center",
//     },
//     // {
//     //   title: "Date",
//     //   key: "date",
//     //   dataIndex: "date",
//     // },
//     {
//       title: "Action",
//       key: "action",
//       render: (data) => (
//         <Button
//           onClick={() => showModal(data)}
//           type="text"
//           shape="circle"
//           className="px-0 py-0 text-[#033f4d]"
//         >
//           <FiAlertCircle size={22} />
//         </Button>
//       ),
//     },
//   ];
//   const data = [];
//   for (let index = 0; index < 6; index++) {
//     data.push({
//       transIs: index + 1,
//       name: "Henry",
//       Email: "sharifmahaud@gmail.com",
//       Address: "Dhaka,Bangladesh",
//       // date: "16 Apr 2024",
//       _id: index,
//     });
//     // const element = array[index];
//   }
//   return (
//     <div className=" rounded-lg py-[16px] border border-black">
//       <div>
//         <h3 className="text-[25px] font-normal text-[#464343] px-6 pb-5">
//           {"Recent user  "}
//         </h3>
//         <Table
//           columns={columns}
//           dataSource={data}
//           pagination={{
//             position: ["bottomCenter"],
//           }}
//         />
//       </div>
//       <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
//         <div className="h-[560px] flex flex-col justify-between">
//           <div className="space-y-[36px] text-sm text-[#181414] py-2">
//             <h6 className="font-medium text-center">Recent user </h6>
//             <div className="flex justify-between">
//               <p>Transaction ID : </p>
//               <p className="font-medium">{modalData.transIs}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Date : </p>
//               <p className="font-medium">{modalData.date}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>User name :</p>
//               <p className="font-medium">{modalData.name}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>A/C number :</p>
//               <p className="font-medium">{"****  ****  ****  *545"}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>A/C holder name :</p>
//               <p className="font-medium">{"Henry"}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Transaction amount :</p>
//               <p className="font-medium">{modalData.amount}</p>
//             </div>
//           </div>
//           <div className="flex gap-5 pb-[40px]">
//             <Button
//               style={{ height: "44px" }}
//               className="w-full rounded-xl font-medium"
//             >
//               Download
//             </Button>
//             <Button
//               style={{
//                 height: "44px",
//                 backgroundColor: "#1F8D84",
//                 color: "white",
//               }}
//               className="w-full rounded-xl font-medium"
//             >
//               Print
//             </Button>
//           </div>
//         </div>
//       </DashboardModal>
//     </div>
//   );
// };

// export default DashboardHomeTable;

import { Alert, Button, Spin, Table } from "antd";
import dayjs from "dayjs"; // Import Day.js for date formatting
import DashboardModal from "./DashboardModal";
import { FiAlertCircle } from "react-icons/fi";
import { useFetchUsersQuery } from "../features/userSlice";
import { useState } from "react";

const DashboardHomeTable = () => {
  const { data, isLoading, isError, error } = useFetchUsersQuery();
  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  // Prepare the data for the Ant Design Table
  const tableData = data?.data?.result.map((user, index) => ({
    key: user._id, // AntD requires a unique key for each row
    transIs: index + 1,
    name: user.name,
    email: user.email,
    date: user.createdAt ? dayjs(user.createdAt).format("YYYY-MM-DD") : "N/A", // Format createdAt date
    address: user.address || "N/A",
    phone: user.phone || "N/A",
    status: user.status || "Active",
  }));

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const columns = [
    {
      title: "#SL",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <span>{text}</span>,
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
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Join Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
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

  return (
    <div className="rounded-lg py-[16px] border border-black">
      <div>
        <h3 className="text-[25px] font-normal text-[#464343] px-6 pb-5">
          Recent Users
        </h3>

        {isLoading ? (
          <Spin size="large" />
        ) : isError ? (
          <Alert
            message="Error"
            description={error?.data?.message || "Failed to load data."}
            type="error"
            showIcon
          />
        ) : (
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{
              position: ["bottomCenter"],
            }}
          />
        )}
      </div>

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="h-[560px] flex flex-col justify-between">
          <div className="space-y-[36px] text-sm text-[#181414] py-2">
            <h6 className="font-medium text-center">User Details</h6>
            <div className="flex justify-between">
              <p>User Name:</p>
              <p className="font-medium">{modalData.name}</p>
            </div>
            <div className="flex justify-between">
              <p>Email:</p>
              <p className="font-medium">{modalData.email}</p>
            </div>
            <div className="flex justify-between">
              <p>Email:</p>
              <p className="font-medium">{modalData.address}</p>
            </div>
            <div className="flex justify-between">
              <p>Phone:</p>
              <p className="font-medium">{modalData.phone || "N/A"}</p>
            </div>
            <div className="flex justify-between">
              <p>Address:</p>
              <p className="font-medium">{modalData.address || "N/A"}</p>
            </div>
            <div className="flex justify-between">
              <p>Status:</p>
              <p className="font-medium">{modalData.status || "Active"}</p>
            </div>
            <div className="flex justify-between">
              <p>Join Date:</p>
              <p className="font-medium">
                {modalData.createdAt
                  ? dayjs(modalData.createdAt).format("YYYY-MM-DD")
                  : "N/A"}
              </p>
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
  );
};

export default DashboardHomeTable;
