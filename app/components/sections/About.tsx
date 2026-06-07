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
    <section id={sectionId} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <SectionReveal className="md:col-span-4" y={32}>
            <div className="rounded-2xl overflow-hidden group">
              <Image
                src={ajdaWalking}
                alt="Ajda Zajc"
                className="w-full max-w-[320px] mx-auto rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </SectionReveal>

          <div className="md:col-span-8">
            <SectionReveal>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 dark:text-white mb-8 leading-[1.05] max-w-[20ch]">
                {l.about.title1}
                <br />
                <span className="font-display italic font-normal text-accent">
                  {l.about.title2}
                </span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1} className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[60ch] space-y-4">
              <p>{l.about.p1}</p>
              <p>{l.about.p2}</p>
            </SectionReveal>
            <SectionReveal delay={0.2} className="mt-8 flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/ajda-zajc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity"
              >
                <svg aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ajda00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity"
              >
                <svg aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="/AjdaZajc_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity"
              >
                <svg aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {l.about.resume}
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
