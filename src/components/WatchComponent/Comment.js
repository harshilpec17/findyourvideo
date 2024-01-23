import React, { useEffect, useState } from "react";

const Comment = ({ name, text, image, timeStamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentTime = new Date();
      const previousTime = new Date(timeStamp);
      const timeDifference = currentTime - previousTime;
      const seconds = Math.floor(timeDifference / 1000);

      // Define time intervals in seconds
      const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
      ];

      // Find the largest interval that fits in the time difference
      for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const count = Math.floor(seconds / interval.seconds);

        if (count > 0) {
          setTimeAgo(`${count} ${interval.label}${count !== 1 ? "s" : ""} ago`);
          return;
        }
      }

      // If less than a second, consider it as "just now"
      setTimeAgo("just now");
    };

    calculateTimeAgo();

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTimeAgo, 60000);

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
          <div className="flex">
            <p className="font-bold text-white">{name}</p>
            <p className="text-white pl-3">{timeAgo}</p>
          </div>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
