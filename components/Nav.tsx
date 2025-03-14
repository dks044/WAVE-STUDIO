import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className="z-50 fixed right-0 w-12 h-screen flex justify-center items-center pr-3">
      <div className="w-full bg-gray-300 opacity-65 h-[30%] rounded-lg flex-col pt-3 space-y-4 justify-center flex">
        <NavButton />
        <NavButton />
        <NavButton />
        <NavButton />
        <NavButton />
      </div>
    </nav>
  );
};

export default Nav;
