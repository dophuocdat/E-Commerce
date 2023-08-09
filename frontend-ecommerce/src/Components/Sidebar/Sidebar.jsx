/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccountList from "../Account_List/AccountList";
import Search from "../Search/Search";
import Language from "./Language/Language";
import "./Sidebar.css";
import SubSidebar from "./SubSidebar/SubSidebar";
import { Link } from "react-router-dom";

const Sidebar = ({ loggedIn }) => {
  const [optionSetting, setOptionSetting] = useState(false);
  const handleOnclick = () => {
    setOptionSetting((i) => !i);
  };

  return (
    <>
      <div className="w-full bg-slate-700 h-20">
        <div className="h-full flex items-center gap-2">
          <Link to={"/"}>
            <img
              src="https://th.bing.com/th/id/R.ca4da319ab763c8d996fff8ecaacc6ef?rik=xyZWahtpQkPunQ&riu=http%3a%2f%2fwww.adventureswithadifference.com%2fresources%2fAvailable-at-Amazon-logo-transparent-460x280.png&ehk=eUHJEueVu7znNS7T9blT1YjDdqvrTnrqhgoz7oBbeIw%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className=" scale-50 w-32"
            />
          </Link>
          <div className="location text-white max-sm:hidden">
            <div className="flex-row flex items-center justify-center gap-2">
              <FaLocationDot />
              <div>
                <small>Deliver to</small>
                <p className="font-semibold">Vietnam</p>
              </div>
            </div>
          </div>
          {/* Search */}
          <Search />
          <Language />

          <div className="h-full flex gap-4 items-center">
            <div className="flex items-center h-full pl-2">
              <div className="flex flex-col items-center justify-center relative h-full text-center ">
                <small className="text-slate-400 text-center ">
                  Hello, sign in
                </small>
                <p
                  className="text-sm text-white flex gap-3 items-center justify-center"
                  onClick={handleOnclick}
                >
                  Account & Lists
                  {optionSetting ? (
                    <IoIosArrowUp className="text-white text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-white text-2xl" />
                  )}
                </p>
                {optionSetting ? (
                  <AccountList onClick={handleOnclick} loggedIn={loggedIn} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="flex flex-col text-center  ">
                <small className="text-slate-400">Returns</small>
                <Link to={"/myOrder"} className="text-white cursor-pointer">
                  & Orders
                </Link>
              </div>
            </div>
            <div>
              <div className="flex items-end hover:border p-2">
                <div className="text-[2.4rem] text-white">
                  <AiOutlineShoppingCart />
                </div>
                <p className="text-white">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubSidebar />
    </>
  );
};

export default Sidebar;
