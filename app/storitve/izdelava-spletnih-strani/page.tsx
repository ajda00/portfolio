import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Izdelava spletne strani | Profesionalna spletna stran po meri",
  description:
    "Izdelava spletne strani za podjetja in startupi v Ljubljani. Profesionalno oblikovanje in razvoj po meri z Next.js in React. Hitra dostava, cena od 500€. Brezplačen posvet.",
  keywords: [
    "izdelava spletne strani",
    "izdelava spletne strani cena",
    "izdelava spletne strani Ljubljana",
    "profesionalna spletna stran",
    "spletna stran za podjetje",
    "spletna stran po meri",
    "koliko stane spletna stran",
  ],
  alternates: {
    canonical: "/storitve/izdelava-spletnih-strani",
  },
  openGraph: {
    title: "Izdelava spletne strani — profesionalno, hitro, po meri",
    description:
      "Profesionalna izdelava spletne strani za podjetja in startupi. Od oblikovanja do objave v 1–2 tednih. Ljubljana, Slovenija.",
    url: "https://ajdazajc.com/storitve/izdelava-spletnih-strani",
    type: "website",
  },
};

const steps = [
  {
    step: "01",
    title: "Analiza in strategija",
    desc: "Spoznam vaše podjetje, cilje in ciljno publiko. Skupaj definiramo strukturo strani, ključna sporočila in funkcionalnosti.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.251 2.251 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Oblikovanje (UI/UX dizajn)",
    desc: "V Figmi oblikujem vizualni dizajn — barve, tipografijo, postavitev in uporabniško izkušnjo. Osnutek prejmete v 24–72 urah.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Razvoj in programiranje",
    desc: "Dizajn pretvorim v delujočo spletno stran z Next.js, React in TypeScript. Hitra, SEO-optimizirana in pripravljena za rast.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Testiranje in objava",
    desc: "Stran testiram na vseh napravah, optimiziram hitrost in jo objavim na vaši domeni. Po objavi nudim podporo in vzdrževanje.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

const tiers = [
  {
    name: "Landing page",
    price: "od 500 €",
    desc: "Enostranska stran za hiter start",
    features: ["Enostranska stran", "Odziven dizajn", "SEO osnove", "Kontaktni obrazec", "Dostava v 3–5 dneh"],
  },
  {
    name: "Poslovna spletna stran",
    price: "od 1.200 €",
    desc: "Celovita predstavitev podjetja",
    features: ["Več podstrani", "Celostno oblikovanje", "SEO optimizacija", "Blog ali novice", "Dostava v 1–2 tednih"],
    featured: true,
  },
  {
    name: "Kompleksna rešitev",
    price: "po dogovoru",
    desc: "Aplikacije in e-trgovine po meri",
    features: ["E-trgovina ali aplikacija", "Prilagojene funkcionalnosti", "Integracije (API-ji)", "Mobilna aplikacija", "Dolgoročno sodelovanje"],
  },
];

const faqs = [
  {
    q: "Koliko stane izdelava spletne strani?",
    a: "Cena je odvisna od obsega projekta. Enostaven landing page se začne pri 500 €, poslovna spletna stran z več podstranmi pri 1.200 €, kompleksnejše rešitve (e-trgovina, aplikacija) pa ocenim individualno. Vedno ponudim brezplačen posvet pred začetkom.",
  },
  {
    q: "Kako dolgo traja izdelava spletne strani?",
    a: "Enostaven landing page je pripravljen v 3–5 dneh. Poslovna spletna stran v 1–2 tednih. Bolj obsežni projekti z mobilno aplikacijo ali kompleksnim dizajnom trajajo 3–4 tedne. Vedno se dogovoriva za realen rok.",
  },
  {
    q: "Ali je spletna stran optimizirana za Google (SEO)?",
    a: "Da. Vsaka spletna stran, ki jo izdelam, je tehnično optimizirana za iskalnike — hitra, z ustrezno strukturo, meta podatki in čisto kodo. To pomeni boljše uvrstitve na Googlu brez dodatnega plačila za SEO osnove.",
  },
  {
    q: "Ali ponujate tudi vzdrževanje po objavi?",
    a: "Seveda. Po objavi nudim podporo za vsebinske spremembe, tehnične posodobitve in optimizacije. Dogovorimo se lahko za mesečno vzdrževanje ali pomoč po potrebi.",
  },
  {
    q: "Kaj potrebujem za začetek?",
    a: "Samo idejo o tem, kaj želite doseči s spletno stranjo. Skupaj bova definirala strukturo, vsebine in dizajn. Če imate že pripravljene tekste ali fotografije, je to super — sicer vam pomagam tudi pri tem.",
  },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Figma", "Vercel", "Node.js", "Ionic",
];

export default function IzdelavaSpletneStrani() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-hidden">
      <Nav />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-blue-50/40 to-transparent dark:from-pink-950/20 dark:via-blue-950/10 dark:to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 dark:text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Domov</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 dark:text-gray-300">Izdelava spletnih strani</span>
          </nav>

          <h1 className="font-[family-name:var(--font-serif-display)] text-4xl sm:text-5xl md:text-[4rem] leading-[1.1] tracking-tight text-gray-900 dark:text-white max-w-3xl">
            Izdelava spletne strani —
            <br />
            <em className="font-[family-name:var(--font-serif-display)] italic text-gray-400 dark:text-gray-500">profesionalno, hitro, po meri</em>
          </h1>

          <p className="mt-6 md:mt-8 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Ponujam celotno izdelavo spletne strani — od ideje in oblikovanja do razvoja in objave. Moderna tehnologija, odziven dizajn in optimizacija za iskalnike so vključeni v vsak projekt.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Brezplačen posvet
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
            <Link
              href="/#delo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Oglej si portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ZAKAJ ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              Zakaj profesionalno
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-gray-900 dark:text-white">
              Zakaj potrebujete profesionalno spletno stran
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Prvi vtis v 3 sekundah",
                desc: "Obiskovalec se odloči v manj kot 3 sekundah, ali bo ostal. Profesionalna stran zagotavlja, da prvi vtis deluje v vašo korist.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
              {
                title: "SEO in vidnost na Googlu",
                desc: "Spletna stran po meri je optimizirana za iskalnike — prilagojena vašim poslovnim ciljem, ne generičnim predlogam.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
              },
              {
                title: "Hitrast in zanesljivost",
                desc: "Nalaganje pod 2 sekundi, popolnoma odzivna na vseh napravah, grajena s tehnologijami, ki jih uporabljajo najboljša podjetja.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 mb-4 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCES ==================== */}
      <section className="relative py-20 md:py-28 bg-gray-900 dark:bg-white/[0.03] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-widest text-pink-400 font-medium mb-3">
              Proces
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-white">
              Kako poteka izdelava spletne strani
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-5">
                  Korak {item.step}
                </p>
                <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[260px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CENIK ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              Cenik
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-gray-900 dark:text-white">
              Kaj vključuje cena
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Vsak projekt je unikaten. Ceno določim individualno po brezplačnem posvetu. Orientacijske cene:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-7 rounded-2xl border transition-all duration-300 ${
                  tier.featured
                    ? "border-gray-900 dark:border-white bg-gray-900 dark:bg-white shadow-xl shadow-gray-900/10 dark:shadow-white/10 scale-[1.02]"
                    : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-none hover:border-gray-200 dark:hover:border-gray-700"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[11px] font-semibold uppercase tracking-wider">
                      Priljubljeno
                    </span>
                  </div>
                )}
                <h3
                  className={`font-semibold text-lg mb-1 ${
                    tier.featured ? "text-white dark:text-gray-900" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className={`text-sm mb-3 ${tier.featured ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"}`}>
                  {tier.desc}
                </p>
                <p
                  className={`text-3xl font-bold mb-6 ${
                    tier.featured ? "text-white dark:text-gray-900" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {tier.price}
                </p>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-start gap-2.5 ${
                        tier.featured ? "text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/80 dark:bg-gray-900/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              Tehnologije
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-gray-900 dark:text-white">
              Moderna tehnologija za hitro spletno stran
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Uporabljam iste tehnologije kot najuspešnejša tehnološka podjetja na svetu — za hitrost, varnost in odlično uporabniško izkušnjo.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              Pogosta vprašanja
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-gray-900 dark:text-white">
              Vse o izdelavi spletne strani
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-[15px] font-medium text-gray-900 dark:text-white">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 dark:bg-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-blue-500/10" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-[13px] uppercase tracking-widest text-gray-400 mb-4">
            Naslednji korak
          </p>
          <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-white mb-4">
            Pripravljeni na novo spletno stran?
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
            Pošljite mi povpraševanje in v 24 urah prejmete odgovor z oceno projekta. Posvet je brezplačen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#kontakt"
              className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Pošlji povpraševanje
            </Link>
            <Link
              href="/#delo"
              className="px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-medium text-sm hover:bg-gray-800 transition-colors"
            >
              Oglej si portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Izdelava spletne strani",
            provider: {
              "@type": "ProfessionalService",
              name: "Ajda Zajc",
              url: "https://ajdazajc.com",
            },
            description:
              "Profesionalna izdelava spletne strani po meri — oblikovanje, razvoj in objava za podjetja in startupi v Ljubljani.",
            areaServed: { "@type": "Country", name: "Slovenia" },
            serviceType: "Izdelava spletnih strani",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "500",
              priceCurrency: "EUR",
              offerCount: "3",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://ajdazajc.com" },
              { "@type": "ListItem", position: 2, name: "Izdelava spletnih strani", item: "https://ajdazajc.com/storitve/izdelava-spletnih-strani" },
            ],
          }),
        }}
      />
    </div>
  );
}
