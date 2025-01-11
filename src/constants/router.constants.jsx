import { CiSettings } from "react-icons/ci";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Users from "../pages/Main/Users/Users";

import Settings from "../pages/Settings/Settings";
import MyProfile from "../pages/Profile/MyProfile";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import TermsConditions from "../pages/Settings/TermsConditions";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditAboutUs from "../pages/Settings/EditAboutUs";
import AboutUs from "../pages/Settings/AboutUs";
import Notifications from "../pages/Main/Notifications/Notifications";
import { LuUsers2 } from "react-icons/lu";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },
  {
    name: "Users",
    path: "/users",
    icon: LuUsers2,
    element: <Users />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: CiSettings,
    element: <Settings />,
  },

  {
    path: "/notifications",
    element: <Notifications />,
  },

  // {
  //   name: "Earnings",
  //   path: "/earnings",
  //   icon: GrMoney,
  //   element: <Earnings />,
  // },
  // {
  //   name: "Subscription",
  //   path: "/subscriptions",
  //   icon: FaRegChessQueen,
  //   element: <Subscriptions />,
  // },
  // {
  //   path: "/subscriptions/edit/:id",
  //   element: <EditSubscriptions />,
  // },
  // {
  //   path: "/subscriptions/add-new",
  //   element: <AddSubscription />,
  // },
  // {
  //   name: "Categories",
  //   path: "/categories",
  //   icon: LuCopyPlus,
  //   element: <Categories />,
  // },
  // {
  //   path: "/categories/add-new",
  //   element: <AddCategory />,
  // },
  // {
  //   path: "/categories/edit/:id",
  //   element: <EditCategory />,
  // },
  // {
  //   name: "Deals",
  //   path: "/deals",
  //   icon: MdOutlineContentPasteGo,
  //   element: <Deals />,
  // },
  // {
  //   path: "/deals/add-new",
  //   element: <AddDeal />,
  // },
  // {
  //   path: "/deals/edit/:id",
  //   element: <EditDeal />,
  // },
  // {
  //   name: "Trending Place",
  //   path: "/trending-place",
  //   icon: SlLocationPin,
  //   element: <TrendingPlace />,
  // },
  // {
  //   name: "Redeem",
  //   path: "/redeem",
  //   icon: IoGiftOutline,
  //   element: <Redeem />,
  // },

  {
    path: "/settings/personal-information",
    element: <MyProfile />,
  },
  {
    path: "/settings/personal-information/edit",
    element: <EditMyProfile />,
  },
  {
    path: "/settings/terms-conditions",
    element: <TermsConditions />,
  },
  {
    path: "/settings/terms-conditions/edit",
    element: <EditTermsConditions />,
  },
  {
    path: "/settings/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/settings/privacy-policy/edit",
    element: <EditPrivacyPolicy />,
  },
  {
    path: "/settings/about-us",
    element: <AboutUs />,
  },
  {
    path: "/settings/about-us/edit",
    element: <EditAboutUs />,
  },
  // {
  //   path: "/settings/forget-password",
  //   element: <For,
  // },
];
