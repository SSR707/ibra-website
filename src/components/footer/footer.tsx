import InstagramIcon from "../../../public/svg/instagram.svg";
import YoutubeIcon from "../../../public/svg/youtube.svg";
import SpotifyIcon from "../../../public/svg/spotify.svg";
import YandexIcon from "../../../public/svg/yandex.svg";
import AppleMusiccon from "../../../public/svg/apple-music.svg";
const Footer = () => {
  return (
    <footer className="pt-[30px] pb-[5px] md:pt-[50px] md:pb-[10px] bg-foreground shadow-[0px_0px_10px_3px_rgba(255,255,255,0.5)]">
      <div className="container">
        <div className="flex flex-col items-center gap-[20px] md:gap-[30px]">
          <div className="flex gap-[15px] md:gap-5">
            <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px]  hover:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.3)] hover:scale-120 transition-all duration-300">
              {" "}
              <a href="https://www.instagram.com/ibraloveelyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img
                  className="w-full h-full object-cover"
                  src={InstagramIcon.src}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[32px] h-[32px]  md:w-[36px] md:h-[36px]  hover:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.3)] hover:scale-120 transition-all duration-300 ">
              {" "}
              <a href="https://open.spotify.com/album/55J50LmmZMZ7nbLMsliSud?si=P5SC-2ZrSvG-weqfqV3Gmg">
                <img
                  className="w-full h-full object-cover"
                  src={SpotifyIcon.src}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[32px] h-[32px]   md:w-[36px] md:h-[36px]  hover:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.3)] hover:scale-120 transition-all duration-300">
              <a href="https://youtube.com/@ibraonelove-?si=KSyeXsazPHdq2Euf">
                <img
                  className="w-full h-full object-cover"
                  src={YoutubeIcon.src}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[32px] h-[32px]   md:w-[36px] md:h-[36px]  hover:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.3)] hover:scale-120 transition-all duration-300">
              <a href="https://music.apple.com/ru/artist/ibra-one-love/1702993085">
                <img
                  className="w-full h-full object-cover"
                  src={AppleMusiccon.src}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[32px] h-[32px]   md:w-[36px] md:h-[36px]  hover:drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.3)] hover:scale-120 transition-all duration-300">
              {" "}
              <a href="https://music.yandex.uz/artist/19910464?utm_source=web&utm_medium=copy_link">
                <img
                  className="w-full h-full object-cover"
                  src={YandexIcon.src}
                  alt=""
                />
              </a>
            </div>
          </div>
          <p className="font-medium text-[12px] text-gray-400 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)]  ">
            2025-IBRAONELOVE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
