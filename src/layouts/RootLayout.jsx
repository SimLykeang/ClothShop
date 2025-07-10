import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
