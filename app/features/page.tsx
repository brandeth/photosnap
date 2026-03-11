import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FeatureItem } from "@/components/ui/feature-item";

import betaBannerImageSrc from "../../public/images/beta-invite-image.jpg";
import featureHeroImageSrc from "../../public/images/features-image-01.jpg";

const featureHeroImage = {
  src: featureHeroImageSrc,
  alt: "Creative desk setup with printed photos, a laptop, and camera gear arranged for visual storytelling",
} as const;

const betaBannerImage = {
  src: betaBannerImageSrc,
  alt: "Scenic landscape backdrop for the beta invite banner",
} as const;

const features = [
  {
    title: "100% Responsive",
    description:
      "Layouts scale cleanly from phones to large displays so every story feels deliberate on every screen size.",
    icon: "/responsiveness-icon.svg",
    iconWidth: 72,
    iconHeight: 72,
  },
  {
    title: "No Photo Upload Limit",
    description:
      "Upload in volume without fighting arbitrary caps, making it easier to manage complete shoots and ongoing campaigns.",
    icon: "/upload-limit.svg",
    iconWidth: 72,
    iconHeight: 36,
  },
  {
    title: "Available To Embed",
    description:
      "Bring in maps, videos, and social media content so each story can combine imagery with the right supporting context.",
    icon: "/embedding.svg",
    iconWidth: 71,
    iconHeight: 72,
  },
  {
    title: "Custom Domain",
    description:
      "Publish under a branded destination to give client work, portfolios, and campaigns a more polished and credible home.",
    icon: "/custom-domain.svg",
    iconWidth: 81,
    iconHeight: 72,
  },
  {
    title: "Boost Your Exposure",
    description:
      "Launch feature-rich stories faster so your best work is easier to share, promote, and keep in front of the right audience.",
    icon: "/images/boost-exposure.svg",
    iconWidth: 91,
    iconHeight: 72,
  },
  {
    title: "Drag & Drop Image",
    description:
      "Keep publishing workflows simple with a setup that is designed around moving visual assets into place quickly and clearly.",
    icon: "/images/drag-and-drop.svg",
    iconWidth: 72,
    iconHeight: 72,
  },
] as const;

export default function FeaturesPage() {
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
                Features
              </h1>

              <p className="mt-4 max-w-lg text-preset-5-regular text-neutral-0/75 sm:mt-6">
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photographer who wants to
                share their stories.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-75 overflow-hidden sm:min-h-96 md:order-2 md:min-h-full">
          <Image
            src={featureHeroImage.src}
            alt={featureHeroImage.alt}
            fill
            placeholder="blur"
            priority
            sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/28 via-transparent to-transparent md:bg-none" />
        </div>
      </section>

      <section className="bg-neutral-0 px-8 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-sm grid-cols-1 justify-items-center gap-y-14 sm:max-w-3xl sm:grid-cols-2 sm:gap-x-8 sm:gap-y-18 xl:max-w-6xl xl:grid-cols-3 xl:gap-x-12 xl:gap-y-26">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconWidth={feature.iconWidth}
              iconHeight={feature.iconHeight}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 text-neutral-0">
        <div className="absolute inset-0">
          <Image
            src={betaBannerImage.src}
            alt={betaBannerImage.alt}
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-neutral-950/45" /> */}
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
