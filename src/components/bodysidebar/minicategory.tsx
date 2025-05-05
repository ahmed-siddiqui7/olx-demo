import Link from "next/link";

interface PathnameProps {
  pathname: string;
}
const MiniCategory = ({ pathname }: any) => {
  return (
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
        <Link href="/tablet" className="text-gray-500 text-sm hover:text-black">
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
  );
};

export default MiniCategory;
