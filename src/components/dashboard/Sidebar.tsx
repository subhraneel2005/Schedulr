import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface SidebarProps {
  setActiveContent: (content: "" | "profile" | "doc" | "time") => void;
}

export default function Sidebar({ setActiveContent }: SidebarProps) {
  const INETGRATIONS_LEFT = 50;

  return (
    <div className="w-[20%] text-[#8FBFFA] h-full rounded-[50px] bg-[#061741] border-[#1452EB] border-2 border-opacity-[50%] flex flex-col justify-between items-center py-6">
      <span className="text-xl font-bold cursor-pointer items-start flex">
        <Link href="/">Schedulr.</Link>
      </span>
      <ul className="text-sm font-bold space-y-6 flex flex-col items-start">
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
          Scheduled Posts
        </li>
      </ul>
      <span className="flex flex-col items-start space-y-2">
        <span className="flex justify-center items-center gap-2 text-sm font-bold">
          <span className="text-[#abccf4] text-xl">{INETGRATIONS_LEFT}</span>{" "}
          Integrations left
        </span>
        <Button className="w-full bg-[#ffdc73] hover:bg-[#ffcf40]" size="sm">
          Get more
        </Button>
      </span>
    </div>
  );
}
