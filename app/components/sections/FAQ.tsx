import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function FAQ({ lang }: Props) {
  const l = getDictionary(lang);
  return (
    <section className="bg-app py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionReveal className="text-center mb-12 md:mb-16">
          <span className="pill-outline mb-6">
            <span>{l.faq.label}</span>
          </span>
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.faq.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.faq.title.split(" ").slice(-1)[0]}</span>
          </h2>
        </SectionReveal>

        <div className="space-y-3">
          {l.faq.items.map((faq, i) => (
            <SectionReveal key={faq.q} delay={i * 0.04}>
              <details className="group bg-bg-elev rounded-2xl overflow-hidden">
                <summary className="flex items-start justify-between cursor-pointer px-6 py-5 text-base font-medium text-ink select-none">
                  <span className="pr-6">{faq.q}</span>
                  <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center text-muted">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 transition-transform duration-300 group-open:rotate-45"
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
                <p className="px-6 pb-5 pr-12 text-[15px] text-muted leading-relaxed max-w-[65ch]">
                  {faq.a}
                </p>
              </details>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
