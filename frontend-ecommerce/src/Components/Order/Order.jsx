import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import OrderDetails from "./OrderDetails/OrderDetails";
import initList from "../../Config/InitList";
import Comment from "../Comment/Comment";
import TopSeller from "../../Components/TopSeller/TopSeller";
const Order = ({ clearHeader }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initList);
  const productOrder = product.find((item) => item.id === parseInt(id));
  const trending = initList.filter((item) => item.type === "trending");

  const handleOnclick = (id) => {
    navigate(`/product/${id}`);
  };
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
          <OrderDetails idProduct={id} clearHeader={clearHeader} />
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
      <TopSeller prod={trending} title={"Trending"} onClick={handleOnclick} />
      <div className="py-10">
        <Comment />
      </div>
    </div>
  );
};

export default Order;
