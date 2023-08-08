import React, { useState } from "react";
import { useParams } from "react-router";

import OrderDetails from "./OrderDetails/OrderDetails";
import initList from "../../Config/InitList";
import Comment from "../Comment/Comment";

const Order = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(initList);
  const productOrder = product.find((item) => item.id === parseInt(id));
  return (
    <div className="px-52 bg-white  max-lg:px-10 max-xl:px-20">
      <div className="flex py-24 gap-3 w-full max-lg:flex-col">
        <div className="w-4/6 max-lg:w-full max-lg:flex items-center justify-center">
          <div>
            {
              <img
                src={productOrder.img}
                alt=""
                className=" h-64 object-cover "
              />
            }
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="text-2xl font-semibold pb-10">
            {productOrder.name}
            <hr />
          </div>

          <div className="text-sm font-medium ">{productOrder.description}</div>
        </div>

        <div className="w-4/6 border max-lg:w-full">
          <OrderDetails />
        </div>
      </div>
      <hr />
      <div>
        <div>
          <span>Product details</span>
        </div>
        <li>
          Publisher:
          <span>Library and Archives Canada (December 23, 2022 )</span>
        </li>
        <li>
          Language: <span>Spanish</span>
        </li>
        <li>Pagerback: 195 pages </li>
        <li>ISD-10: 134235342x</li>
        <li>
          ISBN-13: <span>978-1777847326</span>
        </li>
        <li>
          Item Weight : <span>9.5 ounfpe</span>
        </li>
        <li>
          Dimensions : <span>Dimensions : 6 x 0.44 x 9 inches</span>
        </li>
      </div>
      <hr />
      <br />
      <hr />
      <Comment />
    </div>
  );
};

export default Order;
