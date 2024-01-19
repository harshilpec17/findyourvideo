import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../../utils/Redux/chatSlice";

const Watch = () => {
  const dispatch = useDispatch();
  const [chatData, setChatData] = useState(null);
  const [myChatMessage, setMyChatMessage] = useState("");
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
      <div className="border h-[500px] flex-col">
        <h1 className="font-bold text-center border-b border-black py-1 text-xl">
          Live Chat
        </h1>
        <div>{chatData && <LiveChat data={chatData} />}</div>
        <div className="flex flex-row bg-slate-400">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "Harshil",
                  text: myChatMessage,
                  image:
                    "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
                })
              );
              setMyChatMessage("");
            }}
          >
            <input
              className="border py-2 w-80 px-2 outline-none"
              type="text"
              value={myChatMessage}
              onChange={(e) => setMyChatMessage(e.target.value)}
            ></input>
            <button
              onClick={(e) => e.target.value}
              className="bg-red-500 px-11 py-2"
            >
              ▶️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Watch;
