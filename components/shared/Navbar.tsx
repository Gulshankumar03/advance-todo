import React from "react";
import Header from "../ui/Header";
import { ModeToggle } from "../ui/ModeToggle";
import { UserButton, auth } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full mx-auto sticky top-0 z-50  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  flex items-center  px-8 py-5">
      <Header />
      <ModeToggle />
      <div className="ml-5">
        <UserButton afterSignOutUrl="/signin"/>
      </div>
    </div>
  );
};

export default Navbar;
