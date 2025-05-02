"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import CategoryGrid from "./category";

const Menu = () => {
  return (
    <div className="mt-6">
      <div className="w-1/2 flex justify-between items-center">
        <Link className="hover:text-[#00a49f] font-semibold uppercase" href="/">
          All Categories
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Mobile Phones
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Cars
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Motorcycle's
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Houses
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Video-Audio's
        </Link>
        <Link className="hover:text-[#00a49f] text-sm " href="/">
          Tablet's
        </Link>
        <Link className="hover:text-[#00a49f] text-sm" href="/">
          Land & Plots
        </Link>
      </div>
      <div className="mt-6">
        <Image
          src="https://images.olx.com.pk/thumbnails/535914437-800x600.webp"
          alt=""
          className=""
          width={2000}
          height={200}
        />
      </div>
      <CategoryGrid />
    </div>
  );
};

export default Menu;
