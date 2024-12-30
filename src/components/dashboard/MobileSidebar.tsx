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
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
}

export default function MobileSidebar({ setActiveContent }: SidebarProps) {
 

  const router = useRouter();

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
                  onClick={() => setActiveContent("doc")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/add.png" alt="doc" className="w-5 h-5" />
                  <span className="font-semibold">Create Event</span>
                </li>
                <li
                  onClick={() => setActiveContent("profile")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/profile.png" alt="profile" className="w-5 h-5" />
                  <span className="font-semibold">Profile</span>
                </li>
                <li
                  onClick={() => router.push("/")}
                  className="cursor-pointer flex items-center gap-3 hover:bg-accent hover:text-accent-foreground rounded-md p-2 transition-colors"
                >
                  <img src="/home.png" alt="profile" className="mb-1" />
                  Home
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-4">
              <Button>
                <img src="/chat.png" alt="request a feature" />
                <Link href="https://x.com/Subhraneel55545" target="_blank">
                  Request a feature
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
