import Nav from "@/components/Nav";
import React, { ReactNode } from "react";

const NextLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default NextLayout;
