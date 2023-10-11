import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "../banner/Banner";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Banner />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
