import React from "react";

export const InfoCard = () => {
  return (
    <div className=" text-center p-[20px]  shadow-2xl mb-[30px] lg:mb-0 ">
      <h2 className="font-black text-[44px] text-transparent bg-clip-text bg-[url('/img/background.gif')] bg-cover bg-center mb-[20px] lg:text-[64px] lg:max-w-[550px]   ">
        IBRA ONE LOVE
      </h2>

      <div
        className={`px-[15px] py-[10px] md:w-[300px] rounded-2xl bg-[#000] flex gap-2 md:gap-2.5 items-center border-1 border-gray-300 mr-auto ml-auto shadow-2xl motion-safe:animate-[bounce_1.5s_infinite]
           hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.50)] hover:scale-105 transition-all duration-300`}
      >
        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
        <span className="text-gray-400 font-bold text-[14px]">New EP</span>{" "}
        <span className="text-[#fff] font-bold drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]  text-[14px]">
          "KOZLARIM"
        </span>
        <span className="text-gray-500 font-bold text-[13px]">Coming Soon</span>
      </div>
    </div>
  );
};
