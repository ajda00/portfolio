"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statsValues } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";

interface Props {
  lang: Lang;
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function StatValue({ raw }: { raw: string }) {
  const match = raw.match(/^(\d+)(.*)$/);
  if (match) {
    return <CountUp target={Number(match[1])} suffix={match[2]} />;
  }
  return <span>{raw}</span>;
}

export default function Stats({ lang }: Props) {
  const l = getDictionary(lang);

  const bio = lang === "sl" ? "Živjo, jaz sem Ajda." : "Hi, I'm Ajda.";
  const bioText =
    lang === "sl"
      ? "Prihajam iz Ljubljane. Oblikujem in razvijam spletne strani in aplikacije — za tiste, ki šele začenjate, in za tiste, ki točno veste, kaj hočete."
      : "From Ljubljana. I design and build websites and apps — for people just starting out, and for those who already know exactly what they want.";
  const aboutLabel = lang === "sl" ? "Več o meni" : "More about me";

  const stats = [
    {
      value: statsValues[1], // "5+"
      label: lang === "sl" ? "let" : "years",
    },
    {
      value: statsValues[0], // "20+"
      label: lang === "sl" ? "projektov" : "projects",
    },
    {
      value: "100%",
      label: lang === "sl" ? "po meri" : "custom",
    },
    {
      value: "24h",
      label: lang === "sl" ? "odgovor" : "reply",
    },
  ];

  return (
    <section className="bg-app py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="bg-ink-deep text-white rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-end gap-8 md:gap-12">
            {/* Bio */}
            <div className="max-w-md">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                {bio}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed mb-4">
                {bioText}
              </p>
              <a
                href={`#${l.nav.items[2]}`}
                className="press inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/70 transition-colors"
              >
                {aboutLabel} <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Inline stats — no cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-5 md:gap-10 md:border-l md:border-white/15 md:pl-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display font-bold text-white tabular-nums leading-none"
                    style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
                  >
                    <StatValue raw={stat.value} />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.12em] text-white/55 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
