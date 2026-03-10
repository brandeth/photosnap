import Image from "next/image";

import {
  featuredStory,
  type FeaturedStoryContent,
} from "@/app/stories/stories-data";
import { Button } from "@/components/ui/button";

type StoriesHeroSectionProps = {
  story?: FeaturedStoryContent;
  className?: string;
};

const desktopImageOverlay =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 28%, rgba(0, 0, 0, 0.1) 58%, rgba(0, 0, 0, 0) 100%)";

const mobilePanelAccent = "var(--gradient-6)";

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function StoriesHeroSection({
  story = featuredStory,
  className,
}: StoriesHeroSectionProps) {
  return (
    <section
      className={joinClassNames(
        "relative overflow-hidden bg-neutral-950 text-neutral-0 md:h-162.5 md:min-h-162.5",
        className,
      )}
    >
      <div className="relative min-h-79.25 md:absolute md:inset-0">
        <Image
          src={story.image}
          alt={story.alt}
          fill
          sizes="(min-width: 768px) 100vw, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block"
          style={{ background: desktopImageOverlay }}
        />
      </div>

      <div className="relative z-10 bg-neutral-950 md:h-full md:min-h-162.5 md:bg-transparent">
        <div className="flex w-full h-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:mx-0 lg:py-20 xl:mx-0 xl:max-w-none xl:px-22 xl:py-30.75">
          <div className="relative w-full self-center">
            <div
              aria-hidden="true"
              className="absolute left-0 top-[-3rem] h-1.5 w-32 md:hidden sm:top-[-4rem]"
              style={{ background: mobilePanelAccent }}
            />
            <p className="text-preset-7 uppercase tracking-[2px] text-neutral-0">
              {story.eyebrow}
            </p>

            <h1 className="mt-6 text-preset-2 uppercase sm:text-preset-1 max-w-83">
              {story.title}
            </h1>

            <div className="mt-16 flex flex-wrap items-center gap-x-2 gap-y-1 text-preset-6 text-neutral-0/75 sm:mt-16">
              <p>{story.date}</p>
              <p className="text-neutral-0">by {story.author}</p>
            </div>

            <p className="mt-6 text-preset-5-regular text-neutral-0/60  max-w-97">
              {story.summary}
            </p>

            <div className="mt-6 sm:mt-8">
              <Button href={story.href} tone="light">
                {story.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
