export function Item({ title }: { title: string }) {
  return (
    <div className="hover:bg-accent px-2 py-2 rounded text-sm w-full ">
      {title}
    </div>
  );
}
