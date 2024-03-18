import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/Redux/appSlice";
import { addChatRandomData } from "../utils/Redux/chatSlice";
import { RANDOM_USER } from "../utils/Constant/constants";

export const useLiveMessage = () => {
  const dispatch = useDispatch();

  const getLiveChatMessage = async () => {
    const data = await fetch(RANDOM_USER);
    const json = await data.json();
    const chatData = await json.results;
    dispatch(addChatRandomData(chatData));
  };

  useEffect(() => {
    dispatch(closeMenu());
    getLiveChatMessage();
  }, []);
};
