import React from "react";

import { GrLanguage } from "react-icons/gr";
const Language = () => {
  return (
    <div className="language relative flex items-center w-10 h-full">
      <div className="flex items-center gap-2 text-white ">
        <GrLanguage className="text-xl" /> <span>En</span>
      </div>
      <div className="absolute top-20 hidden list-language bg-slate-200 w-32 z-10 ">
        <p className="font-semibold hover-item pl-3">English</p>
        <p className="font-semibold hover-item pl-3">Vietnamese</p>
        <p className="font-semibold hover-item pl-3">Japanese</p>
        <p className="font-semibold hover-item pl-3">Chinese</p>
        <p className="font-semibold hover-item pl-3">Korean</p>
      </div>
    </div>
  );
};

export default Language;
