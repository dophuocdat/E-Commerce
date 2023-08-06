import React from "react";

const CardProduct = ({ item, onClick }) => {
  return (
    <div className="border h-[400px] bg-white overflow-hidden">
      <div className="flex flex-col  h-full">
        <span className="text-xl font-semibold p-3">{item.header}</span>
        <div className="flex flex-col items-center">
          <div className="cursor-pointer">
            <img
              src={item.img}
              alt=""
              className="h-60 "
              onClick={() => onClick(item.id)}
            />
          </div>
          {item.name && (
            <div className="flex  items-start w-full font-medium text-sm px-3">
              <span>{item.name}</span>
            </div>
          )}
        </div>
        <div className="flex h-full items-end justify-start pb-5 px-3">
          <small className=" text-blue-500 hover:text-rose-400 hover:underline cursor-pointer">
            {item.more}
          </small>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
