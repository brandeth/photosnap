import Image from "next/image";
import type { ReactNode } from "react";

import { FeatureItem } from "@/components/ui/feature-item";
import { HomeHeroSection } from "@/components/ui/home-hero-section";
import { SplitMarketingSection } from "@/components/ui/split-marketing-section";
import { StoryCard } from "@/components/ui/story-card";

const homeStories = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    image: "/images/the-mountains.jpg",
    alt: "Snow-covered mountain range beneath a cloudy sky",
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    image: "/images/sunset-cityscapes.jpg",
    alt: "City skyline at sunset with warm orange light",
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    image: "/images/18-days-voyage.jpg",
    alt: "Person standing near a calm body of water during a voyage",
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    image: "/images/architecturals.jpg",
    alt: "Modern architectural structure captured from below",
  },
] as const;

const homeFeatures = [
  {
    title: "100% Responsive",
    description:
      "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
    icon: "/responsiveness-icon.svg",
    iconWidth: 72,
    iconHeight: 72,
  },
  {
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: "/upload-limit.svg",
    iconWidth: 72,
    iconHeight: 36,
  },
  {
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    icon: "/embedding.svg",
    iconWidth: 71,
    iconHeight: 72,
  },
] as const;

type HomeMarketingSection = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  media: ReactNode;
  mediaPosition?: "start" | "end";
  sectionClassName: string;
  mediaClassName: string;
};

const homeMarketingSections: HomeMarketingSection[] = [
  {
    id: "beautiful-stories",
    title: (
      <>
        Beautiful <br /> Stories <br /> Every Time
      </>
    ),
    description: (
      <>
        We provide design templates to ensure your stories <br /> look terrific.
        Easily add photos, text, embed maps and <br /> media from other
        networks. Then share your story with <br /> everyone.
      </>
    ),
    ctaHref: "/stories",
    ctaLabel: "View The Stories",
    mediaPosition: "start",
    sectionClassName:
      "md:grid-cols-[273px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_610px]",
    mediaClassName:
      "relative min-h-72 overflow-hidden sm:min-h-96 md:min-h-full",
    media: (
      <>
        <Image
          src="/images/landing-image-02.jpg"
          alt="Workspace with a laptop, printed photos, and camera gear arranged for visual storytelling"
          fill
          sizes="(min-width: 1280px) calc(100vw - 610px), (min-width: 768px) 57.64vw, 100vw"
          className="object-cover md:object-[35%_center] xl:object-cover"
        />
      </>
    ),
  },
  {
    id: "designed-for-everyone",
    title: (
      <>
        Designed For <br /> Everyone
      </>
    ),
    description: (
      <>
        Photosnap can help you create stories that resonate <br /> with your
        audience. Our tool is designed for <br /> photographers of all levels,
        brands, businesses you <br /> name it.
      </>
    ),
    ctaHref: "/stories",
    ctaLabel: "View The Stories",
    mediaPosition: "end",
    sectionClassName:
      "md:grid-cols-[minmax(0,1fr)_273px] xl:grid-cols-[minmax(0,1fr)_830px]",
    mediaClassName: "md:min-h-[37.5rem] xl:min-h-[37.5rem]",
    media: (
      <>
        <div className="relative min-h-72 overflow-hidden sm:min-h-96 md:hidden">
          <Image
            src="/images/landing-image-03-mobile.jpg"
            alt="Photographer reviewing landscape photos on a tablet in a scenic outdoor setting"
            fill
            loading="eager"
            sizes="(min-width: 768px) 0px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative hidden min-h-[37.5rem] overflow-hidden md:block xl:hidden">
          <Image
            src="/images/landing-image-03-tablet.jpg"
            alt="Photographer reviewing landscape photos on a tablet in a scenic outdoor setting"
            fill
            loading="eager"
            sizes="(min-width: 1280px) 0px, (min-width: 768px) 273px, 0px"
            className="object-cover"
          />
        </div>

        <div className="relative hidden min-h-[37.5rem] overflow-hidden xl:block">
          <Image
            src="/images/landing-image-03.jpg"
            alt="Photographer reviewing landscape photos on a tablet in a scenic outdoor setting"
            fill
            loading="eager"
            sizes="(min-width: 1280px) 830px, 0px"
            className="object-cover"
          />
        </div>
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="bg-neutral-100 text-neutral-950">
      <HomeHeroSection />

      {homeMarketingSections.map((section) => (
        <SplitMarketingSection
          key={section.id}
          title={section.title}
          description={section.description}
          ctaHref={section.ctaHref}
          ctaLabel={section.ctaLabel}
          media={section.media}
          mediaPosition={section.mediaPosition}
          sectionClassName={section.sectionClassName}
          mediaClassName={section.mediaClassName}
        />
      ))}

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {homeStories.map((story) => (
          <StoryCard
            key={story.title}
            title={story.title}
            author={story.author}
            image={story.image}
            alt={story.alt}
            href="/stories"
            className="max-w-none"
          />
        ))}
      </section>

      <section className="bg-neutral-0 px-8 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-sm grid-cols-1 justify-items-center gap-y-16 sm:max-w-md md:max-w-xl md:gap-y-20 xl:max-w-6xl xl:grid-cols-3 xl:items-start xl:gap-x-12 xl:gap-y-0">
          {homeFeatures.map((feature) => (
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
    </main>
  );
}
