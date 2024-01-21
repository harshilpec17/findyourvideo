import React from "react";
import SideBar from "../components/BodyComponent/SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="flex w-screen bg-[#0F0F0F]">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
