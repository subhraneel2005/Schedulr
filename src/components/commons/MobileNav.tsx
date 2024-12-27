"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "../ModeToggle";
import { signIn, signOut, useSession } from "next-auth/react";

export default function MobileNav() {

  const {data:session, status} = useSession();

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
                <li className="w-full text-center text-muted-foreground cursor-pointer">
                  Pricing
                </li>
                <li className="w-full text-center text-muted-foreground cursor-pointer">
                  Features
                </li>
                <li className="w-full text-center text-muted-foreground cursor-pointer">
                  Discord
                </li>
              </ul>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
              <div className="flex justify-center">
                <ModeToggle />
              </div>
              {!session ? (<Button className="w-full" variant="secondary" onClick={() => signIn('google', {callbackUrl: "/"})}>Sign In</Button>) : (<Button className="w-full" variant="destructive" onClick={() => signOut()}>Sign out</Button>)}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}