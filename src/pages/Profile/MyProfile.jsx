


import { Button, Form, Input, Spin, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import { useAdminProfileQuery } from "../../features/userSlice";

const MyProfile = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useAdminProfileQuery();

  const profileData = {
    name: data?.data?.name || "N/A",
    email: data?.data?.email || "N/A",
    phone: data?.data?.phone || "N/A",
    profile:`http://192.168.10.98:3000/${data?.data?.image}` || 'http://192.168.10.98:3000/images/development-with-abstract-background-1736742316216.jpg' ,
    role: data?.data?.role || "N/A",
  };

// console.log("local image",`${http://192.168.10.98:3000} /${data?.data.image}`)

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return (
      <Alert
        message="Error"
        description={error?.data?.message || "Failed to load profile data."}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="space-y-6 h-screen p-6 bg-gray-50">
      {/* Page Heading */}
      <div className="flex justify-between items-center">
        <PageHeading title="Personal Information" />
        <Button
          onClick={() => navigate(`/settings/personal-information/edit`)}
          style={{
            backgroundColor: "#033f4d",
            color: "#ffffff",
          }}
          className="h-14 w-52 flex items-center justify-center text-lg font-medium rounded-md"
          type="primary"
        >
          Edit Profile
        </Button>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Personal Information</h1>
        <hr className="mb-6" />
        <Form
          name="profileForm"
          layout="vertical"
          className="grid grid-cols-12 gap-6"
          autoComplete="off"
          initialValues={{
            name: profileData.name,
            email: profileData.email,
          }}
        >
          {/* Profile Image Card */}
          <div className="col-span-4 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <img
              src={profileData.profile}
              alt="Profile Picture"
              className="h-36 w-36 rounded-full border-2 border-gray-200 shadow-sm mb-4"
            />
            <h5 className="text-lg text-gray-800 font-medium">Profile</h5>
            <h4 className="text-2xl text-gray-900 font-bold">{profileData.role}</h4>
          </div>

          {/* Form Fields */}
          <div className="col-span-8 space-y-6">
            {/* Name Field */}
            <Form.Item
              label="Name"
              name="name"
              className="font-medium text-gray-800"
            >
              <Input
                readOnly
                style={{
                  border: "1px solid #033f4d",
                }}
                className="h-14 rounded-md"
              />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              className="font-medium text-gray-800"
            >
              <Input
                readOnly
                style={{
                  border: "1px solid #033f4d",
                }}
                className="h-14 rounded-md bg-white"
              />
            </Form.Item>

            {/* Phone Number Field */}
            <Form.Item
              label="Phone Number"
              name="phone"
              className="font-medium text-gray-800"
            >
              <PhoneCountryInput disabled={true} />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MyProfile;
