import React from "react";
import Footer from "../components/Footer";
const plans = [
    {
        name: "Basic",
        price: "$10",
        description: "For individuals just getting started.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        href: "#",
        featured: false,
    },
    {
        name: "Pro",
        price: "$30",
        description: "For professionals who need more features.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        href: "#",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For organizations with custom needs.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        href: "#",
        featured: false,
    },
];

const Pricing = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Simple pricing. No hidden fees. Cancel anytime.
          </p>
        </div>
  
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-6 shadow-sm ${
                plan.featured
                  ? "bg-blue-50 dark:bg-blue-900 border-blue-500"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-2">
                {plan.price}
                {plan.price !== "Custom" && <span className="text-base">/mo</span>}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
  
              <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
  
              <a
                href={plan.href}
                className={`block w-full text-center py-2 rounded-md font-medium ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Pricing;