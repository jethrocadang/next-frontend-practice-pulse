import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBanner,
} from "@/components/ui/card";

export const PricingCards = () => {
  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card variant="default">
        <CardBanner>RECOMENDED</CardBanner>
        <CardHeader>
          <CardTitle>Small Business Plan</CardTitle>
          <CardContent>
            <p>$59 per month</p>
          </CardContent>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
