"use client";

import { Button } from "./button";
import { Item } from "./item";
import Link from "next/link";
import { auth } from "@/firebase/client";

//we grab these from firebase when we persist data
const dummyTitles = [
  "Senior Backend Engineer – Caching & Performance",
  "Fullstack Developer with DevOps Expertise",
  "Frontend State Management Engineer (Redux/Zustand)",
  "Junior Firebase Authentication Specialist",
  "AI Messaging App Developer (Weekend Warrior Edition)",
  "Clean Architecture Advocate – Software Engineer",
  "GraphQL Migration Engineer (REST to GraphQL)",
  "TypeScript-Centric Fullstack Developer",
  "Async JavaScript Engineer – Async/Await Specialist",
  "Scalable Systems Designer – Fullstack Role",
];

export function SideBar() {
  console.log(!auth.currentUser?.uid);
  if (!auth.currentUser?.uid)
    return (
      <nav className="hidden md:flex flex-col justify-end border border-border py-10  min-w-1/6 rounded-md bg-input/30">
        <div className="flex flex-col items-center space-y-3 text-center">
          <Link href={"/auth/log-in"} className="mb-2">
            <Button
              variant={"outline"}
              className="px-4 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none w-3/4"
            >
              Sign In
            </Button>
            <p className="text-xs text-gray-500 max-w-xs mt-2">
              sign in to view your conversations, access saved responses, and
              more.
            </p>
          </Link>
        </div>
      </nav>
    );

  return (
    <nav className="hidden md:flex flex-col justify-between border border-border py-10 min-w-1/6 rounded-md bg-input/30">
      <div className="flex justify-center px-2">
        <Button className="text-xs w-full" size={"sm"} variant={"outline"}>
          Generate new
        </Button>
      </div>
      <div className="flex flex-col gap-2 h-7/12 overflow-y-scroll">
        {dummyTitles.map((item, index) => {
          return <Item key={index} title={item} />;
        })}
      </div>
    </nav>
  );
}
