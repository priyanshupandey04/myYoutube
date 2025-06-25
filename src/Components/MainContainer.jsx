import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-gray-50">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
