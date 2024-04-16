import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBanner,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingCards = () => {
  return (
    <div className="flex lg:items-center lg:flex-row lg:p-5 flex-col space-y-8 tracking-tight">
      <Card className="flex-1  ">
        <CardHeader className="p-0">
          <CardTitle className="text-green-dark font-bold text-xl leading-tight mb-4">
            These are what we call the Pulse Basics. They&apos;re what every
            customer gets.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <ul className="list-disc text-base text-main-dark/80">
              <li>
                Manage cash flow on a daily, weekly, monthly, or yearly basis
              </li>
              <li>
                Forecast growth with recurring income or expenses that scale
                automatically
              </li>
              <li>Works with any currency</li>
              <li>
                See Money In and Money Out, categorize transactions, and run
                helpful reports
              </li>
              <li>
                Toggle entries and accounts on and off to game out different
                scenarios
              </li>
            </ul>
          </CardDescription>
        </CardContent>
        <p className="px-0 text-main-dark/80">
          Just need the Pulse Basics? <br /> <span>Get them now</span> for $29
          per month.
        </p>
      </Card>

      <Card variant="outline" className="flex-1 text-left rounded-t-lg group tracking-tight">
        <CardBanner className="text-white bg-green-dark font-bold text-xs py-2 tracking-wider">
          RECOMMENDED
        </CardBanner>
        <CardHeader className="p-5">
          <CardTitle className="text-green-dark font-bold text-4xl text-left tracking-tight lg:text-center lg:text-5xl lg:mx-24  lg:tracking-tighter">
            Small Business Plan
          </CardTitle>
          <CardContent className="text-left px-1 py-0 text-xl lg:text-center lg:pb-7 text-main-gray/70">
            <p>$59 per month</p>
          </CardContent>
          <div className="hidden lg:flex lg:justify-center">
            <Button className="hidden font-bold text-main-dark opacity-90 lg:flex lg:justify-center lg:tracking-wide lg:text-xl lg:p-5 lg:px-7 transition lg:group-hover:scale-110">
              Sign Up Now
            </Button>
          </div>
        </CardHeader>
        <CardDescription className="p-5 pt-2 space-y-4">
          <ul className="space-y-5 text-base leading-tight *:text-main-dark/80 *:hover:text-main-dark">
            <li className="lg:text-center">
              <h3 className=" font-semibold text-xs tracking-widest">YOU GET PULSE BASICS, PLUS:</h3>
            </li>
            <li className="flex gap-1">
              <Check size={15} className="font-bold text-green-dark" />
              <p>Manage cash flows accross multiple financial accounts</p>
            </li>
            <li className="flex gap-1">
              <Check size={15} className="font-bold text-green-dark" />
              <p>
                Invite your investors, book keeper, or management team to see
                reports or manage cash flow
              </p>
            </li>
            <li className="flex gap-1">
              <Check size={15} className="font-bold text-green-dark" />
              <p>
                Integrate with QuickBooks Online for more accurate cash flow
              </p>
            </li>
            <li className="flex gap-1">
              <Check size={15} className="font-bold text-green-dark" />
              <p>
                Track your actual cash flow alongside your projected cash flow
              </p>
            </li>
            <Button className="font-bold p-6 text-lg text-main-dark opacity-90 w-full lg:hidden hover:translate-x-0 hover:translate-y-0">
              Sign Up Now
            </Button>
          </ul>
        </CardDescription>
      </Card>

      <Card
        variant="outline"
        className="flex-1 text-left border-slate-[#F2F3F3] group"
      >
        <CardBanner className="text-main-dark/80 bg-[#F2F3F3]  text-sm p-5 text-center lg:px-10 lg:text-md tracking-wide">
          Complex business with multiple financial accounts, currencies, or
          auditing needs?
        </CardBanner>
        <CardHeader className="pt-3">
          <CardTitle className="text-green-dark font-normal tracking-tighter text-4xl lg:text-center lg:mx-16">
            Unlock Extra Features
          </CardTitle>
          <CardContent className="p-0  lg:pb-5">
            <p className="text-xl text-main-dark/60 lg:text-center">$89 per month</p>
          </CardContent>
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:group-hover:">
            <Button className="hidden font-bold text-main-dark opacity-90 lg:flex lg:justify-center lg:tracking-wide lg:text-xl lg:p-5 lg:px-7 lg:group-hover:scale-110 transition">
              Try Premium
            </Button>
          </div>
        </CardHeader>
        <CardDescription className="p-5 pt-2">
          <ul className="space-y-3 *:text-main-dark/80 *:hover:text-main-dark text-base">
            <li>
              <h3 className="font-bold text-xs tracking-widest lg:text-center">
                GET IT ALL, PLUS:
              </h3>
            </li>
            <li className="flex">
              <Check size={15} className="font-bold text-green-dark pt-1" />
              <p>Manage cash flow across unlimited financial accounts</p>
            </li>
            <li className="flex">
              <Check size={15} className="font-bold text-green-dark pt-1" />
              <p>
                Convert to any currency for localized cash flow reporting and
                projections
              </p>
            </li>
            <li className="flex">
              <Check size={15} className="font-bold text-green-dark pt-1" />
              <p>
                Attach invoices or contracts to your cash flow entries for
                accountability and auditing
              </p>
            </li>
            <Button className="w-full p-6 text-lg   font-bold text-main-dark opacity-90  hover:translate-x-0 hover:translate-y-0 lg:hidden">
              Try Premium
            </Button>
          </ul>
        </CardDescription>
      </Card>
    
    </div>
  );
};
