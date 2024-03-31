import { PricingCards } from "./_component/pricing";
import { Title } from "./_component/title";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="border border-blue-500 w-full h-screen">
      <Title/>
      <PricingCards/>
      </div>
    </main>
  );
}


