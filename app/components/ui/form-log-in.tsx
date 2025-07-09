"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      const token = await auth.currentUser?.getIdToken();
      if (token) router.push("/");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogIn} className="max-w-sm mx-auto p-4 space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-100"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-neutral-100"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 hover:cursor-pointer"
      >
        {isLoading ? (
          <Loader2Icon className="animate-spin w-full"></Loader2Icon>
        ) : (
          <>Log In</>
        )}{" "}
      </button>
      <div className="flex gap-2">
        <p> No account yet? </p>
        <Link href="/auth/sign-up" className="text-primary/80">
          {" "}
          Create an account.{" "}
        </Link>
      </div>
    </form>
  );
}
