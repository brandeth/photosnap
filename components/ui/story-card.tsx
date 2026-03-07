import Image, { type StaticImageData } from "next/image";

export type StoryCardProps = {
  author: string;
  date: string;
  image: StaticImageData | string;
  title: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function StoryCard({
  alt,
  author,
  className,
  date,
  image,
  priority = false,
  title,
}: StoryCardProps) {
  return (
    <article
      className={[
        "group relative aspect-18/25 w-full max-w-90 overflow-hidden bg-neutral-950 text-neutral-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={image}
        alt={alt ?? title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 360px"
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{ backgroundImage: "var(--gradient-1)" }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-(--photosnap-space-400)">
        <p className="text-preset-6">{date}</p>
        <h3 className="mt-(--photosnap-space-050) text-preset-4">{title}</h3>
        <p className="mt-(--photosnap-space-050) text-preset-6">by {author}</p>
      </div>
    </article>
  );
}