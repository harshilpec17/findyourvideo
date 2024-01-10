import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const video = useSelector((store) => store.video.mostPopularVideo);

  if (video === null) return;
  return (
    <>
      <div className="flex p-3 flex-wrap">
        {video.map((x) => (
          <Link to={"watch?v=" + x.id}>
            <VideoCard popularVideo={x} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoList;
