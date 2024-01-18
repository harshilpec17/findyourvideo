import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [chatData, setChatData] = useState(null);
  const [searchParams] = useSearchParams();

  const getLiveChatMessage = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const json = await data.json();
    const chatData = await json.results;
    setChatData(chatData);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getLiveChatMessage();
  }, []);
  return (
    <div className="px-5 py-4 flex w-screen">
      <div>
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="py-4">
          <CommentContainer />
        </div>
      </div>
      <div className="h-[500px] border  overflow-y-scroll ">
        <h1 className="font-bold text-center border-b border-black py-1 text-xl">
          Live Chat
        </h1>
        <div className="w-full mx-2  flex flex-col-reverse ">
          {chatData && <LiveChat data={chatData} />}
        </div>
      </div>
    </div>
  );
};

export default Watch;
