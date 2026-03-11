import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PricingCompareTable } from "@/components/ui/pricing-compare-table";

import { pricingPlans } from "./pricing-data";
import { PricingToggleDemo } from "./pricing-toggle-demo";

const pricingHeroImage = {
  src: "/images/pricing-image-01.jpg",
  alt: "Photographer standing in a remote landscape with a camera, representing flexible plans for visual storytellers",
} as const;

const betaBannerImage = {
  src: "/images/beta-invite-image.jpg",
  alt: "Scenic landscape backdrop for the beta invite banner",
} as const;

export default function PricingPage() {
  return (
    <main className="bg-neutral-100 text-neutral-950">
      <section className="grid bg-neutral-950 md:h-122.5 md:grid-cols-[minmax(0,1fr)_273px] xl:grid-cols-[610px_minmax(0,1fr)]">
        <div className="relative order-2 flex overflow-hidden bg-neutral-950 text-neutral-0 md:order-1">
          <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
            <div className="relative mx-auto w-full max-w-[24rem] md:max-w-xl">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-1.5 md:block md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20"
                style={{ background: "var(--gradient-6)" }}
              />
              <div
                aria-hidden="true"
                className="absolute -top-18 h-1.5 w-32 md:hidden"
                style={{ background: "var(--gradient-6)" }}
              />

              <h1 className="text-preset-2 uppercase sm:text-preset-1">
                Pricing
              </h1>

              <p className="mt-4 max-w-lg text-preset-5-regular text-neutral-0/75 sm:mt-6">
                Create your stories with a platform built for photographers and
                visual storytellers. Choose the plan that fits your workflow,
                from a simple portfolio setup to a full team publishing
                operation.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-75 overflow-hidden sm:min-h-96 md:order-2 md:min-h-full">
          <Image
            src={pricingHeroImage.src}
            alt={pricingHeroImage.alt}
            fill
            priority
            sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/28 via-transparent to-transparent md:bg-none" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-30">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:gap-20">
          <PricingToggleDemo tiers={pricingPlans} />

          <PricingCompareTable />
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 text-neutral-0">
        <div className="absolute inset-0">
          <Image
            src={betaBannerImage.src}
            alt={betaBannerImage.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative mx-auto flex min-h-72 w-full max-w-360 items-center px-6 py-16 sm:px-10 sm:py-17 lg:px-16 lg:py-17.5 xl:px-34">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-1.5 w-32 sm:left-10 md:left-0 md:h-full md:w-1.5"
            style={{ background: "var(--gradient-6)" }}
          />

          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center xl:gap-10">
            <h2 className="max-w-100 text-preset-2 uppercase sm:text-preset-1">
              We&apos;re In Beta. <br /> Get Your Invite Today.
            </h2>

            <div className="xl:justify-self-end">
              <Button href="/get-an-invite" tone="light">
                Get An Invite
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
