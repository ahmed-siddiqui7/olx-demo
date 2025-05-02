"use client";

import { mobileData } from "@/demodata/demodata";
import { useRouter } from "next/navigation";
import { CiHeart } from "react-icons/ci";

const Mobile = () => {
  const router = useRouter();

  const currentData = [{}, {}, {}];

  return (
    <div
      className="min-h-screen px-20 mt-4 cursor-pointer"
      onClick={() => {
        router.push(
          `/mobile/iphone?data=${encodeURIComponent(
            JSON.stringify(currentData)
          )}`
        );
      }}
    >
      <div className="flex justify-between w-full">
        <div className="w-1/3">Left Side</div>
        <div className="w-2/3 flex rounded border">
          <div className="w-1/2  flex-1">
            <img
              src="/bike1.webp"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="flex justify-between w-full px-4 py-2  flex-1">
            <div className="font-semibold text-2xl">Rs. 98,0000</div>
            <CiHeart className="text-xl font-bold" />
          </div>
          <div className="">
            <h1>Heading</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
