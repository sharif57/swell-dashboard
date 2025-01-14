// import { Alert, Button, DatePicker, Spin, Table } from "antd";
// import dayjs from "dayjs"; // Import Day.js for date formatting
// import { FiAlertCircle } from "react-icons/fi";
// import { useState } from "react";
// import DashboardModal from "../../../Components/DashboardModal";
// import { useFetchUsersQuery } from "../../../features/userSlice";
// import TextArea from "antd/es/input/TextArea";
// import Search from "antd/es/transfer/search";

// const Feedback = () => {
//   const { data, isLoading, isError, error } = useFetchUsersQuery();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

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

//   // Filter the data based on the search term
//   const filteredData = tableData?.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.phone.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const onSearch = (value) => {
//     setSearchTerm(value); // Update search term
//   };

//   const showModal = (data) => {
//     setIsModalOpen(true);
//     setModalData(data);
//   };

//   const onChange = (date, dateString) => {
//     console.log(date, dateString);
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
//       title: "Phone number",
//       dataIndex: "phone",
//       key: "phone",
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
//       <div>
//         <div>
//           <div className="flex justify-end items-center w-1/2 pb-4 gap-6 mx-auto ">
//             <DatePicker onChange={onChange} />
//             <Search
//               placeholder="Search by Name or Phone"
//               onSearch={onSearch}
//               style={{
//                 width: 200,
//               }}
//             />
//           </div>
//         </div>

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
//             dataSource={filteredData} // Use the filtered data
//             pagination={{
//               position: ["bottomCenter"],
//             }}
//           />
//         )}
//       </div>

//       <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
//         <div className=" flex flex-col justify-between">
//           <div className=" pt-8 text-sm text-[#181414] py-2">
//             <h6 className="font-normal mb-4 font-oxygen text-start text-[20px]">
//               Feedback Details
//             </h6>
//             <TextArea className="border-2  border-s-cyan-400" rows={4} />
//           </div>
//         </div>
//       </DashboardModal>
//     </div>
//   );
// };

// export default Feedback;

// import { useState } from "react";
// import { Button, Table, Input, DatePicker, Spin, Alert } from "antd";
// import dayjs from "dayjs"; // Import Day.js for date formatting
// import {
//   useFeedbackQuery,
//   useFetchUsersQuery,
// } from "../../../features/userSlice"; // Assuming the hook for fetching users is defined here
// import DashboardModal from "../../../Components/DashboardModal"; // Import DashboardModal
// import TextArea from "antd/es/input/TextArea";
// import { FiAlertCircle } from "react-icons/fi";

// const Feedback = () => {
//   const { feedback } = useFeedbackQuery();
//   console.log(feedback, "feedback");
//   const { data, isLoading, isError, error } = useFetchUsersQuery();
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const [modalData, setModalData] = useState({}); // Store data for modal (if needed)
//   const [searchTerm, setSearchTerm] = useState(""); // State for search term
//   const [selectedDate, setSelectedDate] = useState(null); // State for selected date filter

//   // Prepare the data for the Ant Design Table
//   const tableData = data?.data?.result.map((user, index) => ({
//     key: user._id, // AntD requires a unique key for each row
//     transIs: index + 1,
//     name: user.name,
//     email: user.email,
//     date: user.createdAt ? dayjs(user.createdAt).format("YYYY-MM-DD") : "N/A", // Format createdAt date
//     phone: user.phone || "N/A",
//     // status: user.status || "Active",
//   }));

//   // Filter the data based on the search term and selected date
//   const filteredData = tableData?.filter(
//     (item) =>
//       (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (!selectedDate || dayjs(item.date).isSame(selectedDate, "day"))
//   );

//   // Handle Search input change for real-time search
//   const onSearchChange = (e) => {
//     setSearchTerm(e.target.value); // Update search term on every keystroke
//   };

//   // Handle Date selection change
//   const onDateChange = (date, dateString) => {
//     setSelectedDate(date ? dayjs(dateString) : null); // Set selected date
//   };

//   const handleFeed =()=>{

//   }

//   // Define columns for the Table
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
//       title: "Phone number",
//       dataIndex: "phone",
//       key: "phone",
//       align: "center",
//     },
//     // {
//     //   title: "Status",
//     //   dataIndex: "status",
//     //   key: "status",
//     //   align: "center",
//     // },
//     {
//       title: "Action",
//       key: "action",
//       render: (data) => (
//         <Button
//           onClick={() => {
//             setModalData(data); // Set data to show in the modal
//             setIsModalOpen(true); // Open the modal
//           }}
//           type="text"
//         >
//           <FiAlertCircle onClick={() => handleFeed(data._id)} size={22} />
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="rounded-lg py-[16px] border ">
//       <div className="flex justify-end items-center pb-4 gap-6 mx-auto">
//         {/* DatePicker for filtering by date */}
//         <DatePicker
//           onChange={onDateChange}
//           placeholder="Select Date"
//           style={{ width: 200 }}
//         />
//         {/* Real-time search input for filtering by name, phone, or email */}
//         <Input
//           placeholder="Search by Name, Phone, or Email"
//           onChange={onSearchChange} // Trigger search on each keystroke
//           style={{
//             width: 200,
//           }}
//         />
//       </div>

