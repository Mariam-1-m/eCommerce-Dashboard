import { Navigate } from "react-router-dom";

function RootRedirect() {
  const token = true;

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
}

export default RootRedirect;
