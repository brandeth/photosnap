import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-neutral-100 text-neutral-950">
      <section className="grid bg-neutral-950 md:min-h-[40.625rem] md:grid-cols-[minmax(0,42.36%)_minmax(0,57.64%)] xl:grid-cols-[610px_minmax(0,1fr)]">
        <div className="relative order-2 flex overflow-hidden bg-neutral-950 text-neutral-0 md:order-1">
          <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
            <div className="relative max-w-xl mx-auto">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-1.5 md:block md:-translate-x-10 lg:-translate-x-16 xl:-translate-x-20"
                style={{ background: "var(--gradient-6)" }}
              />
              <div
                aria-hidden="true"
                className="mb-8 h-1.5 w-32 md:hidden"
                style={{ background: "var(--gradient-6)" }}
              />
              <h1 className="mt-2 text-preset-1 uppercase sm:text-preset-1">
                Create And <br /> Share Your Photo Stories.
              </h1>
              <p className="mt-5 max-w-lg text-preset-5-regular text-neutral-0/75 sm:mt-6">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell <br />{" "}
                stories and connect with others.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button href="/get-an-invite" tone="light">
                  Get An Invite
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-72 overflow-hidden sm:min-h-96 md:order-2 md:min-h-full">
          <Image
            src="/images/landing-image-01.jpg"
            alt="Photosnap landing page hero image"
            fill
            priority
            sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/28 via-transparent to-transparent md:bg-none" />
        </div>
      </section>

      <section className="grid bg-neutral-0 md:min-h-[37.5rem] md:grid-cols-[minmax(0,57.64%)_minmax(0,42.36%)] xl:grid-cols-[minmax(0,1fr)_610px]">
        <div className="relative min-h-72 overflow-hidden sm:min-h-96 md:min-h-full">
          <Image
            src="/images/landing-image-02.jpg"
            alt="Workspace with a laptop, printed photos, and camera gear arranged for visual storytelling"
            fill
            sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex bg-neutral-0">
          <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
            <div className="max-w-xl mx-auto">
              <h2 className="text-preset-1 uppercase sm:text-preset-1">
                Beautiful <br /> Stories <br /> Every Time
              </h2>
              <p className="mt-5 max-w-lg text-preset-5-regular text-neutral-950/60 sm:mt-6">
                We provide design templates to ensure your stories <br /> look
                terrific. Easily add photos, text, embed maps and <br /> media
                from other networks. Then share your story with <br /> everyone.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button href="/stories" tone="dark">
                  View The Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-neutral-0 md:min-h-[37.5rem] md:grid-cols-[minmax(0,42.36%)_minmax(0,57.64%)] xl:grid-cols-[610px_minmax(0,1fr)]">
        <div className="order-2 flex bg-neutral-0 md:order-1">
          <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
            <div className="max-w-xl mx-auto">
              <h2 className="text-preset-1 uppercase sm:text-preset-1">
                Designed For <br /> Everyone
              </h2>
              <p className="mt-5 max-w-lg text-preset-5-regular text-neutral-950/60 sm:mt-6">
                Photosnap can help you create stories that resonate <br /> with
                your audience. Our tool is designed for <br /> photographers of
                all levels, brands, businesses you <br /> name it.
              </p>
              <div className="mt-8 sm:mt-10">
                <Button href="/stories" tone="dark">
                  View The Stories
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-72 overflow-hidden sm:min-h-96 md:order-2 md:min-h-full">
          <Image
            src="/images/landing-image-03.jpg"
            alt="Photographer reviewing landscape photos on a tablet in a scenic outdoor setting"
            fill
            sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
