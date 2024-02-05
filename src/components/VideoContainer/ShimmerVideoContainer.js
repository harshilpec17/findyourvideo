import React from "react";

export const ShimmerVideoContainer = () => {
  const newArray = new Array(20).fill("empty");
  const buttonArray = new Array(8).fill("empty");

  return (
    <div className="h-full ml-[17%] mx-16 w-[83%]">
      <div className="flex justify-between my-3 mx-2">
        {buttonArray.map((b) => (
          <div
            key={Math.random()}
            className="w-32 h-11 rounded-lg bg-slate-300 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex justify-around mx-8 flex-wrap flex-row">
        {newArray.map((x) => (
          <div
            key={Math.random()}
            className="w-80 h-56 rounded-lg bg-slate-400 m-2 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
