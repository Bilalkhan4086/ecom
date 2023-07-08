import React from "react";
import { DrawerProps } from "@/types/Drawer";

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        " fixed  top-[70px] overflow-hidden z-10  bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-400 translate-x-0  "
          : " transition-all delay-400 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-[100vw] right-0 absolute bg-[#030723f5] text-slate-50 h-full shadow-xl delay-400 duration-400 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-[100vw] pb-10 flex flex-col space-y-6 overflow-y-scroll flex-wrap h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
