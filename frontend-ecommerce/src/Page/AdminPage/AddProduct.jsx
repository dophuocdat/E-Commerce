import React, { useEffect, useState } from "react";
import AddProductModal from "./AddProductModal";
import ShowProduct from "./ShowProduct";
import { Divider } from "@chakra-ui/react";
import axios from "axios";
const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const product = async () => {
    await axios.get("http://localhost:8080/ecommerce/product").then((res) => {
      //console.log(res.data);
      setProducts(res.data);
    });
  };
  useEffect(() => {
    product();
  }, [product]);

  return (
    <div className="w-[100wh]">
      <div className="w-full flex justify-center items-center py-5 my-2">
        <h1 className="text-[3rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Add Product
        </h1>
      </div>
      <AddProductModal />
      <Divider orientation="horizontal" />
      <ShowProduct items={products} />
    </div>
  );
};

export default AddProduct;
