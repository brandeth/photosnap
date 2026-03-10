import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { ArrowIcon } from "./arrow-icon";

export type StoryCardProps = {
  author: string;
  date?: string;
  image: StaticImageData | string;
  title: string;
  href?: string;
  alt?: string;
  className?: string;
};

export function StoryCard({
  alt,
  author,
  className,
  date,
  href = "#",
  image,
  title,
}: StoryCardProps) {
  return (
    <article
      className={[
        "group relative aspect-18/25 w-full max-w-90 overflow-hidden bg-neutral-950 text-neutral-0 transition-transform duration-500 ease-out hover:-translate-y-[25px] focus-within:-translate-y-[25px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={image}
        alt={alt ?? title}
        fill
        sizes="(max-width: 768px) 100vw, 360px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      {/* <div className="absolute inset-0 bg-black/16 transition-colors duration-300 group-hover:bg-black/10" /> */}

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "var(--gradient-1)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[6px] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-within:scale-y-100"
        style={{ background: "var(--gradient-6)" }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-(--photosnap-space-300) p-(--photosnap-space-300) sm:p-(--photosnap-space-400)">
        <div className="max-w-full">
          {date ? (
            <p className="text-preset-6 text-neutral-0/90">{date}</p>
          ) : null}
          <h3 className="mt-(--photosnap-space-050) text-preset-4 text-neutral-0">
            {title}
          </h3>
          <p className="mt-(--photosnap-space-050) text-preset-6">
            by {author}
          </p>
        </div>

        <div className="h-px w-full bg-linear-to-r from-neutral-0/45 via-neutral-0/22 to-neutral-0/12" />

        <Link
          href={href}
          className="button-link button-link-tone-light inline-flex w-full items-center justify-between gap-(--photosnap-space-200) text-left text-preset-7 uppercase"
        >
          <span className="button-link__label">Read Story</span>
          <ArrowIcon
            aria-hidden="true"
            focusable="false"
            className="button-link__arrow shrink-0"
          />
        </Link>
      </div>
    </article>
  );
}
