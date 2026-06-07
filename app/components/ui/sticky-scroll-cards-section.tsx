"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface StickyFeature {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt?: string;
  bgColor: string;
  textColor: string;
  href?: string;
  hrefLabel?: string;
  tags?: string[];
  eyebrow?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: StickyFeature[];
  /** Distance from top of viewport where cards stick (px). Default 200. */
  stickyTop?: number;
  /** Tailwind classes for the outer section wrapper background. */
  className?: string;
  /** Optional id for in-page navigation. */
  id?: string;
}

function AnimatedHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = reduce || inView;

  return (
    <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
      {eyebrow && (
        <p
          className={cn(
            "text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4 transition-all duration-700 ease-out",
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading font-bold text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white transition-all duration-700 ease-out",
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-gray-600 dark:text-gray-300 mt-4 transition-all duration-700 ease-out delay-200",
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function StickyFeatureSection({
  eyebrow,
  title,
  subtitle,
  features,
  stickyTop = 200,
  className,
  id,
}: Props) {
  return (
    <div
      id={id}
      className={cn("bg-[#FAFAFA] dark:bg-[#0A0A0A] font-sans", className)}
    >
      <div className="max-w-7xl mx-auto px-6">
        <section className="pt-24 md:pt-32 pb-8">
          <AnimatedHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

          <div>
            {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    feature.bgColor,
                    "grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-6 sm:p-8 md:p-12 rounded-3xl mb-6 sticky shadow-xl shadow-black/[0.04]",
                  )}
                  style={{
                    top: `clamp(80px, 12vh, ${stickyTop}px)`,
                  }}
                >
                  <div className="flex flex-col justify-center">
                    {feature.eyebrow && (
                      <p className="text-[12px] uppercase tracking-[0.18em] text-gray-700/70 dark:text-gray-200/70 mb-3">
                        {feature.eyebrow}
                      </p>
                    )}
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className={cn("text-base leading-relaxed max-w-[55ch]", feature.textColor)}>
                      {feature.description}
                    </p>

                    {feature.tags && feature.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-white/50 dark:bg-black/30 text-[11px] font-medium text-gray-700 dark:text-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {feature.href && (
                      <a
                        href={feature.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 mt-6 text-[14px] font-medium text-gray-900 dark:text-white"
                      >
                        <span className="border-b border-current pb-0.5">
                          {feature.hrefLabel ?? "View"}
                        </span>
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="image-wrapper mt-8 md:mt-0">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt ?? feature.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
