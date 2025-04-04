"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const HeaderNav = ({
  open,
  close,
}: {
  open?: boolean;
  close?: () => void;
}) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname.replaceAll('/' ,''));
  return (
    <nav
      className={` lg:flex lg:gap-18 ${
        open ? `flex flex-col gap-[10px] items-center ` : " hidden"
      }`}
    >
      {["Music", "Tour", "Videos", "Merch"].map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          onClick={() => {
            setIsActive(item.toLowerCase()), close ? close() : null ;
          }}
          className={` uppercase font-bold lg:normal-case  border-b-2 lg:border-none pb-1 lg:pb-0 text-[22px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] hover:scale-103 transition-all duration-300 relative
          ${
            isActive === item.toLowerCase()
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
