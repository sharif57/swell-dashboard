import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log("Success:", values);
    navigate("/auth/verify-email");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center container mx-auto gap-6"> 

      <div className="hidden md:block w-1/2">
        <img src="/forgot.png" alt="Sign In" className="w-full h-auto" />
      </div>
      
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/sign-in")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Forgot Password</h5>
        </div>
        <p className="text-center text-[#464343]">
          Please enter your email address to reset your password.
        </p>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full space-y-[24px]"
        >
          <Form.Item
            className={"text-start"}
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your assword!",
              },
            ]}
          >
            <Input
              // onChange={handleChange}
              placeholder="Email"
              name="email"
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                placeholder: "black",
                borderRadius:'30px'
              }}
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
              className="w-full h-[56px] px-2 font-medium rounded-lg mt-[10px]"
            >
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
