import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { PiCameraPlus } from "react-icons/pi";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  useAdminProfileQuery,
  useUpdateProfileMutation,
} from "../../features/userSlice";
import PhoneCountryInput from "../../Components/PhoneCountryInput";

const EditMyProfile = () => {
  const navigate = useNavigate();
  const { data: user } = useAdminProfileQuery();
  const [imageFile, setImageFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(user?.phone || "");
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const profileData = {
    name: user?.data?.name || "N/A",
    email: user?.data?.email || "N/A",
    phone: user?.data?.phone || "N/A",
    profile:
      `http://45.55.209.88:3000/${user?.data?.image}` ||
      "http://45.55.209.88:3000/images/development-with-abstract-background-1736742316216.jpg",
    role: user?.data?.role || "N/A",
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Form submission handler
  const onFinish = async (values) => {
    try {
      const bodyDatas = { ...values, phone: phoneNumber };
      const formData = new FormData();
      formData.append("data", JSON.stringify(bodyDatas));

      // Append image file if selected
      if (imageFile) {
        formData.append("image", imageFile);
      }

      // Append other form fields
      for (const [key, value] of Object.entries(bodyDatas)) {
        formData.append(key, value);
      }

      // Perform the mutation request
      const response = await updateProfile(formData).unwrap();

      // Handle success
      toast.success(response.message, {
        position: "top-center",
      });
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      console.error(error); // Log error to console for debugging
      Swal.fire({
        icon: "error",
        title: "Update Failed!",
        text:
          (error.message || error?.data?.message || "Something went wrong.") +
          " Please try again later.",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setPhoneNumber(user?.phone || ""); // Set the initial phone number value
    }
  }, [user]);

  return (
    <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
      <PageHeading
        title="Edit Personal Information"
        backPath={-1}
        disabledBackBtn={true}
        className="px-10 border-b border-[#CEF0FF] py-6"
      />
      <div className="w-full">
        <Form
          name="basic"
          layout="vertical"
          className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
          onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            name: profileData?.name || "",
            email: profileData?.email || "",
          }}
        >
          <div className="col-span-3 space-y-6">
            <div className="flex flex-col items-center justify-center bg-[#E9F4F3] p-8 rounded-lg border border-[#1F8D84] shadow-inner">
              <label htmlFor="profileImage" className="relative">
                <div className="relative h-[200px] w-[200px] mx-auto overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-[#222222bb] flex items-center justify-center text-white rounded-full cursor-pointer">
                    <PiCameraPlus size={34} />
                  </div>
                  <img
                    src={
                      imageFile
                        ? URL.createObjectURL(imageFile)
                        : user?.image?.publicFileURL ||
                          "https://cdn-icons-png.flaticon.com/128/236/236831.png"
                    }
                    alt="Profile"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  className="hidden text-center w-3/5 pt-2 mx-auto"
                  onChange={handleImageChange}
                />
              </label>
              <h5 className="text-lg text-[#222222]">Profile</h5>
              <h4 className="text-2xl text-gray-900 font-normal font-oxygen">
                {profileData?.role}
              </h4>
            </div>
          </div>
          <div className="col-span-9 space-y-[24px]">
            <Form.Item
              label="Name"
              name="name"
              className="text-lg text-[#1F8D84] font-normal font-oxygen"
            >
              <Input
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              className="text-lg text-[#1F8D84] font-normal"
            >
              <Input
                readOnly
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              className="text-lg text-[#222222] font-medium"
            >
              <PhoneCountryInput
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
            </Form.Item>
            <Form.Item className="flex justify-end pt-4">
              <Button
                htmlType="submit"
                loading={isLoading}
                style={{
                  backgroundColor: "#033f4d",
                  color: "#ffffff",
                }}
                size="large"
                type="primary"
                className="h-14 w-52 flex items-center justify-center text-lg font-medium rounded-md"
              >
                Save Changes 
              </Button>
            
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditMyProfile;
