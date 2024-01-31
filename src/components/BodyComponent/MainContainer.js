import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "../VideoContainer/VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../utils/Redux/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <>
      <div className="flex flex-col w-screen max-w-max overflow-hidden bg-zinc-950">
        <div
          className={`${isMenuOpen ? "w-[83%] ml-[17%]" : "w-[100%]"} mx-16`}
        >
          <ButtonList />
        </div>
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
