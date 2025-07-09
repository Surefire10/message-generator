import { Message } from "@/app/types/message";
import { Skeleton } from "./skeleton";
import { TypingText } from "./typing-text";

interface DisplayAreaProps {
  messages: Message[];
  isLoading: boolean;
}

export function DisplayArea({ messages, isLoading }: DisplayAreaProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col  gap-5 border border-border h-full max-h-full w-full rounded-md bg-input/30 p-5 ">
        <Skeleton className="h-1/2 w-full" />
        <Skeleton className="h-1/2 w-full" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 border border-border h-3/4 overflow-hidden md:h-full max-h-full w-full rounded-md bg-input/30 p-5  ">
      {messages &&
        messages.map((item, index) => {
          return (
            <div
              className=" w-full basis-1/2 max-h-[250px] md:max-h-[200px]  overflow-auto "
              key={index}
            >
              <span className=" text-neutral-100 text-lg native-blur backdrop-blur-sm  py-2 px-2 rounded">
                {item.role}
              </span>

              <div className="whitespace-pre-wrap break-words  text-muted-foreground md:w-3/4">
                <TypingText messageText={item.message} speed={20} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
