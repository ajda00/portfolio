"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import ajdaWalking from "../../../src/images/ajda-wisteria.jpg";
import manjatkHero from "../../../src/images/manjatk-hero.png";
import mooheroHero from "../../../src/images/moohero-hero.png";
import ninaHero from "../../../src/images/nina-hero.png";
import ordinemHero from "../../../src/images/ordinem-hero.png";
import topsiHero from "../../../src/images/topsi-hero.png";
import { featuredProjects } from "../../lib/data";
import type { ProjectKey } from "../../lib/data";
import { AuroraBackground } from "../ui/aurora-background";

// Hero-only image overrides (e.g. tilted/lifestyle shots that don't fit the
// flat browser-window treatment used in the Work carousel)
const heroImageOverrides: Partial<Record<ProjectKey, StaticImageData>> = {
  manjatk: manjatkHero,
  topsi: topsiHero,
  moohero: mooheroHero,
  ordinem: ordinemHero,
  nina: ninaHero,
};

interface Props {
  title1: string;
  titleEm: string;
  titleConnector?: string;
  subtitle: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function HeroPortfolio({
  title1,
  titleEm,
  titleConnector = "",
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
    <section className="relative bg-app overflow-hidden pt-44 md:pt-60 pb-20">
      <AuroraBackground className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-[1360px] mx-auto px-6">
        {/* Headline — mixed weight */}
        <motion.h1
          {...fade(0)}
          className="text-center mx-auto max-w-4xl text-ink leading-[1.05] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
        >
          <span className="font-light">{title1.split(" ").slice(0, -1).join(" ")} </span>
          <span className="font-bold">{title1.split(" ").slice(-1)[0]}</span>
          <br />
          <span className="font-light">
            {titleConnector}
            {titleEm}
          </span>
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
          className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 max-w-xs mx-auto sm:max-w-none"
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

      </div>

      {/* Marquee of project mockups, with portrait centered on top */}
      <motion.div
        {...fade(0.5)}
        className="relative mt-6 md:mt-8 h-[520px] md:h-[760px]"
      >
        {/* Marquee strip — slides infinitely behind the portrait */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            className="flex items-center gap-5 md:gap-6 animate-hero-marquee will-change-transform"
            style={{ width: "max-content" }}
          >
            {[
              ...featuredProjects,
              ...featuredProjects,
              ...featuredProjects,
            ].map((project, i) => {
              const src = heroImageOverrides[project.key] ?? project.image;
              return (
                <div
                  key={`${i}-${project.key}`}
                  className="relative h-[16rem] md:h-[26rem] shrink-0 rounded-2xl overflow-hidden bg-bg-elev shadow-brand-lg ring-1 ring-ink/10 border border-line"
                >
                  <Image
                    src={src}
                    alt=""
                    sizes="(min-width: 768px) 480px, 300px"
                    className="block h-full w-auto object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Center portrait — iPad-style frame, sits on top of the marquee */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-[300px] md:w-[420px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-ink shadow-brand-lg pointer-events-auto">
            <Image
              src={ajdaWalking}
              alt="Ajda Zajc"
              fill
              priority
              sizes="(min-width: 768px) 420px, 300px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
