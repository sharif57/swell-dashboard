import { Button, Checkbox, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center container mx-auto gap-6">
      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <img src="/sigin.png" alt="Sign In" className="w-full h-auto" />
      </div>

 
        {/* Sign-In Form */}
        <div className="bg-white py-10 px-8 rounded-lg shadow-md w-[700px] mx-1">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Sign In</h1>
          </div>

          <Form
            name="sign_in"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="space-y-6"
          >
            {/* Username Input */}
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Username"
                className="rounded-lg"
                style={{
                  border: "1px solid #033f4d",
                  height: "56px",
                  backgroundColor: "#ffffff",
                  padding: "16px 12px",
                  color: "#646262",
                  borderRadius:'30px'
                }}
              />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className="rounded-lg"
                style={{
                  border: "1px solid #033f4d",
                  height: "56px",
                  backgroundColor: "#ffffff",
                  padding: "16px 12px",
                  color: "#646262",
                  borderRadius:'30px'
                }}
              />
            </Form.Item>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-[#1F8D84]">Remember me</Checkbox>
              </Form.Item>
              <Button
                type="link"
                className="text-[#1F8D84] p-0"
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forgot password?
              </Button>
            </div>

            {/* Sign-In Button */}
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full h-[56px] rounded-lg text-white font-medium"
                style={{
                  backgroundColor: "#033f4d",
                }}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          {/* Additional Links */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/auth/signup" className="text-[#1F8D84] font-medium">
              Sign Up
            </Link>
          </div>
        </div>
   
    </div>
  );
};

export default SignIn;
