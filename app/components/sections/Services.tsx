import {
  CodeXml,
  Cpu,
  Megaphone,
  Palette,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

const serviceIcons: LucideIcon[] = [
  Palette,
  CodeXml,
  Smartphone,
  Sparkles,
  Megaphone,
  Cpu,
];

export default function Services({ lang }: Props) {
  const l = getDictionary(lang);
  const sectionId = l.nav.items[0];

  return (
    <section id={sectionId} className="bg-app pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-10">
          {l.services.items.map((service, i) => {
            const Icon = serviceIcons[i] ?? Sparkles;
            return (
              <SectionReveal
                key={service.title}
                y={16}
                className="flex flex-row gap-3 items-center"
              >
                <Icon
                  className="w-5 h-5 text-ink shrink-0"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="text-ink font-medium leading-snug">
                  {service.title}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
