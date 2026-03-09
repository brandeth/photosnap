"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./button";

type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  homeHref?: string;
  links?: NavbarLink[];
};

const defaultLinks: NavbarLink[] = [
  { href: "/stories", label: "Stories" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

function joinClassNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function PhotosnapBrand() {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo-with-text.svg"
        alt=""
        aria-hidden="true"
        width={170}
        height={16}
        className="h-4 w-auto shrink-0"
        priority
      />
    </span>
  );
}

export function Navbar({
  className,
  ctaHref = "/get-an-invite",
  ctaLabel = "Get an Invite",
  homeHref = "/",
  links = defaultLinks,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={joinClassNames(
        "border-b border-neutral-300 bg-neutral-0 text-neutral-950",
        className,
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-320 flex-col px-6 sm:px-10 lg:px-16"
      >
        <div className="grid min-h-18 grid-cols-[1fr_auto] items-center gap-6 py-4 md:min-h-20 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:py-0">
          <Link
            href={homeHref}
            aria-label="Photosnap home"
            className="inline-flex w-fit items-center text-neutral-950 transition-opacity duration-200 hover:opacity-70 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            onClick={() => setIsMenuOpen(false)}
          >
            <PhotosnapBrand />
          </Link>

          <ul className="hidden items-center justify-center gap-9 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-preset-7 uppercase text-neutral-950 transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden justify-self-end md:flex">
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="photosnap-mobile-menu"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end text-neutral-950 transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 md:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-5 w-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                />
              ) : (
                <>
                  <path
                    d="M3 6H17"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="square"
                  />
                  <path
                    d="M3 10H17"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="square"
                  />
                  <path
                    d="M3 14H17"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="square"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="photosnap-mobile-menu"
            className="overflow-hidden border-t border-neutral-300 pb-6 opacity-100 transition-opacity duration-200 ease-out md:hidden"
          >
            <ul className="flex flex-col items-center gap-5 px-2 pt-6">
              {links.map((link) => (
                <li key={link.label} className="w-full text-center">
                  <Link
                    href={link.href}
                    className="inline-flex text-preset-7 uppercase text-neutral-950 transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 h-px bg-neutral-300" />

            <div className="px-2 pt-5">
              <Button
                href={ctaHref}
                variant="primary"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
