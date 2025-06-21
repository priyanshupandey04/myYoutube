import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
