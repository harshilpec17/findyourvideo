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
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/helper";

const SubscriberContainer = ({ channel }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const videoDescription = useSelector(
    (store) => store.selectVideo.selectVideo
  );
  const description = videoDescription?.snippet?.description;

  const splitDescription = description.split("\n");
  const joinDescription = splitDescription.join("\n");

  const handleLike = () => {
    setLike(!like);
    setDisLike(false);
  };
  const handleDisLike = () => {
    setDisLike(!disLike);
    setLike(false);
  };

  if (channel === null) return;
  if (videoDescription === null) return;

  return (
    <div className="py-3">
      <div>
        <h1 className="text-[#F1F1F1] font-bold text-2xl">
          {videoDescription?.snippet?.title}
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="py-3 flex items-center w-1/4">
          <img
            alt="thumbnail"
            src={channel?.snippet?.thumbnails?.medium?.url}
            className="w-12 rounded-full"
          ></img>
          <div className="mx-3 text-[#F1F1F1]">
            <p className="font-bold text-nowrap text-[#F1F1F1]">
              {videoDescription?.snippet?.channelTitle}
            </p>
            <p className="text-xs text-[#A4A4A4]">
              {formatNumber(channel?.statistics?.subscriberCount)}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[#F1F1F1] w-3/4">
          <button
            className="bg-[#434243] px-6 py-2 outline-none rounded-full  "
            onClick={() => setSubscribe(!subscribe)}
          >
            {subscribe ? (
              <span className="flex items-center gap-2 ">
                <LuBellRing /> Subscribed
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
          <div className="gap-3 flex">
            <button className="flex items-center ml-8 bg-[#434243] rounded-full px-6 py-2">
              <span onClick={handleLike} className="h-5 w-5 mr-2">
                {like ? <AiFillLike /> : <AiOutlineLike />}
              </span>
              <span className="mr-2">
                {formatNumber(videoDescription?.statistics?.likeCount)}
              </span>
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
            <button
              onClick={() => setDropDown(!dropDown)}
              className="bg-[#434243] px-4 outline-none rounded-full"
            >
              ...
            </button>
          </div>
        </div>
      </div>
      {dropDown ? (
        <div className="flex flex-col text-[#F1F1F1] w-28 float-end -mr-8 -mt-3.5 shadow-lg">
          <div className="bg-[#434243] p-2 rounded-md">
            <ul>
              <li className="flex items-center pt-2 gap-3">
                <RiScissorsFill /> Clip
              </li>
              <li className="flex  pt-2  items-center gap-3">
                <LuListPlus /> Save
              </li>
              <li className="flex pt-2  items-center gap-3">
                <MdOutlineFlag /> Report
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="mt-7">
        <div className="bg-[#414141] rounded-lg shadow-lg text-[#F1F1F1]">
          <div className="flex gap-3 p-2">
            <p>6.2 K view</p>
            <p>3 month ago</p>
            <p>#tag</p>
          </div>
          <div className="px-2 py-3">
            <p>
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberContainer;
