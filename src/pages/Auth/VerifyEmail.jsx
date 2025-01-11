// import  { useState } from "react";
// import OTPInput from "react-otp-input";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import { RxArrowLeft } from "react-icons/rx";
// import { useVerifyEmailMutation } from "../../features/authSlice";

// const VerifyEmail = () => {

//   const {data} = useVerifyEmailMutation()
//   console.log(data)

//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
//   return (
//     <div className="flex justify-center items-center container mx-auto gap-6">

//       <div className="hidden md:block w-1/2">
//         <img src="/forgot.png" alt="Sign In" className="w-full h-auto" />
//       </div>

//       <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
//         <div className="flex justify-center items-center gap-1">
//           <button onClick={() => navigate("/auth/forgot-password")}>
//             <RxArrowLeft size={22} />
//           </button>
//           <h5 className="text-2xl font-medium">Verify OTP</h5>
//         </div>

//         <div className="pb-4 flex justify-center  items-center gap-3">
//           <OTPInput
//             value={otp}
//             onChange={setOtp}
//             numInputs={6}
//             inputStyle={{
//               height: "60px",
//               width: "60px",
//               background: "#FFFFFF",
//               border: "1px solid #033f4d",
//               outline: "none",
//               borderRadius: "50%",
//               marginRight: "10px",
//               color: "black",
//               textAlign: "center",
//               fontWeight: "normal",
//               fontSize: "24px",

//             }}
//             renderSeparator={<span> </span>}
//             renderInput={(props) => <input {...props} />}
//           />
//         </div>
//         <div>
//           <Button
//             onClick={() => navigate("/auth/reset-password")}
//             style={{
//               backgroundColor: "#033f4d",
//               size: "18px",
//               height: "56px",
//               color: "#ffff",
//             }}
//             htmlType="submit"
//             className="w-full h-[56px] px-2 font-medium rounded-lg"
//           >
//             Verify Email
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VerifyEmail;

import { useState } from "react";
import OTPInput from "react-otp-input";
import { Button, message } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
import { useVerifyEmailMutation } from "../../features/authSlice";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  console.log(email);
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyEmail = async () => {
    const payload = {
      email: email,
      oneTimeCode: Number(otp),
    };

    console.log("Payload sent to the API:", payload);

    try {
      const response = await verifyEmail(payload).unwrap();
      console.log(response.data.accessToken);
      sessionStorage.setItem("verifyToken", response.data.accessToken);
      message.success(response.message || "Email verified successfully!");
      navigate("/auth/reset-password");
    } catch (error) {
      console.error("Error response from API:", error);
      message.error(error.data?.message || "Failed to verify email.");
    }
  };

  return (
    <div className="flex justify-center items-center container mx-auto gap-6">
      {/* Left Section with Image */}
      <div className="hidden md:block w-1/2">
        <img src="/forgot.png" alt="Verify Email" className="w-full h-auto" />
      </div>

      {/* OTP Verification Section */}
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/forgot-password")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Verify OTP</h5>
        </div>

        {/* OTP Input */}
        <div className="pb-4 flex justify-center items-center gap-3">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "60px",
              width: "60px",
              background: "#FFFFFF",
              border: "1px solid #033f4d",
              outline: "none",
              borderRadius: "50%",
              marginRight: "10px",
              color: "black",
              textAlign: "center",
              fontWeight: "normal",
              fontSize: "24px",
            }}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        {/* Verify Button */}
        <div>
          <Button
            onClick={handleVerifyEmail}
            style={{
              backgroundColor: "#033f4d",
              size: "18px",
              height: "56px",
              color: "#ffffff",
            }}
            loading={isLoading} // Show loading state during API call
            className="w-full h-[56px] px-2 font-medium rounded-lg"
          >
            Verify Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
