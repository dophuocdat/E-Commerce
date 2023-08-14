import React, { useState } from "react";

const CardProduct = ({ item, onClick }) => {
  return (
    <div className="border h-[400px] bg-white overflow-hidden">
      <div className="flex flex-col  h-full">
        <span className="text-xl font-semibold p-3">{item.header}</span>
        <div className="flex flex-col items-center">
          {item.name && (
            <div className="flex  items-center w-full font-medium text-sm px-3 justify-center">
              <span>{item.name}</span>
            </div>
          )}
          <div className="cursor-pointer">
            <img
              src={item.img}
              alt=""
              className="h-60 "
              onClick={() => onClick(item.id)}
            />
          </div>
          <div>
            <span>{item.author}</span>
          </div>
          <div className="flex  gap-3 justify-evenly w-full">
            Price:
            <span className="text-blue-400">{item.price} $</span>
          </div>
          <div className="flex gap-3 justify-evenly w-full">
            Inventory: <span className="text-rose-400">{item.inventory}</span>
          </div>
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
