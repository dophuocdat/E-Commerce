import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import BoxProduct from "../../BoxProduct/BoxProduct";

const Carousel = () => {
  const carousel = [
    "https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/10/16/22/coffee-2390136_640.jpg",
    "https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_640.jpg",
    "https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_640.jpg",
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
          className="h-[648px] w-full aspect-[1620/648] rounded-lg object-fit"
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
