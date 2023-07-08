"use client";
import FooterRect from "@/assets/icons/FooterRect";
import Logo from "../Logo";
import { buttons } from "@/constants/homepage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const firstSection = [...buttons].splice(0, 3);
  const secondSection = [...buttons].splice(3, 6);
  const pathname = usePathname();
  return (
    <div className={`relative bg-none max-sm:h-[560px] sm:h-[340px]`}>
      <div
        className={`absolute ${
          pathname.includes("thankyou") ? "hidden" : "bottom-0"
        } w-full`}
      >
        <FooterRect />
      </div>
      <div className={`absolute font-semibold bg-none w-full bottom-2`}>
        <div className="flex items-center  w-full  justify-between max-xs:px-5 px-20 max-md:px-10 py-10">
          <div className="flex items-center w-full justify-between max-[500px]:flex-col">
            <div className="xs:ml-0">
              <Logo />
              <p className="mt-6 text-opacity-50 text-white">
                Det ska löna sig.
              </p>
            </div>
            <div className="flex justify-between max-lg:m-auto px-10 max-[500px]:py-0 pt-10 max-sm:px-5">
              <div>
                <div className="flex">
                  <div className="mx-20 max-sm:mx-8">
                    {firstSection?.map((data, index) => (
                      <Link
                        href={data.link}
                        key={index}
                        className="text-opacity-50	text-white"
                      >
                        <p className="mt-4">{data.label}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="max-sm:ml-8">
                {secondSection?.map((data, index) => (
                  <Link
                    href={data.link}
                    key={index}
                    className="text-opacity-50	text-white"
                  >
                    <p className="mt-4">{data.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Footer.defaultProps = {
  className: "",
  style: {},
};
interface HeroHeaderProps {
  className: string;
  style: Object;
}

export default Footer;
