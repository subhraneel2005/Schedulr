import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";

export default function Navbar() {
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
        <ul className="flex justify-center items-center gap-5 cursor-pointer">
          <li>Pricing</li>
          <li>Features</li>
          <li>Discord</li>
        </ul>
      </span>

      <span className="hidden lg:flex gap-2">
        <ModeToggle />
        <Button variant="secondary">Sign In</Button>
      </span>

      <MobileNav />
    </div>
  );
}
