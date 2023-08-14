import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AccountUser } from "../../Config/AccountUser";
import axios from "axios";

const AccountAuth = ({ clearHeader }) => {
  const [needHelp, setNeedHelp] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNeedHelp = () => {
    setNeedHelp(!needHelp);
  };

  const onChange = (e) => {
    let value = e.target.value;
    setEmailOrPhone(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:8080/CheckEmail?emailOrPhone=${emailOrPhone}`)
      .then((data) => {
        const customer = data.data;
        navigate("/SignIn", { state: { customer } });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="bg-white h-full flex items-center justify-center  flex-col">
      <Link to={"/"}>
        <img
          src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png"
          alt=""
          className=" scale-90 max-w-80 max-h-40 overflow-hidden "
          onClick={() => clearHeader(true)}
        />
      </Link>

      <div className="border w-96">
        <div className="p-7">
          <div className=" pb-3 text-2xl font-medium">Sign In</div>
          <form className="">
            <div className="flex flex-col">
              <label htmlFor="emailOrPhone" className="font-semibold text-sm">
                Email or mobile phone number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className="p-2 border border-slate-400 rounded-lg"
                placeholder="Email or mobile phone number"
                onChange={(e) => onChange(e)}
              />
              {error ? (
                <small className="text-red-600">Not found Your Email</small>
              ) : null}
            </div>
            <div className="py-4 w-full flex items-center justify-center">
              <button
                className="bg-yellow-500 p-1 rounded-lg w-5/6 "
                onClick={(e) => onSubmit(e)}
              >
                Continue
              </button>
            </div>
          </form>
          <div>
            <p className="text-[0.75rem] ">
              By continuing, you agree to Amazon's
              <span className="text-blue-500"> Conditions of Use</span> and
              <span className="text-blue-500"> Privacy Notice.</span>
            </p>
          </div>
          <div className="flex gap-1 pt-10">
            {needHelp ? (
              <MdKeyboardArrowUp className="text-xl text-black" />
            ) : (
              <MdKeyboardArrowDown className="text-xl text-black" />
            )}
            <p onClick={handleNeedHelp} className="cursor-pointer">
              Need help?
            </p>
          </div>
          <div className={needHelp ? "block" : "hidden"}>
            <div className="flex flex-col text-[0.78rem] text-blue-500 pl-6 ">
              <span className=" hover:underline cursor-pointer">
                Forgot your password?
              </span>
              <span className=" hover:underline cursor-pointer">
                Other issues with Sign-in
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[0.75rem] pt-4">
          New to Amazon?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default AccountAuth;
