"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="relative w-full h-screen overflow-hidden bg-white flex justify-center items-center">
      <div
        className="text-[7.5rem] sm:text-[20rem] font-bold leading-none cursor-pointer hover:text-blue-700 transition"
        onClick={() => router.push("/")}
      >
        404
      </div>
    </main>
  );
};

export default NotFound;
