import React from "react";
import { Checkbox } from "../ui/checkbox";

const ConditionMini = () => {
  return (
    <div className="rounded mt-4 border py-4 px-4">
      <h2 className="text-lg font-semibold">Condition</h2>
      <div className="flex flex-col mt-4 gap-2">
        <div className="flex items-center">
          <Checkbox
            id="used"
            className="hover:text-black border-2 border-black hover:cursor-pointer hover:border-2 hover:border-black"
          />
          <label
            htmlFor="used"
            className=" hover:text-black  hover:font-semibold hover:cursor-pointer pl-2 text-sm
                    leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Used (19001)
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="new"
            className="hover:text-black border-2 border-black hover:cursor-pointer hover:border-2 hover:border-black"
          />
          <label
            htmlFor="new"
            className=" hover:text-black  hover:font-semibold hover:cursor-pointer pl-2 text-sm
                    leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            New (19001)
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="openbox"
            className="hover:text-black border-2 border-black hover:cursor-pointer hover:border-2 hover:border-black"
          />
          <label
            htmlFor="openbox"
            className=" hover:text-black  hover:font-semibold hover:cursor-pointer pl-2 text-sm
                    leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Open box (19001)
          </label>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="refurbished"
            className="hover:text-black border-2 border-black hover:cursor-pointer hover:border-2 hover:border-black"
          />
          <label
            htmlFor="refurbished"
            className=" hover:text-black  hover:font-semibold hover:cursor-pointer pl-2 text-sm
                    leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Refurbished (19001)
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConditionMini;
