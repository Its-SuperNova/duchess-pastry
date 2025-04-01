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
import ProductCard from "./productcard";

const categories = [
  { name: "Cup Cake", image: "/images/categories/cupcake.png" },
  { name: "Cookies", image: "/images/categories/cookies.png" },
  { name: "cake", image: "/images/categories/cake.png" },
  { name: "Breads", image: "/images/categories/bread.png" },
];

const Hero = () => {
  return (
    <div className="h-screen px-3 flex flex-col gap-4">
      {/* Search Bar & Filter */}
      <div className="flex justify-between items-center gap-2">
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

      {/* Categories */}
      <div className="flex w-full justify-between items-center px-1">
        <h2 className="text-lg">Categories</h2>
        <div>
          <Link href="/categories" className="font-medium text-[#d48926de]">
            See All
          </Link>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 gap-4 mt-2">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm mt-2">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between items-center px-1">
        <h2 className="text-lg">Featured Product</h2>
        <div>
          <Link href="/categories" className="font-medium text-[#d48926de]">
            See All
          </Link>
        </div>
      </div>
      <ProductCard
        name="Red Velvet CheeseCake"
        price={150}
        preparationTime={43}
        distance={1.7}
        rating={4.0}
        imageUrl="/images/red-velvet.png"
        discount={{
          percentage: 20,
          maxAmount: 50,
        }}
      />
    </div>
  );
};

export default Hero;
