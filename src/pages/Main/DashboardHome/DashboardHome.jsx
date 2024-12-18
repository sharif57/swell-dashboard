import React from "react";
import DashboardChart from "../../../Components/DashboardCahrt";
import DashboardHomeTable from "../../../Components/DashboardHomeTable";
const items = [
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2024")}>
        2024
      </p>
    ),
    key: 1,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2023")}>
        2023
      </p>
    ),
    key: 2,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2022")}>
        2022
      </p>
    ),
    key: 3,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2021")}>
        2021
      </p>
    ),
    key: 4,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2020")}>
        2020
      </p>
    ),
    key: 5,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2019")}>
        2019
      </p>
    ),
    key: 6,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2018")}>
        2018
      </p>
    ),
    key: 7,
  },
  {
    label: (
      <p className="w-full" onClick={() => handleMenuClick("2017")}>
        2017
      </p>
    ),
    key: 8,
  },
];
const DashboardHome = () => {
  return (
    <div className="space-y-[24px] font-oxygen">
      <h1 className="text-[25px] font-normal">Overview</h1>
      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-white border text-center border-black px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total User"}</h3>
          <h3 className="text-[38px] font-normal ">
            {`2300`}
          </h3>
        </div>
     
      </div>
      {/* <DashboardChart /> */}
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
