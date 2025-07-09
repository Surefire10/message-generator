"use client";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/client";
import { useState } from "react";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      //   const res = await createUserWithEmailAndPassword(email, password);
      //   console.log({ res });
      //   setEmail("");
      //   setPassword("");
      //   setConfirmPassword("");
    } catch (e) {
      console.error(e);
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
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90"
      >
        Sign Up
      </button>
    </form>
  );
}
