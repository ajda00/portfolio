"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { featuredProjects, otherProjects } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";

interface Props {
  lang: Lang;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

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

  return (
    <section
      id={sectionId}
      className="bg-app pt-20 md:pt-28 pb-24 md:pb-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...reveal()}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="pill-outline mb-6">
            <span>{l.work.label}</span>
          </span>
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.work.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.work.title.split(" ").slice(-1)[0]}</span>
          </h2>
        </motion.div>

        {/* Featured project cards */}
        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, i) => {
            const meta = l.work.projects[project.key];
            return (
              <motion.article
                {...reveal()}
                key={project.key}
                className="group bg-bg-elev rounded-3xl overflow-hidden shadow-soft"
              >
                {/* Browser chrome */}
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

                {/* Image */}
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
                    sizes="(min-width: 1280px) 1024px, 100vw"
                  />
                </a>

                {/* Caption */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-4">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-muted mb-2">
                      {String(i + 1).padStart(2, "0")} · {meta.role}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink leading-tight tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-base text-muted leading-relaxed max-w-[55ch] mb-4">
                      {meta.desc}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-bg-deep border border-line text-[11px] font-medium text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-ink hover:opacity-70 transition-opacity whitespace-nowrap"
                      >
                        {l.work.visitSite} →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

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
