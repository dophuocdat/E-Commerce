import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import initList from "../../Config/InitList";

const Order = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(initList);
  const productOrder = product.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div className="flex ">
        <div>
          <div>{<img src={productOrder.img} alt="" />}</div>
        </div>
        <div>
          <div>{productOrder.name}</div>
        </div>
        <div>{productOrder.description}</div>
      </div>
    </div>
  );
};

export default Order;
