import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Body;
