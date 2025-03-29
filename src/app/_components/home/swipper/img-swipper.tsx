"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Ibra1Img from "../../../../../public/img/ibra-3.jpg";
import Ibra2Img from "../../../../../public/img/ibra-2.jpg";
import Ibra3Img from "../../../../../public/img/ibra-1.jpg";
import { ImgCard } from "../info/img-card";

const data = [
  {
    id: 1,
    img: Ibra1Img.src,
  },
  {
    id: 2,
    img: Ibra2Img.src,
  },
  {
    id: 3,
    img: Ibra3Img.src,
  },
];

export default function ImgCardSwipper() {
  return (
    <>
      <Swiper
        className="mySwiper lg:w-[400px] lg:m-0 "
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {" "}
            <ImgCard img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
