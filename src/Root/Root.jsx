import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div className="font-inter">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-30rem)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
