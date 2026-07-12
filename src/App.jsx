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
import Loader from "./components/loader";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/404";
import ProductsPage from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct"
import UsersHeader from "./components/users/header"
import ViewProductDetails from "./pages/ViewProductDetails"
import  EditProductPage from "./pages/EditProductPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="users" element={<UsersHeader />} />
                <Route path="products">
                <Route index element={<ProductsPage />} />
                <Route path="view/:productId" element={<ViewProductDetails/>} />
                <Route path="edit/:productId" element={< EditProductPage/>} />
                <Route path="add" element={<AddProduct />} />
              </Route>
              
              <Route path="orders" element={<h1>Orders</h1>} />
              <Route path="carts" element={<h1>Carts</h1>} />
              <Route path="wishlist" element={<h1>Wishlist</h1>} />
              <Route path="settings" element={<SettingsPage/>} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" theme="colored" autoClose={2500} />
    </>
  );
}


export default App;
