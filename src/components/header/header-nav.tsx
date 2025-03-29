"use client";
import Link from "next/link";
import { useState } from "react";

export const HeaderNav = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <nav className="hidden lg:flex lg:gap-18">
      <Link
        href={"/"}
        onClick={() => setIsActive("Music")}
        className={` lg:text-[22px] lg:text-gray-300 lg: drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]   relative ${
          isActive === "Music"
            ? "lg:font-bold lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-gray-300 lg:after:absolute lg:after:top-[30px] lg:after:left-[0px]"
            : "lg:font-medium"
        }`}
      >
        Music
      </Link>
      <Link
        href={"/"}
        onClick={() => setIsActive("Tour")}
        className={` lg:text-[22px] lg:text-gray-300 lg: drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]   relative ${
          isActive === "Tour"
            ? "lg:font-bold lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-gray-300 lg:after:absolute lg:after:top-[30px] lg:after:left-[0px]"
            : "lg:font-medium"
        }`}
      >
        Tour
      </Link>
      <Link
        href={"/"}
        onClick={() => setIsActive("Videos")}
        className={` lg:text-[22px] lg:text-gray-300 lg:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]   relative ${
          isActive === "Videos"
            ? "lg:font-bold lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-gray-300 lg:after:absolute lg:after:top-[30px] lg:after:left-[0px]"
            : "lg:font-medium"
        }`}
      >
        Videos
      </Link>
      <Link
        href={"/"}
        onClick={() => setIsActive("Merch")}
        className={` lg:text-[22px] lg:text-gray-300 lg:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]
            relative
              ${
                isActive === "Merch"
                  ? "lg:font-bold lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-gray-300 lg:after:absolute lg:after:top-[30px] lg:after:left-[0px] "
                  : "lg:font-medium "
              }`}
      >
        Merch
      </Link>
    </nav>
  );
};
