import { CatchPhrase } from "./_component/catch-phrase";
import { FAQs } from "./_component/faqs";
import { PricingCards } from "./_component/pricing";
import { Title } from "./_component/title";

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" w-full">
        <div className="container">
          <Title />
        </div>
        <div className="container">
          <PricingCards />
        </div>
        <div className="container">
          <CatchPhrase/>
        </div>
        <div className="container bg-white py-5">
          <FAQs/>
        </div>
      </div>
    </main>
  );
}
