import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type SplitMarketingSectionProps = {
  title: ReactNode;
  description: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  media: ReactNode;
  mediaPosition?: "start" | "end";
  sectionClassName?: string;
  mediaClassName?: string;
};

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SplitMarketingSection({
  title,
  description,
  ctaHref,
  ctaLabel,
  media,
  mediaPosition = "start",
  sectionClassName,
  mediaClassName,
}: SplitMarketingSectionProps) {
  const isMediaOnStart = mediaPosition === "start";

  return (
    <section
      className={joinClassNames(
        "grid bg-neutral-0 md:min-h-[37.5rem]",
        sectionClassName,
      )}
    >
      <div
        className={joinClassNames(
          mediaClassName,
          isMediaOnStart ? "md:order-1" : "order-1 md:order-2",
        )}
      >
        {media}
      </div>

      <div
        className={joinClassNames(
          "flex bg-neutral-0",
          isMediaOnStart ? "md:order-2" : "order-2 md:order-1",
        )}
      >
        <div className="mx-auto flex w-full max-w-3xl items-center px-6 py-18 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-xl">
            <h2 className="text-preset-2 uppercase sm:text-preset-1">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-preset-5-regular text-neutral-950/60 sm:mt-6">
              {description}
            </p>
            <div className="mt-8 sm:mt-10">
              <Button href={ctaHref} tone="dark">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
