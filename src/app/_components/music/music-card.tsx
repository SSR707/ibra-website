import IbraImg from "../../../../public/img/ibra-3.jpg";
export const MusicCard = () => {
  return (
    <div>
      <div className="w-full h-[336px] md:w-[280px] md:h-[280px]">
        <img className="w-full h-full object-cover" src={IbraImg.src} alt="" />
      </div>
      <h3 className="font-bold text-[16px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] mt-[20px] max-w-[280px] break-words">
        IBRA ONE LOVE
      </h3>
      <h3 className="font-bold text-[20px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] mt-[0px] mb-[10px] uppercase max-w-[280px] break-words">
        KOZLARIM
      </h3>
      <button
        className="py-[12px] px-[24px] bg-amber-300 text-[#fff] font-bold text-[16px] border-none rounded-[4px] cursor-pointer transition-all hover:scale-108 hover:duration-600 mt-[5px]"
        type="button"
      >
        Listen now
      </button>
    </div>
  );
};
