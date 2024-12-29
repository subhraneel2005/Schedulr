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

interface SidebarProps {
    setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
  }


export default function MobileSidebar({ setActiveContent }: SidebarProps) {

    const INETGRATIONS_LEFT = 50;
    
  const { data: session } = useSession();

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
            <ul className="text-sm font-bold space-y-6 flex flex-col items-start">
              <li
                onClick={() => setActiveContent("profile")}
                className="cursor-pointer flex gap-1 items-center justify-center"
              >
                <img src="/profile.png" alt="profile" />
                Profile
              </li>
              <li
                onClick={() => setActiveContent("doc")}
                className="cursor-pointer flex gap-1 items-center justify-center"
              >
                <img src="/doc.png" alt="doc" />
                Upload a Doc
              </li>
              <li
                onClick={() => setActiveContent("time")}
                className="cursor-pointer flex gap-1 items-center justify-center"
              >
                <img src="/time.png" alt="time" />
                My Events
              </li>
            </ul>
            <span className="flex flex-col items-start space-y-2">
              <span className="flex justify-center items-center gap-2 text-sm font-bold">
                <span className="text-[#abccf4] text-xl">
                  {INETGRATIONS_LEFT}
                </span>{" "}
                Integrations left
              </span>
              <Button
                className="w-full bg-[#ffdc73] hover:bg-[#ffcf40]"
                size="sm"
              >
                Get more
              </Button>
            </span>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-4">
              <div className="flex justify-center">
                <ModeToggle />
              </div>
              {!session ? (
                <Button
                  className="w-full"
                  variant="secondary"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  className="w-full"
                  variant="destructive"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
