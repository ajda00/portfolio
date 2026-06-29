"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredProjects, otherProjects } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";

interface Props {
  lang: Lang;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const AUTO_ADVANCE_MS = 5000;

export default function Work({ lang }: Props) {
  const l = getDictionary(lang);
  const reduce = useReducedMotion();
  const sectionId = l.nav.items[1];

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.7, ease: easeOutExpo, delay },
        };

  // Infinite-loop: render projects 3x, start in the middle copy so the active
  // card always has a previous and next card peeking on either side.
  const N = featuredProjects.length;
  const loopedProjects = [
    ...featuredProjects,
    ...featuredProjects,
    ...featuredProjects,
  ];
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(N);
  const [isPaused, setIsPaused] = useState(false);
  const isProgrammaticScroll = useRef(false);

  const scrollToIndex = useCallback(
    (index: number, smooth = true) => {
      const rail = railRef.current;
      const card = cardRefs.current[index];
      if (!rail || !card) return;
      isProgrammaticScroll.current = true;
      const cardCenter = card.offsetLeft - rail.offsetLeft + card.offsetWidth / 2;
      const targetLeft = cardCenter - rail.clientWidth / 2;
      rail.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: smooth && !reduce ? "smooth" : "auto",
      });
      window.setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);
    },
    [reduce]
  );

  // Initial scroll to the middle copy (no animation)
  useEffect(() => {
    scrollToIndex(N, false);
  }, [N, scrollToIndex]);

  // If activeIndex drifts out of the middle copy, silently jump back so the
  // user always has a project peeking on the left AND the right.
  useEffect(() => {
    if (activeIndex < N || activeIndex >= 2 * N) {
      const equivalent = N + ((activeIndex % N) + N) % N;
      if (equivalent === activeIndex) return;
      const t = window.setTimeout(() => {
        setActiveIndex(equivalent);
        scrollToIndex(equivalent, false);
      }, 900); // after the smooth scroll settles
      return () => window.clearTimeout(t);
    }
  }, [activeIndex, N, scrollToIndex]);

  // Sync activeIndex when user scrolls manually
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const viewportCenter = rail.scrollLeft + rail.clientWidth / 2;
        let bestIndex = 0;
        let bestDelta = Number.POSITIVE_INFINITY;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter =
            card.offsetLeft - rail.offsetLeft + card.offsetWidth / 2;
          const delta = Math.abs(cardCenter - viewportCenter);
          if (delta < bestDelta) {
            bestDelta = delta;
            bestIndex = i;
          }
        });
        setActiveIndex(bestIndex);
      });
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused || reduce) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [isPaused, reduce, scrollToIndex]);

  const goTo = (realIndex: number) => {
    const target = N + realIndex;
    setActiveIndex(target);
    scrollToIndex(target);
  };

  const realActiveIndex = ((activeIndex % N) + N) % N;

  return (
    <section
      id={sectionId}
      className="bg-app pt-20 md:pt-28 pb-24 md:pb-32"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <motion.div
          {...reveal()}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.work.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.work.title.split(" ").slice(-1)[0]}</span>
          </h2>
        </motion.div>
      </div>

      {/* Featured projects — auto-advancing carousel rail */}
      <motion.div
        {...reveal()}
        aria-roledescription="carousel"
        aria-label={l.work.label}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          ref={railRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 pb-6 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingInline: "max(1.5rem, calc(50vw - 24rem))",
            scrollPaddingInline: "max(1.5rem, calc(50vw - 24rem))",
          }}
        >
            {loopedProjects.map((project, i) => {
              const realIndex = i % N;
              return (
                <article
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  key={`${i}-${project.key}`}
                  aria-roledescription="slide"
                  aria-label={`${realIndex + 1} / ${N} — ${project.name}`}
                  aria-hidden={i !== activeIndex}
                  className="group snap-center shrink-0 w-[88vw] sm:w-[78vw] md:w-[68vw] lg:w-[58vw] xl:w-[48rem] bg-bg-elev rounded-3xl overflow-hidden shadow-brand-md border border-line transition-opacity duration-500"
                  style={{ opacity: i === activeIndex ? 1 : 0.55 }}
                >
                  <div className="h-10 bg-bg-deep border-b border-line flex items-center px-4 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line" />
                    <div className="flex-1 mx-4">
                      <div className="max-w-xs mx-auto px-3 py-1 rounded-md bg-bg-elev text-[11px] text-muted text-center truncate">
                        {project.url.replace("https://", "")}
                      </div>
                    </div>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/9] overflow-hidden"
                    aria-label={`${project.name} — ${l.work.visitSite}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(min-width: 1280px) 768px, (min-width: 1024px) 58vw, (min-width: 640px) 78vw, 88vw"
                    />
                  </a>

                  <div className="px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-ink leading-tight tracking-tight truncate">
                      {project.name}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink hover:opacity-70 transition-opacity whitespace-nowrap"
                    >
                      {l.work.visitSite} →
                    </a>
                  </div>
                </article>
              );
            })}
        </div>

        {/* Dots */}
        <div
          className="flex items-center justify-center gap-2 mt-6"
          role="tablist"
          aria-label={l.work.label}
        >
          {featuredProjects.map((p, i) => {
            const isActive = i === realActiveIndex;
            return (
              <button
                key={p.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${p.name} (${i + 1} / ${N})`}
                onClick={() => goTo(i)}
                className={
                  "h-2 rounded-full transition-all duration-500 ease-out " +
                  (isActive
                    ? "w-8 bg-ink"
                    : "w-2 bg-line hover:bg-muted")
                }
              />
            );
          })}
        </div>
      </motion.div>

      <div className="max-w-[1360px] mx-auto px-6">
        {/* Other projects */}
        <motion.div
          {...reveal()}
          className="mt-20 md:mt-28 pt-10 border-t border-line"
        >
          <p className="text-[12px] uppercase tracking-[0.2em] text-muted font-medium mb-8">
            {l.work.other}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherProjects.map((p) => {
              const desc = l.work.otherProjects[p.key];
              const inner = (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt=""
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-bg-deep border border-line" />
                    )}
                    <h3 className="font-semibold text-sm text-ink">{p.name}</h3>
                    {p.badge && (
                      <span className="ml-auto pill-outline !py-0 !px-2 !text-[10px]">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed mb-4">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-bg-deep border border-line text-[10px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              const classes =
                "press bg-bg-elev rounded-2xl p-5 transition-shadow hover:shadow-soft";

              if (p.url) {
                return (
                  <a
                    key={p.key}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <div key={p.key} className={classes}>
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
