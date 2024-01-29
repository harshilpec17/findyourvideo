import React from "react";
import SideBar from "../components/BodyComponent/SideBar";

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex w-screen bg-[#0F0F0F]">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
