import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function Approach({ lang }: Props) {
  const l = getDictionary(lang);
  const total = l.approach.items.length;

  return (
    <section className="bg-app pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-[1360px] mx-auto px-6">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="pill-outline mb-6">
            <span>{l.approach.label}</span>
          </span>
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mt-4 mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">
              {l.approach.title.split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="font-bold">
              {l.approach.title.split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-[60ch] mx-auto">
            {l.approach.intro}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {l.approach.items.map((item, i) => (
            <SectionReveal
              key={item.title}
              delay={i * 0.06}
              className="bg-bg-elev rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display font-bold text-ink text-3xl md:text-4xl tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-muted-soft font-mono tabular-nums">
                  / {String(total).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {item.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
