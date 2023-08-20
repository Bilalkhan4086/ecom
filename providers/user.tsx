"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const UserProvider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default UserProvider;
