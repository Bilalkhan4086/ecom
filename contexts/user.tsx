"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface initialStateProps {
  showSignin: boolean;
  setShowSignin: (x: boolean) => void;
}
const initialState: initialStateProps = {
  showSignin: false,
  setShowSignin: (x: boolean) => null,
};
export const UserContext = createContext(initialState);

const UserContextProvider = ({ children }: ProviderProps) => {
  const [showSignin, setShowSignin] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ showSignin, setShowSignin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
