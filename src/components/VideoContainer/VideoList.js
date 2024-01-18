import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const video = useSelector((store) => store.video.mostPopularVideo);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (video === null) return;
  return (
    <>
      <div
        className={`flex py-3 flex-wrap ${
          isMenuOpen
            ? "w-[83%] mx-[17%] justify-between"
            : "w-[100%] justify-around"
        } relative `}
      >
        {video.map((x) => (
          <Link to={"watch?v=" + x.id} key={x.id}>
            <VideoCard popularVideo={x} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoList;
