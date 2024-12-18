import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const ResetPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="flex justify-center items-center container mx-auto gap-6">

      <div className="hidden md:block w-1/2">
        <img src="/resetPassword.png" alt="Sign In" className="w-full h-auto" />
      </div>

      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/verify-email")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Reset Password</h5>
        </div>
        <p className="text-center text-[#464343]">
          Your password must be 8-10 character long.
        </p>
        <Form
          name="basic"
          layout="vertical"
          className="w-full space-y-[24px]"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            className="text-start"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="password"
          >
            <Input.Password
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                borderRadius:'30px'
              }}
              placeholder="Set your password"
            />
          </Form.Item>
          <Form.Item
            className="text-start mt-2"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="rePassword"
          >
            <Input.Password
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                borderRadius:'30px'
                
              }}
              placeholder="Re-enter your password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                backgroundColor: "#033f4d",
                size: "18px",
                height: "56px",
                color: "#ffff",
              }}
              htmlType="submit"
              className="w-full h-[56px] px-2 font-medium rounded-lg "
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
