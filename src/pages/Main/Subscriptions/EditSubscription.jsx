import { Button, Form, Input, Space } from "antd";
import React from "react";
import { BiMinus, BiMinusCircle } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa6";
import { TiPlusOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const EditSubscription = () => {
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
          className="outline-none px-2"
          onClick={() => navigate("/subscriptions")}
        >
          <FaChevronLeft size={22} />
        </button>
        <h1 className="text-[24px] font-medium">Edit Subscription</h1>
      </div>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          name: "Standard",
          features: [{ first: "" }],
        }}
        labelCol={{
          span: 24, // Adjust this value to change label width
        }}
        autoComplete="off"
        requiredMark={false}
        className="min-h-[70vh] flex flex-col justify-between px-[34px] py-[14px]"
      >
        <div>
          <div className="grid grid-cols-2 gap-x-6">
            <Form.Item
              className=""
              label={
                <span className="text-[18px] text-[#1F8D84]">Package Name</span>
              }
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input package name!",
                },
              ]}
            >
              <Input
                placeholder="Package name"
                style={{
                  border: "1px solid #98CBC6",
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg"
              />
            </Form.Item>
            <Form.Item
              label={<span className="text-[18px] text-[#1F8D84]">Package Amount</span>}
              name={"amount"}
              
              rules={[
                {
                  required: true,
                  message: "Please input package amount!",
                },
              ]}
            >
              <Input
                placeholder="Package amount"
                style={{
                  border: "1px solid #98CBC6",
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
              />
            </Form.Item>
            <Form.Item
            label={ <span className="text-[18px] text-[#1F8D84]">
              Package Expiration
            </span>}
              name={"expiration"}
              rules={[
                {
                  required: true,
                  message: "Please input package expiration!",
                },
              ]}
            >
              <Input
                placeholder="Package expiration"
                style={{
                  border: "1px solid #98CBC6",
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg shadow-sm"
              />
            </Form.Item>
          </div>
          <div className="col-span-2 border-t border-[#1f8d848e] mt-3 py-[20px]">
            <p className="text-[18px] text-[#1F8D84] mb-[18px]">
              Package Features
            </p>
            <Form.List name="features">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="flex items-center gap-4 pb-[20px]"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        className="flex-1 my-0"
                      >
                        <Input
                          placeholder="Enter new feature"
                          style={{
                            border: "1px solid #98CBC6",
                            height: "56px",
                            background: "#FFFFFF",
                          }}
                          className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] text-lg shadow-sm"
                        />
                      </Form.Item>
                      <button className="border-2 border-[#ee1d24ab] rounded-full p-0.5 text-[#EE1D23]">
                        <BiMinus size={25} onClick={() => remove(name)} />
                      </button>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<TiPlusOutline />}
                    >
                      Add feature field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
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
      </Form>
    </div>
  );
};

export default EditSubscription;
