import React from "react";

export const ShimmerSearchCard = () => {
  return (
    <>
      <div className="flex w-[100%] bg-gray-300 animate-pulse scroll-smooth mt-4 justify-around rounded-lg shadow-xl transition duration-400 ease-in-out hover:scale-[1.02]">
        <div
          className="h-52 w-72 shadow-lg bg-slate-500 rounded-lg"
          src=""
          alt="thumbnail"
        />
        <div className="w-2/3 mx-6">
          <div className="my-2 h-6 w-60 bg-slate-500"></div>
          <div className="my-2 h-6 w-32 bg-slate-500"></div>
          <div className="my-2 h-24 w-[80%] bg-slate-500"></div>
        </div>
      </div>
    </>
  );
};
