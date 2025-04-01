import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
interface ProductCardProps {
  name: string;
  rating: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  rating,
  imageUrl,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white dark:bg-[#17181C] rounded-[20px] shadow-md overflow-hidden max-w-sm">
      {/* Product Image Section */}
      <div className="relative h-[200px] w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white dark:bg-[#17181C] font-semibold text-black dark:text-white px-3 py-1 rounded-full flex justify-center items-center space-x-2 text-[16px]">
          <FaStar className="text-yellow-400" />
          <p>{rating}</p>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-white dark:bg-[#17181C] p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          {isLiked ? (
            <FaHeart className="w-4 h-4 text-red-500" />
          ) : (
            <FaRegHeart className="w-4 h-4 text-gray-400 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Restaurant Info Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2 item-center">
          <h2 className="text-[18px] font-semibold text-gray-800 dark:text-white">{name}</h2>
          <div className="mb-1">
            <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center rounded-sm">
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
        <p className="text-[14px] leading-[16px] text-gray-600 dark:text-gray-300">
          layered with creamy cheesecake, made with cocoa, cream cheese, and
          vanilla.
        </p>
      </div>

      <div className="p-4 pt-3 border-t border-gray-400 dark:border-gray-600 border-dashed flex items-center gap-2">
        <BiSolidOffer size={20} color="blue" />
        <p className="text-[16px] font-semibold text-gray-700 dark:text-gray-200">
          10% OFF up to ₹60{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
