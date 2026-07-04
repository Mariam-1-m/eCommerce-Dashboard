import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
