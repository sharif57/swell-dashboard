import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = () => {
  return (
    <div className="flex text-start">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 pl-[326px]">
        <div className="fixed w-[calc(100%-326px)] p-[24px] z-10 bg-[#FFFFFF]">
          <Header />
        </div>
        <div className="p-[24px] pt-[138px] bg-[#f2f5f7]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
