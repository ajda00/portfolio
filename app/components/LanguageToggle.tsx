"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "../lib/types";

interface Props {
  lang: Lang;
  className?: string;
  ariaLabel?: string;
}

export default function LanguageToggle({ lang, className, ariaLabel }: Props) {
  const pathname = usePathname() || "/";
  const otherLang: Lang = lang === "sl" ? "en" : "sl";

  let href = `/${otherLang}`;
  if (pathname.startsWith("/sl") || pathname.startsWith("/en")) {
    href = `/${otherLang}${pathname.slice(3) || ""}`;
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={className}
      prefetch={false}
    >
      {otherLang.toUpperCase()}
    </Link>
  );
}
