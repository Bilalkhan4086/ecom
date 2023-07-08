"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

interface signinProps {
  handleClose: () => void;
}

export default function Signin({ handleClose }: signinProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div className="flex min-h-full bg-[#000000c4] fixed z-30 w-full top-0 flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 relative shadow sm:rounded-lg sm:px-12">
            <div
              onClick={handleClose}
              className="ring-[#07011a] absolute -top-2 -right-2 ring-2 w-fit rounded-full font-bold cursor-pointer text-[#07011a] bg-white px-[7px]"
            >
              X
            </div>
            <div className="space-y-6">
              {isSignUp && (
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your Full Name"
                      required
                      className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your Email"
                    required
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="block w-full  px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isSignUp ? "Sign up" : "Sign in"}
                </button>
              </div>
              <div>
                or{" "}
                <span
                  onClick={() => {
                    if (!isSignUp) {
                      setIsSignUp(true);
                    } else {
                      setIsSignUp(false);
                    }
                  }}
                  className="text-indigo-600 text-sm font-semibold cursor-pointer"
                >
                  {isSignUp ? "A Quick Signup" : "Already have account"}
                </span>
              </div>
            </div>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div
                  onClick={() => {
                    signIn();
                  }}
                  className="flex w-full cursor-pointer shadow-sm items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-gray-600 ring-1 ring-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  Easy Connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
