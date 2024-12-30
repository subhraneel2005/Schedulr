"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileSidebar from "./MobileSidebar";
import { ModeToggle } from "../ModeToggle";
import { useRouter } from "next/navigation";

interface SidebarProps {
  setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
}

export default function Sidebar({ setActiveContent }: SidebarProps) {
  const router = useRouter();

  return (
    <div className="lg:w-[20%] w-[90%] dark:text-[#8FBFFA] lg:min-h-screen rounded-[24px] lg:rounded-[50px] bg-[#f6f7f9] dark:bg-[#061741] border-[#ebedf1] dark:border-[#1452EB] border-2 dark:border-opacity-[30%] flex lg:flex-col flex-row justify-between items-center lg:py-[50px] py-4 px-8 lg:px-0">
      <span className="lg:text-xl text-lg font-bold cursor-pointer items-start flex  justify-center gap-2">
        <Link href="/" className="mt-1">
          Schedulr.
        </Link>
        <ModeToggle />
      </span>
      <ul className="text-sm font-bold space-y-8 hidden lg:flex flex-col items-start">
        <li
          onClick={() => setActiveContent("doc")}
          className="cursor-pointer flex gap-1 items-center justify-center"
        >
          <img src="/add.png" alt="doc" className="mb-1" />
          Create Event
        </li>
        <li
          onClick={() => setActiveContent("profile")}
          className="cursor-pointer flex gap-1 items-center justify-center"
        >
          <img src="/profile.png" alt="profile" className="mb-1" />
          Profile
        </li>
        <li
          onClick={() => router.push("/")}
          className="cursor-pointer flex gap-1 items-center justify-center"
        >
          <img src="/home.png" alt="profile" className="mb-1" />
          Home
        </li>
      </ul>
      <div className="space-y-4 pt-4 hidden lg:flex">
        <Button>
          <img src="/chat.png" alt="request a feature" />
          <Link href="https://x.com/Subhraneel55545" target="_blank">
            Request a feature
          </Link>
        </Button>
      </div>

      <MobileSidebar setActiveContent={setActiveContent} />
    </div>
  );
}
