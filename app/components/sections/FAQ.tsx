import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function FAQ({ lang }: Props) {
  const l = getDictionary(lang);
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <SectionReveal className="lg:col-span-4">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 dark:text-white leading-[1.1] max-w-[18ch]">
              {l.faq.title}
            </h2>
          </SectionReveal>

          <div className="lg:col-span-8">
            {l.faq.items.map((faq, i) => (
              <SectionReveal key={faq.q} delay={i * 0.04}>
                <details
                  className={`group ${
                    i < l.faq.items.length - 1
                      ? "border-b border-gray-100 dark:border-gray-800"
                      : ""
                  }`}
                >
                  <summary className="flex items-start justify-between cursor-pointer py-6 text-base font-medium text-gray-900 dark:text-white select-none">
                    <span className="pr-6">{faq.q}</span>
                    <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center text-gray-400">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 transition-transform duration-200 group-open:rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
