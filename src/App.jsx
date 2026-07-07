import {
  Navigate,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import LoginPage from "./components/auth/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" theme="colored" autoClose={2500} />
    </>
  );
}

export default App;
