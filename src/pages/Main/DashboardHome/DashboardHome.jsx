import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import { useFetchUsersQuery } from "../../../features/userSlice";

const DashboardHome = () => {
  const { data, isLoading, isError, error } = useFetchUsersQuery();

  return (
    <div className="space-y-[24px] font-oxygen">
      <h1 className="text-[25px] font-normal">Overview</h1>

      <div className="grid grid-cols-12 gap-x-[22px]">
        <div className="col-span-3 bg-white border text-center border-black px-[24px] py-[16px] rounded-2xl space-y-3">
          <h3 className="text-[20px]">{"Total User"}</h3>

          {/* Handle loading and error states */}
          {isLoading ? (
            <h3 className="text-[38px] font-normal">Loading...</h3>
          ) : isError ? (
            <h3 className="text-[38px] font-normal text-red-600">
              {error?.data?.message || "Failed to load data"}
            </h3>
          ) : (
            <h3 className="text-[38px] font-normal">{data?.data?.count || 0}</h3>
          )}
        </div>
      </div>

      {/* Uncomment DashboardChart when implemented */}
      {/* <DashboardChart /> */}

      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
