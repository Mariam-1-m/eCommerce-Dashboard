import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  if (!isAdmin) {
    return <Navigate replace to="/" />;
  }
// structure
  return <Outlet />;
}

export default ProtectedRoute;
