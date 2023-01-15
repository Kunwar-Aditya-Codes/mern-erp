import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-screen bg-zinc-900/50 text-zinc-500">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
