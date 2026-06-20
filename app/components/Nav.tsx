"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import azLogo from "../../src/images/AZ.svg";
import { getDictionary } from "../lib/i18n";
import type { Lang } from "../lib/types";
import LanguageToggle from "./LanguageToggle";

interface Props {
  lang: Lang;
  variant?: "home" | "sub";
}

export default function Nav({ lang, variant = "home" }: Props) {
  const [open, setOpen] = useState(false);
  const l = getDictionary(lang);
  const home = `/${lang}`;
  const items = l.nav.items;

  const navLinks =
    variant === "home"
      ? items.map((item) => ({
          href: `${home}#${item}`,
          label: l.nav.labels[item],
        }))
      : [
          { href: home, label: l.nav.home },
          {
            href: "/storitve/izdelava-spletnih-strani",
            label: l.nav.labels.storitve ?? l.nav.labels.services,
          },
          { href: "/blog", label: l.nav.blog },
          { href: `${home}#${items[3]}`, label: l.nav.labels[items[3]] },
        ];

  const ctaHref = `${home}#${items[3]}`;

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 pt-4">
      <nav
        className="max-w-[1360px] mx-auto bg-bg-elev/95 backdrop-blur-md border border-line rounded-full px-4 py-2.5 flex justify-between items-center shadow-soft"
        aria-label="Main navigation"
      >
        <Link
          href={home}
          aria-label="Ajda Zajc"
          className="flex items-center gap-2 text-ink text-sm md:text-base font-semibold"
        >
          <Image
            src={azLogo}
            alt="Ajda Zajc"
            width={32}
            height={18}
            priority
            className="h-5 w-auto"
          />
          <span>Ajda Zajc</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] px-3 py-1.5 rounded-full text-muted hover:text-ink hover:bg-bg-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle
            lang={lang}
            ariaLabel={l.language.toggleAria}
            className="ml-1 px-3 py-1.5 rounded-full border border-line text-[12px] font-medium text-muted hover:text-ink hover:border-ink transition-colors"
          />
          <Link
            href={ctaHref}
            className="press ml-1 px-4 py-2 rounded-full bg-ink text-white text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            {l.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle
            lang={lang}
            ariaLabel={l.language.toggleAria}
            className="px-2.5 py-1 rounded-full border border-line text-[12px] font-medium text-muted"
          />
          <button
            type="button"
            className="relative w-10 h-10 -mr-1 flex items-center justify-center rounded-full bg-ink text-white text-[13px] font-medium"
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
          >
            <span className="w-4 h-3 flex flex-col justify-around">
              <span
                className={`block w-full h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 bg-bg-elev border border-line rounded-2xl shadow-card animate-fadeIn">
          <div className="px-5 py-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="mt-2 text-center px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {l.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
