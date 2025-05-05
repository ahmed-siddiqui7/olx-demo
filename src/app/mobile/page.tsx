"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import Menu from "@/components/menu";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { Checkbox } from "@/components/ui/checkbox";

import { BsChatDots } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { LucideIceCreamCone } from "lucide-react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "@/components/ui/input";

const demoMobiles = [
  {
    id: 1,
    image: "/mobileimg1.webp",
    price: "Rs 180,000",
    title: "Apple iPhone 12 Pro Max 256GB PTA For Sale",
    location: "Nai Abadi, Sahiwal • 1 week ago",
    featured: true,
  },
  // {
  //   id: 2,
  //   image: "/mobileimg2.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   image: "/mobileimg3.webp",
  //   price: "Rs 95,000",
  //   title: "OnePlus 9R - Lightly Used",
  //   location: "Johar Town, Lahore • 2 weeks ago",
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   image: "/mobileimg4.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
  // {
  //   id: 5,
  //   image: "/mobileimg5.webp",
  //   price: "Rs 180,000",
  //   title: "Apple iPhone 12 Pro Max 256GB PTA For Sale",
  //   location: "Nai Abadi, Sahiwal • 1 week ago",
  //   featured: true,
  // },
  // {
  //   id: 6,
  //   image: "/mobileimg6.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
  // {
  //   id: 7,
  //   image: "/mobileimg7.webp",
  //   price: "Rs 95,000",
  //   title: "OnePlus 9R - Lightly Used",
  //   location: "Johar Town, Lahore • 2 weeks ago",
  //   featured: true,
  // },
  // {
  //   id: 8,
  //   image: "/mobileimg8.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
  // {
  //   id: 9,
  //   image: "/mobileimg9.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
  // {
  //   id: 10,
  //   image: "/mobileimg10.webp",
  //   price: "Rs 220,000",
  //   title: "Samsung Galaxy S22 Ultra - Brand New",
  //   location: "Gulberg, Lahore • 3 days ago",
  //   featured: true,
  // },
];

export default function MobileCard() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (id: number) => {
    const data = demoMobiles.find((item) => item.id === id);
    const encodedData = encodeURIComponent(JSON.stringify(data));
    router.push(`/mobile/item?data=${encodedData}`);
  };

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
      <div className="w-1/3 flex gap-1 ">
        <p className="">
          <span className="text-2xl font-semibold mr-4">
            Mobile Phones in Pakistan
          </span>
        </p>
        <p className="bg-cyan-100 flex items-center px-1 rounded font-semibold text-sm">
          10,000+ ads
        </p>
      </div>
      <div className="w-full flex gap-6 mt-2 mb-10">
        {/* left */}
        <div className="w-1/4 flex flex-col">
          <div className="bg-gray-100 py-4 mt-4 px-4 rounded">
            <h1 className="text-lg font-semibold pb-2">Categories</h1>
            <h2 className="text-gray-500 text-sm py-1">All categories</h2>
            <Link
              href="/mobile"
              className="text-gray-500 text-sm py-1 pl-4 hover:text-black hover:font-semibold"
            >
              Mobiles
            </Link>
            <div className="pl-9 flex flex-col gap-3 mt-1">
              <Link
                href="/accessories"
                className="text-gray-500 text-sm hover:text-black"
              >
                Accessories <span>(10000)</span>
              </Link>
              <Link
                href="/watches"
                className="text-gray-500 text-sm hover:text-black"
              >
                SmartWatches <span>(10000)</span>
              </Link>
              <Link
                href="/tablet"
                className="text-gray-500 text-sm hover:text-black"
              >
                Tablet's <span>(10000)</span>
              </Link>
              <Link
                href="/mobile"
                className={`text-gray-500 text-sm hover:text-black ${
                  pathname === "/mobile" && "font-semibold text-black"
                }`}
              >
                Mobile Phones <span>(10000)</span>
              </Link>
            </div>
          </div>
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
          <div className="rounded mt-4 border py-4 px-4">
            <h1 className="text-lg">Price</h1>
            <div className="w-full flex gap-4 justify-between mt-4">
              <input
                type="text"
                className="border py-2 min-w-1/5 rounded px-2 focus:border-cyan-200 focus:outline focus:outline-cyan-200"
              />

              <input
                type="text"
                className="border py-2 min-w-1/5 rounded px-2 focus:border-cyan-200 focus:outline focus:outline-cyan-200"
              />
            </div>
            <div className="flex justify-between text-gray-600 text-xs mt-2 ">
              <p>PKR. 121212</p>
              <p className="text-start">PKR. 121212</p>
            </div>
          </div>
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
          <div className="rounded mt-4 border py-4 px-4">
            <h1 className="text-lg font-semibold mb-4">Brand and Model</h1>
            <div className="relative w-full">
              <Input
                className="py-6 pl-12 text-lg"
                placeholder="Search brand"
              />
              <IoSearch className="absolute left-0 top-0 m-3.5 text-xl text-muted-foreground" />
            </div>
            <div className="overflow-y-scroll h-36 my-4 hover:cursor-pointer text-gray-500">
              <p className="tracking-tight my-1 hover:text-gray-800">
                Apple{" "}
                <span className="text-gray-400 text-xs pl-2">(101212)</span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Samsung{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Infinix{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Techno{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                vivo{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Oppo{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Google{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
              <p className="tracking-tight my-1 hover:text-gray-800">
                Pixel{" "}
                <span className="text-gray-400 text-xs pl-2">(101212) </span>
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-3/4 flex flex-col gap-4 mb-4">
          {demoMobiles.map((mobile) => (
            <div
              key={mobile.id}
              className="border rounded-md overflow-hidden flex hover:shadow-md transition cursor-pointer max-w-5xl"
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
