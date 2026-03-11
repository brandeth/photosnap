import { Button } from "./button";

type ClassValue = string | false | null | undefined;

export type PriceCardVariant = "default" | "featured";

export type PriceCardProps = {
  name: string;
  copy: string;
  price: string;
  cadenceLabel: string;
  note: string;
  href: string;
  ctaLabel?: string;
  variant?: PriceCardVariant;
};

function joinClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

export function PriceCard({
  name,
  copy,
  price,
  cadenceLabel,
  note,
  href,
  ctaLabel = "Pick Plan",
  variant = "default",
}: PriceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={joinClassNames(
        "relative overflow-hidden border transition-transform duration-200",
        isFeatured
          ? "border-neutral-950 bg-neutral-950 px-8 py-12 text-neutral-0 shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:px-10 lg:min-h-117.5 lg:px-10 lg:py-14"
          : "border-neutral-300 bg-neutral-0 px-8 py-10 text-neutral-950 sm:px-10 lg:min-h-102 lg:px-10 lg:py-14",
      )}
    >
      {isFeatured ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5 md:inset-y-0 md:left-0 md:h-full md:w-1.5 md:inset-x-auto lg:inset-x-0 lg:top-0 lg:h-1.5 lg:w-full"
          style={{ backgroundImage: "var(--gradient-6)" }}
        />
      ) : null}

      <div
        className={joinClassNames(
          "grid h-full gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:grid-rows-[auto_auto] md:items-start md:gap-x-12 md:gap-y-8 lg:flex lg:flex-col lg:items-center lg:justify-start lg:gap-10",
          isFeatured && "lg:gap-12",
        )}
      >
        <div
          className={joinClassNames(
            "flex w-full flex-col items-center text-center md:max-w-78 md:items-start md:text-left lg:max-w-none lg:items-center lg:text-center",
            isFeatured && "md:max-w-72",
          )}
        >
          <h2
            className={joinClassNames(
              "text-preset-3",
              isFeatured && "text-neutral-0",
            )}
          >
            {name}
          </h2>

          <p
            className={joinClassNames(
              "mt-4 max-w-68 text-preset-5-regular",
              isFeatured
                ? "text-neutral-0/70 sm:max-w-72"
                : "text-neutral-950/70",
            )}
          >
            {copy}
          </p>
        </div>

        <div
          className={joinClassNames(
            "flex w-full flex-col items-center text-center md:row-span-2 md:w-auto md:max-w-44 md:items-end md:justify-self-end md:text-right lg:w-full lg:max-w-none lg:items-center lg:text-center",
            isFeatured && "md:max-w-46",
          )}
        >
          <div
            className={joinClassNames(
              "flex flex-col items-center",
              "md:items-end lg:items-center",
            )}
          >
            <p
              className={joinClassNames(
                isFeatured ? "text-preset-1 text-neutral-0" : "text-preset-2",
              )}
            >
              {price}
            </p>
            <p
              className={joinClassNames(
                "mt-2 text-preset-7",
                isFeatured ? "text-neutral-0/64" : "text-neutral-950/55",
              )}
            >
              {cadenceLabel}
            </p>
          </div>

          {note ? (
            <p
              className={joinClassNames(
                "mt-6 max-w-64 text-preset-7 md:max-w-44 lg:max-w-68",
                isFeatured ? "text-neutral-0/68" : "text-neutral-950/60",
              )}
            >
              {note}
            </p>
          ) : null}
        </div>

        <Button
          href={href}
          className={joinClassNames(
            "w-full md:row-start-2 md:mt-0 md:max-w-67.5 lg:max-w-none",
            isFeatured && "price-card__featured-cta",
          )}
          variant={isFeatured ? "secondary" : "primary"}
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