//       {/* Display loading or error states */}
//       {isLoading ? (
//         <Spin size="large" />
//       ) : isError ? (
//         <Alert
//           message="Error"
//           description={error?.data?.message || "Failed to load data."}
//           type="error"
//           showIcon
//         />
//       ) : (
//         // Display the filtered data in the Ant Design Table
//         <Table
//           columns={columns}
//           dataSource={filteredData} // Use the filtered data
//           pagination={{
//             position: ["bottomCenter"],
//           }}
//         />
//       )}

//       {/* DashboardModal to show feedback details */}
//       <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
//         <div className="flex flex-col justify-between">
//           <div className="pt-8 text-sm text-[#181414] py-2">
//             <h6 className="font-normal mb-4 font-oxygen text-start text-[20px]">
//               Feedback Details for {modalData?.name}
//             </h6>
//             <TextArea
//               className="border-2 border-s-cyan-400"
//               rows={4}
//               value={modalData?.feedback || ""} // Assuming you want to show feedback data here
//               readOnly
//             />
//           </div>
//         </div>
//       </DashboardModal>
//     </div>
//   );
// };

// export default Feedback;


import { useState } from "react";
import { Button, Table, Input, DatePicker, Spin, Alert } from "antd";
import dayjs from "dayjs";
import { useFetchUsersQuery } from "../../../features/userSlice"; // Assuming the hook for fetching users
import DashboardModal from "../../../Components/DashboardModal"; // Import DashboardModal
import TextArea from "antd/es/input/TextArea";
import { FiAlertCircle } from "react-icons/fi";

const Feedback = () => {
  const { data, isLoading, isError, error } = useFetchUsersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date filter
  const [feedbackData, setFeedbackData] = useState(null); // State to store fetched feedback

  // Prepare the data for the Ant Design Table
  const tableData = data?.data?.result.map((user, index) => ({
    key: user._id, // AntD requires a unique key for each row
    transIs: index + 1,
    name: user.name,
    email: user.email,
    date: user.createdAt ? dayjs(user.createdAt).format("YYYY-MM-DD") : "N/A",
    phone: user.phone || "N/A",
  }));

  // Filter the data based on the search term and selected date
  const filteredData = tableData?.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedDate || dayjs(item.date).isSame(selectedDate, "day"))
  );

  // Handle Search input change
  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Date selection change
  const onDateChange = (date, dateString) => {
    setSelectedDate(date ? dayjs(dateString) : null);
  };

  // Fetch feedback and show modal
  const handleFeedback = async (userId, userName) => {
    try {
      const response = await fetch(
        `http://192.168.10.98:3000/api/v1/review/single-review/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const feedbackResponse = await response.json();
      if (feedbackResponse?.success) {
        setFeedbackData({
          ...feedbackResponse.data,
          userName, 
        });
        setIsModalOpen(true); 
      } else {
        throw new Error(feedbackResponse.message || "Failed to fetch feedback");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // Define columns for the Table
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
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => handleFeedback(data.key, data.name)} // Pass user ID and name to fetch feedback
          type="text"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];

  return (
    <div className="rounded-lg py-[16px] border">
      <div className="flex justify-end items-center pb-4 gap-6 mx-auto">
        <DatePicker
          onChange={onDateChange}
          placeholder="Select Date"
          style={{ width: 200 }}
        />
        <Input
          placeholder="Search by Name, Phone, or Email"
          onChange={onSearchChange}
          style={{ width: 200 }}
        />
      </div>

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
          dataSource={filteredData}
          pagination={{ position: ["bottomCenter"] }}
        />
      )}

      {/* DashboardModal to show feedback details */}
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="flex flex-col justify-between">
          <div className="pt-8 text-sm text-[#181414] py-2">
            <h6 className="font-normal mb-4 font-oxygen text-start text-[20px]">
              Feedback Details for {feedbackData?.userName || "N/A"}
            </h6>
            <TextArea
              className="border-2 border-s-cyan-400"
              rows={4}
              value={feedbackData?.comment || "No feedback available 😎."}
              readOnly
            />
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Feedback;

