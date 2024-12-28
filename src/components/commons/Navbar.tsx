'use client'

import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import MobileNav from "./MobileNav";
import { useSession,signIn,signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {

  const {data:session} = useSession();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:w-[60%] w-[90%] z-20 py-4 md:py-6 absolute top-10 bg-[#e7efff] border-[#9fbffd] dark:bg-[#061741]  dark:border-[#082f91] border-opacity-40 rounded-[24px] border flex justify-between px-8 items-center">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/logo.png"
          alt="schedulr-logo"
          className="h-5 w-5 object-contain"
        />
        <div className="dark:text-[#e7efff] text-[#719ef9] font-bold mt-1 cursor-pointer">
          <Link href="/">Schedulr.</Link>
        </div>
      </div>
      <span className="hidden lg:flex">
        <ul className="flex justify-center text-sm font-semibold items-center gap-3">
          <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 duration-300 text-muted-foreground">Pricing</li>
          <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 duration-300 text-muted-foreground">Features</li>
          <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 duration-300 text-muted-foreground">Discord</li>
        </ul>
      </span>

      <span className="hidden lg:flex gap-2">
        <ModeToggle />
        {!session ? (<Button variant="secondary" onClick={() => signIn('google', {callbackUrl: "/"})}>Sign In</Button>) : (<Button variant="destructive" onClick={() => signOut()}>Sign out</Button>)}
      </span>

      <MobileNav />
    </div>
    </div>
  );
}
