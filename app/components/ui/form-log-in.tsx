"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can send the data to your API here
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 space-y-4">
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
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90"
      >
        Sign In
      </button>
    </form>
  );
}
