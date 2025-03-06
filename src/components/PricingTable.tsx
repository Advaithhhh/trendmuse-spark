
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly");
  };

  const pricingTiers = [
    {
      name: "Hobbyist",
      description: "Perfect for solo creators just getting started.",
      price: billingCycle === "monthly" ? 29 : 23,
      features: [
        "10 trend alerts per month",
        "Basic content analytics",
        "Manual content upload",
        "Hook generator (5/month)",
        "Email support",
      ],
      notIncluded: [
        "Audience emotion analysis",
        "Lost opportunity autopsy",
        "AI script generator",
        "Team accounts",
        "API access",
      ],
      cta: "Start Hobbyist Trial",
      highlighted: false,
    },
    {
      name: "Pro Creator",
      description: "For serious creators ready to scale their content.",
      price: billingCycle === "monthly" ? 99 : 79,
      features: [
        "50 trend alerts per month",
        "Advanced content analytics",
        "Audience emotion analysis",
        "Hook generator (unlimited)",
        "Zombie content reviver",
        "1-on-1 onboarding call",
        "Priority email & chat support",
      ],
      notIncluded: [
        "Team accounts",
        "Competitor gap reports",
        "API access",
      ],
      cta: "Start Pro Creator Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Agency",
      description: "For teams managing multiple content creators.",
      price: billingCycle === "monthly" ? 299 : 239,
      features: [
        "Unlimited trend alerts",
        "Team accounts (up to 5)",
        "Advanced analytics dashboard",
        "Audience emotion analysis",
        "Hook generator (unlimited)",
        "AI script drafts",
        "Competitor gap reports",
        "API access",
        "Dedicated success manager",
        "Custom integrations",
      ],
      notIncluded: [],
      cta: "Start Agency Trial",
      highlighted: false,
    },
  ];

  // Add-ons
  const addOns = [
    {
      name: "Trend Jumpstart",
      description: "Get 10 extra trend alerts per month",
      price: 49,
      tooltip: "Perfect for creators who need extra trend intelligence during seasonal peaks or special campaigns.",
    },
    {
      name: "Team Member",
      description: "Add additional team member",
      price: 39,
      tooltip: "Add additional team members to your agency plan.",
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the plan that's right for you
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            All plans include a 14-day free trial. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8 space-x-3">
            <span
              className={`text-sm font-medium ${
                billingCycle === "monthly"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={toggleBillingCycle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                billingCycle === "annual" ? "bg-brand-blue" : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center space-x-1">
              <span
                className={`text-sm font-medium ${
                  billingCycle === "annual"
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                Annual
              </span>
              <span className="text-xs font-medium text-green-500 bg-green-100 dark:bg-green-900/30 rounded-full px-2 py-0.5">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? "border-2 border-brand-blue shadow-xl dark:border-brand-blue/50 scale-105 md:scale-110 z-10"
                  : "border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      /month
                    </span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Billed annually (${tier.price * 12}/year)
                    </p>
                  )}
                </div>

                <Link to="/register">
                  <Button
                    className={`w-full mb-6 ${
                      tier.highlighted
                        ? "bg-brand-blue hover:bg-brand-blue/90 text-white"
                        : "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {tier.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400">
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Available Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-lg">{addon.name}</h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-sm">{addon.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {addon.description}
                </p>
                <div className="flex items-baseline justify-between">
                  <div className="text-lg font-semibold">
                    ${addon.price}
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      /month
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Add to Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions about which plan is right for you?
          </p>
          <Link to="/contact">
            <Button variant="link" className="text-brand-blue hover:text-brand-purple">
              Contact our sales team →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
