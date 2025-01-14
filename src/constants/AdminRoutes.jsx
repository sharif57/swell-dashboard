/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useFetchUsersQuery } from "../features/userSlice";

const AdminRoutes = ({ children }) => {
  const { data, isLoading } = useFetchUsersQuery();
  const location = useLocation();

  // Check if the user is an admin
  const isAdmin = data?.user?.role === "admin";

  if (isLoading) {
    // Display a loading spinner while fetching user data
    return (
      <div className="h-screen flex items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (isAdmin) {
    // Allow access to admin routes
    return children;
  }

  // Redirect to login page if not an admin
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
