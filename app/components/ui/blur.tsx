import { cn } from "@/app/lib/utils";

export function Blur({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute   bg-primary z-[-1] blur-[230px] rounded-full",
        className
      )}
    ></div>
  );
}
