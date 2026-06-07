import { techStack } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function Services({ lang }: Props) {
  const l = getDictionary(lang);
  const sectionId = l.nav.items[0];

  return (
    <section id={sectionId} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <SectionReveal className="lg:col-span-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white leading-[1.1] max-w-[16ch]">
              {l.services.title}
            </h2>
          </SectionReveal>

          <div className="lg:col-span-8">
            {l.services.items.map((service, i) => (
              <SectionReveal
                key={service.title}
                delay={i * 0.04}
                y={16}
                className={`group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-7 md:py-8 ${
                  i < l.services.items.length - 1
                    ? "border-b border-gray-100 dark:border-gray-800/60"
                    : ""
                }`}
              >
                <span className="font-mono text-[12px] text-gray-300 dark:text-gray-700 pt-0.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[60ch]">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 shrink-0">
            {l.services.techLabel}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[14px] text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
