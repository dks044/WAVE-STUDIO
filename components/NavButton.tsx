import React from "react";

const NavButton = () => {
  return (
    <div className="relative flex size-4 mx-auto cursor-pointer ">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex size-4 rounded-full bg-sky-500 hover:bg-sky-600 transition"></span>
    </div>
  );
};

export default NavButton;
