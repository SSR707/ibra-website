import React from "react";

const Videos = () => {
  return (
    <main>
      {" "}
      <section className="lg:pt-[60px] pt-[30px] pb-[10px] relative w-full min-h-screen bg-[url('/img/background.gif')] bg-cover bg-center ">
        <div className="px-[20px]  ">
          <div className="text-center w-full lg:w-[50%] pt-[8px] rounded-[15px] shadow-[0px_0px_20px_2px_rgba(255,255,255,0.263)] hover:hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.50)] hover:scale-105 transition-all duration-600">
            <h2 className="font-bold text-[36px] text-gray-300 drop-shadow-[0px_0px_4.2px_rgba(255,255,255,0.263)] mb-[10px]">
              IBRA ONE LOVE - DAMINO
            </h2>
            <div className="border-2 w-full h-50 lg:h-[400px] rounded-[15px] bg-cover bg-center">
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
      </section>
    </main>
  );
};

export default Videos;
