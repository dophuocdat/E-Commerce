import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authActions";
import axios from "axios";

const Account = ({ clearHeader }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const customer = location.state ? location.state.customer : "";
  const storedUser = useSelector((state) => state.user);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `http://localhost:8080/login?email=${customer.email}&password=${password}`
      )
      .then((res) => {
        const userData = res.data;
        navigate("/");
        dispatch(login({ user: userData }));
        localStorage.setItem("user", JSON.stringify(userData));

        clearHeader(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white h-full flex items-center justify-center  flex-col">
      <Link to={"/"}>
        <img
          src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png"
          alt=""
          className=" scale-90 max-w-80 max-h-40 overflow-hidden cursor-pointer"
          onClick={() => clearHeader(true)}
        />
      </Link>

      <div className="border w-96">
        <div className="p-7">
          <div className=" pb-3 text-2xl font-medium">Sign In</div>
          <div className="text-[0.76rem]">
            <span>{customer.email}</span>
            <Link to={"/SignIn/auth"} className="text-blue-500">
              Change
            </Link>
          </div>
          <form className="py-3">
            <div className="flex flex-col">
              <div className="flex justify-between items-center py-2">
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
                <span className="text-blue-500 text-sm">
                  {" "}
                  Forgot your password?
                </span>
              </div>

              <input
                type="password"
                id="password"
                className="p-2 border border-slate-400 rounded-lg"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-4 w-full flex items-center justify-center">
              <button
                className="bg-yellow-500 p-1 rounded-lg w-5/6 text-sm "
                onClick={(e) => onSubmit(e)}
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <span className="text-[0.75rem] ">
              Keep me signed in. <span className="text-blue-500">Details</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
