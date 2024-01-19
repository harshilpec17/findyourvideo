import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../../utils/Redux/chatSlice";
import { IoSendSharp } from "react-icons/io5";
import Video from "./Video";

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
    <>
      <div className="px-5 py-4 flex justify-between w-screen">
        <div className="w-[70%]">
          <Video id={searchParams.get("v")} />
          <div className="py-4">
            <CommentContainer />
          </div>
        </div>

        <div className="border justify-between flex-col py-1 w-[29%] h-[550px]">
          <div className="h-[38px]">
            <h1 className="font-bold text-center border-b border-black py-1 text-xl">
              Live Chat
            </h1>
          </div>
          <div className="h-[470px]  overflow-y-scroll">
            <div>{chatData && <LiveChat data={chatData} />}</div>
          </div>
          <div className="w-[100%] h-[24px]">
            <form
              className="flex flex-row"
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
                className="border-2 border-black p-1 w-full outline-none"
                type="text"
                value={myChatMessage}
                onChange={(e) => setMyChatMessage(e.target.value)}
              ></input>
              <button
                onClick={(e) => e.target.value}
                className="bg-red-500 border-black border-2 px-10 py-2 outline-none"
              >
                <IoSendSharp />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
