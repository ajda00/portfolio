"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { featuredProjects, otherProjects } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import {
  StickyFeatureSection,
  type StickyFeature,
} from "../ui/sticky-scroll-cards-section";

interface Props {
  lang: Lang;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// Warm bronze palette — light to deep, matches the AZ brand accent
const palettes = [
  {
    bg: "bg-[#F5F0EB] dark:bg-[#1a1610]",
    text: "text-gray-700 dark:text-gray-300",
  },
  {
    bg: "bg-[#E8DCCB] dark:bg-[#2a2218]",
    text: "text-gray-700 dark:text-gray-300",
  },
  {
    bg: "bg-[#D4C2A8] dark:bg-[#3a2f22]",
    text: "text-gray-800 dark:text-gray-300",
  },
];

export default function Work({ lang }: Props) {
  const l = getDictionary(lang);
  const reduce = useReducedMotion();
  const sectionId = l.nav.items[1];

  const stickyFeatures: StickyFeature[] = featuredProjects.map((project, i) => {
    const meta = l.work.projects[project.key];
    const palette = palettes[i % palettes.length];
    return {
      title: project.name,
      description: meta.desc,
      image: project.image,
      imageAlt: project.name,
      bgColor: palette.bg,
      textColor: palette.text,
      href: project.url,
      hrefLabel: l.work.visitSite,
      tags: project.tags,
      eyebrow: `${String(i + 1).padStart(2, "0")} — ${meta.role}`,
    };
  });

  const motionText = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-120px" },
          transition: { duration: 0.6, ease: easeOutExpo, delay },
        };

  return (
    <>
      <StickyFeatureSection
        id={sectionId}
        eyebrow={l.work.label}
        title={l.work.title}
        features={stickyFeatures}
        stickyTop={200}
      />

      {/* Other projects */}
      <section className="bg-[#FAFAFA] dark:bg-[#0A0A0A] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...motionText(0)}
            className="pt-12 md:pt-16 border-t border-gray-100 dark:border-gray-800"
          >
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-8">
              {l.work.other}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((p) => {
                const desc = l.work.otherProjects[p.key];
                const inner = (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      {p.logo ? (
                        <Image
                          src={p.logo}
                          alt=""
                          width={18}
                          height={18}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                      )}
                      <h3 className="font-semibold text-[14px] text-gray-900 dark:text-white">
                        {p.name}
                      </h3>
                      {p.badge && (
                        <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-medium text-gray-500 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );

                if (p.url) {
                  return (
                    <a
                      key={p.key}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl p-5 ring-1 ring-gray-100 dark:ring-gray-800 hover:ring-gray-200 dark:hover:ring-gray-700 transition-all"
                    >
                      {inner}
                    </a>
                  );
                }
                return (
                  <div
                    key={p.key}
                    className="group rounded-xl p-5 ring-1 ring-gray-100 dark:ring-gray-800"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
