import { cn } from "@/app/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-md bg-neutral-50/10 animate-pulse duration-200",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
