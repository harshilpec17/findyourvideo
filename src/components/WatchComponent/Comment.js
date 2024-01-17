import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <>
      <div className="flex items-center py-1">
        <img
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          className="w-12 h-12 border rounded-md p-2"
        ></img>
        <div className="px-3 border rounded-md w-full">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
