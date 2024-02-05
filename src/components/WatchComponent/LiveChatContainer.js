import React, { useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { addMessage } from "../../utils/Redux/chatSlice";
import { IoSendSharp } from "react-icons/io5";

const LiveChatContainer = ({ chatData }) => {
  const dispatch = useDispatch();
  const [myChatMessage, setMyChatMessage] = useState("");

  return (
    <>
      <div className=" bg-zinc-700 shadow-xl rounded justify-between flex-col py-1 w-full h-[550px]">
        <div className="h-[38px]">
          <h1 className="font-bold text-center border-b border-black text-white py-1 text-xl">
            Live Chat
          </h1>
        </div>
        <div className="h-[470px]  overflow-y-scroll">
          <div>{<LiveChat data={chatData} />}</div>
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
    </>
  );
};

export default LiveChatContainer;
