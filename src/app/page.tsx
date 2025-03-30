import ImgCardSwipper from "./_components/home/swipper/img-swipper";
import { InfoCard } from "./_components/home/info/info-card";

export default function Home() {
  return (
    <main>
      <section className="lg:pt-[60px] pt-[30px] pb-[10px] relative w-full min-h-screen bg-[url('/img/ibra-compress.gif')] bg-cover bg-center ">
        <div className="absolute inset-0 backdrop-blur-lg"></div>
        <div className="relative z-10 container">
          <div className=" lg:flex lg:items-center lg:justify-between ">
            <InfoCard />
            <ImgCardSwipper />
          </div>
        </div>
      </section>
      <section className="py-[50px] ">
        <div className="container">
          <div className=" flex flex-col items-center">
            <div className="text-center w-full lg:w-[60%] pt-[8px] rounded-[15px] shadow-[0px_0px_20px_2px_rgba(255,255,255,0.263)] hover:hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.50)] hover:scale-105 transition-all duration-600">
              <h2 className="font-bold text-[36px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] mb-[10px]">
                Latest Release
              </h2>
              <div className="border-2 w-full h-50 lg:h-[350px] rounded-[15px] bg-cover bg-center">
                <iframe
                  className="w-full h-full rounded-[15px]"
                  src="https://www.youtube.com/embed/YUapFPrltjU"
                  frameBorder="0"
                  allow="accelerometer; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
