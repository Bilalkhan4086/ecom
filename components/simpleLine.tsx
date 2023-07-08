"use client";
import { isInViewport } from "@/components/utils";
import { simpleLineProps } from "@/types/Icons";
import { useEffect } from "react";

export default function SimpleLine({
  lineBg = "from-pink-500 via-purple-500 to-indigo-500",
  lineId = "line1",
}: simpleLineProps) {
  useEffect(() => {
    function startAnimationOnScroll() {
      const element: any = document.getElementById(lineId);
      if (isInViewport(element)) {
        element.classList.add("grow-line");
      }
    }
    if (lineId) {
      window.addEventListener("scroll", startAnimationOnScroll);
    }
    return () => {};
  }, []);
  return (
    <div
      id={lineId}
      className={`bg-gradient-to-b opacity-0  w-[3px] mx-auto rounded-sm ${lineBg}`}
    ></div>
  );
}
