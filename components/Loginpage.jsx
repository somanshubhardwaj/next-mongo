"use client";
import { signIn } from "next-auth/react";
const Loginpage = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Financial Tracker</h1>
        <p className="text-lg">Login to continue</p>
        <button
          onClick={() => signIn("google")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
         
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Loginpage;
