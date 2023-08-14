import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../Home/HomePage/HomePage";
import AccountAuth from "../../Components/Account/AccountAuth";
import Account from "../../Components/Account/Account";
import Order from "../../Components/Order/Order";
import AdminPage from "../AdminPage/AdminPage";
import MyOrder from "../../Components/MyOrder/MyOrder";

const Router = () => {
  const [clearHeader, setClearHeader] = useState(true);
  return (
    <div>
      {clearHeader ? (
        <div>
          <Sidebar clearHeader={setClearHeader} />
        </div>
      ) : null}
      <div className="bg-slate-100">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/SignIn/auth"
            element={<AccountAuth clearHeader={setClearHeader} />}
          ></Route>
          <Route
            path="/signIn"
            element={<Account clearHeader={setClearHeader} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<Order clearHeader={setClearHeader} />}
          ></Route>
          <Route path="/myOrder" element={<MyOrder />}></Route>
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
