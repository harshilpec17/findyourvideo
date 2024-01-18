import React from "react";
import SideBar from "../components/BodyComponent/SideBar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="flex w-screen">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
