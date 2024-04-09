import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FAQs = () => {
  return (
    <div className="py-5">
      <h1 className="my-5 text-black text-4xl font-bold">FAQ</h1>
      <div className="space-y-5 md:flex md:flex-wrap md:space-y-0">
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              How does the 30-day free trial work?
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              You can use Pulse absolutely free for 30 days. After 30 days, we
              will charge the credit card you used when you sign up. If you
              choose to cancel your account before your trial ends, your card
              will not be charged.
            </p>
          </CardDescription>
        </Card>
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              If I upgrade an existing account, do I get another free trial?{" "}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              Brand new accounts are the only ones eligible for a 30-day free
              trial. If you upgrade an existing account, your credit card will
              be billed the new amount on the date of your next billing cycle.
            </p>
          </CardDescription>
        </Card>
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              What is a “Financial Account”?{" "}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              Financial Accounts are a grouping of income and expense items that
              can be used for tracking or reporting purposes.
              <br />
              <br />
              They&apos;re designed to be flexible and can be used to
              differentiate between bank accounts, companies, individuals or
              between personal and business entries.
            </p>
          </CardDescription>
        </Card>
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              Do I have to commit to a long-term contract?{" "}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              No. There is no contract when you use Pulse, other than agreeing
              to our Terms of Service.
            </p>
          </CardDescription>
        </Card>
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              Will I be able to cancel my account if I don&apos;t use Pulse?{" "}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              Yes - you can cancel your account at any time. To cancel your
              account, go to your billing page and click on “Please cancel my
              account” at the bottom of the page. The account owner is the only
              one who can cancel an account. An email request to delete an
              account is not considered cancellation.
            </p>
          </CardDescription>
        </Card>
        <Card className="md:w-1/2 md:p-5">
          <CardHeader className=" p-0">
            <CardTitle className="p-0 text-xl font-bold ">
              What types of payments do you accept?{" "}
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-main-gray text-md">
            <p>
              We accept payments made online using Visa, Mastercard, Discover,
              and American Express.
            </p>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
};
