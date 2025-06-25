import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Utils/NavSlice";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./videoPlayer";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams(); // URLSearchParams is a new API in browser that allows you to parse and get values from the "query" string of a URL, such as ?name=John&age=30 so you can get the values of name and age from the URLSearchParams object
  // searchParams.get('name') will return 'John'
  // searchParams.get('age') will return '

  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const collapseSidebar = () => {
    dispatch(closeSidebar());
  };

  useEffect(() => {
    collapseSidebar();
  }, []);

  return (
    <div className="flex w-full overflow-y-auto">
      <div className="ml-24 w-fit h-fit">
        <div className="flex-1 overflow-y-auto">
          <VideoPlayer videoId={videoId} />
        </div>
        <div className="mt-10">
          <Comments />
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
