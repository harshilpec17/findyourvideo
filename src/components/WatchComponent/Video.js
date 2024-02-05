import React from "react";

const Video = ({ id }) => {
  return (
    <>
      <div>
        <iframe
          width="1000"
          height="550"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="shadow-2xl rounded-lg"
        ></iframe>
      </div>
    </>
  );
};

export default Video;
