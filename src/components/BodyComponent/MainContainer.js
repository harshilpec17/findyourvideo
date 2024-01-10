import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "../VideoContainer/VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../../utils/Redux/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);
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
