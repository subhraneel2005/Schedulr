'use client'

import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import MobileNav from "./MobileNav";
import { useSession,signIn,signOut } from "next-auth/react";

export default function Navbar() {

  const {data:session} = useSession();
  return (
    <div className="w-full z-20 absolute top-5 flex lg:justify-evenly justify-between px-8 items-center">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/logo.png"
          alt="schedulr-logo"
          className="h-6 w-6 object-contain"
        />
        <div className="font-bold mt-1">Schedulr.</div>
      </div>
      <span className="hidden lg:flex">
        <ul className="flex justify-center text-[15px] font-semibold items-center gap-5">
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
  );
}
