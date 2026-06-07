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
    <section id={sectionId} className="bg-app pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="pill-outline mb-6">
            <span>{l.services.label}</span>
          </span>
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.services.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.services.title.split(" ").slice(-1)[0]}</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {l.services.items.map((service) => (
            <SectionReveal
              key={service.title}
              y={16}
              className="group bg-bg-elev rounded-3xl p-6 md:p-8 transition-shadow hover:shadow-card"
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed max-w-[42ch]">
                {service.description}
              </p>
            </SectionReveal>
          ))}
        </div>

        {/* Tech stack footer */}
        <SectionReveal className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-baseline md:justify-between gap-5">
          <p className="text-sm font-medium text-muted shrink-0">
            {l.services.techLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-bg-elev border border-line text-[12px] font-medium text-muted"
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
