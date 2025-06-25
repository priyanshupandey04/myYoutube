import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./videoCard";

const VideoContainer = () => {
  const [videos, setVideos] = React.useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    const videos = Array(2).fill(data.items).flat();
    setVideos(videos);
  };
  if (videos.length == 0) return <div>Loading...</div>;
  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => {
        return (
            <VideoCard
              key={index}
              title={video.snippet.localized.title}
              channelName={video.snippet.channelTitle}
              viewsCount={video.statistics.viewCount}
              thumbnail={video.snippet.thumbnails.medium.url}
              videoId={video.id}
            />
        );
      })}
    </div>
  );
};

export default VideoContainer;
