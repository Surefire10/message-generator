import { Messages } from "@/app/types/message";
import { Skeleton } from "./skeleton";
import { useEffect, useState } from "react";

interface DisplayAreaProps {
  messages: Messages[];
  isLoading: boolean;
}

export function DisplayArea({ messages, isLoading }: DisplayAreaProps) {
  console.log(messages);
  const [fullstackMessage, setFullstackMessage] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setFullstackMessage(messages[0].message.slice(0, i + 1));
      setBackendMessage(messages[1].message.slice(0, i + 1));

      i++;
      if (i >= messages[0].message.length && i >= messages[1].message.length) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex flex-row gap-5 border border-border h-full w-full rounded-md bg-input/30 p-5">
        <Skeleton className="h-full w-1/2" />
        <Skeleton className="h-full w-1/2" />
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-5 border border-border h-full w-full rounded-md bg-input/30 p-5">
      <div className="basis-1/2 overflow-auto">
        <p className="whitespace-pre-wrap break-words text-sm text-muted-foreground">
          {backendMessage}
        </p>
      </div>
      <div className="basis-1/2 overflow-auto">
        <p className="whitespace-pre-wrap break-words text-sm text-muted-foreground">
          {fullstackMessage}
        </p>
      </div>
    </div>
  );
}
