import { Button, Form, Input, Select, Space } from "antd";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { HiCamera } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import categoryImg from "../../../assets/images/category.png";
import InputEditor from "../../../Components/InputEditor";
import { PiCurrencyDollar } from "react-icons/pi";

const EditDeal = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="space-y-[24px]">
      <div className=" text-[#1F8D84] flex items-center gap-1">
        <button
          className="outline-none pr-2"
          onClick={() => navigate("/deals")}
        >
          <FaChevronLeft size={22} />
        </button>
        <h1 className="text-[24px] font-medium">Edit Deals</h1>
      </div>
      <Form
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 40 }}
        layout="vertical"
        initialValues={{
          title: "20% off in Dining",
          category: "lucy",
          placeName: "Resturant",
          address: "Noakhali, Bangladesh ",
          money: "2.00",
          redeemLimit: "05",
        }}
        onFinish={onFinish}
        //   onFinishFailed={handleCompanyInformationFailed}
        autoComplete="off"
        requiredMark={false}
        className=" px-[34px] py-[14px] space-y-[24px]"
      >
        <div className="grid grid-cols-2 gap-x-6">
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Deal title</span>
            }
            name={"title"}
            rules={[
              {
                required: true,
                message: "Please input deal title!",
              },
            ]}
          >
            <Input
              placeholder="Title"
              style={{
                border: "1px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Deal Category</span>
            }
            name={"category"}
            rules={[
              {
                required: true,
                message: "Please input deal category!",
              },
            ]}
          >
            <Select
              size="large"
              style={{
                // border: "0.5px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
                marginTop: "8.3px",
                padding: 0,
              }}
              onChange={handleChange}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Place Name</span>
            }
            name={"placeName"}
            rules={[
              {
                required: true,
                message: "Please input place name!",
              },
            ]}
          >
            <Input
              placeholder="Place name"
              style={{
                border: "1px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Place Address</span>
            }
            name={"address"}
            rules={[
              {
                required: true,
                message: "Please input place address!",
              },
            ]}
          >
            <Input
              placeholder="Address"
              style={{
                border: "1px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Saved Money</span>
            }
            name={"money"}
            rules={[
              {
                required: true,
                message: "Please input saved money!",
              },
            ]}
          >
            <Input
              prefix={<PiCurrencyDollar className="" size={18} />}
              placeholder="Money"
              style={{
                border: "1px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Redeem Limit</span>
            }
            name={"redeemLimit"}
            rules={[
              {
                required: true,
                message: "Please input redeem limit!",
              },
            ]}
          >
            <Input
              placeholder="Redeem"
              style={{
                border: "1px solid #98CBC6",
                height: "56px",
                background: "#FFFFFF",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
            />
          </Form.Item>
          <div className="col-span-2">
            <p className="text-[18px] text-[#1F8D84]  mb-4">Package Features</p>
            <InputEditor />
          </div>
        </div>
        <div className="w-[200px]">
          <div className="relative h-[160px]">
            <div className="h-full w-full absolute inset-0 bg-[#222222a2] rounded-2xl flex justify-center items-center text-white cursor-pointer">
              <HiCamera size={48} />
            </div>
            <img
              src={categoryImg}
              alt=""
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <Button
            style={{
              backgroundColor: "#1F8D84",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            size="large"
            htmlType="submit"
            className="col-span-9 w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Update
          </Button>
          <Button
            style={{
              backgroundColor: "#111111",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            size="large"
            htmlType="submit"
            className="col-span-3 w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditDeal;
