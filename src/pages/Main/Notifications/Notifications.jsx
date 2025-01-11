import { IoIosNotificationsOutline } from "react-icons/io";
import { useFetchUsersQuery } from "../../../features/userSlice";

const Notifications = () => {
  const { data, isLoading, isError, error } = useFetchUsersQuery();

  // Check if the data is available
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="bg-[#ffffff] min-h-[82vh] rounded-lg">
      <div className="px-[32px] py-[32px] border-b border-[#b7b6b6c9]">
        <h1 className="text-[24px] text-black font-medium">Notification</h1>
      </div>

      <div className="py-[24px] space-y-[12px] p-6">
        {/* Map over the notifications */}
        {data?.data?.result?.map((notification) => (
          <div
            key={notification._id}
            className="flex items-center gap-4 px-[24px] py-[8px] cursor-pointer hover:bg-gray-200"
          >
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className="text-[#1F8D84] bg-[#BADCD9] w-[40px] h-[40px] rounded-lg p-2 shadow-sm transition-all"
            />
            <div className="space-y-[8px]">
              <h1 className="text-[#ff3333] font-semibold">
                {notification.message} 
              </h1>
              <small className="text-[12px] text-[#646262]">
                {new Date(notification.createdAt).toLocaleString()} 
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
