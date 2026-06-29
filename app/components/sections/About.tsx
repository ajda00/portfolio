import Image from "next/image";
import ajdaFlowers from "../../../src/images/ajda-flowers.jpg";
import mooheroAward from "../../../src/images/moohero-startup-of-year.jpg";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

export default function About({ lang }: Props) {
  const l = getDictionary(lang);
  const sectionId = l.nav.items[2];

  return (
    <section id={sectionId} className="bg-app py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <SectionReveal className="lg:col-span-5" y={32}>
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden bg-bg-deep shadow-soft">
              <Image
                src={ajdaFlowers}
                alt="Ajda Zajc"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </SectionReveal>

          <div className="lg:col-span-7">
            <SectionReveal>
              <h2
                className="font-display text-ink leading-[1.05] tracking-[-0.03em] mb-8"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                <span className="font-light">{l.about.title1}</span>
                <br />
                <span className="font-bold">{l.about.title2}</span>
              </h2>
            </SectionReveal>
            <SectionReveal
              delay={0.1}
              className="text-base md:text-lg text-muted leading-relaxed max-w-[60ch] space-y-4"
            >
              <p>{l.about.p2}</p>
            </SectionReveal>
            <SectionReveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/ajda-zajc/"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ajda00"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line bg-bg-elev text-ink text-sm font-medium hover:border-ink transition-colors"
              >
                GitHub
              </a>
              <a
                href="/AjdaZajc_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line bg-bg-elev text-ink text-sm font-medium hover:border-ink transition-colors"
              >
                {l.about.resume}
              </a>
            </SectionReveal>

            <div className="mt-10 md:mt-12 space-y-3">
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
        </div>

        <SectionReveal delay={0.1} className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <figure>
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden bg-bg-deep shadow-soft">
              <Image
                src={mooheroAward}
                alt={
                  lang === "sl"
                    ? "Ekipa MooHero z nagrado Slovenski start:up leta 2026"
                    : "MooHero team with the Slovenian Startup of the Year 2026 award"
                }
                fill
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-3 text-sm">
              <span className="pill-yellow">
                <span className="font-semibold">2026</span>
              </span>
              <span className="text-muted leading-relaxed">
                {lang === "sl" ? (
                  <>
                    <span className="font-medium text-ink">MooHero</span> — finalist
                    Slovenskega start:upa leta 2026.
                  </>
                ) : (
                  <>
                    <span className="font-medium text-ink">MooHero</span> — Slovenian
                    Startup of the Year 2026 finalist.
                  </>
                )}
              </span>
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}
