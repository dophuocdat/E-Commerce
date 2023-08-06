import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../Home/HomePage/HomePage";
import Footer from "../../Components/Footer/Footer";

const Router = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="bg-slate-100 ">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <div className="bg-slate-800 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Router;
