import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex h-full flex-col bg-zinc-900/50 text-zinc-500">
        <div className="flex-grow ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
