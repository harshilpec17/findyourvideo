import React from "react";

const VideoCard = ({ popularVideo }) => {
  console.log(popularVideo);
  function formatNumber(num, precision = 2) {
    const map = [
      { suffix: "T", threshold: 1e12 },
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num;
  }

  function extractNumber(str) {
    const number = str.replace(/\D/g, "");
    if (str.search((x) => x === "M" && x !== "S")) {
      let minutes = number.slice(0, 2);
      let result = minutes + ":" + "00";
      return result;
    }

    // let seconds = number.slice(2);
    // if (number.length < 2) {

    //   return result;
    // } else {
    //   let result = minutes + ":" + seconds;
    //   return result;
    // }
  }

  return (
    <>
      {/* <!-- Video 1 --> */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3 ml-3 mb-6 w-80">
        <card className="w-full flex flex-col">
          <div className="relative">
            {/* <!-- Image Video --> */}

            <img
              src={popularVideo.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="w-96 h-auto rounded-xl"
            />

            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              {extractNumber(popularVideo.contentDetails.duration)}
            </p>
          </div>

          <div className="flex flex-row mt-2 gap-2 ">
            {/* <!-- Profile Picture --> */}

            {/* <img
              src=" "
              alt="Icon"
              className="rounded-full max-h-10 max-w-10"
            /> */}

            {/* <!-- Description --> */}
            <div className="flex flex-col">
              <p className="text-gray-100 text-sm font-semibold">
                {popularVideo.snippet.title}
              </p>

              <p> {popularVideo.snippet.channelTitle} </p>
              <p className="text-gray-400 text-xs mt-1">
                {formatNumber(parseInt(popularVideo.statistics.viewCount))}
              </p>
            </div>
          </div>
        </card>
      </div>
    </>
  );
};

export default VideoCard;
