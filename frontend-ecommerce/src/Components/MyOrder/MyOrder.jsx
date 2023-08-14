import React from "react";

const MyOrder = () => {
  const myOrder = JSON.parse(localStorage.getItem("myOrder"));
  console.log(myOrder);
  return (
    <div>
      <div>
        {myOrder.map((order, index) => {
          return (
            <div key={order.product.id}>
              <h2>{order.product.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrder;
