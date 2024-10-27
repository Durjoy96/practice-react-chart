import Card from "./Card";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$20",
      features: [
        "Access to all workout videos",
        "3 live sessions per week",
        "Basic nutrition guide",
        "Community support",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$40",
      features: [
        "Access to all workout videos",
        "5 live sessions per week",
        "Personalized nutrition plan",
        "1-on-1 session per month",
        "Community support",
        "Weekly progress tracking",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$70",
      features: [
        "Access to all workout videos",
        "Unlimited live sessions",
        "Custom nutrition and workout plan",
        "2 1-on-1 sessions per month",
        "Priority support",
        "Weekly progress tracking",
        "Access to exclusive content",
        "Access to workshops and Q&A",
      ],
    },
  ];

  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {pricingPlans.map((item) => (
        <Card key={item.id} data={item}></Card>
      ))}
    </div>
  );
};

export default Pricing;
