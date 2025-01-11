// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import { RxArrowLeft } from "react-icons/rx";
// import { useForgotPasswordMutation } from "../../features/authSlice";

// const ForgotPassword = () => {

//   const {data} = useForgotPasswordMutation()
//   console.log(data)

//   const navigate = useNavigate();
//   const onFinish = (values) => {
//     // console.log("Success:", values);
//     navigate("/auth/verify-email");
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <div className="flex justify-center items-center container mx-auto gap-6">

//       <div className="hidden md:block w-1/2">
//         <img src="/forgot.png" alt="Sign In" className="w-full h-auto" />
//       </div>

//       <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
//         <div className="flex justify-center items-center gap-1">
//           <button onClick={() => navigate("/auth/sign-in")}>
//             <RxArrowLeft size={22} />
//           </button>
//           <h5 className="text-2xl font-medium">Forgot Password</h5>
//         </div>
//         <p className="text-center text-[#464343]">
//           Please enter your email address to reset your password.
//         </p>
//         <Form
//           name="basic"
//           layout="vertical"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//           className="w-full space-y-[24px]"
//         >
//           <Form.Item
//             className={"text-start"}
//             name="email"
//             rules={[
//               {
//                 type: "email",
//                 required: true,
//                 message: "Please input your assword!",
//               },
//             ]}
//           >
//             <Input
//               // onChange={handleChange}
//               placeholder="Email"
//               name="email"
//               style={{
//                 border: "1px solid #033f4d",
//                 height: "56px",
//                 background: "#ffffff",
//                 outline: "none",
//                 color: "#646262",
//                 padding: "16px 12px",
//                 placeholder: "black",
//                 borderRadius:'30px'
//               }}
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               style={{
//                 backgroundColor: "#033f4d",
//                 size: "18px",
//                 height: "56px",
//                 color: "#ffff",
//               }}
//               htmlType="submit"
//               className="w-full h-[56px] px-2 font-medium rounded-lg mt-[10px]"
//             >
//               Send OTP
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import { useForgotPasswordMutation } from "../../features/authSlice";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await forgotPassword(values).unwrap();
      message.success(response.message || "OTP has been sent to your email!");
      navigate(`/auth/verify-email?email=${values.email}`);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      message.error(error.data?.message || "Failed to send OTP.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Form Submission Failed:", errorInfo);
    message.error("Please check the form for errors.");
  };

  return (
    <div className="flex justify-center items-center container mx-auto gap-6">
      {/* Left Image Section */}
      <div className="hidden md:block w-1/2">
        <img
          src="/forgot.png"
          alt="Forgot Password"
          className="w-full h-auto"
        />
      </div>

      {/* Forgot Password Form Section */}
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        {/* Header */}
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/sign-in")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Forgot Password</h5>
        </div>
        <p className="text-center text-[#464343]">
          Please enter your email address to reset your password.
        </p>

        {/* Forgot Password Form */}
        <Form
          name="forgotPassword"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-full space-y-[24px]"
        >
          {/* Email Input */}
          <Form.Item
            className="text-start"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email address!",
              },
            ]}
          >
            <Input
              placeholder="Email"
              name="email"
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                borderRadius: "30px",
              }}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              style={{
                backgroundColor: "#033f4d",
                size: "18px",
                height: "56px",
                color: "#ffffff",
              }}
              htmlType="submit"
              loading={isLoading}
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
