"use client";
import React, { useState, useEffect } from "react";
import NavButton from "./NavButton";
import { PATH_LIST } from "@/constant";

const Nav = () => {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 640); // sm 기준 (640px 이상이면 PC 네비게이션 활성화)
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isPc ? (
        // PC (세로 우측)
        <nav className="z-50 fixed right-0 w-12 h-screen flex justify-center items-center pr-3">
          <div className="w-full bg-gray-300 opacity-65 h-[30%] rounded-lg flex-col pt-3 space-y-4 justify-center flex">
            {PATH_LIST.map((item) => (
              <NavButton key={item.name} name={item.name} path={item.path} />
            ))}
          </div>
        </nav>
      ) : (
        // 모바일 (상단 중앙)
        <nav className="z-50 fixed top-0 left-1/2 -translate-x-1/2 w-2/4 h-10 flex justify-center items-center bg-gray-300 opacity-65 rounded-lg mt-2">
          <div className="flex flex-row space-x-4">
            {PATH_LIST.map((item) => (
              <NavButton key={item.name} name={item.name} path={item.path} />
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
