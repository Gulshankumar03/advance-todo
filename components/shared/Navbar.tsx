import React from "react";
import Header from "../ui/Header";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignOutButton, auth } from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="w-full mx-auto sticky top-0 z-50  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  flex items-center  px-8 py-5">
      <Header />
      {/* <Link href={"https://advanced-urchin-57.accounts.dev/sign-in"}>
        <Button variant={"ghost"}>Sign in</Button>
      </Link> */}
      {userId ? (
        <>
          <Button variant={"ghost"}>
            {" "}
            <SignOutButton>Sign out</SignOutButton>
          </Button>
        </>
      ) : (
        <>
          <Link href={"https://advanced-urchin-57.accounts.dev/sign-in"}>
            <Button variant={"ghost"}>Sign in</Button>
          </Link>
        </>
      )}
      <ModeToggle />
    </div>
  );
};

export default Navbar;
