import Image from "next/image";

import { Button } from "@/components/ui/button";

import homeHeroImageSrc from "../../public/images/landing-image-01.jpg";

const homeHeroImage = {
  src: homeHeroImageSrc,
  alt: "Photosnap landing page hero image",
} as const;

export function HomeHeroSection() {
  return (
    <section className="grid bg-neutral-950 md:min-h-[40.625rem] md:grid-cols-[minmax(0,1fr)_273px] xl:grid-cols-[610px_minmax(0,1fr)]">
      <div className="relative order-2 flex overflow-hidden bg-neutral-950 text-neutral-0 md:order-1">
        <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-[4.5rem] pt-[4.5rem] sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
          <div className="relative mx-auto w-full max-w-[24rem] md:max-w-xl">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-1.5 md:block md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20"
              style={{ background: "var(--gradient-6)" }}
            />
            <div
              aria-hidden="true"
              className="absolute top-[-4.5rem] h-1.5 w-32 md:hidden"
              style={{ background: "var(--gradient-6)" }}
            />
            <h1 className="text-preset-2 uppercase sm:text-preset-1">
              Create And <br /> Share Your <br /> Photo Stories.
            </h1>
            <p className="mt-4 text-preset-5-regular text-neutral-0/75 sm:mt-6 sm:max-w-lg">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button href="/get-an-invite" tone="light">
                Get An Invite
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative order-1 min-h-[18.75rem] overflow-hidden sm:min-h-96 md:order-2 md:min-h-full">
        <Image
          src={homeHeroImage.src}
          alt={homeHeroImage.alt}
          fill
          placeholder="blur"
          priority
          sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/28 via-transparent to-transparent md:bg-none" />
      </div>
    </section>
  );
}
