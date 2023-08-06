import React from "react";
import CardProduct from "./CardProduct/CardProduct";

const BoxProduct = ({ prod, col, row, onClick }) => {
  return (
    <div className="">
      <div
        className={`grid grid-cols-${col} grid-rows-${row} gap-2 max-lg:grid-cols-${
          col - 1
        } 
      max-md:grid-cols-${col - 2}  max-sm:grid-cols-${col - 3} `}
      >
        {prod.map((item) => {
          return <CardProduct key={item.id} item={item} onClick={onClick} />;
        })}
      </div>
    </div>
  );
};

export default BoxProduct;
