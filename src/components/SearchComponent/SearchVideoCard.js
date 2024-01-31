import React, { useEffect, useState } from "react";
import { calculateTime } from "../../hooks/useCalculateTime";
import { useDispatch } from "react-redux";
import { addSelectVideo } from "../../utils/Redux/selectedVideoSlice";

const SearchVideoCard = ({ data }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState();
  const timeStamp = data.snippet.publishedAt;

  const handleClick = () => {
    dispatch(addSelectVideo(data));
  };

  useEffect(() => {
    setTime(calculateTime(timeStamp));

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeStamp]);
  if (data === null) return;

  return (
    <>
      <div
        onClick={() => handleClick()}
        className="flex w-[100%] cursor-pointer scroll-smooth mt-4 justify-around rounded-lg shadow-xl transition duration-400 ease-in-out hover:scale-[1.02] "
      >
        <img
          className="h-52 w-72 shadow-lg rounded-lg"
          src={
            data?.snippet?.thumbnails?.medium?.url ||
            "https://api.backlinko.com/app/uploads/2018/11/youtube_logo.png"
          }
          alt="thumbnail"
        />
        <div className="w-2/3 mx-6">
          <p className="text-xl font-bold mb-2 text-white ">
            {data.snippet.title}
          </p>
          <p className="text-sm  mb-2 text-gray-400">{time}</p>

          <p className="text-md font-bold mb-2 text-gray-400">
            {data.snippet.channelTitle}
          </p>
          <p className="text-sm text-white">{data.snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default SearchVideoCard;
