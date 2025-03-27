"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="h-screen px-3 flex flex-col gap-4">
      {/* Search Bar & Filter */}
      <div className="flex justify-betwe`en items-center gap-2">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#523435] text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-[20px] focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="bg-white h-[41px] w-[48px] rounded-lg flex justify-center items-center">
          <IoFilter className="text-[#523435]" />
        </div>
      </div>

      {/* Image Carousel*/}
      <div className="w-full max-w-[736px] mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          className="rounded-[20px] swiper-custom"
        >
          {["image1.png", "image2.png", "image3.png"].map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full"
                style={{ aspectRatio: "736 / 414" }}
              >
                <Image
                  src={`/images/${img}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="rounded-[20px] object-cover"
                  quality={100}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Categories */}
      <div className="flex w-full justify-between items-center px-1">
        <h2 className="text-lg ">Categories</h2>
        <div>
          <Link href="/some-path" className="font-medium text-[#d48926de]">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
