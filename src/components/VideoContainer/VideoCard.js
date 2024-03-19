import React, { useEffect, useState } from "react";
import { formatNumber } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { addSelectVideo } from "../../utils/Redux/selectedVideoSlice";
import { calculateTime } from "../../hooks/useCalculateTime";

const VideoCard = ({ popularVideo }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState();
  const timeStamp = popularVideo.snippet.publishedAt;

  const handleClick = () => {
    dispatch(addSelectVideo(popularVideo));
  };

  function extractNumber(str) {
    const number = str.replace(/\D/g, "");
    if (str.search((x) => x === "M" && x !== "S")) {
      let minutes = number.slice(0, 2);
      let result = minutes + ":" + "00";
      return result;
    }
  }

  useEffect(() => {
    setTime(calculateTime(timeStamp));

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeStamp]);

  return (
    <>
      {/* <!-- Video 1 --> */}
      <div
        onClick={handleClick}
        className="col-span-12 sm:col-span-6 md:col-span-3 ml-3 mb-6 w-80"
      >
        <div className="w-full flex flex-col">
          <div className="relative">
            {/* <!-- Image Video --> */}

            <img
              src={popularVideo.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="w-96 h-auto rounded-xl"
            />
          </div>

          <div className="flex flex-row mt-2 gap-2 ">
            {/* <!-- Description --> */}
            <div className="flex flex-col">
              <p className="text-gray-100 text-sm font-semibold">
                {popularVideo.snippet.title}
              </p>

              <p className="text-gray-400">
                {" "}
                {popularVideo.snippet.channelTitle}{" "}
              </p>
              <div className="flex items-center">
                <p className="text-gray-400 text-xs mt-1">
                  {formatNumber(parseInt(popularVideo.statistics.viewCount))}
                </p>
                <p className="text-gray-400 text-xs ml-2 mt-1">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
