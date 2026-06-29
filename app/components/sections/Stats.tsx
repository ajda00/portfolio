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
                className="bg-bg-elev rounded-3xl p-6 md:p-8 min-h-[200px] flex flex-col justify-center"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
