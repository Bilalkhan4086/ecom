"use client";
import { cartProductProps } from "@/types/products";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface initialStateProps {
  products: cartProductProps[];
  setProducts: (x: cartProductProps[]) => void;
}
const initialState: initialStateProps = {
  setProducts: (x: cartProductProps[]) => null,
  products: [],
};
export const CartContext = createContext(initialState);

const initialValue = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(window?.localStorage?.getItem("products") || "[]");
  }
  return [];
};
const CartContextProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<cartProductProps[]>(initialValue());
  useEffect(() => {
    if (typeof window !== "undefined")
      window.localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
