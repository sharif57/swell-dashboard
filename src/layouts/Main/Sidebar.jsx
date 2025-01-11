import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { createElement } from "react";
import { IoIosLogOut } from "react-icons/io";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {};
  return (
    <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col justify-between bg-[#033f4d] py-[50px] px-5">
      <div className="space-y[24px">
        <div className="px-[38px]">
          <img className="w-[250px] mx-auto" src={logo} alt="" />
        </div>
        <ul className="mt-[24px] max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2">
          {routeLinkGenerators(dashboardItems).map(({ name, icon, path }, indx) => (
            <li key={indx}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#033f4d] rounded-full" +
                      " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all "
                    : "text-white rounded-full hover:text-[#1F8D84] text-[20px] hover:bg-white" +
                      " w-full px-10 py-4 flex items-center justify-start gap-5 text-lg transition-all"
                }
              >
                <div>{createElement(icon, { size: "20" })}</div>
                <span> {name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-[24px]">
        <Link to={'/auth/sign-in'}
          onClick={handleLogOut}
          className=" w-full rounded-full px-10 py-4 flex items-center justify-start gap-6 text-lg outline-none font-medium bg-red-600 text-[#ffffff]"
        >
          <IoIosLogOut size={20} />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
