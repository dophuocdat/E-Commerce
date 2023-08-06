import React, { useEffect, useState } from "react";
import Carousel from "../../../Components/HomePage/Carousel/Carousel";
import ProductContent from "./ProductContent";
import Footer from "../../../Components/Footer/Footer";

const HomePage = () => {
  const [productId, setProductId] = useState(0);

  const handleOnclick = (id) => {
    setProductId(id);
  };
  // useEffect(() => {
  //   console.log(productId);
  // }, [productId]);
  return (
    <div className="px-52 max-2xl:px-20 max-xl:px-0">
      <div className="">
        <Carousel />
        <ProductContent handleOnclick={handleOnclick} />
      </div>
    </div>
  );
};

export default HomePage;
