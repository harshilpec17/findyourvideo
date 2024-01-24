export const calculateTime = (timeStamp) => {
  let finalTime = "";
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
      finalTime = `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
      return finalTime;
    }
  }

  // If less than a second, consider it as "just now"
  return (finalTime = "justNow");
};
