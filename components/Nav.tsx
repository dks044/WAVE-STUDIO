import React from "react";
import NavButton from "./NavButton";
import { PATH_LIST } from "@/constant";

const Nav = () => {
  return (
    <nav className="z-50 fixed right-0 w-12 h-screen flex justify-center items-center pr-3">
      <div className="w-full bg-gray-300 opacity-65 h-[30%] rounded-lg flex-col pt-3 space-y-4 justify-center flex">
        {PATH_LIST.map((item) => (
          <NavButton key={item.name} name={item.name} path={item.path} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
