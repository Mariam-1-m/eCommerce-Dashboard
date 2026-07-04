import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Loader />} />
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<h1>Dashboard</h1>} />
                <Route path="users" element={<h1>Users</h1>} />
                <Route path="products" element={<h1>Products</h1>} />
                <Route path="products/add" element={<h1>Add Products</h1>} />
                <Route path="orders" element={<h1>Orders</h1>} />
                <Route path="carts" element={<h1>Carts</h1>} />
                <Route path="wishlist" element={<h1>Wishlist</h1>} />
                <Route path="settings" element={<h1>Settings</h1>} />
              </Route>
            </Route>
            <Route path="/login" element={<h1>Login page</h1>} />
            <Route path="/register" element={<h1>Register page</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer position="top-right" theme="colored" autoClose={2500} />
    </>
  );
}

export default App;
