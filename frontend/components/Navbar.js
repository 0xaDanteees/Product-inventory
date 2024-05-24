"use client"


import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { Logo } from "./Logo";

const Navbar = () => {
  const scrolled = useScroll();

  return (
    <div className={"z-50 bg-black fixed top-0 flex items-center w-full p-2 justify-between" + (scrolled ? " border-b shadow-sm": "")}>
      <Link href="/">
        <Logo/>
      </Link>
      
      <div className="flex items-center ml-auto">
       <h1 className="text-3xl font-semibold text-gray-400">Administrador de productos</h1>
      </div>
    </div>
  );
};

export default Navbar;
