import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileSidebar from "./MobileSidebar";

interface SidebarProps {
  setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
}

export default function Sidebar({ setActiveContent }: SidebarProps) {
  const INETGRATIONS_LEFT = 50;

  return (
    <div className="lg:w-[20%] w-[90%] text-[#8FBFFA] lg:h-full rounded-[24px] lg:rounded-[50px] bg-[#061741] border-[#1452EB] border-2 border-opacity-[50%] flex lg:flex-col flex-row justify-between items-center py-6 px-8 lg:px-0">
      <span className="lg:text-xl text-lg font-bold cursor-pointer items-start flex">
        <Link href="/">Schedulr.</Link>
      </span>
      <ul className="text-sm font-bold space-y-6 hidden lg:flex flex-col items-start">
        <li onClick={() => setActiveContent("profile")} className="cursor-pointer flex gap-1 items-center justify-center">
          <img src="/profile.png" alt="profile" />
          Profile
        </li>
        <li onClick={() => setActiveContent("doc")} className="cursor-pointer flex gap-1 items-center justify-center">
          <img src="/doc.png" alt="doc" />
          Upload a Doc
        </li>
        <li onClick={() => setActiveContent("time")} className="cursor-pointer flex gap-1 items-center justify-center">
          <img src="/time.png" alt="time" />
          My Events
        </li>
      </ul>
      <span className="hidden lg:flex flex-col items-start space-y-2">
        <span className="flex justify-center items-center gap-2 text-sm font-bold">
          <span className="text-[#abccf4] text-xl">{INETGRATIONS_LEFT}</span>{" "}
          Integrations left
        </span>
        <Button className="w-full bg-[#ffdc73] hover:bg-[#ffcf40]" size="sm">
          Get more
        </Button>
      </span>

      <MobileSidebar setActiveContent={setActiveContent}/>
    </div>
  );
}
