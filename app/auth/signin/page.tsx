"use client";

// import { signIn } from "next-auth/react";
import SignInButton from "@/components/Sign-in";

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome to VJTI Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in with your VJTI email address
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <SignInButton />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Note: Only @vjti.ac.in email addresses are allowed
        </p>
      </div>
    </div>
  );
}