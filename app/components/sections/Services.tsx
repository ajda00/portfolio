import { Check } from "lucide-react";
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
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-12">
          {l.services.items.map((service) => (
            <SectionReveal
              key={service.title}
              y={16}
              className="flex flex-row gap-5 items-start"
            >
              <Check
                className="w-5 h-5 mt-1 text-ink shrink-0"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <p className="text-ink font-medium leading-snug">
                {service.title}
              </p>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
