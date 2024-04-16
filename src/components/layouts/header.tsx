"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <nav className="container w-full flex justify-between py-5 px-4  bg-white border border-b-[#d6dae5] md:bg-green-light md:border-none md:py-12 md:px-8">
      <Link href={"/"}>
        <Image
          src={"/pulse-logo.svg"}
          alt="pulse-log"
          height={110}
          width={120}
        />
      </Link>
      <div className=" hidden lg:flex md:flex space-x-3  items-center">
        <Link
          href={""}
          className="font-semibold text-sm text-[#00ad6a] hover:text-black"
        >
          Features
        </Link>
        <Link
          href={""}
          className="font-semibold text-sm text-[#00ad6a] hover:text-black"
        >
          Customer Stories
        </Link>
        <Link
          href={"/pricing"}
          className="font-semibold text-sm text-[#00ad6a] hover:text-black"
        >
          Pricing
        </Link>
        <Link
          href={""}
          className="font-semibold text-sm text-[#00ad6a] hover:text-black"
        >
          Blog
        </Link>
        <div className="bg-green-dark">
          <Button
            variant="outline"
            size="sm"
            className="text-green-dark font-bold"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        {/**TODO ADD TOGGLE FOR MOBILE  */}X
      </div>
    </nav>
  );
};
