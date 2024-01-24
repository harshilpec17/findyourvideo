import { useEffect, useState } from "react";
import { calculateTime } from "../../hooks/useCalculateTime";

const Comment = ({ data }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textOriginal,
    publishedAt,
  } = data.snippet?.topLevelComment?.snippet;

  const [time, setTime] = useState();
  useEffect(() => {
    setTime(calculateTime(publishedAt));

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [publishedAt]);

  if (data === null) return;

  return (
    <>
      <div className="flex items-center py-1 text-white">
        <img
          src={`${authorProfileImageUrl}`}
          alt="user"
          className="w-10 h-10 rounded-full"
        ></img>
        <div className="px-4 rounded-md w-full">
          <div className="flex items-center">
            <p className="font-semibold text-white">{authorDisplayName}</p>
            <p className="text-gray-400 text-xs pl-3">{time}</p>
          </div>
          <p className="text-gray-200 pl-1 text-base font-normal">
            {textOriginal}
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment;
