// import { Alert, Button, Spin, Table } from "antd";
// import dayjs from "dayjs"; // Import Day.js for date formatting
// import { FiAlertCircle } from "react-icons/fi";
// import { useState } from "react";
// import DashboardModal from "../../../Components/DashboardModal";
// import { useFetchUsersQuery } from "../../../features/userSlice";

// const DashboardHomeTable = () => {
//   const { data, isLoading, isError, error } = useFetchUsersQuery();
//   console.log(data);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});

//   // Prepare the data for the Ant Design Table
//   const tableData = data?.data?.result.map((user, index) => ({
//     key: user._id, // AntD requires a unique key for each row
//     transIs: index + 1,
//     name: user.name,
//     email: user.email,
//     date: user.createdAt ? dayjs(user.createdAt).format("YYYY-MM-DD") : "N/A", // Format createdAt date
//     phone: user.phone || "N/A",
//     status: user.status || "Active",
//   }));

//   const showModal = (data) => {
//     setIsModalOpen(true);
//     setModalData(data);
//   };

//   const columns = [
//     {
//       title: "#SL",
//       dataIndex: "transIs",
//       key: "transIs",
//       render: (text) => <span>{text}</span>,
//     },
//     {
//       title: "User Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       align: "center",
//     },
//     {
//       title: "Join Date",
//       dataIndex: "date",
//       key: "date",
//       align: "center",
//     },
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

//   return (
//     <div className="rounded-lg py-[16px] border ">
//       <div className="px-4">
//         <h1 className="text-[25px] font-normal">Overview</h1>

//         <div className="grid grid-cols-12 gap-x-[22px]">
//           <div className="col-span-3 bg-white border text-center border-black px-[24px] py-[16px] rounded-2xl space-y-3">
//             <h3 className="text-[20px]">{"Total User"}</h3>

//             {/* Handle loading and error states */}
//             {isLoading ? (
//               <h3 className="text-[38px] font-normal">Loading...</h3>
//             ) : isError ? (
//               <h3 className="text-[38px] font-normal text-red-600">
//                 {error?.data?.message || "Failed to load data"}
//               </h3>
//             ) : (
//               <h3 className="text-[38px] font-normal">
//                 {data?.data?.count || 0}
//               </h3>
//             )}
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3 className="text-[25px] font-normal text-[#464343] px-6 pb-5">
//           Recent Users
//         </h3>

//         {isLoading ? (
//           <Spin size="large" />
//         ) : isError ? (
//           <Alert
//             message="Error"
//             description={error?.data?.message || "Failed to load data."}
//             type="error"
//             showIcon
//           />
//         ) : (
//           <Table
//             columns={columns}
//             dataSource={tableData}
//             pagination={{
//               position: ["bottomCenter"],
//             }}
//           />
//         )}
//       </div>

//       <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
//         <div className="h-[560px] flex flex-col justify-between">
//           <div className="space-y-[36px] text-sm text-[#181414] py-2">
//             <h6 className="font-medium text-center">User Details</h6>
//             <div className="flex justify-between">
//               <p>User Name:</p>
//               <p className="font-medium">{modalData.name}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Email:</p>
//               <p className="font-medium">{modalData.email}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Email:</p>
//               <p className="font-medium">{modalData.address}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Phone:</p>
//               <p className="font-medium">{modalData.phone || "N/A"}</p>
//             </div>

//             <div className="flex justify-between">
//               <p>Status:</p>
//               <p className="font-medium">{modalData.status || "Active"}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Join Date:</p>
//               <p className="font-medium">
//                 {modalData.createdAt
//                   ? dayjs(modalData.createdAt).format("YYYY-MM-DD")
//                   : "N/A"}
//               </p>
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
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import DashboardModal from "../../../Components/DashboardModal";
import { useFetchUsersQuery } from "../../../features/userSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
    phone: user.phone || "N/A",
    status: user.status || "Active",
  }));

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const handleDownload = async () => {
    const modalContent = document.getElementById("modal-content");

    if (!modalContent) {
      console.error("Modal content not found.");
      return;
    }

    try {
      // Capture the modal content using html2canvas
      const canvas = await html2canvas(modalContent, {
        scale: 2, // Ensures high-quality image capture
        useCORS: true, // Handles cross-origin issues for external assets
        backgroundColor: "#FFFFFF", // Sets a clean white background
      });

      // Convert the canvas to a PNG image
      const imgData = canvas.toDataURL("image/png");

      // Initialize jsPDF instance
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth(); // PDF width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Scale height proportionally

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Save the PDF with a meaningful file name
      pdf.save(`${modalData.name || "User_Details"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
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
    <div className="rounded-lg py-[16px] border">
      <div className="px-4">
        <h1 className="text-[25px] font-normal">Overview</h1>

        <div className="grid grid-cols-12 gap-x-[22px]">
          <div className="col-span-3 bg-white border text-center border-black px-[24px] py-[16px] rounded-2xl space-y-3">
            <h3 className="text-[20px]">{"Total User"}</h3>

            {/* Handle loading and error states */}
            {isLoading ? (
              <h3 className="text-[38px] font-normal">Loading...</h3>
            ) : isError ? (
              <h3 className="text-[38px] font-normal text-red-600">
                {error?.data?.message || "Failed to load data"}
              </h3>
            ) : (
              <h3 className="text-[38px] font-normal">
                {data?.data?.count || 0}
              </h3>
            )}
          </div>
        </div>
      </div>
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
        <div
          id="modal-content"
          className="h-[560px]  flex flex-col justify-between"
        >
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
              <p>Address:</p>
              <p className="font-medium">{modalData.address}</p>
            </div>
            <div className="flex justify-between">
              <p>Phone:</p>
              <p className="font-medium">{modalData.phone || "N/A"}</p>
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
              onClick={handleDownload}
            >
              Download
            </Button>
            <Button
              style={{
                height: "44px",
                backgroundColor: "#1F8D84",
                color: "white",
              }}
              className="w-full rounded-xl font-medium "
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
