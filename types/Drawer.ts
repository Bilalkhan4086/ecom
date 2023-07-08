import { ReactNode } from "react";
export interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}
