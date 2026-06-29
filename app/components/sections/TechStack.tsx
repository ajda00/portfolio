import { techStack } from "../../lib/data";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function TechStack({ lang }: Props) {
  const l = getDictionary(lang);

  return (
    <section className="bg-app pt-12 md:pt-16 pb-16 md:pb-20">
      <div className="max-w-[1360px] mx-auto px-6">
        <SectionReveal className="pt-8 border-t border-line flex flex-col md:flex-row md:items-baseline md:justify-between gap-5">
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
