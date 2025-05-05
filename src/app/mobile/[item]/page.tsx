"use client";

import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";

const ItemsData = () => {
  const searchParams = useSearchParams();
  const rawData = searchParams.get("data");
  const parsedData = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;
  console.log("parsedData", parsedData);

  return (
    <div className="min-h-screen w-full px-20">
      <Menu />
      <div className="flex mt-4">
        {/* Left Side */}
        <div className="w-2/3">width 75%</div>
        {/* Right Side */}
        <div className="w-1/3">
          <div className="flex flex-col w-full px-6 border-2 py-6">
            <h1 className="text-xl font-semibold">Listed by private user</h1>
            <div className="flex items-center flex-wrap flex-row align-middle mt-4">
              <div className="w-1/4">
                <img src="/avatar.png" alt="" width={80} />
              </div>
              <div className="w-3/4">
                <p className="font-semibold">
                  Shoaib star city mallShoaib star city mall
                </p>
                <p>Member since Apr 17</p>
                <p>See Profile</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full py-6 rounded-none bg-[#002f34] hover:bg-[#002f34c7] cursor-pointer font-semibold text-base">
                <span>
                  <LuPhone className="" />
                </span>
                <span>Show Phone Number</span>
              </Button>
              <Button
                className="mt-4 w-full py-6 rounded-none bg-none cursor-pointer font-semibold text-base border border-[#002f34] text-[#002f34]"
                variant="ghost"
              >
                <span>
                  <IoChatbubbleOutline />
                </span>
                <span>Chat</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full px-6 border-2 py-6 mt-4">
            <h1 className="text-2xl font-semibold">Location</h1>
            <div className="flex items-center gap-2 mt-2">
              <p>
                <MdLocationOn className="text-2xl" />
              </p>
              <p>Abdullah Haroon Road, Karachi</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="uppercase">Ad id 1097946263</p>
            </div>
            <div className="flex items-center">
              <div className="pr-1">
                <TbFlag3 className="text-xl" />{" "}
              </div>
              <div className="font-semibold">Report this ad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsData;
