import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "../VideoContainer/VideoContainer";

const MainContainer = () => {
  return (
    <>
      <div className="flex flex-col mx-2 ">
        <div className="overflow-x-scroll">
          <ButtonList />
        </div>
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
