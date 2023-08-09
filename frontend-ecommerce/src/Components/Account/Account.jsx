import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AccountUser } from "../../Config/AccountUser";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Account = ({ loggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const customer = location.state ? location.state.customer : "";
  //console.log(emailOrPhone);
  const [isLogged, setIsLogged] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    if (isLogged) {
      navigate("/");
      loggedIn(true);
      dispatch(login({ user: isLogged }));
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Please enter your password");
    }
  };
  const onChange = (e) => {
    let value = e.target.value;
    setIsLogged(AccountUser.find((ac) => ac.password === value));
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
          className=" scale-90 max-w-80 max-h-40 overflow-hidden cursor-pointer"
          onClick={() => loggedIn(true)}
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
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="py-4 w-full flex items-center justify-center">
              <button
                className="bg-yellow-500 p-1 rounded-lg w-5/6 text-sm "
                onClick={(e) => handleContinue(e)}
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
