import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import initList from "../../../Config/InitList";

import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useDisclosure } from "@chakra-ui/react";
import InfoOrder from "./InfoOrder";

const OrderDetails = ({ idProduct, clearHeader }) => {
  const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const product = initList.find((item) => item.id === Number(idProduct));
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const newOrder = {
    customerId: storedUser.customerId,
    status: true,
    totalAmount: product.price,
  };

  const addOrder = async () => {
    // e.preventDefault();
    await axios
      .post(`http://localhost:8080/ecommerce/orders`, newOrder)
      .then((res) => {
        setOrder(res.data);
        clearHeader(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrder = () => {
    if (!storedUser) {
      navigate("/SignIn/auth");
      clearHeader(false);
    } else {
      addOrder();
      handleOpenModal();
    }
  };

  const orderDetails = {
    quantity: quantity,
    productId: idProduct, // Sử dụng order.orderId sau khi cập nhật
    orderId: product.id,
  };

  const handleOpenModal = () => {
    onOpen();
  };

  return (
    <div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Buy new:</span>
          <span className="font-light text-[1.2rem] text-red-800">$29.99</span>
        </div>
        <div>
          <span className="text-sm font-thin">
            $38.11 Shipping & Import Fees Deposit to Vietnam Details Delivery
            Tuesday, September 5. Order within 22 hrs 53 mins
          </span>
        </div>
        <div className="flex items-center  text-blue-400 text-[.8rem] gap-1">
          <FaLocationDot />
          <span className="">Deliver to VietNam</span>
        </div>
        <div className="flex flex-col  py-2">
          <span className="text-lg text-green-700">In Stock</span>
          <div>
            <span>Qty:</span>
            <select
              name=""
              id=""
              className="w-fit rounded-lg px-5"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 32 }, (_, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 pb-4">
          <button
            className="w-5/6 text-sm font-medium bg-yellow-400 h-7 rounded-lg "
            onClick={() => handleOrder()}
          >
            Add to Cart
          </button>
          <button
            className="w-5/6 text-sm font-medium bg-orange-400
           h-7 rounded-lg  "
          >
            Buy Now
          </button>
        </div>
        <hr />
        <div>
          <button>Add to list</button>
        </div>
      </div>
      <InfoOrder isOpen={isOpen} onClose={onClose} item={orderDetails} />
    </div>
  );
};

export default OrderDetails;
