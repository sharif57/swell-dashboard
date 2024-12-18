import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SubscriptionCard = ({ data, setModalData }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Card
        className="rounded-2xl shadow border-none bg-primary py-[8px]"
        title={
          <div className="text-center text-2xl font-semibold text-white">
            {data.title}
          </div>
        }
        bordered={false}
        headStyle={{ borderBottom: "none", padding: 0 }}
        bodyStyle={{ paddingTop: 0, paddingBottom: 20 }}
      >
        <div className="text-center text-white">
          <div className="text-lg font-medium my-[14px]">
            $6.99<span className="text-lg">/mo</span>
          </div>
          <hr className="border-t border-white mb-4" />
          <ul className="text-[14px] space-y-5 mt-5 px-6">
            <li className="flex items-center gap-3">
              <CheckOutlined /> Exclusive Deals
            </li>
            <li className="flex items-center gap-3">
              <CheckOutlined /> Event Giveaways
            </li>
            <li className="flex items-center gap-3">
              <CheckOutlined /> Save Money
            </li>
            <li className="flex items-center gap-3">
              <CheckOutlined /> Discover Places
            </li>
          </ul>
          <div className="text-sm my-6">You Can’t Beat It !!</div>
          <div className="flex gap-4 px-4">
            <Button
              onClick={() => navigate(`edit/${"564564656"}`)}
              className="bg-gray-100 hover:bg-gray-200 text-black rounded-2xl w-full border-none"
              type="default"
              size="large"
            >
              Edit
            </Button>
            <Button
              onClick={() => setModalData(data)}
              style={{ background: "black" }}
              className="text-white rounded-2xl w-full border-none"
              type="default"
              size="large"
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SubscriptionCard;
