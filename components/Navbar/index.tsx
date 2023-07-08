"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { navbarDesktop } from "../../constants/navbar";
import { LinkTabObj } from "../../types/Navbar";
import Drawer from "./Drawer";
import Link from "next/link";
import { LinkTabProps } from "@/types/Generic";
import Logo from "../Logo";
import Cart from "../Cart";
import { Button } from "../ui/button";
import { useCartContext } from "@/contexts/cart";
import Signin from "../Signin/page";
import { useUserContext } from "@/contexts/user";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const LinkTab = ({ link, index }: LinkTabProps) => {
  return (
    <div className="mt-2">
      <Link
        href={link.link || "/"}
        key={index}
        className="cursor-pointer relative group items-center font-[500] text-[17px] flex"
      >
        {link.label}
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const { showSignin, setShowSignin } = useUserContext();
  const { products } = useCartContext();
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const { data: session } = useSession();

  return (
    <>
      <div className="absolute w-full z-[5] sm:px-16 px-6 py-4 flex justify-center items-center shadow-none bg-none transition ease-in">
        <div className="flex relative justify-between items-center w-[100%]">
          <Logo />

          <div className="flex">
            <div className="mr-4 self-center">
              {openDrawer ? (
                <HiOutlineX
                  onClick={handleDrawerClose}
                  className="lg:hidden text-white cursor-pointer h-8 w-8"
                />
              ) : (
                <HiMenu
                  onClick={handleDrawerOpen}
                  className="lg:hidden text-white cursor-pointer h-8 w-8"
                />
              )}
            </div>
            <div className="text-slate-100 max-lg:hidden w-[600px] flex justify-around">
              {navbarDesktop?.map((link: LinkTabObj, index: number) => (
                <Link
                  href={link.link || "/"}
                  key={index}
                  className="cursor-pointer relative group items-center font-[500] text-[17px] flex"
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="flex self-center"
                onClick={() => {
                  setCartOpen(true);
                }}
              >
                {/* <p className="absolute -top-3 -right-[10px] bg-red-500 text-[#030723f5] rounded-full px-[4px]">
                {1}
              </p> */}
                <FaCartPlus className="h-6 w-6" />
                <p className="ml-2">{products?.length || ""}</p>
              </div>
            </div>
            <div className="flex">
              {session?.user ? (
                <Popover>
                  <PopoverTrigger>
                    <Avatar>
                      <AvatarImage src={session?.user?.image || ""} />
                      <AvatarFallback>{`${session?.user?.name
                        ?.split(" ")[0][0]
                        .toUpperCase()} ${session?.user?.name
                        ?.split(" ")[1][0]
                        .toUpperCase()}`}</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="bg-[#07011a] min-w-[350px] text-white mr-6">
                    <div>
                      <h4>Name : {session?.user?.name}</h4>
                      <h4>Email : {session?.user?.email}</h4>
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() => {
                          signOut();
                        }}
                        className="w-full"
                      >
                        Log out
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Avatar
                  onClick={() => {
                    setShowSignin(true);
                  }}
                >
                  <AvatarImage
                    src={
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                </Avatar>
              )}
            </div>
          </div>
        </div>
      </div>
      <Cart open={cartOpen} user={session?.user} setOpen={setCartOpen} />

      <Drawer isOpen={openDrawer} setIsOpen={setDrawerOpen}>
        <div className="max-w-[90%] ml-8 mt-8">
          {navbarDesktop?.map((link: LinkTabObj, index: number) => (
            <LinkTab index={index} key={`link-${index}`} link={link} />
          ))}
        </div>
        <div className="flex pt-20">
          <Button
            onClick={() => {
              setCartOpen(true);
            }}
            variant={"outline"}
            className="max-w-sm px-10 group  m-auto"
          >
            <FaCartPlus className="h-6 w-6 mr-4 group-hover:text-[#030723f5] text-white" />{" "}
            Checkout {products?.length || ""} item
          </Button>
        </div>
      </Drawer>
      {showSignin && (
        <Signin
          handleClose={() => {
            setShowSignin(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
