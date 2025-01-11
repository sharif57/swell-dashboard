import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";

const MyProfile = () => {
  const navigate = useNavigate();

   const userInfo = JSON.parse(localStorage.getItem("user")) || {};
    const { name, role, image , email, phone} = userInfo;
    console.log(userInfo)


  const onFinish = (values) => {
    console.log("Form Submission Successful:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form Submission Failed:", errorInfo);
  };

  const profileData = {
    name: name,
    email: email,
    phone: phone ,
    profile: dashProfile,
  };

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
          Edit Profile <FiEdit className="ml-2" />
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            <h4 className="text-2xl text-gray-900 font-bold">{role}</h4>
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
