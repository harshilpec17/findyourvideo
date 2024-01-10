import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { POPULAR_VIDEO_URL } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularVideo } from "../../utils/Redux/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const getMostPopularVideo = async () => {
    const data = await fetch(POPULAR_VIDEO_URL);
    const json = await data.json();

    const result = json.items;
    console.log(result);
    dispatch(addPopularVideo(result));
  };

  useEffect(() => {
    getMostPopularVideo();
  }, []);

  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
