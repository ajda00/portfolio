"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { Circle } from "lucide-react";

const WebGLShader = dynamic(
  () =>
    import("../ui/web-gl-shader").then((mod) => ({
      default: mod.WebGLShader,
    })),
  { ssr: false },
);

interface Props {
  kicker: string;
  title1: string;
  titleConnector: string;
  titleEm: string;
  subtitle: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function HeroShader({
  kicker,
  title1,
  titleConnector,
  titleEm,
  subtitle,
  cta1,
  cta2,
}: Props) {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: easeOutExpo, delay },
        };

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: "max(640px, 100svh)" }}
    >
      <WebGLShader clearColor="#000000" />

      {/* Vignette only — pulls the corners darker around the headline.
          No bottom fade: the next section provides its own background. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.15] mb-8 md:mb-10"
          >
            <Circle aria-hidden="true" className="h-2 w-2 fill-accent text-accent" />
            <span className="text-sm text-white/80 tracking-wide">{kicker}</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-heading font-bold mb-6 md:mb-8 tracking-tight leading-[0.95] text-white"
            style={{ fontSize: "clamp(2.25rem, 9vw, 6rem)" }}
          >
            {title1}
            <br />
            <span className="font-display italic font-normal text-white/85">
              {titleConnector}
              {titleEm}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-base sm:text-lg text-white/70 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={cta1.href}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#0a0705] font-medium text-[14px] hover:bg-white/90 transition-colors"
            >
              {cta1.label}
              <svg
                aria-hidden="true"
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
              href={cta2.href}
              className="text-[14px] text-white/70 hover:text-white font-medium transition-colors px-4 py-3.5"
            >
              {cta2.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
