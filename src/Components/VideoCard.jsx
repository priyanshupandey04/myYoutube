import React from "react";
import { VIDEO_CARD_MORE_ICON_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ thumbnail, title, channelName, viewsCount, videoId }) => {
  return (
    <div className="w-[32%] m-2 overflow-hidden bg-gray-200 border-2 border-gray-200 rounded-lg h-fit">
      <Link to={`/watch?v=${videoId}`}>
        <div className="h-[70%] rounded-lg overflow-hidden h-fit">
          <img
            // zoom in image
            className="object-cover w-full h-full"
            alt={title}
            src={thumbnail}
          />
        </div>
        <div className="relative">
          <div className="absolute right-0 top-2">
            <img
              className="w-5 h-4"
              alt="More"
              src={VIDEO_CARD_MORE_ICON_URL}
            />
          </div>
          <div className="px-1 mx-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            {/* channel name + verified icon */}
            <h2>
              {channelName} <span className="text-blue-600">✓</span>
            </h2>
            <p>{viewsCount} views</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
