"use client";

import { useId, useState } from "react";

import { PriceCard } from "@/components/ui/price-card";
import { ToggleSwitch } from "@/components/ui/toggle-switch";
import type { PricingPlan } from "./pricing-data";

type PricingToggleDemoProps = {
  tiers: readonly PricingPlan[];
};

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PricingToggleDemo({ tiers }: PricingToggleDemoProps) {
  const [isYearly, setIsYearly] = useState(false);
  const billingLabelId = useId();

  return (
    <section className="space-y-10 sm:space-y-12 lg:space-y-14">
      <div
        className="flex items-center justify-center gap-8 sm:gap-10"
        role="group"
        aria-labelledby={billingLabelId}
      >
        <p id={billingLabelId} className="sr-only">
          Billing cadence
        </p>
        <span
          className={joinClassNames(
            "text-preset-4 transition-opacity duration-200",
            isYearly ? "text-neutral-950/50" : "text-neutral-950",
          )}
        >
          Monthly
        </span>
        <ToggleSwitch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          aria-label="Switch between monthly and yearly billing"
        />
        <span
          className={joinClassNames(
            "text-preset-4 transition-opacity duration-200",
            isYearly ? "text-neutral-950" : "text-neutral-950/50",
          )}
        >
          Yearly
        </span>
      </div>

      <div className="grid justify-items-stretch gap-6 md:gap-8 lg:grid-cols-3 lg:items-center lg:gap-7 xl:gap-8">
        {tiers.map((tier) => {
          const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
          const cadenceLabel = isYearly ? "per year" : "per month";
          const note = isYearly ? tier.yearlyNote : "";

          return (
            <PriceCard
              key={tier.name}
              name={tier.name}
              copy={tier.copy}
              price={price}
              cadenceLabel={cadenceLabel}
              note={note}
              href="/stories"
              ctaLabel="Pick Plan"
              variant={tier.featured ? "featured" : "default"}
            />
          );
        })}
      </div>
    </section>
  );
}
