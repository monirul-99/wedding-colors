import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharePage/Footers/Footer";
import Navbar from "../SharePage/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
