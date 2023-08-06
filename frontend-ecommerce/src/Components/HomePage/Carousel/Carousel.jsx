import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import BoxProduct from "../../BoxProduct/BoxProduct";

const Carousel = () => {
  const carousel = [
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextSide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevSide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={carousel[currentImageIndex]}
          alt="..."
          className="h-full w-full"
        />
        <button
          className="absolute top-1/4 left-10 text-3xl"
          onClick={handlePrevSide}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className="absolute top-1/4 right-10 text-3xl"
          onClick={handleNextSide}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
