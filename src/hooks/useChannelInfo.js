import React, { useEffect } from "react";
import { API_KEY, CHANNEL_INFO } from "../utils/Constant";
import { useSelector } from "react-redux";

const useChannelInfo = () => {
  const selectedVideoData = useSelector(
    (store) => store.selectVideo.selectVideo
  );
  const channelId = selectedVideoData?.snippet?.channelId;

  const channelInfo = async () => {
    const data = await fetch(`${CHANNEL_INFO + channelId + "&key=" + API_KEY}`);
    const json = await data.json();
    const result = json.items[0];
    console.log(result);
  };

  useEffect(() => {
    channelInfo();
  }, []);
  return <></>;
};

export default useChannelInfo;
