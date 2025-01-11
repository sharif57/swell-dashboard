import { Alert, Button, DatePicker, Spin, Table } from "antd";
import dayjs from "dayjs"; // Import Day.js for date formatting
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import DashboardModal from "../../../Components/DashboardModal";
import { useFetchUsersQuery } from "../../../features/userSlice";
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/transfer/search";

const Feedback = () => {
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

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
    <div className="rounded-lg py-[16px] border ">
      <div>
        <div className="flex w-1/2   justify-end items-center">
          <DatePicker onChange={onChange} />

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
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
            dataSource={tableData}
            pagination={{
              position: ["bottomCenter"],
            }}
          />
        )}
      </div>

      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className=" flex flex-col justify-between">
          <div className=" pt-8 text-sm text-[#181414] py-2">
            <h6 className="font-normal mb-4 font-oxygen text-start text-[20px]">
              Feedback Details
            </h6>
            <TextArea className="border-2  border-s-cyan-400" rows={4} />
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Feedback;
