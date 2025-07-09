import { Blur } from "../components/ui/blur";
import { SideBar } from "../components/ui/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex p-2 h-screen overflow-hidden">
      <SideBar />
      <main className="w-full">{children}</main>
      <Blur className="h-[400px] w-[400px] top-2/5 left-1/10" />
      <Blur className="h-[400px] w-[400px] top-1/5 left-7/10" />
    </div>
  );
}
