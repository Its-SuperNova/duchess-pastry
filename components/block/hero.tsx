import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center gap-2 px-3">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b80029] text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2  rounded-[20px] focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="bg-white h-[41px] w-[48px] rounded-lg flex justify-center items-center ">
          <IoFilter className="text-[#b80029]" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
