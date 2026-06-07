import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function Process({ lang }: Props) {
  const l = getDictionary(lang);

  return (
    <section className="bg-app pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="pill-outline mb-6">
            <span>{l.process.label}</span>
          </span>
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.process.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.process.title.split(" ").slice(-1)[0]}</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {l.process.steps.map((step, i) => (
            <SectionReveal
              key={step.title}
              delay={i * 0.08}
              className="bg-bg-elev rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display font-bold text-ink text-3xl md:text-4xl tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted-soft font-mono tabular-nums">
                  / 03
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
