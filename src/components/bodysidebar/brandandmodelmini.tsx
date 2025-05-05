import React from "react";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";

const BrandAndModelMini = () => {
  return (
    <div className="rounded mt-4 border py-4 px-4">
      <h1 className="text-lg font-semibold mb-4">Brand and Model</h1>
      <div className="relative w-full">
        <Input className="py-6 pl-12 text-lg" placeholder="Search brand" />
        <IoSearch className="absolute left-0 top-0 m-3.5 text-xl text-muted-foreground" />
      </div>
      <div className="overflow-y-scroll h-36 my-4 hover:cursor-pointer text-gray-500">
        <p className="tracking-tight my-1 hover:text-gray-800">
          Apple <span className="text-gray-400 text-xs pl-2">(101212)</span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Samsung <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Infinix <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Techno <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          vivo <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Oppo <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Google <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
        <p className="tracking-tight my-1 hover:text-gray-800">
          Pixel <span className="text-gray-400 text-xs pl-2">(101212) </span>
        </p>
      </div>
    </div>
  );
};

export default BrandAndModelMini;
