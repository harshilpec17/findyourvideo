import React from "react";
import SideBar from "../components/BodyComponent/SideBar";
import MainContainer from "../components/BodyComponent/MainContainer";

const Body = () => {
  return (
    <>
      <div className="flex w-screen">
        <SideBar />
        <MainContainer />
      </div>
    </>
  );
};

export default Body;
