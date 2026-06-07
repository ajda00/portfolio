"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";

interface Props {
  lang: Lang;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function CTABanner({ lang }: Props) {
  const l = getDictionary(lang);
  const reduce = useReducedMotion();
  const contactHref = `#${l.nav.items[3]}`;
  const workHref = `#${l.nav.items[1]}`;

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, ease: easeOutExpo },
      };

  return (
    <section className="bg-app py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...reveal}
          className="bg-ink-deep text-white rounded-3xl p-10 md:p-16 lg:p-20 text-center"
        >
          <h2
            className="font-display text-white leading-[1.05] tracking-[-0.03em] mb-6 mx-auto max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <span className="font-light">{l.cta.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.cta.title.split(" ").slice(-1)[0]}</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-[50ch] mx-auto leading-relaxed">
            {l.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={contactHref}
              className="press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow text-ink text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {l.cta.cta1}
            </a>
            <a
              href={workHref}
              className="press inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {l.cta.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
