import Image from "next/image";
import ajdaWalking from "../../../src/images/ajda-2.png";
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <SectionReveal className="lg:col-span-5" y={32}>
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden bg-bg-deep shadow-soft">
              <Image
                src={ajdaWalking}
                alt="Ajda Zajc"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </SectionReveal>

          <div className="lg:col-span-7">
            <SectionReveal>
              <span className="pill-outline mb-6">
                <span>{l.about.label}</span>
              </span>
              <h2
                className="font-display text-ink leading-[1.05] tracking-[-0.03em] mb-8 mt-4"
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
              <p>{l.about.p1}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
