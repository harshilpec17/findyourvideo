import React, { useState } from "react";
import { PiShareFatThin } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { GrDislike } from "react-icons/gr";
import { RiDownloadFill } from "react-icons/ri";
import { LuBellRing } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { LuListPlus } from "react-icons/lu";
import { MdOutlineFlag } from "react-icons/md";

const SubscriberContainer = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    setDisLike(false);
  };
  const handleDisLike = () => {
    setDisLike(!disLike);
    setLike(false);
  };

  return (
    <div className="py-3 w-[1000px]">
      <div>
        <h1 className="text-[#F1F1F1] font-bold text-2xl">
          Coaching Reality EXPOSED | By Sandeep Maheshwari | UPSC NEET JEE
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="py-3 flex items-center w-1/4">
          <img
            alt="thumbnail"
            src="https://yt3.googleusercontent.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s176-c-k-c0x00ffffff-no-rj"
            className="w-12 rounded-full"
          ></img>
          <div className="mx-3 text-[#F1F1F1]">
            <p className="font-bold text-nowrap">NRI Legal service</p>
            <p className="text-xs text-[#A4A4A4]">8.17 K scbsriber</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#F1F1F1] w-3/4">
          <button
            className="bg-[#434243] px-6 py-2 outline-none rounded-full  "
            onClick={() => setSubscribe(!subscribe)}
          >
            {subscribe ? (
              "Subscribe"
            ) : (
              <span className="flex items-center gap-2 ">
                <LuBellRing /> Subscribed
              </span>
            )}
          </button>
          <div className="gap-3 flex">
            <button className="flex items-center ml-8 bg-[#434243] rounded-full px-6 py-2">
              <span onClick={handleLike} className="h-5 w-5 mr-2">
                {like ? <AiFillLike /> : <AiOutlineLike />}
              </span>
              <span className="mr-2">555k</span>
              <span className="mr-2">|</span>
              <span onClick={handleDisLike} className="h-5 w-5 mt-1">
                {disLike ? <BiSolidDislike /> : <GrDislike />}
              </span>
            </button>
            <button className="bg-[#434243] px-6 py-2 outline-none rounded-full flex items-center gap-1">
              <PiShareFatThin /> share
            </button>
            <button className="bg-[#434243] px-6 py-2 outline-none rounded-full flex items-center gap-1">
              <RiDownloadFill />
              Download
            </button>
            <button className="bg-[#434243] px-4 outline-none rounded-full">
              ...
            </button>
          </div>
          <div>
            <div className="bg-[#434243] p-2 rounded-md">
              <ul>
                <li className="flex items-center gap-3">
                  <RiScissorsFill /> Clip
                </li>
                <li className="flex items-center gap-3">
                  <LuListPlus /> Save
                </li>
                <li className="flex items-center gap-3">
                  <MdOutlineFlag /> Report
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="bg-[#414141] rounded-lg shadow-lg text-[#F1F1F1]">
          <div className="flex gap-3 p-2">
            <p>6.2 K view</p>
            <p>3 month ago</p>
            <p>#tag</p>
          </div>
          <div className="px-2">
            <p>info...........</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberContainer;
