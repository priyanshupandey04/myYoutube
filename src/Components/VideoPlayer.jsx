import React, { useEffect, useState } from "react";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="mt-9">
      <div className="overflow-hidden rounded-2xl h-fit w-fit">
        <iframe
          width="850"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
