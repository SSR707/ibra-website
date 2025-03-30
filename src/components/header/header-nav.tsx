"use client";
import Link from "next/link";
import { useState } from "react";

export const HeaderNav = ({ open }: { open?: boolean }) => {
  const [isActive, setIsActive] = useState("");
  return (
    <nav
      className={` lg:flex lg:gap-18 ${
        open ? `flex flex-col gap-[10px] items-center ` : " hidden"
      }`}
    >
      {["Music", "Tour", "Videos", "Merch"].map((item) => (
        <Link
          key={item}
          href="/"
          onClick={() => setIsActive(item)}
          className={`text-[24px] border-b-2 lg:border-none pb-0.5 lg:pb-0 lg:text-[22px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] hover:scale-103 transition-all duration-300 relative
          ${
            isActive === item
              ? "lg:font-bold lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-gray-300 lg:after:absolute lg:after:top-[30px] lg:after:left-[0px]"
              : "lg:font-medium"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};
