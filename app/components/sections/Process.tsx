import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function Process({ lang }: Props) {
  const l = getDictionary(lang);

  const icons = [
    <svg aria-hidden="true"
      key="1"
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>,
    <svg aria-hidden="true"
      key="2"
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
      />
    </svg>,
    <svg aria-hidden="true"
      key="3"
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>,
  ];

  return (
    <section className="relative py-24 md:py-32 bg-surface-dark overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionReveal className="mb-16 md:mb-20 max-w-xl">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-[1.1]">
            {l.process.title}
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {l.process.steps.map((step, i) => (
            <SectionReveal
              key={step.title}
              delay={i * 0.06}
              className="relative md:pr-6"
            >
              <span className="absolute top-0 right-0 font-mono text-[11px] text-gray-500 tabular-nums">
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-6">
                {icons[i]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] text-gray-300 leading-relaxed max-w-[40ch]">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
