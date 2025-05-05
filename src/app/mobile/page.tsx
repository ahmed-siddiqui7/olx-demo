"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import Menu from "@/components/menu";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";

import { BsChatDots } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuLayoutGrid } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import MiniCategory from "@/components/bodysidebar/minicategory";
import MiniLocation from "@/components/bodysidebar/minilocation";
import MiniPrice from "@/components/bodysidebar/miniprice";
import DeliverableMini from "@/components/bodysidebar/deliverablemini";
import BrandAndModelMini from "@/components/bodysidebar/brandandmodelmini";
import ConditionMini from "@/components/bodysidebar/conditionmini";
import { demoMobilesListData } from "@/demodata/demodata";
import { useCallback } from "react";

export default function MobileCard() {
  console.log("demoMobilesListData", demoMobilesListData);

  const router = useRouter();
  const pathname = usePathname();
  const handleClick = useCallback(
    (id: number) => {
      const data = demoMobilesListData.find((item) => item.id === id);
      const encodedData = encodeURIComponent(JSON.stringify(data));
      router.push(`/mobile/item?data=${encodedData}`);
    },
    [demoMobilesListData]
  );

  return (
    <div className="min-h-screen px-24">
      <Menu />
      <div className="mt-2 mb-6">
        <div className="flex gap-2 w-1/12 text-gray-400 text-sm">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/mobile" className="hover:text-black">
            Mobile
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex gap-1">
        <p className="">
          <span className="text-2xl font-semibold mr-4 capitalize">
            {pathname.split("/")}
          </span>
        </p>
        <p className="bg-cyan-100 flex items-center px-1 rounded font-semibold text-sm">
          10,000+ ads
        </p>
      </div>
      <div className="w-full flex gap-6 mt-2 mb-10">
        {/* left */}
        <div className="w-1/4 flex flex-col">
          <MiniCategory pathname={pathname} />
          <MiniLocation />
          <MiniPrice />
          <DeliverableMini />
          <BrandAndModelMini />
          <ConditionMini />
        </div>
        {/* right */}
        <div className="w-3/4 flex flex-col gap-4 mb-4">
          <div className=" flex items-center justify-end gap-3">
            <h1 className="text-base font-semibold">VIEW</h1>
            <CgMenu className="text-4xl cursor-pointer rounded-full bg-cyan-100 p-2 hover:bg-cyan-300" />
            <LuLayoutGrid className="text-4xl cursor-pointer  p-2 " />
            <Separator orientation="vertical" />
            <h2 className="text-base font-semibold">SORT BY: </h2>
            <div className="w-1/7">
              <Select>
                <SelectTrigger className="w-[120px] border-none focus:border-none">
                  <SelectValue placeholder="Newly Listed" />
                </SelectTrigger>
                <SelectContent className="border-none">
                  <SelectItem value="newlylisted" className="border-none">
                    Newly Listed
                  </SelectItem>
                  <SelectItem value="relevant" className="border-none">
                    Relevant
                  </SelectItem>
                  <SelectItem value="recent" className="border-none">
                    Recent
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator orientation="horizontal" />
          {demoMobilesListData.map((mobile) => (
            <div
              key={mobile.id}
              className="border rounded-md overflow-hidden flex hover:shadow-md transition cursor-pointer"
              onClick={() => handleClick(mobile.id)}
            >
              {/* Image + Featured Badge */}
              <div className="relative w-1/3 min-w-[180px] h-[200px]">
                <img
                  src={mobile.image}
                  alt={mobile.title}
                  className="object-cover"
                />
                {mobile.featured && (
                  <div className="absolute top-2 left-2">
                    <Button className="bg-yellow-400 text-black font-semibold h-6 px-3 text-xs">
                      Featured
                    </Button>
                  </div>
                )}
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                {/* Price and Title */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xl font-semibold text-gray-900">
                      {mobile.price}
                    </p>
                    <p className="text-xl text-gray-700 mt-1">{mobile.title}</p>
                  </div>
                  <CiHeart className="text-2xl text-gray-700 hover:text-red-500" />
                </div>

                {/* Location and Actions */}
                <div className="flex justify-between mt-4 flex-col">
                  <p className="text-xs text-gray-500">{mobile.location}</p>
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="outline"
                      className="h-10 px-6 text-sm rounded-sm cursor-pointer"
                    >
                      <FiPhone /> Call
                    </Button>
                    <Button className="h-10 px-6 text-sm bg-gray-800 text-background hover:bg-gray-700 rounded-sm  cursor-pointer">
                      <BsChatDots />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
