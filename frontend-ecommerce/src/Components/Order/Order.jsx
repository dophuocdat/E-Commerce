import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import initList from "../../Config/InitList";
import OrderDetails from "./OrderDetails/OrderDetails";

const Order = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(initList);
  const productOrder = product.find((item) => item.id === parseInt(id));
  return (
    <div className="px-52 bg-white">
      <div className="flex py-24 gap-3 ">
        <div className="w-1/3">
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

          <div className="text-xl font-medium ">{productOrder.description}</div>
        </div>
        <div className="w-2/6 border">
          <OrderDetails />
        </div>
      </div>
      <div>
        <div>
          <span>Product details</span>
        </div>
        <li>
          Publisher:{" "}
          <span>Library and Archives Canada (December 23, 2022 )</span>
        </li>
        <li>
          Language: <span>Spanish</span>
        </li>
        <li>Pagerback: 195 pages </li>
        <li>ISD-10: 134235342x</li>
        <li>
          ISBN-13: <span>978-1777847326</span>{" "}
        </li>
        <li>
          Item Weight : <span>9.5 ounfpe</span>
        </li>
        <li>
          {" "}
          Dimensions : <spam>Dimensions : 6 x 0.44 x 9 inches</spam>{" "}
        </li>
        <li></li>
      </div>
    </div>
  );
};

export default Order;
