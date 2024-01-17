import React from "react";

const ChatMessage = ({ name, text, image }) => {
  return (
    <>
      <div className="flex items-center px-3 pt-2 ">
        <img
          src={image}
          alt="profile"
          className="w-8 h-8 border rounded bg-slate-200"
        ></img>
        <div className="px-2 flex">
          <p className="font-bold">{name}</p>
          <p className="px-2">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
