import React from "react";
import { Checkbox } from "../ui/checkbox";

const DeliverableMini = () => {
  return (
    <div className="rounded mt-4 border py-4 px-4 ">
      <h1 className="text-lg font-semibold">Is Deliverable</h1>
      <div className="flex items-center space-x-2 mt-4 ">
        <Checkbox
          id="terms"
          className="hover:text-black hover:cursor-pointer hover:border-2 hover:border-black"
        />
        <label
          htmlFor="terms"
          className=" hover:text-black  hover:font-semibold hover:cursor-pointer pl-2 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          No (19001)
        </label>
      </div>
    </div>
  );
};

export default DeliverableMini;
