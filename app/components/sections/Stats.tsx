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
  return (
    <section className="border-t border-gray-100 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-3 gap-6">
          {l.stats.map((stat, i) => (
            <div key={stat.label}>
              <span
                className={`font-heading font-semibold text-2xl md:text-4xl tabular-nums ${
                  i === 0
                    ? "text-accent"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <StatValue raw={statsValues[i]} />
              </span>
              <p className="mt-1 text-[12px] md:text-[13px] text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
