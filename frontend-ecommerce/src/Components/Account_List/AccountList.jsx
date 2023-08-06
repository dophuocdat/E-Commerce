import React from "react";
import { Link } from "react-router-dom";
const AccountList = ({ onClick, loggedIn }) => {
  return (
    <div className="bg-slate-200 w-[30rem] absolute top-20 z-50">
      <div className="grid grid-cols-6 gap-4 " onClick={onClick}>
        <div
          className="col-start-2 col-span-4 
                  font-semibold flex items-center 
                  justify-center py-3 flex-col "
        >
          <Link
            to={"/signIn/auth"}
            className="bg-yellow-50 w-40 h-9 rounded-lg hover:bg-yellow-400 transition-all "
            onClick={() => loggedIn(false)}
          >
            Sign in
          </Link>
          <small className="text-slate-400 font-light">
            new customer?{" "}
            <a href="#S" className="text-blue-500">
              Start here
            </a>
          </small>
        </div>
        <hr />
        <div className="col-start-1 col-end-4 flex flex-col pl-7 w-full ">
          <h1 className="font-semibold">Your List</h1>
          <div className="font-normal flex flex-col justify-center">
            <span className="hover-item">Create a List </span>
            <span className="hover-item">Find a list or Registry</span>
          </div>
        </div>
        <div className="col-end-7 col-span-3 border-l-2 border-slate-600 pl-3">
          <h1 className="font-semibold">Your Account</h1>
          <div className="font-normal flex flex-col justify-center">
            <span className="hover-item">Account</span>
            <span className="hover-item">Order</span>
            <span className="hover-item">Watchlist</span>
            <span className="hover-item">Browsing History</span>
            <span className="hover-item">Recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountList;
