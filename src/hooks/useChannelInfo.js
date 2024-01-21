import { useEffect } from "react";
import { API_KEY, CHANNEL_INFO } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addChannelInfo } from "../utils/Redux/selectedVideoSlice";

export const useChannelInfo = () => {
  const dispatch = useDispatch();
  const selectedVideoData = useSelector(
    (store) => store.selectVideo.selectVideo
  );
  const channelId = selectedVideoData?.snippet?.channelId;

  const channelInfo = async () => {
    const data = await fetch(`${CHANNEL_INFO + channelId + "&key=" + API_KEY}`);
    const json = await data.json();
    const result = json.items[0];
    dispatch(addChannelInfo(result));
  };

  useEffect(() => {
    channelInfo();
  }, []);
};
