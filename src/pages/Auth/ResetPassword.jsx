// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import { RxArrowLeft } from "react-icons/rx";
// import { useResetPasswordMutation } from "../../features/authSlice";

// const ResetPassword = () => {

//   const {data} = useResetPasswordMutation()

//   const navigate = useNavigate();
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   return (
//     <div className="flex justify-center items-center container mx-auto gap-6">

//       <div className="hidden md:block w-1/2">
//         <img src="/resetPassword.png" alt="Sign In" className="w-full h-auto" />
//       </div>

//       <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
//         <div className="flex justify-center items-center gap-1">
//           <button onClick={() => navigate("/auth/verify-email")}>
//             <RxArrowLeft size={22} />
//           </button>
//           <h5 className="text-2xl font-medium">Reset Password</h5>
//         </div>
//         <p className="text-center text-[#464343]">
//           Your password must be 8-10 character long.
//         </p>
//         <Form
//           name="basic"
//           layout="vertical"
//           className="w-full space-y-[24px]"
//           onFinish={onFinish}
//           autoComplete="off"
//         >
//           <Form.Item
//             className="text-start"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//             name="password"
//           >
//             <Input.Password
//               style={{
//                 border: "1px solid #033f4d",
//                 height: "56px",
//                 background: "#ffffff",
//                 outline: "none",
//                 color: "#646262",
//                 padding: "16px 12px",
//                 borderRadius:'30px'
//               }}
//               placeholder="Set your password"
//             />
//           </Form.Item>
//           <Form.Item
//             className="text-start mt-2"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//             name="rePassword"
//           >
//             <Input.Password
//               style={{
//                 border: "1px solid #033f4d",
//                 height: "56px",
//                 background: "#ffffff",
//                 outline: "none",
//                 color: "#646262",
//                 padding: "16px 12px",
//                 borderRadius:'30px'

//               }}
//               placeholder="Re-enter your password"
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
//               className="w-full h-[56px] px-2 font-medium rounded-lg "
//             >
//               Reset Password
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import { useResetPasswordMutation } from "../../features/authSlice";

const ResetPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const payload = {
      newPassword: values.password,
      confirmPassword: values.rePassword,
    };

    

    console.log("Payload sent to API:", payload); 

    try {
      const response = await resetPassword(payload).unwrap();
      message.success(response.message || "Password reset successfully!");
      navigate("/auth/sign-in"); // Redirect to sign-in page
    } catch (error) {
      console.error("Error response from API:", error);
      message.error(error.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="flex justify-center items-center container mx-auto gap-6">
      {/* Left Section with Image */}
      <div className="hidden md:block w-1/2">
        <img
          src="/resetPassword.png"
          alt="Reset Password"
          className="w-full h-auto"
        />
      </div>

      {/* Reset Password Form Section */}
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        {/* Header */}
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/verify-email")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Reset Password</h5>
        </div>
        <p className="text-center text-[#464343]">
          Your password must be 8-10 characters long.
        </p>

        {/* Reset Password Form */}
        <Form
          name="resetPasswordForm"
          layout="vertical"
          className="w-full space-y-[24px]"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* New Password Input */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
              {
                min: 8,
                max: 10,
                message: "Password must be 8-10 characters long!",
              },
            ]}
          >
            <Input.Password
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                borderRadius: "30px",
              }}
              placeholder="Set your password"
            />
          </Form.Item>

          {/* Confirm Password Input */}
          <Form.Item
            name="rePassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              style={{
                border: "1px solid #033f4d",
                height: "56px",
                background: "#ffffff",
                outline: "none",
                color: "#646262",
                padding: "16px 12px",
                borderRadius: "30px",
              }}
              placeholder="Re-enter your password"
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
              loading={isLoading} // Show loading indicator during API call
              className="w-full h-[56px] px-2 font-medium rounded-lg"
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
