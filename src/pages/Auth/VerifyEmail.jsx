import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center container mx-auto gap-6">

      <div className="hidden md:block w-1/2">
        <img src="/forgot.png" alt="Sign In" className="w-full h-auto" />
      </div>

      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1 space-y-3">
        <div className="flex justify-center items-center gap-1">
          <button onClick={() => navigate("/auth/forgot-password")}>
            <RxArrowLeft size={22} />
          </button>
          <h5 className="text-2xl font-medium">Verify OTP</h5>
        </div>

        <div className="pb-4 flex justify-center  items-center gap-3">
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
        <div>
          <Button
            onClick={() => navigate("/auth/reset-password")}
            style={{
              backgroundColor: "#033f4d",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            htmlType="submit"
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
