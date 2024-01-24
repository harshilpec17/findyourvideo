import { useEffect, useState } from "react";
import { calculateTime, useCalculateTime } from "../../hooks/useCalculateTime";

const Comment = ({ name, text, image, timeStamp }) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(calculateTime(timeStamp));

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeStamp]);
  return (
    <>
      <div className="flex items-center py-1 text-white">
        <img
          src={`${image}`}
          alt="user"
          className="w-12 h-12 rounded-full"
        ></img>
        <div className="px-4 rounded-md w-full">
          <div className="flex items-center">
            <p className="font-bold text-white">{name}</p>
            <p className="text-gray-400 text-xs pl-3">{time}</p>
          </div>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
