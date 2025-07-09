"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebase/client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const token = await auth.currentUser?.getIdToken();
      if (token) router.push("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="max-w-sm mx-auto p-4 space-y-4">
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

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-neutral-100"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-primary"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 hover:cursor-pointer "
      >
        {isLoading ? (
          <Loader2Icon className="animate-spin w-full"></Loader2Icon>
        ) : (
          <>Sign Up</>
        )}
      </button>
      <div className="flex gap-2">
        <p> Already have an account?</p>
        <Link href="/auth/log-in" className="text-primary/80">
          {" "}
          log in now.{" "}
        </Link>
      </div>
    </form>
  );
}
