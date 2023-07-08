import { shadowedIcon } from "@/types/Icons";
import React from "react";

const ShaddowIconed = ({ Icon, bgColor = "bg-pink-500" }: shadowedIcon) => {
  return (
    <div className="relative ">
      <Icon
        className="mb-4 mt-3 z-[1] h-6 w-6 overflow-visible"
        color={"white"}
      />
      <span
        className={`absolute ${bgColor} -left-[4px] -top-[4px] height-full blur-lg w-8 h-8`}
      ></span>
    </div>
  );
};

export default ShaddowIconed;
