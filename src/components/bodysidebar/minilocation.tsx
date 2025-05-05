import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";

const MiniLocation = () => {
  return (
    <div className="mt-4 px-4 py-6 rounded border">
      <h1 className="text-xl font-semibold">Location</h1>
      <div className="flex items-center w-full mt-4">
        <Select>
          <SelectTrigger
            className="w-full  cursor-pointer  shadow-none focus:ring-0 
          focus:outline-none py-6 text-lg relative"
          >
            <SelectValue placeholder="Pakistan" />
          </SelectTrigger>
          <SelectContent className="text-2xl">
            <SelectItem value="Karachi">Karachi</SelectItem>
            <SelectItem value="islamabad">Islamabad</SelectItem>
            <SelectItem value="lahore">Lahore</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-6">
        <h1 className="text-sm font-semibold">Pakistan</h1>
        <div className="flex flex-col gap-0.5 pl-6 text-gray-500 mt-2">
          <Link href="/sindh" className="hover:text-gray-900">
            Sindh (1000)
          </Link>
          <Link href="/punjab" className="hover:text-gray-900">
            punjab (2000)
          </Link>
          <Link href="/Kpk" className="hover:text-gray-900">
            Kpk (3000)
          </Link>
          <Link href="/balochistan" className="hover:text-gray-900">
            balochistan (4000)
          </Link>
          <Link href="/kashmir" className="hover:text-gray-900">
            Kashmir (5000)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniLocation;
