"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavButton = ({ name, path }: { name: string; path: string }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative overflow-visible"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={() => router.push(path)}
    >
      <div className="relative flex size-4 mx-auto cursor-pointer transition">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 "></span>
        <span className="relative inline-flex size-4 rounded-full bg-sky-500 hover:bg-sky-600 transition"></span>
      </div>
      {isHover && (
        <div className="z-10 absolute top-0 right-10 bg-white text-[#333333] px-4 py-2 rounded-lg shadow-lg opacity-70">
          {name}
        </div>
      )}
    </div>
  );
};

export default NavButton;
