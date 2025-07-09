import { useEffect, useState } from "react";

interface TypingTextProps {
  messageText: string;
  speed: number;
}

export function TypingText({ messageText, speed }: TypingTextProps) {
  const [typingText, setTypingText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(messageText.slice(0, i + 1));

      i++;
      if (i >= messageText.length && i >= messageText.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [messageText, speed]);

  return (
    <div className="basis-1/2 overflow-auto">
      <p className="whitespace-pre-wrap break-words text-sm md:text-lg text-muted-foreground">
        {typingText}
      </p>
    </div>
  );
}
