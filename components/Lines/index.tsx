import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import ShaddowIconed from "../ShaddowIconed";
import SimpleLine from "../simpleLine";

const Lines = () => {
  return (
    <div className="absolute max-lg:top-[520px] top-[287px] max-sm:hidden left-10 max-sm:left-6 -z-[9]">
      <div className="relative">
        <div>
          <ShaddowIconed bgColor={"bg-pink-500"} Icon={HiShoppingCart} />
          <SimpleLine
            lineId=""
            lineBg="from-pink-500 to-blue-500 max-lg:h-[370px] show-line-by-default max-xl:h-[440px] h-[300px]"
          />
        </div>
        <div>
          <ShaddowIconed bgColor={"bg-blue-500"} Icon={HiShoppingCart} />
          <SimpleLine
            lineId="line2"
            lineBg="from-blue-500 to-green-500  max-lg:h-[1950px] max-xl:h-[1750px] h-[1100px]"
          />
        </div>
        <div>
          <ShaddowIconed bgColor={"bg-green-500"} Icon={HiShoppingCart} />
          <SimpleLine
            lineId="line3"
            lineBg="from-green-500 to-none h-[360px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Lines;
