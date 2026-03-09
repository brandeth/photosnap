import Link from "next/link";
import type { ComponentProps } from "react";

import { ArrowIcon } from "./arrow-icon";

type ClassValue = string | false | null | undefined;

const buttonBaseClassName =
  "group inline-flex text-preset-7 w-fit items-center gap-[var(--photosnap-space-200)] text-left text-[length:var(--text-preset-5-bold-size)] font-bold leading-[var(--text-preset-5-bold-line-height)] tracking-[var(--text-preset-5-bold-letter-spacing)] uppercase focus-visible:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50";

export const buttonVariants = {
  link: "button-link",
  primary: "button-primary",
  secondary: "button-secondary",
} as const;

export const buttonTones = {
  dark: "button-link-tone-dark",
  light: "button-link-tone-light",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonTone = keyof typeof buttonTones;

export type ButtonProps = ComponentProps<typeof Link> & {
  className?: string;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

function joinClassNames(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

function getButtonToneClassName(variant: ButtonVariant, tone: ButtonTone) {
  return variant === "link" ? buttonTones[tone] : null;
}

export function getButtonClassName({
  className,
  tone = "dark",
  variant = "link",
}: Pick<ButtonProps, "className" | "tone" | "variant"> = {}) {
  return joinClassNames(
    buttonBaseClassName,
    buttonVariants[variant],
    getButtonToneClassName(variant, tone),
    className,
  );
}

export function Button({
  children,
  className,
  tone = "dark",
  variant = "link",
  ...props
}: ButtonProps) {
  const isLinkVariant = variant === "link";

  return (
    <Link
      data-slot="button"
      data-tone={tone}
      data-variant={variant}
      className={getButtonClassName({ className, tone, variant })}
      {...props}
    >
      <span className={isLinkVariant ? "button-link__label" : undefined}>
        {children}
      </span>
      {isLinkVariant ? (
        <ArrowIcon
          aria-hidden="true"
          focusable="false"
          className="button-link__arrow"
        />
      ) : null}
    </Link>
  );
}
