"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import azGradient from "../../src/images/AZ-gradient.svg";
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
    <header className="fixed top-0 left-0 w-full z-40">
      <nav
        className="backdrop-blur-xl bg-white/90 dark:bg-black/85 border-b border-gray-200/70 dark:border-gray-800/60"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href={home} aria-label="Ajda Zajc">
            <Image
              src={azGradient}
              alt="Ajda Zajc Logo"
              width={80}
              height={40}
              className="h-7 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="ml-2 px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              {l.nav.cta}
            </Link>
            <LanguageToggle
              lang={lang}
              ariaLabel={l.language.toggleAria}
              className="ml-1 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-[12px] font-medium text-gray-700 dark:text-gray-200 hover:border-accent hover:text-accent transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle
              lang={lang}
              ariaLabel={l.language.toggleAria}
              className="px-2.5 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-[12px] font-medium text-gray-700 dark:text-gray-200"
            />
            <button
              type="button"
              className="relative w-11 h-11 -mr-2 flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              <span className="w-6 h-6 flex flex-col justify-around">
                <span
                  className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-gray-800 dark:text-gray-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="mt-1 text-center px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
