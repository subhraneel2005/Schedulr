import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileSidebar from "./MobileSidebar";
import { ModeToggle } from "../ModeToggle";

interface SidebarProps {
  setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
}

export default function Sidebar({ setActiveContent }: SidebarProps) {
  const INETGRATIONS_LEFT = 50;

  return (
    <div className="lg:w-[20%] w-[90%] dark:text-[#8FBFFA] lg:h-full rounded-[24px] lg:rounded-[50px] bg-[#e2e5eb] dark:bg-[#061741] border-[#abb3c4] dark:border-[#1452EB] border-2 dark:border-opacity-[30%] flex lg:flex-col flex-row justify-between items-center py-6 px-8 lg:px-0">
      <span className="lg:text-xl text-lg font-bold cursor-pointer items-start flex  justify-center gap-2">
        <Link href="/" className="mt-1">Schedulr.</Link>
        <ModeToggle />
      </span>
      <ul className="text-sm font-bold space-y-6 hidden lg:flex flex-col items-start">
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
      <span className="hidden lg:flex flex-col items-start space-y-2">
        <span className="flex justify-center items-center gap-2 text-sm font-bold">
          <span className="dark:text-[#abccf4] text-xl">
            {INETGRATIONS_LEFT}
          </span>{" "}
          Credits left
        </span>
        <Button
          className="w-full bg-[#564513] dark:bg-[#ffdc73] hover:bg-[#30270c] dark:hover:bg-[#ffcf40]"
          size="sm"
        >
          Get more
        </Button>
      </span>

      <MobileSidebar setActiveContent={setActiveContent} />
    </div>
  );
}
