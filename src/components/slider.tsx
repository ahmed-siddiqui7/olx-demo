import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { PiGreaterThanThin } from "react-icons/pi";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { MdArrowForwardIos } from "react-icons/md";

const Slider = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between my-2 items-center align-middle">
        <h1 className="text-2xl font-semibold">More in Mobile Phones</h1>
        <Link
          href="/mobile"
          className="text-[#3a77ff] font-semibold flex items-center justify-between"
        >
          View More{" "}
          <span className="ml-2">
            <MdArrowForwardIos className="font-bold" />
          </span>
        </Link>
      </div>
      <Carousel className="relative">
        <CarouselContent className="-ml-2 md:-ml-4 w-full ">
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg2.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg1.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg3.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg4.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg1.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg1.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 md:basis-1/4  hover:shadow-2xl cursor-pointer">
            <div className="border rounded-md overflow-hidden shadow-sm">
              <img
                src="/mobileimg3.webp"
                alt="iPhone"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs 47,000
                  </p>
                  <CiHeart className="text-xl text-gray-600" />
                </div>
                <h2 className="text-sm text-gray-800 font-medium">
                  Iphone 12 pro 256gb PTA
                </h2>
                <div className="text-xs text-gray-500">
                  <p>Ferozepur Road, Lahore</p>
                  <p>4 days ago</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0.5 border-2 text-xl cursor-pointer disabled:cursor-not-allowed" />
        <CarouselNext className="absolute right-0.5 cursor-pointer disabled:cursor-not-allowed" />
      </Carousel>
      <div className="mt-6">
        <Progress value={0} className="py-1.5 rounded bg-gray-200 " />
      </div>
    </div>
  );
};

export default Slider;
