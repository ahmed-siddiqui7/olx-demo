import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { PiGreaterThanThin } from "react-icons/pi";

const LandView = () => {
  return (
    <div>
      <div className="flex justify-between my-2 items-center align-middle">
        <h1 className="text-2xl font-semibold">Land</h1>
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
      <div className="flex justify-between gap-4">
        <div className="basis-1/3 md:basis-1/4 hover:shadow-2xl cursor-pointer">
          <div className="border rounded-md overflow-hidden shadow-sm">
            <img
              src="/land1.webp"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">Rs 47,000</p>
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
        </div>
        <div className="basis-1/3 md:basis-1/4 hover:shadow-2xl cursor-pointer">
          <div className="border rounded-md overflow-hidden shadow-sm">
            <img
              src="/land2.webp"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">Rs 47,000</p>
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
        </div>
        <div className="basis-1/3 md:basis-1/4 hover:shadow-2xl cursor-pointer">
          <div className="border rounded-md overflow-hidden shadow-sm">
            <img
              src="/land3.webp"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">Rs 47,000</p>
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
        </div>
        <div className="basis-1/3 md:basis-1/4 hover:shadow-2xl cursor-pointer">
          <div className="border rounded-md overflow-hidden shadow-sm">
            <img
              src="/land4.webp"
              alt="iPhone"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">Rs 47,000</p>
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
        </div>
      </div>
    </div>
  );
};

export default LandView;
