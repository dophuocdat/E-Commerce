import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TopSeller = ({ prod, title, onClick }) => {
  const containerRef = useRef(null);
  const handlePrevClick = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const handleNextClick = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-white border my-3 ">
      <div className="px-7">
        <div>
          <h1>{title}</h1>
        </div>
        <div className=" relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto items-center gap-5 list-books cursor-pointer"
          >
            {prod.map((item) => {
              return (
                <img
                  src={item.img}
                  alt=""
                  key={item.id}
                  onClick={() => onClick(item.id)}
                />
              );
            })}

            <button className="text-[2rem] absolute left-0 w-10 top-1/2 -translate-y-1/2 h-1/2 bg-white">
              <MdKeyboardArrowLeft onClick={handlePrevClick} />
            </button>
            <button className="text-[2rem] absolute right-0 w-10 top-1/2 -translate-y-1/2 h-1/2 bg-white">
              <MdKeyboardArrowRight onClick={handleNextClick} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
