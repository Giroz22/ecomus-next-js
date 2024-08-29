"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

//data
import { data as banners } from "./data";
import Image from "next/image";
import Link from "next/link";

import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper relative"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-row h-[70vh]">
              <div className="flex-1 flex flex-col justify-center text-left gap-4 p-8 bg-[#eef0e1]">
                <h2 className="text-7xl text-wrap">{banner.title}</h2>
                <p className="">{banner.content}</p>
                <Link
                  href={banner.url}
                  className=" w-1/4 mt-8 py-4 px-2 bg-white text-center hover:bg-primary hover:text-white   transition-all duration-400"
                >
                  Shop collection
                  <ChevronRightOutlinedIcon />
                </Link>
              </div>
              <div
                className={`flex-1 flex items-center justify-center bg-[#${banner.bgColor}]`}
              >
                <Image
                  src={banner.image}
                  alt="Imagen referencia"
                  fill={false}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
