/* eslint-disable react/prop-types */
// import { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useAdminProfileQuery } from "../features/userSlice";

// const PhoneCountryInput = ({ disabled }) => {
//     const { data, isLoading, isError, error } = useAdminProfileQuery();
  
//   const [phoneNumber, setPhoneNumber] = useState("175454545");
//   console.log(phoneNumber);
//   return (
//     <PhoneInput
//       disabled={disabled}
//       className="custom-phone "
//       placeholder="Enter phone number"
//       international
//       countryCallingCodeEditable={false}
//       style={{
//         marginTop: "12px",
//       }}
//       defaultCountry="RU"
//       value={phoneNumber?.toString()}
//       onChange={setPhoneNumber}
//       // readOnly
      
//     />
//   );
// };

// export default PhoneCountryInput;


import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useAdminProfileQuery } from "../features/userSlice";

const PhoneCountryInput = ({ disabled }) => {
  const { data, isLoading, isError, error } = useAdminProfileQuery();
  const [phoneNumber, setPhoneNumber] = useState("");

  // Set initial phone number when data is loaded
  useEffect(() => {
    if (data?.data?.phone) {
      setPhoneNumber(data.data.phone);
    }
  }, [data]);

  // Handle API loading or error state
  if (isLoading) return <p>Loading phone number...</p>;
  if (isError) return <p>Error loading phone number: {error.message}</p>;

  return (
    <PhoneInput
      disabled={disabled}
      className="custom-phone"
      placeholder="Enter phone number"
      international
      countryCallingCodeEditable={false}
      style={{
        marginTop: "12px",
      }}
      defaultCountry="RU"
      value={phoneNumber}
      onChange={setPhoneNumber}
    />
  );
};

export default PhoneCountryInput;
