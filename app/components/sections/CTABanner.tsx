"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";

interface Props {
  lang: Lang;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function CTABanner({ lang }: Props) {
  const l = getDictionary(lang);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);
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
    <section className="relative py-24 md:py-32 bg-surface-dark overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div {...reveal} className="flex-1 text-center md:text-left">
            <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.05]">
              {l.cta.title}
            </h2>
            <p className="text-gray-300 text-base mb-8 max-w-[50ch]">
              {l.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <a
                href={contactHref}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-gray-900 font-medium text-[14px] hover:bg-gray-100 transition-colors"
              >
                {l.cta.cta1}
                <svg aria-hidden="true"
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
              <a
                href={workHref}
                className="text-gray-400 hover:text-white text-[14px] font-medium transition-colors"
              >
                {l.cta.cta2}
              </a>
            </div>
          </motion.div>

          <motion.button
            {...reveal}
            type="button"
            onClick={() => setPlaying(true)}
            className="relative aspect-[9/16] w-full max-w-[200px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 shrink-0 group"
            aria-label="Play showcase video"
          >
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QiGk8JJ26bw?autoplay=1&mute=1&loop=1&playlist=QiGk8JJ26bw&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0"
                title="Showcase video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <>
                {/* biome-ignore lint/performance/noImgElement: external YouTube thumbnail URL not configured in next.config remotePatterns */}
                <img
                  src="https://img.youtube.com/vi/QiGk8JJ26bw/hqdefault.jpg"
                  alt="Showcase video poster"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all">
                    <svg aria-hidden="true"
                      className="w-5 h-5 ml-0.5 text-gray-900"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
