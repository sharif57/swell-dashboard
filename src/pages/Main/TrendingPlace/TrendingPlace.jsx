import React from "react";
import { Button, Form, Input } from "antd";
import placeImage from "../../../assets/images/place-image.png";
import { HiCamera } from "react-icons/hi";
import { TiPlusOutline } from "react-icons/ti";
import { BiMinus } from "react-icons/bi";

const TrendingPlace = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 40 }}
        layout="vertical"
        onFinish={onFinish}
        //   onFinishFailed={handleCompanyInformationFailed}
        initialValues={{
          title: "Tranding Place",
          features: [
            { first: "Noakhali, Bangladesh" }, // Initial values for the first set of inputs
            { first: "" }, 
          ],
        }}
        autoComplete="off"
        requiredMark={false}
        className=" px-[34px] py-[14px] space-y-[24px]"
      >
        <div className="w-[200px]">
          <div className="relative h-[160px]">
            <div className="h-full w-full absolute inset-0 bg-[#222222a2] rounded-2xl flex justify-center items-center text-white cursor-pointer">
              <HiCamera size={44} />
            </div>
            <img
              src={placeImage}
              alt=""
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
        <Form.Item
          label={<span className="text-[18px] text-[#1F8D84]">Title</span>}
          name={"title"}
          rules={[
            {
              required: true,
              message: "Please input deal title!",
            },
          ]}
        >
          <Input
            placeholder="Title"
            style={{
              border: "1px solid #98CBC6",
              height: "56px",
              background: "#FFFFFF",
            }}
            className="w-[50%] outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[6px] text-lg"
          />
        </Form.Item>
        <div className="border-t border-[#1f8d848e] py-[20px]">
          <p className="text-[18px] text-[#1F8D84] mb-[16px]">
            Trending place List
          </p>
          <Form.List name="features">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className="flex items-center gap-4 pb-[20px]">
                    <Form.Item
                      {...restField}
                      name={[name, "first"]}
                      className="flex-1 my-0"
                    >
                      <Input
                        placeholder="Enter new place"
                        style={{
                          border: "1px solid #98CBC6",
                          height: "56px",
                          background: "#FFFFFF",
                        }}
                        className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] text-lg shadow-sm"
                      />
                    </Form.Item>
                    <button className="border-2 border-[#ee1d24ab] rounded-full p-0.5 text-[#EE1D23]">
                      <BiMinus size={25} onClick={() => remove(name)} />
                    </button>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<TiPlusOutline />}
                  >
                    Add place field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <div className="px-[55px]">
        <Button
          style={{
            backgroundColor: "#1F8D84",
            size: "18px",
            height: "56px",
            color: "#ffff",
          }}
          size="large"
          htmlType="submit"
          className="w-full h-[56px] px-2 font-medium rounded-lg"
        >
          Update
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default TrendingPlace;
