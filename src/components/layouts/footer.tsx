import Image from "next/image";
import Logo from "/public/pulse-logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className=" bg-main-dark flex flex-col justify-center py-5  space-y-5 md:py-24">
        <div className="container">
          <div className="lg:flex">
            <div className="flex flex-col items-center p-5 space-y-5 lg:w-1/2 lg:items-start lg:p-0">
              <Image src={Logo} alt="Pulse-logo" height={75} width={150} />
              <div className="w-full md:inline-block md:w-1/2 md:bg-main-gray  ">
                <Button className="w-full bg-gradient-to-r from-green-dark to-green font-bold text-[#062c27]  md:py-7">
                  Sign Up for Free 30 Day Trial
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap px-5 lg:w-1/2 text-md">
              <ul className="w-1/3 lg:space-y-4">
                <li>
                  <h3 className="font-bold text-white">Products</h3>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Sign Up
                  </Link>
                </li>
              </ul>
              <ul className="w-1/3 space-y-4">
                <li>
                  <h3 className="font-bold text-white">Company</h3>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Customer
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-green">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="w-1/3 space-y-4">
                <ul>
                  <h3 className="font-bold text-white">Resources</h3>
                </ul>
                <ul>
                  <Link href={""} className="text-green">
                    Support
                  </Link>
                </ul>
                <ul>
                  <Link href={""} className="text-green">
                    Blog
                  </Link>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="container p-5 md:pb-0">
          <p className="text-[#83858a] text-xs pb-7 md:pb-0">
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
