import React, { useState } from "react";
import Carousel from "../../../Components/HomePage/Carousel/Carousel";
import ProductContent from "./ProductContent";
import Footer from "../../../Components/Footer/Footer";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [productId, setProductId] = useState(0);
  const navigate = useNavigate();

  const handleOnclick = (id) => {
    setProductId(id);
    navigate(`/product/${id}`);
  };
  // useEffect(() => {
  //   console.log(productId);
  // }, [productId]);
  return (
    <div>
      <div className="px-52 max-2xl:px-20 max-xl:px-0">
        <div className="">
          <Carousel />
          <ProductContent handleOnclick={handleOnclick} />
        </div>
      </div>
      <div className="bg-slate-800 ">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
