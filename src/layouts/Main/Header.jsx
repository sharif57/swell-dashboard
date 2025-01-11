// import { useNavigate } from "react-router-dom";
// import { Badge } from "antd";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import profileImage from "../../assets/images/dash-profile.png";
// import {  useNotificationQuery } from "../../features/userSlice";

// const Header = () => {
//     const { data, isLoading, isError, error } = useNotificationQuery();
//     const { data, isLoading, isError, error } = useLoginInfoQuery();

//     const count = data?.data?.count || 0;
//   const navigate = useNavigate();
//   return (
//     <div className="w-full font-oxygen h-[88px] flex justify-between items-center rounded-sm py-[16px] px-[32px] bg-[#033f4d] shadow-sm">
//       <div className="text-start space-y-0.5">
//         <p className="text-[24px] font-semibold text-white">
//           {"Welcome, Sharon"}
//         </p>
//         <p className="text-white">{"Have a nice day!"}</p>
//       </div>
//       <div className="flex gap-x-[41px]">
//         <div
//           onClick={(e) => navigate("/notifications")}
//           className="relative flex items-center "
//         >
//           <Badge style={{ backgroundColor: "#1F8D84" }} count={count}>
//           {/* {data?.data?.count || 0} */}
//             <IoIosNotificationsOutline
//               style={{ cursor: "pointer" }}
//               className={`text-white hover:text-[#1f8d2e]  w-[48px] h-[48px] rounded-full  shadow-sm transition-all`}
//             />
//           </Badge>
//         </div>
//         <div className="flex items-center gap-3">
//           <div>
//             <img src={profileImage} alt="" className="rounded-full h-[48px] w-[48px]"  />
//           </div>
//           <div className="space-y-0.5 text-right text-white">
//             <h5 className="text-[16px] font-normal font-oxygen">{"Sharon"}</h5>
//             <p className="text-xs ">{"Admin"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import defaultProfileImage from "../../assets/images/dash-profile.png";
import { useNotificationQuery } from "../../features/userSlice";

const main_api = "http://10.0.80.44:3000";

const Header = () => {
  const { data, isLoading, isError, error } = useNotificationQuery();
  // const { data, isLoading, isError, error } = useFetchUsersQuery();

  const userInfo = JSON.parse(localStorage.getItem("user")) || {};
  const { name, role, image } = userInfo;

  const navigate = useNavigate();

  console.log(defaultProfileImage, "ssssssssssssssssssss");

  return (
    <div className="w-full font-oxygen h-[88px] flex justify-between items-center rounded-sm py-[16px] px-[32px] bg-[#033f4d] shadow-sm">
      <div className="text-start space-y-0.5">
        <p className="text-[24px] font-semibold text-white">
          {`Welcome, ${name || "User"}`}
        </p>
        <p className="text-white">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        {/* Notifications */}
        <div
          onClick={() => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge
            style={{ backgroundColor: "#1F8D84" }}
            count={data?.data?.count}
          >
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={`text-white hover:text-[#1f8d2e] w-[48px] h-[48px] rounded-full shadow-sm transition-all`}
            />
          </Badge>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div>
            <img
              src={`${main_api}/${data?.image}` || defaultProfileImage}
              alt="Profile"
              className="rounded-full h-[48px] w-[48px]"
            />
          </div>
          <div className="space-y-0.5 text-right text-white">
            <h5 className="text-[16px] font-normal font-oxygen">
              {name || "Unknown User"}
            </h5>
            <p className="text-xs">{role || "User"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
