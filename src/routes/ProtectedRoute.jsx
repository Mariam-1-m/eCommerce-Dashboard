import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user, checking } = useAuth();

  if (checking) return null; 

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
}
export default ProtectedRoute;
