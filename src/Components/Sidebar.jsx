import React from "react";
import SidebarComponent from "./SidebarComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSideBarOpen = useSelector((store) => store.sidebar.isSideBarOpen);

  // Early return
  if (!isSideBarOpen) return null; // If sidebar is closed, return null

  return (
    <div className="w-64 h-full overflow-y-auto border-r border-gray-200 shadow-md">
      <div className="border-b-2 border-gray-200 ">
        <ul className="text-base font-semibold">
          <li>
          <Link to={"/"}>
           <SidebarComponent context={"Home"} icon={"🏠"} url={"/"} />
          </Link>
          </li>
          <li>
            <SidebarComponent context={"Shorts"} icon={"📺"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Subscriptions"} icon={"📢"} url={"/"} />
          </li>
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 ">
        <ul className="text-base font-semibold">
          {/* History, playlist, Your Videos, Watch Later, Liked Videos */}
          <li>
            <SidebarComponent context={"History"} icon={"📜"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Playlist"} icon={"📺"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Your Videos"} icon={"📹"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Watch Later"} icon={"⏳"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Liked Videos"} icon={"❤️"} url={"/"} />
          </li>
        </ul>
      </div>

      <div className="p-2 border-b-2 border-gray-200">
        <h1 className="px-2 text-base font-bold">Subscriptions</h1>
        <ul>
          {/* T-Series, MrBeast, ViratKohli, Striver, Take You Forwaed, ICC, also use different and relatable icons correspondingly.*/}
          <li>
            <SidebarComponent context={"T-Series"} icon={"📺"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"MrBeast"} icon={"💰"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"ViratKohli"} icon={"🏏"} url={"/"} />
          </li>
          <li>
            {/* educator icon teaching coding*/}
            <SidebarComponent context={"Striver"} icon={"📺"} url={"/"} />
          </li>
          <li>
            <SidebarComponent
              context={"Take You Forwaed"}
              icon={"📺"}
              url={"/"}
            />
          </li>
          <li>
            <SidebarComponent context={"ICC"} icon={"🏏"} url={"/"} />
          </li>
        </ul>
      </div>

      <div className="p-2 border-b-2 border-gray-200">
        <h1 className="px-2 text-base font-bold">Explore</h1>
        <ul>
          <li>
            <SidebarComponent context={"Trending"} icon={"🔥"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Shopping"} icon={" 🛍️"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Gaming"} icon={"🎮"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Education"} icon={"🏫"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Entertainment"} icon={"🎬"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Music"} icon={"🎵"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Films"} icon={"🎞️"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Live"} icon={"🎥"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Gaming"} icon={"🎮"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"News"} icon={"📰"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Sport"} icon={"🏸"} url={"/"} />
          </li>
          <li>
            <SidebarComponent context={"Courses"} icon={"📚"} url={"/"} />
          </li>
          <li>
            <SidebarComponent
              context={"Fashion & beauty"}
              icon={"📺"}
              url={"/"}
            />
          </li>
          <li>
            <SidebarComponent context={"Podcasts"} icon={"📺"} url={"/"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
