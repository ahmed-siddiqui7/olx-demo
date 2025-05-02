"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      {/* footer 1 */}
      {pathname === "/" && (
        <div className="flex bg-[#f7f8f9] justify-center">
          <div className="flex w-[60%] justify-between">
            <div>
              <img src="/olximg.webp" alt="" />
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold mt-8">Try the OLX app</h1>
              <p className="text-xl mt-8 text-balance">
                Buy, sell and find just about anything using the app on your
                mobile.
              </p>
            </div>
          </div>
          <div className="w-0.5 h-40 bg-gray-300 my-2 mx-8"></div>
          <div className="flex flex-col justify-center w-[25%]">
            <h2 className="text-xl font-semibold">Get Your App Today</h2>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div>
                <Link href="/">
                  <img src="/apple.svg" alt="" />
                </Link>
              </div>
              <div>
                <Link href="/">
                  <img src="/playstore.svg" alt="" />
                </Link>
              </div>
              <div>
                <Link href="/">
                  <img src="/apple.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* footer 2 */}
      <div className="bg-[#ebeeef] px-32 pb-16 pt-8 flex justify-between">
        <div>
          <h1 className="text-lg font-semibold uppercase">
            Popular Categories
          </h1>
          <div className="flex flex-col text-gray-400 text-sm gap-1 mt-2">
            <Link href="/">Cars</Link>
            <Link href="/">Flats for rent</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Jobs</Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold uppercase">Trending Searches</h1>
          <div className="flex flex-col text-gray-400 text-sm gap-1 mt-2">
            <Link href="/">Bikes</Link>
            <Link href="/">Watches</Link>
            <Link href="/">Books</Link>
            <Link href="/">Dogs</Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold uppercase">About Us</h1>
          <div className="flex flex-col text-gray-400 text-sm gap-1 mt-2">
            <Link href="/">About Dubizzle Group</Link>
            <Link href="/">OLX Blog</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">OLX for Businesses</Link>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold uppercase">OLX</h1>
          <div className="flex flex-col text-gray-400 text-sm gap-1 mt-2">
            <Link href="/">Help</Link>
            <Link href="/">Term of use</Link>
            <Link href="/">Sitemap</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <div>
            <h1>Follow US</h1>
            <div className="flex items-center align-middle gap-2">
              <TiSocialTwitterCircular className="text-3xl text-gray-400 cursor-pointer" />
              <FaFacebook className="text-2xl text-gray-400 cursor-pointer" />
              <IoPlayCircleSharp className="text-2xl text-gray-400 cursor-pointer" />
              <FaInstagramSquare className="text-2xl text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div>
              <Link href="/">
                <img src="/apple.svg" alt="" width={100} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <img src="/playstore.svg" alt="" width={100} />
              </Link>
            </div>
            <div>
              <Link href="/">
                <img src="/apple.svg" alt="" width={100} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer 3 */}
      <div className="bg-[#002f34] text-end text-white py-4 px-32 text-xs">
        <p>
          <span className="font-semibold">Free Classifieds in Pakistan .</span>{" "}
          © 2006-2025 OLX
        </p>
      </div>
    </div>
  );
};

export default Footer;
