import React from "react";

const SidebarComponent = ({ context, icon, url }) => {
  return (
    <div className="flex h-10 mx-2 mt-1 rounded-lg cursor-pointer hover:bg-gray-200">
      <div className="flex items-center justify-center px-4 text-lg">{icon}</div>
      <div className="flex items-center justify-center px-5 text-lg"> {context}</div>
    </div>
  );
};

export default SidebarComponent;
