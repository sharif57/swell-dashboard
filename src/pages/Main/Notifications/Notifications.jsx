import { IoIosNotificationsOutline } from "react-icons/io";
import { useNotificationQuery } from "../../../features/userSlice";

const Notifications = () => {
  const { data, isLoading, isError, error } = useNotificationQuery();

  console.log(data, "eeeeeeeee");

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
            <IoIosNotificationsOutline className="text-[#0a0a0a] bg-[#BADCD9] w-[40px] h-[40px] rounded-lg p-2 shadow-sm transition-all" />
            <div className="space-y-[8px]">
              <h1 className="text-[#0c0c0c] font-normal font-oxygen">
                {notification.message} {/* Display the message text */}
              </h1>
              <small className="text-[12px] text-[#646262]">
                {new Date(notification.createdAt).toLocaleDateString("en-US", {
                  weekday: "long", // Adds the day of the week
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at{" "}
                {new Date(notification.createdAt).toLocaleTimeString("en-US")}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
