// components/CategoryGrid.tsx
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Mobiles", img: "/mobile.png", bg: "bg-red-100", href: "/mobile" },
  { name: "Vehicles", img: "/car.png", bg: "bg-yellow-100", href: "/" },
  {
    name: "Property For Sale",
    img: "/house.png",
    bg: "bg-pink-100",
    href: "/",
  },
  {
    name: "Property For Rent",
    img: "/keyimg.png",
    bg: "bg-blue-100",
    href: "/",
  },
  {
    name: "Electronics & Home Appliances",
    img: "/camera.png",
    bg: "bg-yellow-50",
    href: "/",
  },
  { name: "Bikes", img: "/bikes.png", bg: "bg-teal-100", href: "/" },
  {
    name: "Business, Industrial & Agriculture",
    img: "/manufacture.png",
    bg: "bg-cyan-100",
    href: "/",
  },
  { name: "Services", img: "/paint.png", bg: "bg-orange-100", href: "/" },
  { name: "Jobs", img: "/jobs.png", bg: "bg-teal-100", href: "/" },
  { name: "Animals", img: "/animal.png", bg: "bg-yellow-100", href: "/" },
  {
    name: "Furniture & Home Decor",
    img: "/table.png",
    bg: "bg-red-100",
    href: "/",
  },
  {
    name: "Fashion & Beauty",
    img: "/clothes.png",
    bg: "bg-blue-100",
    href: "/",
  },
  {
    name: "Books, Sports & Hobbies",
    img: "/books.png",
    bg: "bg-red-100",
    href: "/",
  },
  { name: "Kids", img: "/toys.png", bg: "bg-pink-100", href: "/" },
];

export default function CategoryGrid() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center text-center"
          >
            <Link href={cat.href} className="flex flex-col items-center">
              <Image src={cat.img} alt={cat.name} width={90} height={90} />
              <span className="mt-3 text-base font-semibold text-gray-800 text-balance ">
                {cat.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
