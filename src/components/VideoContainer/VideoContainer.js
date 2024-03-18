import React, { useEffect } from "react";
import VideoList from "./VideoList";
import { POPULAR_VIDEO_URL } from "../../utils/Constant/constants";
import { useDispatch } from "react-redux";
import { addPopularVideo } from "../../utils/Redux/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();

  const getMostPopularVideo = async () => {
    const data = await fetch(POPULAR_VIDEO_URL);
    const json = await data.json();
    const result = json.items;
    dispatch(addPopularVideo(result));
  };

  useEffect(() => {
    getMostPopularVideo();
  }, []);

  return (
    <div className="mx-16">
      <VideoList />
    </div>
  );
};

export default VideoContainer;
