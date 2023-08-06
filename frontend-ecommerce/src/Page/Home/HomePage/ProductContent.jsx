import React from "react";
import BoxProduct from "../../../Components/BoxProduct/BoxProduct";

import TopSeller from "../../../Components/TopSeller/TopSeller";
import listBooks from "../../../Config/SellerBooksConfig";
import internationalTopConfig from "../../../Config/internationalTopConfig";
import ProductConfig from "../../../Config/ProductConfig";
import ProductConfig2 from "../../../Config/ProductConfig2";
import PopularProductConfig from "../../../Config/PopularProductConfig";

const ProductContent = ({ handleOnclick }) => {
  return (
    <div className="relative -top-32 px-5">
      <div>
        <BoxProduct
          prod={ProductConfig}
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
          title={"TInternational top sellers in Kitchen"}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <BoxProduct
          prod={ProductConfig2}
          col={4}
          row={1}
          onClick={handleOnclick}
        />
      </div>
      <div>
        <TopSeller
          prod={PopularProductConfig}
          title={"Popular products in Beauty internationally"}
          onClick={handleOnclick}
        />
      </div>
    </div>
  );
};

export default ProductContent;
