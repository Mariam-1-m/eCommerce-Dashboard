
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const {user} = useAuth()
  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  if (!isAdmin) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;