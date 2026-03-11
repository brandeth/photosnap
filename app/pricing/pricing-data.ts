export const pricingPlanOrder = ["Basic", "Pro", "Business"] as const;

export type PricingPlanName = (typeof pricingPlanOrder)[number];

export type PricingPlan = {
  name: PricingPlanName;
  monthlyPrice: string;
  yearlyPrice: string;
  copy: string;
  yearlyNote: string;
  featured: boolean;
};

export type PricingCompareAvailability = Record<PricingPlanName, boolean>;

export type PricingCompareRow = {
  label: string;
  availability: PricingCompareAvailability;
};

export type PricingCompareGroup = {
  title: string;
  rows: readonly PricingCompareRow[];
};

export const pricingPlans: readonly PricingPlan[] = [
  {
    name: "Basic",
    monthlyPrice: "$19.00",
    yearlyPrice: "$190.00",
    copy: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    yearlyNote: "",
    featured: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$39.00",
    yearlyPrice: "$390.00",
    copy: "More advanced features available. Recommended for photography veterans and professionals.",
    yearlyNote: "",
    featured: true,
  },
  {
    name: "Business",
    monthlyPrice: "$99.00",
    yearlyPrice: "$990.00",
    copy: "Additional features available such as more detailed metrics. Recommended for business owners.",
    yearlyNote: "",
    featured: false,
  },
] as const;

export const pricingCompareGroups: readonly PricingCompareGroup[] = [
  {
    title: "The Features",
    rows: [
      {
        label: "Unlimited Story Posting",
        availability: {
          Basic: true,
          Pro: true,
          Business: true,
        },
      },
      {
        label: "Unlimited Photo Upload",
        availability: {
          Basic: true,
          Pro: true,
          Business: true,
        },
      },
      {
        label: "Embedding Custom Content",
        availability: {
          Basic: false,
          Pro: true,
          Business: true,
        },
      },
      {
        label: "Customize Metadata",
        availability: {
          Basic: false,
          Pro: true,
          Business: true,
        },
      },
      {
        label: "Advanced Metrics",
        availability: {
          Basic: false,
          Pro: false,
          Business: true,
        },
      },
      {
        label: "Photo Downloads",
        availability: {
          Basic: false,
          Pro: false,
          Business: true,
        },
      },
      {
        label: "Search Engine Indexing",
        availability: {
          Basic: false,
          Pro: false,
          Business: true,
        },
      },
      {
        label: "Custom Analytics",
        availability: {
          Basic: false,
          Pro: false,
          Business: true,
        },
      },
    ],
  },
] as const;
