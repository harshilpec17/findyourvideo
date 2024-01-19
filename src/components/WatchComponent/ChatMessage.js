import React from "react";

const ChatMessage = ({ name, text, image }) => {
  return (
    <>
      <div className="flex flex-row items-center px-2 pt-2 ">
        <img
          src={image}
          alt="profile"
          className="w-6 h-6 border rounded bg-slate-200"
        ></img>
        <div className="px-2 flex items-center">
          <p className="font-bold text-md">{name}</p>
          <p className="px-2 text-sm">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
