"use client";

import { useState } from "react";
import { Button } from "./button";
import { Item } from "./item";

export function SideBar() {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  if (!signedIn)
    return (
      <nav className="flex flex-col justify-end border border-border py-10  min-w-1/6 rounded-md bg-input/30">
        <div className="flex flex-col items-center space-y-3 text-center">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none w-3/4"
          >
            Sign In
          </Button>
          <p className="text-xs text-gray-500 max-w-xs">
            sign in to view your conversations, access saved responses, and
            more.
          </p>
        </div>
      </nav>
    );

  return (
    <nav className="flex flex-col justify-between border border-border py-10 min-w-1/6 rounded-md bg-input/30">
      <div className="flex justify-center px-2">
        <Button className="text-xs w-full" size={"sm"} variant={"outline"}>
          Generate new
        </Button>
      </div>
      <div className="flex flex-col gap-2 h-80 overflow-y-scroll">
        {new Array(10).fill(3).map((item, index) => {
          return <Item key={index} />;
        })}
      </div>
    </nav>
  );
}
