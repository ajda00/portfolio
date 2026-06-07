import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, LANGS } from "../lib/types";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const isSl = lang === "sl";

  return {
    title: isSl
      ? "Izdelava spletnih strani | Ajda Zajc — Spletne strani, aplikacije & landing page"
      : "Web Design & Development | Ajda Zajc — Websites, apps & landing pages",
    description: isSl
      ? "Izdelava spletne strani po meri za startupi in mala podjetja v Ljubljani. Profesionalno oblikovanje in razvoj z Next.js. Od ideje do objave v nekaj dneh."
      : "Custom websites, landing pages and mobile apps for startups and small businesses. Design + development with Next.js and React. From idea to launch in days.",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        sl: "/sl",
        en: "/en",
        "x-default": "/sl",
      },
    },
    openGraph: {
      locale: isSl ? "sl_SI" : "en_US",
      type: "website",
      url: `https://ajdazajc.com/${lang}`,
      title: isSl
        ? "Izdelava spletnih strani | Ajda Zajc"
        : "Web Design & Development | Ajda Zajc",
      description: isSl
        ? "Izdelava spletnih strani, landing page strani in mobilnih aplikacij. Ljubljana, Slovenija."
        : "Websites, landing pages, and mobile apps. Ljubljana, Slovenia.",
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <>{children}</>;
}
