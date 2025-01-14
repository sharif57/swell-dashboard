

import { useState, useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import dashProfile from '../../assets/images/dashboard-profile.png';
import { useNavigate } from 'react-router-dom';
import { PiCameraPlus } from 'react-icons/pi';
import PhoneCountryInput from '../../Components/PhoneCountryInput';
import PageHeading from '../../Components/PageHeading';
import { useAdminProfileQuery, useUpdateProfileMutation} from '../../features/userSlice';

const EditMyProfile = () => {
  const { data } = useAdminProfileQuery();
  const [updateProfile]=useUpdateProfileMutation()
  // const [updateProfile] = useUpdateProfileMutation();

  const [image, setImage] = useState(dashProfile);
  const [profileData, setProfileData] = useState({
    name: data?.data?.name || 'N/A',
    email: data?.data?.email || 'N/A',
    phone: data?.data?.phone || 'N/A',
    profile: data?.data?.image
      ? `http://192.168.10.98:3000/${data?.data?.image}`
      : dashProfile,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data) {
      setProfileData({
        name: data?.data?.name || 'N/A',
        email: data?.data?.email || 'N/A',
        phone: data?.data?.phone || 'N/A',
        profile: data?.data?.image
          ? `http://192.168.10.98:3000/${data?.data?.image}`
          : dashProfile,
      });
    }
  }, [data]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onFinish = async (values) => {

    const formData = new FormData();
      formData.append("data", JSON.stringify(values));
      // formData.append("file",image);

    try {

      // Update profile using the mutation
     const result = await updateProfile(formData).unwrap(); // unwrap the result to handle success/error
     console.log({result})

      message.success('Profile updated successfully!');
      navigate('/settings/personal-information/edit'); // Navigate to profile or another page after success
    } catch (err) {
      console.error('Error updating profile:', err);
      message.error('Error updating profile.');
    }
  };

  return (
    <div className="h-screen">
      <div className="space-y-[34px]">
        <PageHeading title={'Edit Personal information'} backPath={'/settings/personal-information'} />

        <Form
          name="basic"
          layout="vertical"
          className="w-full grid grid-cols-12 gap-x-5 p-12 border-2 rounded-lg bg-white"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{
            name: profileData.name,
            email: profileData.email,
            phone: profileData.phone,
          }}
        >
          <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#ffffff] p-8 rounded-lg border border-[#81888a] space-y-4 shadow-inner">
            <div className="my-3 relative">
              <label
                htmlFor="profile-image"
                className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white cursor-pointer"
              >
                <PiCameraPlus size={34} />
                <input
                  id="profile-image"
                  type="file"
                  // accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

              <img src={image || dashProfile} alt="Profile" className="h-[144px] w-[144px] rounded-full" />
            </div>
            <h5 className="text-lg text-[#222222]">{'Profile'}</h5>
            <h4 className="text-2xl text-[#222222]">{'Admin'}</h4>
          </div>

          <div className="col-span-8 space-y-[24px]">
            <Form.Item className="text-lg text-[#1F8D84] font-medium" label="Name" name="name">
              <Input
                style={{
                  border: '1px solid #033f4d',
                }}
                className="h-[56px] rounded-lg mt-3"
              />
            </Form.Item>
            <Form.Item label="Email" name="email" className="text-lg text-[#] font-medium">
              <Input
                readOnly // Makes the field read-only
                style={{
                  border: '1px solid #033f4d',
                }}
                className="h-[56px] rounded-lg bg-[#ffffff] mt-3"
              />
            </Form.Item>

            <Form.Item className="text-lg text-[#222222] font-medium" label="Phone Number" name="phone">
              <PhoneCountryInput />
            </Form.Item>

            <div className="flex justify-end">
              <Button
                style={{
                  backgroundColor: '#033f4d',
                  color: '#fff',
                }}
                htmlType="submit"
                className="h-[56px] w-[206px] placeholder:text-[#999999] text-[18px] font-medium"
                type="primary"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditMyProfile;

// import { useState, useEffect } from 'react';
// import { Button, Form, Input, message } from 'antd';
// import dashProfile from '../../assets/images/dashboard-profile.png';
// import { useNavigate } from 'react-router-dom';
// import { PiCameraPlus } from 'react-icons/pi';
// import PhoneCountryInput from '../../Components/PhoneCountryInput';
// import PageHeading from '../../Components/PageHeading';
// import { useAdminProfileQuery, useUpdateProfileMutation } from '../../features/userSlice';

// const EditMyProfile = () => {
//   const { data, isLoading, isError, error } = useAdminProfileQuery();
//   const [updateProfile] = useUpdateProfileMutation();
//   const [image, setImage] = useState(dashProfile);
//   const [file, setFile] = useState(null);
//   const [profileData, setProfileData] = useState({
//     name: data?.data?.name || 'N/A',
//     email: data?.data?.email || 'N/A',
//     phone: data?.data?.phone || 'N/A',
//     profile: data?.data?.image
//       ? `http://192.168.10.98:3000/${data?.data?.image}`
//       : dashProfile,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data?.data) {
//       setProfileData({
//         name: data?.data?.name || 'N/A',
//         email: data?.data?.email || 'N/A',
//         phone: data?.data?.phone || 'N/A',
//         profile: data?.data?.image
//           ? `http://192.168.10.98:3000/${data?.data?.image}`
//           : dashProfile,
//       });
//     }
//   }, [data]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // Update preview
//         setFile(file); // Save the file for upload
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const onFinish = async (values) => {
//     const formData = new FormData();

//     // Append text fields
//     formData.append('name', values.name);
//     formData.append('email', values.email);
//     formData.append('phone', values.phone);

//     // Append file if a new one was selected
//     if (file) {
//       formData.append('profileImage', file, file.name);
//     }

//     try {
//       // Perform API request with the form data
//       const result = await updateProfile(formData).unwrap();
//       console.log({ result });

//       message.success('Profile updated successfully!');
//       navigate('/settings/personal-information/edit'); // Navigate to profile or another page after success
//     } catch (err) {
//       console.error('Error updating profile:', err);
//       const errorMessage = err?.data?.message || 'Error updating profile.';
//       message.error(errorMessage);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className="h-screen">
//       <div className="space-y-[34px]">
//         <PageHeading title={'Edit Personal information'} backPath={'/settings/personal-information'} />

//         <Form
//           name="basic"
//           layout="vertical"
//           className="w-full grid grid-cols-12 gap-x-5 p-12 border-2 rounded-lg bg-white"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           initialValues={{
//             name: profileData.name,
//             email: profileData.email,
//             phone: profileData.phone,
//           }}
//           autoComplete="off"
//         >
//           <div className="col-span-4 h-[365px] flex flex-col items-center justify-center bg-[#ffffff] p-8 rounded-lg border border-[#81888a] space-y-4 shadow-inner">
//             <div className="my-3 relative">
//               <label
//                 htmlFor="profile-image"
//                 className="h-full w-full absolute inset-0 bg-[#222222bb] rounded-full flex justify-center items-center text-white cursor-pointer"
//               >
//                 <PiCameraPlus size={34} />
//                 <input
//                   id="profile-image"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//               </label>

//               <img src={image || dashProfile} alt="Profile" className="h-[144px] w-[144px] rounded-full" />
//             </div>
//             <h5 className="text-lg text-[#222222]">{'Profile'}</h5>
//             <h4 className="text-2xl text-[#222222]">{'Admin'}</h4>
//           </div>

//           <div className="col-span-8 space-y-[24px]">
//             <Form.Item
//               className="text-lg text-[#1F8D84] font-medium"
//               label="Name"
//               name="name"
//               rules={[{ required: true, message: 'Please input your name!' }]}
//             >
//               <Input
//                 style={{
//                   border: '1px solid #033f4d',
//                 }}
//                 className="h-[56px] rounded-lg mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               className="text-lg text-[#] font-medium"
//               rules={[{ required: true, message: 'Please input your email!' }]}
//             >
//               <Input
//                 readOnly
//                 style={{
//                   border: '1px solid #033f4d',
//                 }}
//                 className="h-[56px] rounded-lg bg-[#ffffff] mt-3"
//               />
//             </Form.Item>

//             <Form.Item
//               className="text-lg text-[#222222] font-medium"
//               label="Phone Number"
//               name="phone"
//               rules={[{ required: true, message: 'Please input your phone number!' }]}
//             >
//               <PhoneCountryInput />
//             </Form.Item>

//             <div className="flex justify-end">
//               <Button
//                 style={{
//                   backgroundColor: '#033f4d',
//                   color: '#fff',
//                 }}
//                 htmlType="submit"
//                 className="h-[56px] w-[206px] placeholder:text-[#999999] text-[18px] font-medium"
//                 type="primary"
//               >
//                 Save Changes
//               </Button>
//             </div>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default EditMyProfile;

// import React, { useState, useEffect } from "react";
// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import PhoneCountryInput from "../../Components/PhoneCountryInput";
// import PageHeading from "../../Components/PageHeading";
// import { PiCameraPlus } from "react-icons/pi";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import {
//   useAdminProfileQuery,
//   useUpdateProfileMutation,
// } from "../../features/userSlice";

// const EditMyProfile = () => {
//   const navigate = useNavigate();
//   const { data: user, isError, error } = useAdminProfileQuery();
//   const [imageFile, setImageFile] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState(user?.phone || "");
//   const [updateProfile, { isLoading }] = useUpdateProfileMutation();

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//     }
//   };

//   // Form submission handler
//   const onFinish = async (values) => {
//     try {
//       const bodyDatas = { ...values, phone: phoneNumber };
//       const formData = new FormData();
//       formData.append("data", JSON.stringify(bodyDatas));
//       // Append image file if selected
//       if (imageFile) {
//         formData.append("image", imageFile);
//       }

//       // Append other form fields
//       for (const [key, value] of Object.entries(bodyDatas)) {
//         formData.append(key, value);
//       }

//       // Perform the mutation request
//       const response = await updateProfile(formData).unwrap();

//       // Handle success
//       toast.success(response.message, {
//         position: "top-center",
//       });
//       navigate(-1); // Navigate back to the previous page
//     } catch (error) {
//       console.error(error); // Log error to console for debugging
//       Swal.fire({
//         icon: "error",
//         title: "Update Failed!",
//         text:
//           (error.message || error?.data?.message || "Something went wrong.") +
//           " Please try again later.",
//       });
//     }
//   };

//   return (
//     <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
//       <PageHeading
//         title="Edit Personal Information"
//         backPath={-1}
//         disabledBackBtn={true}
//         className="px-10 border-b border-[#CEF0FF] py-6"
//       />
//       <div className="w-full">
//         <Form
//           name="basic"
//           layout="vertical"
//           className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//           onFinish={onFinish}
//           autoComplete="off"
//           initialValues={{
//             name: user?.name || "",
//             email: user?.email || "",
//           }}
//         >
//           <div className="col-span-3 space-y-6">
//             <div className="flex flex-col items-center justify-center bg-[#E9F4F3] p-8 rounded-lg border border-[#1F8D84] shadow-inner">
//               <label htmlFor="profileImage" className="relative">
//                 <div className="relative h-[144px] w-[144px] overflow-hidden rounded-full">
//                   <div className="absolute inset-0 bg-[#222222bb] flex items-center justify-center text-white rounded-full cursor-pointer">
//                     <PiCameraPlus size={34} />
//                   </div>
//                   <img
//                     src={
//                       imageFile
//                         ? URL.createObjectURL(imageFile)
//                         : user?.image?.publicFileURL ||
//                           "https://via.placeholder.com/144"
//                     }
//                     alt="Profile"
//                     className="h-full w-full object-cover rounded-full"
//                   />
//                 </div>
//                 <input
//                   type="file"
//                   id="profileImage"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//               </label>
//               <h5 className="text-lg text-[#222222]">Profile</h5>
//               <h4 className="text-2xl text-[#222222]">Admin</h4>
//             </div>
//           </div>
//           <div className="col-span-9 space-y-[24px]">
//             <Form.Item
//               label="Name"
//               name="name"
//               className="text-lg text-[#1F8D84] font-medium"
//             >
//               <Input
//                 size="large"
//                 className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3 "
//               />
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               className="text-lg text-[#1F8D84] font-medium"
//             >
//               <Input
//                 readOnly
//                 size="large"
//                 className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               label="Phone Number"
//               name="phone"
//               className="text-lg text-[#222222] font-medium"
//             >
//               <PhoneCountryInput
//                 phoneNumber={phoneNumber}
//                 setPhoneNumber={setPhoneNumber}
//               />
//             </Form.Item>
//             <Form.Item className="flex justify-end pt-4">
//               <Button
//                 htmlType="submit"
//                 loading={isLoading}
//                 size="large"
//                 type="primary"
//                 className="px-8 w-[250px]"
//               >
//                 Save Changes
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default EditMyProfile;

// import { useState, useEffect } from "react";
// import { Button, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";
// import PhoneCountryInput from "../../Components/PhoneCountryInput";
// import PageHeading from "../../Components/PageHeading";
// import { PiCameraPlus } from "react-icons/pi";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import {
//   useAdminProfileQuery,
//   useUpdateProfileMutation,
// } from "../../features/userSlice";

// const EditMyProfile = () => {
//   const navigate = useNavigate();
//   const { data: user, isError, error } = useAdminProfileQuery();
//   const [imageFile, setImageFile] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState(user?.phone || "");
//   const [updateProfile, { isLoading }] = useUpdateProfileMutation();

//   const profileData = {
//     name: user?.data?.name || "N/A",
//     email: user?.data?.email || "N/A",
//     phone: user?.data?.phone || "N/A",
//     profile:
//       `http://192.168.10.98:3000/${user?.data?.image}` ||
//       "http://192.168.10.98:3000/images/development-with-abstract-background-1736742316216.jpg",
//     role: user?.data?.role || "N/A",
//   };

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//     }
//   };

//   // Form submission handler
//   const onFinish = async (values) => {
//     try {
//       const bodyDatas = { ...values, phone: phoneNumber };
//       const formData = new FormData();
//       formData.append("data", JSON.stringify(bodyDatas));

//       // Append image file if selected
//       if (imageFile) {
//         formData.append("image", imageFile);
//       }

//       // Append other form fields
//       for (const [key, value] of Object.entries(bodyDatas)) {
//         formData.append(key, value);
//       }

//       // Perform the mutation request
//       const response = await updateProfile(formData).unwrap();

//       // Handle success
//       toast.success(response.message, {
//         position: "top-center",
//       });
//       navigate(-1); // Navigate back to the previous page
//     } catch (error) {
//       console.error(error); // Log error to console for debugging
//       Swal.fire({
//         icon: "error",
//         title: "Update Failed!",
//         text:
//           (error.message || error?.data?.message || "Something went wrong.") +
//           " Please try again later.",
//       });
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       setPhoneNumber(user?.phone || ""); // Set the initial phone number value
//     }
//   }, [user]);

//   return (
//     <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
//       <PageHeading
//         title="Edit Personal Information"
//         backPath={-1}
//         disabledBackBtn={true}
//         className="px-10 border-b border-[#CEF0FF] py-6"
//       />
//       <div className="w-full">
//         <Form
//           name="basic"
//           layout="vertical"
//           className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//           onFinish={onFinish}
//           autoComplete="off"
//           initialValues={{
//             name: profileData?.name || "",
//             email: profileData?.email || "",
//           }}
//         >
//           <div className="col-span-3 space-y-6">
//             <div className="flex flex-col items-center justify-center bg-[#E9F4F3] p-8 rounded-lg border border-[#1F8D84] shadow-inner">
//               <label htmlFor="profileImage" className="relative">
//                 <div className="relative h-[144px] w-[144px] overflow-hidden rounded-full">
//                   <div className="absolute inset-0 bg-[#222222bb] flex items-center justify-center text-white rounded-full cursor-pointer">
//                     <PiCameraPlus size={34} />
//                   </div>
//                   <img
//                     src={
//                       imageFile
//                         ? URL.createObjectURL(imageFile)
//                         : user?.image?.publicFileURL ||
//                           "https://via.placeholder.com/144"
//                     }
//                     alt="Profile"
//                     className="h-full w-full object-cover rounded-full"
//                   />
//                 </div>
//                 <input
//                   type="file"
//                   id="profileImage"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//               </label>
//               <h5 className="text-lg text-[#222222]">Profile</h5>
//               <h4 className="text-2xl text-gray-900 font-normal font-oxygen">
//                 {profileData?.role}
//               </h4>
//             </div>
//           </div>
//           <div className="col-span-9 space-y-[24px]">
//             <Form.Item
//               label="Name"
//               name="name"
//               className="text-lg text-[#1F8D84] font-medium"
//             >
//               <Input
//                 size="large"
//                 className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               className="text-lg text-[#1F8D84] font-medium"
//             >
//               <Input
//                 readOnly
//                 size="large"
//                 className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
//               />
//             </Form.Item>
//             <Form.Item
//               label="Phone Number"
//               name="phone"
//               className="text-lg text-[#222222] font-medium"
//             >
//               <PhoneCountryInput
//                 phoneNumber={phoneNumber}
//                 setPhoneNumber={setPhoneNumber}
//               />
//             </Form.Item>
//             <Form.Item className="flex justify-end pt-4">
//               <Button
//                 htmlType="submit"
//                 loading={isLoading}
//                 style={{
//                   backgroundColor: "#033f4d",
//                   color: "#ffffff",
//                 }}
//                 size="large"
//                 type="primary"
//                 className="h-14 w-52 flex items-center justify-center text-lg font-medium rounded-md"
//               >
//                 Save Changes 
//               </Button>
            
//             </Form.Item>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default EditMyProfile;
