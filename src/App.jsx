import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Toaster from "react-hot-toast";
import RootRedirect from "./RootRedirect";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./AppLayout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/products/add" element={<h1>Add Products</h1>} />
            <Route path="/orders" element={<h1>Orders</h1>} />
            <Route path="/carts" element={<h1>Carts</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Route>
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
