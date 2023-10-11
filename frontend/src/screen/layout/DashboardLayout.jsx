import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
