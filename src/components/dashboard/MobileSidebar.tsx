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
  const INTEGRATIONS_LEFT = 50;
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
          <SheetHeader className="mb-8">
            <SheetTitle className="font-bold text-2xl">Schedulr.</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100vh-120px)] justify-between items-center">
            <div className="space-y-4">
              <ul className="space-y-3">
                <li
                  onClick={() => setActiveContent("profile")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/profile.png" alt="profile" className="w-5 h-5" />
                  <span className="font-semibold">Profile</span>
                </li>
                <li
                  onClick={() => setActiveContent("doc")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/doc.png" alt="doc" className="w-5 h-5" />
                  <span className="font-semibold">Upload a Doc</span>
                </li>
                <li
                  onClick={() => setActiveContent("time")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/time.png" alt="time" className="w-5 h-5" />
                  <span className="font-semibold">My Events</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-4">
              <div className="space-y-3 p-4 bg-secondary/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="dark:text-[#abccf4] text-xl font-bold">
                    {INTEGRATIONS_LEFT}
                  </span>
                  <span className="text-sm font-semibold">Integrations left</span>
                </div>
                <Button
                  className="w-full bg-[#564513] dark:bg-[#ffdc73] hover:bg-[#30270c] dark:hover:bg-[#ffcf40]"
                  size="sm"
                >
                  Get more
                </Button>
              </div>
              {!session ? (
                <Button
                  className="w-full"
                  variant="secondary"
                  size='sm'
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  className="w-full"
                  size='sm'
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