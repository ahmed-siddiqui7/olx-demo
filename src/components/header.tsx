import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IoIosSearch } from "react-icons/io";

import { IoCarSportOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex flex-col  py-4 bg-white shadow-sm px-20">
      {/* Left: Logo and Categories */}
      <div className="flex items-center space-x-8  cursor-pointer">
        {/* Logo */}
        <svg
          height="32"
          viewBox="0 0 36.289 20.768"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z" />
        </svg>
        {/* Motors & Property */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-1  cursor-pointer">
            <IoCarSportOutline className="text-4xl rounded-4xl bg-gray-200 p-2" />
            <span className="text-sm font-semibold text-gray-800">Motors</span>
          </div>
          <div className="flex items-center space-x-1  cursor-pointer">
            <FaRegBuilding className="text-4xl rounded-4xl bg-gray-200 p-2" />
            <span className="text-sm font-semibold text-gray-800">
              Property
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6 flex-wrap justify-between w-full">
        <div className="flex items-center border rounded-md overflow-hidden w-[15%]">
          {/* Location dropdown */}
          <div className="flex items-center">
            <Select>
              <IoLocationOutline className="ms-2 text-2xl " />
              <SelectTrigger className="w-[230px]  cursor-pointer  border-none shadow-none focus:ring-0 focus:outline-none py-6 text-lg">
                <SelectValue placeholder="Pakistan" />
              </SelectTrigger>
              <SelectContent className="text-2xl">
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex w-[70%] relative">
          <Input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            className="px-4 py-6 text-sm outline-none "
          />
          <Button className="px-4 py-6 rounded-sm cursor-pointer absolute right-0.5">
            <span className="">
              <IoIosSearch className="" />
            </span>
          </Button>
        </div>
        {/* Right: Login and +Sell */}
        <div className="flex space-x-4 w-[10%] justify-end">
          <button className="text-sm font-semibold underline text-gray-800">
            Login
          </button>
          <button
            className="px-4 py-1 font-bold text-black border-2 bg-white rounded-5xl cursor-pointer text-base "
            style={{
              borderImage:
                "linear-gradient(to right, #facc15, #22d3ee, #3b82f6) 1",
              borderImageSlice: 1,
            }}
          >
            + SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
