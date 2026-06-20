"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ajdaWalking from "../../../src/images/ajda-wisteria.jpg";
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

  const bio = lang === "sl" ? "Sem Ajda Zajc" : "I'm Ajda Zajc";
  const bioText =
    lang === "sl"
      ? "Oblikovalka in razvijalka iz Ljubljane. Gradim spletne strani in aplikacije za startupe in mala podjetja. Od strategije do objave, vse v eni glavi."
      : "Designer and developer based in Ljubljana. I build websites and apps for startups and small businesses. Strategy to launch, no handoff seams.";
  const aboutLabel = lang === "sl" ? "O meni" : "About me";

  // Build 4 stat cards. statsValues = ["20+", "5+", "Web & Mobile"]; pad with one more.
  const stats = [
    {
      value: statsValues[1], // "5+"
      label: lang === "sl" ? "let" : "years",
      context:
        lang === "sl"
          ? "Izkušnje pri Popsy (Y Combinator), MooHero in Topsi AI."
          : "Built products at Popsy (Y Combinator), MooHero, and Topsi AI.",
    },
    {
      value: statsValues[0], // "20+"
      label: lang === "sl" ? "projektov" : "projects",
      context:
        lang === "sl"
          ? "Od enostavnih landing strani do kompleksnih aplikacij."
          : "From simple landing pages to complex apps.",
    },
    {
      value: "100%",
      label: lang === "sl" ? "solo delo" : "solo work",
      context:
        lang === "sl"
          ? "Oblikovanje in razvoj v isti glavi. Brez izgubljenih prevodov."
          : "Design and dev in one head. No handoff drift.",
    },
    {
      value: "24h",
      label: lang === "sl" ? "odgovor" : "response",
      context:
        lang === "sl"
          ? "Odgovorim na povpraševanje v roku enega dne."
          : "I reply to inquiries within one business day.",
    },
  ];

  return (
    <section className="bg-deep py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Black bio card */}
          <div className="lg:col-span-4 relative bg-ink-deep text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">
                {bio}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed max-w-[36ch]">
                {bioText}
              </p>
            </div>

            {/* Portrait thumb floating bottom-left of pill */}
            <div className="relative mt-8">
              <div className="absolute -top-12 left-1/2 -translate-x-[60%] w-12 h-12 rounded-full overflow-hidden ring-2 ring-ink-deep">
                <Image
                  src={ajdaWalking}
                  alt="Ajda Zajc"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <a
                href={`#${l.nav.items[2]}`}
                className="press w-full block text-center bg-white text-ink rounded-full py-3 text-sm font-medium hover:bg-bg-deep transition-colors"
              >
                <span className="ml-6">{aboutLabel}</span>
              </a>
            </div>
          </div>

          {/* 2x2 white stat cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-elev rounded-3xl p-6 md:p-8 min-h-[200px] flex flex-col"
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display font-bold text-ink tabular-nums leading-none"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    <StatValue raw={stat.value} />
                  </span>
                  <span className="text-sm font-medium text-muted">
                    {stat.label}
                  </span>
                </div>
                <p className="mt-auto pt-4 text-[13px] text-muted leading-relaxed">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
