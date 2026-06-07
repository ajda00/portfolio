"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import ajdaWalking from "../../../src/images/ajda-2.png";
import manjatkShowcase from "../../../src/images/manjatk-showcase.png";
import ordinemShowcase from "../../../src/images/ordinem-showcase.png";
import topsiShowcase from "../../../src/images/topsi-showcase.png";

interface Props {
  title1: string;
  titleEm: string;
  subtitle: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function HeroPortfolio({
  title1,
  titleEm,
  subtitle,
  cta1,
  cta2,
}: Props) {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: easeOutExpo, delay },
        };

  return (
    <section className="relative bg-app overflow-hidden pt-32 md:pt-40 pb-20">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Yellow pill kicker */}
        <motion.div {...fade(0)} className="flex justify-center mb-8">
          <span className="pill-yellow">
            <span className="font-semibold">3 projekti</span>
            <span className="text-ink/70">na voljo julija</span>
          </span>
        </motion.div>

        {/* Headline — mixed weight */}
        <motion.h1
          {...fade(0.1)}
          className="text-center mx-auto max-w-4xl text-ink leading-[1.05] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
        >
          <span className="font-light">{title1.split(" ").slice(0, -1).join(" ")} </span>
          <span className="font-bold">{title1.split(" ").slice(-1)[0]}</span>
          <br />
          <span className="font-light">{titleEm}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fade(0.2)}
          className="mt-6 text-center text-base text-muted max-w-lg mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fade(0.3)}
          className="mt-8 flex justify-center items-center gap-3"
        >
          <a
            href={cta1.href}
            className="press inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {cta1.label}
          </a>
          <a
            href={cta2.href}
            className="press inline-flex items-center justify-center px-6 py-3 rounded-full border border-line bg-bg-elev text-ink text-sm font-medium hover:border-ink transition-colors"
          >
            {cta2.label}
          </a>
        </motion.div>

        {/* Portrait + fanned project mockups */}
        <motion.div
          {...fade(0.5)}
          className="relative mt-16 md:mt-20 h-[420px] md:h-[520px] flex items-center justify-center"
        >
          {/* Fanned browser-window mockups behind */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Far left */}
            <div
              className="absolute w-56 md:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-bg-elev"
              style={{
                transform: "translateX(-120%) rotate(-8deg)",
                opacity: 0.85,
              }}
            >
              <div className="h-6 bg-bg-deep border-b border-line flex items-center px-3 gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
              </div>
              <div className="relative h-[calc(100%-1.5rem)]">
                <Image
                  src={topsiShowcase}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>

            {/* Mid left */}
            <div
              className="absolute w-56 md:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-bg-elev"
              style={{
                transform: "translateX(-60%) rotate(-4deg)",
                opacity: 0.95,
                zIndex: 1,
              }}
            >
              <div className="h-6 bg-bg-deep border-b border-line flex items-center px-3 gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
              </div>
              <div className="relative h-[calc(100%-1.5rem)]">
                <Image
                  src={manjatkShowcase}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>

            {/* Mid right */}
            <div
              className="absolute w-56 md:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-bg-elev"
              style={{
                transform: "translateX(60%) rotate(4deg)",
                opacity: 0.95,
                zIndex: 1,
              }}
            >
              <div className="h-6 bg-bg-deep border-b border-line flex items-center px-3 gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
              </div>
              <div className="relative h-[calc(100%-1.5rem)]">
                <Image
                  src={ordinemShowcase}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>

            {/* Far right */}
            <div
              className="absolute w-56 md:w-72 aspect-[4/3] rounded-xl overflow-hidden shadow-card bg-bg-elev"
              style={{
                transform: "translateX(120%) rotate(8deg)",
                opacity: 0.85,
              }}
            >
              <div className="h-6 bg-bg-deep border-b border-line flex items-center px-3 gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line" />
              </div>
              <div className="relative h-[calc(100%-1.5rem)]">
                <Image
                  src={topsiShowcase}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="288px"
                />
              </div>
            </div>
          </div>

          {/* Center portrait — iPad-style frame */}
          <div
            className="relative w-[260px] md:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-ink shadow-brand-lg"
            style={{ zIndex: 2 }}
          >
            <Image
              src={ajdaWalking}
              alt="Ajda Zajc"
              fill
              priority
              sizes="(min-width: 768px) 340px, 260px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
