import Image from "next/image";
import Logo from "/public/pulse-logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-main-dark flex flex-col justify-center py-5 space-y-5">
        <div className="flex flex-col justify-center items-center p-5 space-y-5">
          <Image src={Logo} alt="Pulse-logo" height={75} width={150} />
          <Button className="w-full bg-gradient-to-r from-green-dark to-green font-bold text-[#062c27] md:w-1/2">
            Sign Up for Free 30 Day Trial
          </Button>
        </div>
        <div className="flex flex-wrap px-5 ">
          <ul className="w-1/3">
            <li>
              <h3 className="font-bold text-sm text-white">Products</h3>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Features
              </Link>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Sign Up
              </Link>
            </li>
          </ul>
          <ul className="w-1/3">
            <li>
              <h3 className="font-bold text-sm text-white">Company</h3>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Customer
              </Link>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Stories
              </Link>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href={""} className="text-green text-sm">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="w-1/3">
            <ul>
              <h3 className="font-bold text-sm text-white">Resources</h3>
            </ul>
            <ul>
              <Link href={""} className="text-green text-sm">
                Support
              </Link>
            </ul>
            <ul>
              <Link href={""} className="text-green text-sm">
                Blog
              </Link>
            </ul>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-[#83858a] text-xs pb-7">
            &copy;2019 Pulseapp.com, Inc. Allrights Reserved | Terms of
            Condition | Privacy Policy | EU Privacy
            <br />
            Pulse is made by Simple Focus. We also made Ballpark, Sifter and
            Curated.
          </p>
        </div>
      </div>
    </footer>
  );
};
