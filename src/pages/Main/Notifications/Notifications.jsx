import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Notifications = () => {
  return (
    <div className="bg-[#ffffff] min-h-[82vh] rounded-lg">
      <div className="px-[32px] py-[32px] border-b border-[#b7b6b6c9]">
        <h1 className="text-[24px] text-black font-medium">Notification</h1>
      </div>
      <div className="py-[24px] space-y-[12px] p-6 ">
        <div className="flex items-center gap-4 px-[24px] py-[8px] cursor-pointer hover:bg-gray-200">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`text-[#1F8D84] bg-[#BADCD9] w-[40px] h-[40px] rounded-lg p-2 shadow-sm transition-all`}
          />
          <div className="space-y-[8px]">
            <h6 className="text-[#181414] font-semibold" >You have received $500 from John Doe</h6>
            <small className="text-[12px] text-[#646262]">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="flex items-center gap-4 px-[24px] py-[8px] cursor-pointer hover:bg-gray-200">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`text-[#1F8D84] bg-[#BADCD9] w-[40px] h-[40px] rounded-lg p-2 shadow-sm transition-all`}
          />
          <div className="space-y-[8px]">
            <h6 className="text-[#181414] font-semibold" >You have received $500 from John Doe</h6>
            <small className="text-[12px] text-[#646262]">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="flex items-center gap-4 px-[24px] py-[8px] cursor-pointer hover:bg-gray-200">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`text-[#1F8D84] bg-[#BADCD9] w-[40px] h-[40px] rounded-lg p-2 shadow-sm transition-all`}
          />
          <div className="space-y-[8px]">
            <h6 className="text-[#181414] font-semibold" >You have received $500 from John Doe</h6>
            <small className="text-[12px] text-[#646262]">Fri, 12:30pm</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
