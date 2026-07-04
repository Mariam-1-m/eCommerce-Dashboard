import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default AppLayout;
