import { Blur } from "@/app/components/ui/blur";
import LoginForm from "../../components/ui/form-log-in";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Blur className="h-[400px] w-[400px] top-2/5 left-1/10" />
      <Blur className="h-[400px] w-[400px] top-1/5 left-7/10" />
      <LoginForm />;
    </div>
  );
}
