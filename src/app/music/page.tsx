import React from "react";
import { MusicCard } from "../_components/music/music-card";

const Music = () => {
  return (
    <main>
      {" "}
      <section className="lg:pt-[40px]  pt-[30px] pb-[30px] lg:pb-[50px] relative w-full min-h-screen bg-[url('/img/background.gif')] bg-cover bg-center ">
        <div className="container">
          <h2 className="font-bold text-[44px] text-white  mb-[10px]">Music</h2>
          <div className="grid grid-cols-1 w-full gap-y-[30px] sm:grid-cols-2 sm:gap-x-[60px]  xl:md:grid-cols-4 mt-[20px]">
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
            <MusicCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Music;
