import { Blur } from "@/app/components/ui/blur";
import SignUpForm from "../../components/ui/form-sign-up";

export default function Page() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Blur className="h-[400px] w-[400px] top-2/5 left-1/10" />
      <Blur className="h-[400px] w-[400px] top-1/5 left-7/10" />
      <SignUpForm />;
    </div>
  );
}
