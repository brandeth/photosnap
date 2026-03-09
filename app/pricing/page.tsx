import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    price: "$19/mo",
    copy: "For individual creators getting their first portfolio and story flow online.",
    featured: false,
  },
  {
    name: "Pro",
    price: "$39/mo",
    copy: "A stronger option for active photographers who need more control and room to publish consistently.",
    featured: true,
  },
  {
    name: "Business",
    price: "$99/mo",
    copy: "Designed for teams managing multiple contributors, launches, and client-facing presentation.",
    featured: false,
  },
] as const;

export default function PricingPage() {
  return (
    <section className="bg-neutral-100 text-neutral-950">
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-8 sm:px-10 sm:pt-10 md:min-h-[calc(100vh-5rem)] lg:gap-10 lg:px-16 lg:pb-20 lg:pt-12">
        <section className="rounded-4xl border border-neutral-300 bg-neutral-0 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-preset-7 text-neutral-950/60">PRICING</p>
              <h1 className="mt-4 text-preset-2 uppercase sm:text-preset-1">
                Straightforward Placeholder Pricing With Real Structure
              </h1>
              <p className="mt-4 max-w-xl text-preset-5-regular text-neutral-950/70">
                The Pricing route now has a presentable overview with clear plan
                tiers, short plan summaries, and a finished visual treatment
                that matches the rest of the app.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-950 p-6 text-neutral-0 sm:p-7">
              <p className="text-preset-7 text-neutral-0/65">PLAN NOTE</p>
              <h2 className="mt-3 text-preset-3 uppercase">
                Pricing shown here is placeholder content for navigation
                completeness
              </h2>
              <div className="mt-8">
                <Button href="/features" tone="light">
                  Compare Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "rounded-3xl border p-6 shadow-sm sm:p-7",
                tier.featured
                  ? "border-neutral-950 bg-neutral-950 text-neutral-0"
                  : "border-neutral-300 bg-neutral-0 text-neutral-950",
              ].join(" ")}
            >
              <p
                className={[
                  "text-preset-7",
                  tier.featured ? "text-neutral-0/65" : "text-neutral-950/55",
                ].join(" ")}
              >
                {tier.featured ? "MOST POPULAR" : "PLAN"}
              </p>
              <h2 className="mt-4 text-preset-3 uppercase">{tier.name}</h2>
              <p
                className={[
                  "mt-4 text-preset-5-regular",
                  tier.featured ? "text-neutral-0/78" : "text-neutral-950/70",
                ].join(" ")}
              >
                {tier.copy}
              </p>
              <p className="mt-8 text-preset-2 uppercase">{tier.price}</p>
              <div className="mt-8">
                <Button
                  href="/stories"
                  tone={tier.featured ? "light" : "dark"}
                  variant={tier.featured ? "link" : "primary"}
                >
                  Start Here
                </Button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
