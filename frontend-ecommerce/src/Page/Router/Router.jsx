import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../Home/HomePage/HomePage";
import AccountAuth from "../../Components/Account/AccountAuth";
import Account from "../../Components/Account/Account";
import Order from "../../Components/Order/Order";

const Router = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      {loggedIn ? (
        <div>
          <Sidebar loggedIn={setLoggedIn} />
        </div>
      ) : null}
      <div className="bg-slate-100">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/SignIn/auth"
            element={<AccountAuth loggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/signIn"
            element={<Account loggedIn={setLoggedIn} />}
          ></Route>
          <Route path="/product/:id" element={<Order />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Router;
