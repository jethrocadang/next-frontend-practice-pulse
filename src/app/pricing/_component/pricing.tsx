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
    <div className="flex lg:items-center lg:p-5  flex-col space-y-5">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-green-dark font-bold">
            These are what we call the Pulse Basics. They&apos;re what every
            customer gets.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <ul className="list-disc pl-5">
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
          <p>Just need the Pulse Basics? <span>Get them now</span>  for $29 per month.</p>

        </CardContent>
      </Card>

      <Card variant="outline" className="flex-1 text-center rounded-t-lg">
        <CardBanner className="text-white bg-green-dark font-semibold text-sm">
          RECOMENDED
        </CardBanner>
        <CardHeader>
          <CardTitle className="text-green-dark font-bold text-xl">
            Small Business Plan
          </CardTitle>
          <CardContent>
            <p>$59 per month</p>
          </CardContent>
          <Button className="font-bold text-main-dark opacity-90">
            Sign Up Now
          </Button>
        </CardHeader>
        <CardDescription className="p-5 space-y-4">
          <h3 className="text-center font-semibold">YOU GET PULSE BASICS, PLUS:</h3>
          <div className="flex items-start space-x-1">
            <Check size={15} className="font-bold text-green-dark" />
            <p>Manage cash flows accross multiple financial accounts</p>
          </div>
          <div className="flex items-start space-x-1">
            <Check size={15} className="font-bold text-green-dark" />
            <p>
              Invite your investors, book keeper, or management team to see
              reports or manage cash flow
            </p>
          </div>
          <div className="flex items-start space-x-1">
            <Check size={15} className="font-bold text-green-dark" />
            <p>Integrate with QuickBooks Online for more accurate cash flow</p>
          </div>
          <div className="flex items-start space-x-1">
            <Check size={15} className="font-bold text-green-dark" />
            <p>
              Track your actual cash flow alongside your projected cash flow
            </p>
          </div>
        </CardDescription>
      </Card>

      <Card variant="outline" className="flex-1 text-center border-slate-[#F2F3F3]">
        <CardBanner className="text-main-dark bg-[#F2F3F3]  text-sm p-5">
          Complex business with multiple financial accounts, currencies, or
          auditing needs?
        </CardBanner>
        <CardHeader>
          <CardTitle className="text-green-dark font-bold text-xl">
            Unlock Extra Features
          </CardTitle>
          <CardContent>
            <p>$89 per month</p>
          </CardContent>
          <Button className="font-bold text-main-dark opacity-90">
            Try Premium
          </Button>
        </CardHeader>
        <CardDescription className="p-4">
          <h3>GET IT ALL, PLUS:</h3>
          <div className="flex items-center">
            <Check size={15} className="font-bold text-green-dark" />
            <p>Manage cash flow across unlimited financial accounts</p>
          </div>
          <div className="flex items-center">
            <Check size={15} className="font-bold text-green-dark" />
            <p>
            Convert to any currency for localized cash flow reporting and projections
            </p>
          </div>
          <div className="flex items-center">
            <Check size={15} className="font-bold text-green-dark" />
            <p>Attach invoices or contracts to your cash flow entries for accountability and auditing</p>
          </div>
         
        </CardDescription>
      </Card>
    </div>
  );
};
