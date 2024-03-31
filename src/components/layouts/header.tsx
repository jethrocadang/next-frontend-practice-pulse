"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className=" w-full flex justify-between py-4 px-4">
      <Link href={"/"}>
        <Image
          src={"/pulse-logo.svg"}
          alt="pulse-log"
          height={100}
          width={100}
        />
      </Link>
      <div className=" space-x-3 flex items-center">
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
        <Button variant="outline" size="sm" className="">
          Sign Up
        </Button>
      </div>
    </div>
  );
};