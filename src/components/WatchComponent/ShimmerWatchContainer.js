import React from "react";

const ShimmerWatchContainer = () => {
  return (
    <div className="h-max w-screen bg-black px-20">
      <div className="flex justify-between">
        <div className="h-[500px] w-[850px] bg-slate-300 animate-pulse rounded-lg"></div>
        <div className="w-[400px] h-[500px] bg-slate-400 animate-pulse rounded-lg"></div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col">
          <div className="h-[100px] w-[850px] bg-slate-300 animate-pulse rounded-lg"></div>
          <div className="h-[200px] w-[850px] bg-slate-400 animate-pulse mt-3 rounded-lg"></div>
          <div className="h-[700px] w-[850px] bg-slate-200 animate-pulse mt-5 rounded-lg"></div>
        </div>
        <div className="w-[400px] h-[400px] bg-slate-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default ShimmerWatchContainer;
