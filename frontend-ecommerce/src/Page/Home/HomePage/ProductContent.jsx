import React from "react";
import BoxProduct from "../../../Components/BoxProduct/BoxProduct";

import TopSeller from "../../../Components/TopSeller/TopSeller";
import initList from "../../../Config/InitList";

const ProductContent = ({ handleOnclick }) => {
  const productPopular = initList.filter(
    (item) => item.type === "productPopular"
  );
  const listBooks = initList.filter((item) => item.type === "book");
  const internationalTopConfig = initList.filter(
    (item) => item.type === "internationalTop"
  );
  const productTopDeal = initList.filter(
    (item) => item.type === "productTopDeal"
  );
  const skinCareProducts = initList.filter(
    (item) => item.type === "skinCareProduct"
  );
  return (
    <div className="relative -top-52 px-5">
      <div>
        <BoxProduct
          prod={productTopDeal}
          col={4}
          row={3}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <TopSeller
          prod={listBooks}
          title={"Top Seller in Books for you"}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <TopSeller
          prod={internationalTopConfig}
          title={"International top sellers in Kitchen"}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <BoxProduct
          prod={productPopular}
          col={4}
          row={1}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <TopSeller
          prod={skinCareProducts}
          title={"Popular products in Beauty internationally"}
          onClick={handleOnclick}
        />
      </div>
    </div>
  );
};

export default ProductContent;
