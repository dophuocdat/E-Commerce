import React from "react";
import BoxProduct from "../../../Components/BoxProduct/BoxProduct";

import TopSeller from "../../../Components/TopSeller/TopSeller";
import initList from "../../../Config/InitList";

const ProductContent = ({ handleOnclick }) => {
  const bestSeller = initList.filter((item) => item.type === "Best Sellers");

  const trending = initList.filter((item) => item.type === "trending");
  const forYou = initList.filter((item) => item.type === "forYou");
  const childrenBooks = initList.filter(
    (item) => item.type === "Children's Books"
  );

  return (
    <div className="relative -top-52 px-5">
      <div>
        <BoxProduct prod={trending} col={4} row={3} onClick={handleOnclick} />
      </div>
      <div>
        <TopSeller
          prod={forYou}
          title={"Top Seller in Books for you"}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <TopSeller
          prod={bestSeller}
          title={"International top sellers in Kitchen"}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <BoxProduct prod={bestSeller} col={4} row={1} onClick={handleOnclick} />
      </div>
      <div>
        <TopSeller
          prod={childrenBooks}
          title={"Children's Books"}
          onClick={handleOnclick}
        />
      </div>
    </div>
  );
};

export default ProductContent;
