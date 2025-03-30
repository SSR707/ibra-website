"use client";
import { useState } from "react";
import NavImg from "../../../public/svg/nav.svg";
import { HeaderNav } from "./header-nav";
export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" w-[22px] h-[22px] lg:hidden"
      >
        <img className="w-full h-full object-cover" src={NavImg.src} alt="" />
      </button>

      {/* {isOpen && (
        <div className=" top-[80px] bg-foreground left-0  absolute w-full h-50 text-center  ">
          <HeaderNav open={isOpen} />
        </div>
      )} */}
      <div
        className={`absolute top-[80px] left-0 w-full bg-foreground text-center shadow-md pb-4 transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "translate-y-0 h-50  visible ease-out"
            : "translate-y-[-20px] h-0 invisible ease-in"
        }`}
      >
        <HeaderNav open={isOpen} />
      </div>
    </div>
  );
};
