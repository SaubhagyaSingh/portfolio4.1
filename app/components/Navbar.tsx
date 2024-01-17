// Components/Navbar.tsx
import React from "react";
import Image from "next/image";
import { Socials } from "@/app/constants";

const Navbar = () => {
  return (
    <div className=" absolute top-0 z-[100] w-full h-100px bg-transparent flex justify-between items-center left-0 md:px-10 px-2 md:pt-0 pt-2">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
        </div>
        <h1 className="text-[12px] md:text-[16px] absolute text-white md:text-25px font-semibold left-2">   Saubhagya
          <span className=" absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          singh65@gmail.com
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-2 right-0 md:py-2 md:gap-5 md:mb-4 md:right-2">
        {Socials.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
