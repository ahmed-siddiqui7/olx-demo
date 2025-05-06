"use client";

import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { IoChatbubbleOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";

const ItemsData = () => {
  const searchParams = useSearchParams();
  const rawData = searchParams.get("data");
  const parsedData = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;
  console.log("parsedData", parsedData);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const phonesettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const phoneData = [
    {
      price: "Rs 28,000",
      title: "Iphone 7 plus pta 10/10",
      location: "Amin Town, Faisalabad",
      time: "40 minutes ago",
      image: "/mobileimg1.webp", // Replace with actual image paths
    },
    {
      price: "Rs 27,000",
      title: "Google pixel6 10/10 condition",
      location: "Ali Housing Colony, Faisalabad",
      time: "2 hours ago",
      image: "/mobileimg2.webp",
    },
    {
      price: "Rs 27,500",
      title: "used only 2 month daba",
      location: "Mahmoodabad, Faisalabad",
      time: "2 hours ago",
      image: "/mobileimg3.webp",
    },
  ];

  return (
    <div className="min-h-screen w-full px-20">
      <Menu />
      <div className="flex mt-4 mb-10 gap-4">
        {/* Left Side */}
        <div className="w-2/3 mx-auto space-y-6">
          {/* Image Preview */}
          <div className="relative rounded overflow-hidden border border-gray-300">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="h-[500px] relative">
                  <Image
                    src="/mobileimg1.webp"
                    alt="Mobile Image"
                    layout="fill"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="h-[500px] relative">
                  <Image
                    src="/mobileimg2.webp"
                    alt="Mobile Image 2"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <div className="h-[500px] relative">
                  <Image
                    src="/mobileimg3.webp"
                    alt="Mobile Image 3"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <div className="h-[500px] relative">
                  <Image
                    src="/mobileimg4.webp"
                    alt="Mobile Image 4"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </Slider>
            </div>
          </div>

          {/* Title and Price */}
          <Card className="shadow-sm border border-gray-200 rounded-none">
            <CardContent className="px-4 py-1">
              <div className="flex justify-between">
                <h2 className="text-4xl font-bold text-gray-900">
                  {parsedData.price}
                </h2>
                <div className="flex gap-4">
                  <IoMdShare className="text-2xl font-bold" />
                  <CiHeart className="text-2xl font-bold" />
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-700 my-2 capitalize">
                {parsedData.title}
              </p>
              <div className="flex justify-between">
                <p className="text-sm text-gray-900 mt-1 flex items-center">
                  <span>
                    <IoLocationOutline className="text-2xl" />
                  </span>
                  {parsedData.location}
                </p>
                <p>{parsedData.time}</p>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <Card className="shadow-sm border border-gray-200 px-4 rounded">
            <h1 className="text-2xl font-semibold">Details</h1>
            <CardContent className="grid grid-cols-2 gap-4 text-center px-0">
              <div className="bg-gray-100 flex items-center justify-evenly py-2">
                <h2>Brand</h2>
                <p className="font-semibold">{parsedData.brand}</p>
              </div>
              <div className="bg-gray-100 flex items-center justify-evenly py-2">
                <h2>Condition</h2>
                <p className="font-semibold">{parsedData.condition}</p>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="shadow-sm border border-gray-200 px-4 rounded">
            <CardContent className="px-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {parsedData.desc}
              </p>
            </CardContent>
          </Card>

          {/* Related Ads */}
          <Separator />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Related ads
            </h3>
            <div className="">
              <Slider {...phonesettings}>
                {phoneData.map((phone, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="bg-white border rounded-lg overflow-hidden shadow">
                      <img
                        src={phone.image}
                        alt={phone.title}
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {phone.price}
                        </h3>
                        <p className="text-sm text-gray-600">{phone.title}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {phone.location}
                        </p>
                        <p className="text-xs text-gray-400">{phone.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/3">
          <div className="flex flex-col w-full px-6 border-2 py-6">
            <h1 className="text-xl font-semibold">Listed by private user</h1>
            <div className="flex items-center flex-wrap flex-row align-middle mt-4">
              <div className="w-1/4">
                <img src="/avatar.png" alt="" width={80} />
              </div>
              <div className="w-3/4">
                <p className="font-semibold">Shoaib star city mall</p>
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
