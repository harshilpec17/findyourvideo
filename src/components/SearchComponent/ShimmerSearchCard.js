import React from "react";

export const ShimmerSearchCard = () => {
  const newArray = new Array(6).fill("empty");
  return (
    <>
      <div className="h-max w-[83%] ml-[17%]">
        {newArray.map(() => (
          <div
            key={Date.now()}
            className=" bg-gray-300 animate-pulse scroll-smooth mt-4 justify-around rounded-lg shadow-xl mx-28"
          >
            <div className="flex">
              <div className="h-52 w-72 shadow-lg bg-slate-500 rounded-lg" />
              <div className="w-2/3 mx-6">
                <div className="my-2 h-6 w-60 bg-slate-500"></div>
                <div className="my-2 h-6 w-32 bg-slate-500"></div>
                <div className="my-2 h-24 w-[80%] bg-slate-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
