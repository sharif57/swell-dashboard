import { Button, Form, Input } from "antd";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { HiCamera } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import categoryImg from '../../../assets/images/category.png'

const EditCategory = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="space-y-[24px]">
      <div className=" text-[#1F8D84] flex items-center gap-1">
        <button
          className="outline-none pr-2"
          onClick={() => navigate("/categories")}
        >
          <FaChevronLeft size={22} />
        </button>
        <h1 className="text-[24px] font-medium">Edit Category</h1>
      </div>
      <div className="w-[60%]">
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          initialValues={{
            name: "Night Llife"
          }}
          className="py-[14px]"
        >
          <Form.Item
            label={
              <span className="text-[18px] text-[#1F8D84]">Category Name</span>
            }
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please input category name!",
              },
            ]}
          >
            <Input
              placeholder="Category name"
              style={{
                border: "1px solid #1F8D84",
                height: "56px",
                background: "#ECECEC",
              }}
              className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg"
            />
          </Form.Item>
          <div className="w-[316px] space-y-[24px] pt-2">
            <div className="relative h-[253px]">
              <div className="h-full w-full absolute inset-0 bg-[#222222a2] rounded-2xl flex justify-center items-center text-white cursor-pointer">
                <HiCamera size={48} />
              </div>
              <img
                    src={categoryImg}
                    alt=""
                    className="h-full w-full rounded-2xl"
                  />
            </div>
            <Button
              style={{
                backgroundColor: "#1F8D84",
                size: "18px",
                height: "56px",
                color: "#ffff",
              }}
              size="large"
              htmlType="submit"
              className="w-full h-[56px] px-2 font-medium rounded-lg "
            >
              Upadate
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditCategory;
