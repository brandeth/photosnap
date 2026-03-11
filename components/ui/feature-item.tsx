import Image from "next/image";

export type FeatureItemProps = {
  description: string;
  icon: string;
  iconHeight: number;
  iconWidth: number;
  title: string;
};

export function FeatureItem({
  description,
  icon,
  iconHeight,
  iconWidth,
  title,
}: FeatureItemProps) {
  return (
    <article className="mx-auto flex max-w-[21.875rem] flex-col items-center text-center text-neutral-950">
      <div className="flex min-h-20 items-center justify-center">
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={iconWidth}
          height={iconHeight}
          style={{ width: iconWidth, height: iconHeight }}
          unoptimized
        />
      </div>

      <h2 className="mt-12 text-preset-4">{title}</h2>
      <p className="mt-4 text-preset-5-regular text-neutral-950/60">
        {description}
      </p>
    </article>
  );
}
