import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "Stories" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
] as const;

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    src: "/instagram-alt.svg",
    width: 20,
    height: 20,
  },
  {
    href: "#",
    label: "Facebook",
    src: "/facebook-alt.svg",
    width: 20,
    height: 20,
  },
  {
    href: "#",
    label: "Twitter",
    src: "/images/twitter-alt.png",
    width: 20,
    height: 20,
  },
  {
    href: "#",
    label: "Pinterest",
    src: "/pinterest-alt.svg",
    width: 20,
    height: 20,
  },
  {
    href: "#",
    label: "YouTube",
    src: "/youtube-alt.svg",
    width: 20,
    height: 20,
  },
] as const;

function PhotosnapFooterBrand() {
  return (
    <span className="inline-flex items-center rounded-xs">
      <Image
        src="/logo-with-text-alt.svg"
        alt=""
        aria-hidden="true"
        width={170}
        height={16}
        className="h-4 w-auto shrink-0"
      />
    </span>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-0">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-8 py-14 text-center sm:px-10 md:grid-cols-[minmax(15.5rem,auto)_minmax(0,1fr)_auto] md:items-start md:gap-x-12 md:px-10 md:py-16 md:text-left lg:px-16">
        <div className="flex flex-col items-center gap-8 md:items-start md:justify-between md:self-stretch">
          <Link
            href="/"
            aria-label="Photosnap home"
            className="inline-flex w-fit items-center transition-opacity duration-200 hover:opacity-75 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
          >
            <PhotosnapFooterBrand />
          </Link>

          <ul className="flex items-center justify-center gap-3 md:justify-start">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-5 w-5 items-center justify-center transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                >
                  <Image
                    src={link.src}
                    alt=""
                    aria-hidden="true"
                    width={link.width}
                    height={link.height}
                    className="h-5 w-5 object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="md:justify-self-start">
          <ul className="flex flex-col items-center gap-5 md:items-start md:gap-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-preset-7 uppercase text-neutral-0 transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-8 md:self-stretch md:items-end md:justify-between md:text-right">
          <Button href="/get-an-invite" tone="light">
            Get An Invite
          </Button>

          <p className="text-preset-5-regular text-neutral-0/50">
            Copyright {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
