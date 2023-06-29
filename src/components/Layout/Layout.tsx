import { Outlet } from "react-router";
import Contact from "../common/Contact/Contact";
import Navbar from "../common/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contact />
    </div>
  );
};
export default Layout;
