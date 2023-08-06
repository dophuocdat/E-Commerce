import React from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="search w-2/3 flex gap-1 max-md:hidden">
      <select className="rounded-lg">
        <option value="1">All</option>
        <option value="2">Baby</option>
        <option value="3">Software</option>
      </select>
      <div className="w-full flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
        <div
          className="text-2xl absolute top-1/2 right-0 -translate-y-1/2  h-full bg-yellow-300 w-12 flex items-center justify-center
      hover:bg-yellow-500 rounded-r-lg"
        >
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
