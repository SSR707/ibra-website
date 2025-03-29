import NextIcon from "../../../../../public/svg/next-icon.svg";
export const InfoCard = () => {
  return (
    <div className=" text-center p-[20px]  shadow-2xl mb-[30px] lg:mb-0 ">
      <h2 className="font-black text-[44px] text-transparent bg-clip-text bg-[url('/img/background.gif')] bg-cover bg-center mb-[20px] lg:text-[64px] lg:max-w-[550px]   ">
        IBRA ONE LOVE
      </h2>

      <div
        className={`px-[13px] py-[10px] md:w-[320px] rounded-2xl bg-[#000] flex gap-[5px] md:gap-2.5 items-center border-1
          shadow-[0px_0px_20px_1px_rgba(255,255,255,0.263)]
           border-gray-300 mr-auto ml-auto motion-safe:animate-[bounce_1.5s_infinite]
           hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.50)] hover:scale-105 transition-all duration-400`}
      >
        <div className="w-2 h-2 bg-white rounded-full shadow-[0px_0px_10px_2px_rgba(255,255,255,0.50)] animate-pulse"></div>
        <span className="text-gray-400 font-bold text-[14px]">New EP</span>{" "}
        <span className="text-[#fff] font-bold drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]  text-[14px]">
          "KOZLARIM"
        </span>
        <span className="text-gray-500 font-bold text-[13px]">Coming Soon</span>
        <img
          src={NextIcon.src}
          className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-white"
          alt=""
        />
      </div>
    </div>
  );
};
