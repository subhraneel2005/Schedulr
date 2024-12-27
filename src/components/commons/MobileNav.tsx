"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "../ModeToggle";

export default function MobileNav() {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <FiMenu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-6">
            <SheetTitle className="font-bold text-2xl">Schedulr.</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-[40%]">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="flex flex-col space-y-4">
                <li className="w-full text-center cursor-pointer">
                  Pricing
                </li>
                <li className="w-full text-center cursor-pointer">
                  Features
                </li>
                <li className="w-full text-center cursor-pointer">
                  Discord
                </li>
              </ul>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
              <div className="flex justify-center">
                <ModeToggle />
              </div>
              <Button variant="secondary" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}