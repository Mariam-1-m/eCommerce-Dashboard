import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  if (!isAdmin) {
    return <Navigate replace to="/" />;
  }

  return children;
}

export default ProtectedRoute;
