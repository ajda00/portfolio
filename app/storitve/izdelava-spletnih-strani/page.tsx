import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Izdelava spletne strani | Po meri, hitro, brez predlog",
  description:
    "Izdelava spletne strani po meri za startupe in mala podjetja v Ljubljani. Oblikovanje in razvoj v Next.js in Reactu. Landing page od 500 €, predstavitvena od 1.200 €. Klic je brezplačen.",
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
    title: "Izdelava spletne strani po meri | Ajda Zajc",
    description:
      "Spletne strani in aplikacije, narejene s pozornostjo. Od skice v Figmi do objave na tvoji domeni. 1–2 tedna, brez predlog. Ljubljana, Slovenija.",
    url: "https://ajdazajc.com/storitve/izdelava-spletnih-strani",
    type: "website",
  },
};

const faqs = [
  {
    q: "Koliko stane spletna stran?",
    a: "Odvisno od obsega. Landing page se začne pri 500 €, predstavitvena pri 1.200 €, e-trgovina ali aplikacija po dogovoru. Pred začetkom vedno pošljem fiksno oceno po brezplačnem klicu.",
  },
  {
    q: "Kako dolgo traja izdelava?",
    a: "Landing page: 3–5 dni. Predstavitvena: 1–2 tedna. Kompleksnejši projekti z aplikacijo ali zahtevnim dizajnom: 3–4 tedne. Datum povem na začetku in ga držim.",
  },
  {
    q: "Je stran pripravljena za Google (SEO)?",
    a: "Da. Vsaka stran je tehnično pripravljena za iskalnike: hitra, s pravo strukturo, čisto kodo in meta podatki. SEO osnova je vključena, ne plačaš je posebej.",
  },
  {
    q: "Ponujaš tudi vzdrževanje po objavi?",
    a: "Ja. Po objavi delam manjše spremembe, posodobitve in optimizacije po potrebi. Lahko se dogovoriva za mesečno vzdrževanje ali pa me pokličeš, ko kaj potrebuješ.",
  },
  {
    q: "Kaj potrebujem za začetek?",
    a: "Samo idejo. Strukturo, dizajn in vsebine narediva skupaj. Če imaš že pripravljene tekste ali fotografije, super. Če ne, ti pomagam tudi pri tem.",
  },
];

export default function IzdelavaSpletneStrani() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-hidden">
      <Nav lang="sl" variant="sub" />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-[1360px] mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] tracking-wide text-gray-400 dark:text-gray-500 mb-16 md:mb-20"
          >
            <Link
              href="/sl"
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Domov
            </Link>
            <span className="mx-2.5 text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">Storitve</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-end">
            <div className="lg:col-span-8">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-5">
                Oblikovanje & razvoj
              </p>
              <h1 className="font-[family-name:var(--font-serif-display)] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.0] tracking-tight text-gray-900 dark:text-white">
                Spletne strani,
                <br />
                narejene s pozornostjo.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                Od skice v Figmi do objave na tvoji domeni. Hitra koda, čist
                dizajn, SEO osnova vključena. Brez predlog in brez bližnjic, ki
                bi jih čez leto obžalovala.
              </p>
              <div className="mt-6">
                <Link
                  href="/sl#kontakt"
                  className="group inline-flex items-center gap-3 text-[14px] font-medium text-gray-900 dark:text-white"
                >
                  <span className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                  Brezplačen klic
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="max-w-[1360px] mx-auto px-6 mt-16 md:mt-24">
          <div className="h-px bg-gray-200 dark:bg-gray-800" />
        </div>
      </section>

      {/* ==================== NUMBERS ==================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "20+", label: "dostavljenih projektov" },
              { number: "5+", label: "let za Figmo in editor" },
              { number: "1–2", label: "tedna do žive strani" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-gray-900 dark:text-white">
                  {stat.number}
                </span>
                <p className="mt-1 text-[13px] text-gray-400 dark:text-gray-500 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4 sticky top-28">
                Kaj dobiš
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug sticky top-36">
                Vse, kar pričakuješ. In par stvari, ki jih ne.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  {
                    num: "01",
                    title: "Dizajn po meri",
                    desc: "Vsaka stran nastane v Figmi od prve črte. Brez predlog, brez kompromisov pri identiteti. Tvoja zgodba, ne predloga, ki si jo morata deliti s tisočimi drugimi.",
                  },
                  {
                    num: "02",
                    title: "Moderna tehnologija",
                    desc: "Next.js, React, TypeScript. Iste tehnologije kot Vercel, Netflix in Notion. Hiter zagon, varna baza, pripravljeno za rast.",
                  },
                  {
                    num: "03",
                    title: "SEO že vgrajen",
                    desc: "Struktura, meta podatki, strukturirani podatki, hitrost nalaganja. Od prvega dne, ne dvajsetega.",
                  },
                  {
                    num: "04",
                    title: "Najprej za telefon",
                    desc: "Vse, kar zgradim, je v prvi vrsti narejeno za telefon. Pixel-perfect na tablici in namizju. Nič se ne lomi, nikjer.",
                  },
                  {
                    num: "05",
                    title: "Dostavim v dogovorjenem roku",
                    desc: "Landing page v 3–5 dneh. Predstavitvena stran v 1–2 tednih. Datum povem na začetku in ga držim.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.num}
                    className={`group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 md:py-10 ${
                      i < 4
                        ? "border-b border-gray-100 dark:border-gray-800/60"
                        : ""
                    }`}
                  >
                    <span className="font-[family-name:var(--font-mono)] text-[12px] text-gray-300 dark:text-gray-700 pt-1 tabular-nums">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-900 dark:bg-[#111] overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1360px] mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Proces
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-white max-w-xl">
              Od ideje do žive strani v štirih korakih.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/50 rounded-2xl overflow-hidden">
            {[
              {
                step: "01",
                title: "Strategija",
                desc: "Razumem cilje, publiko, konkurenco. Definirava strukturo in funkcionalnosti, preden začnem risati.",
              },
              {
                step: "02",
                title: "Oblikovanje",
                desc: "Vizualni dizajn v Figmi. Osnutek dobiš v 24–72 urah za pregled, preden napišem prvo vrstico kode.",
              },
              {
                step: "03",
                title: "Razvoj",
                desc: "Dizajn pretvorim v kodo z Next.js in React. Hitro, čisto, pripravljeno za rast.",
              },
              {
                step: "04",
                title: "Objava",
                desc: "Testiranje na vseh napravah, optimizacija hitrosti, objava na tvoji domeni.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gray-900 dark:bg-[#111] p-8 md:p-10"
              >
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-gray-600 block mb-8 tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Investicija
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                Cene, ki jih lahko prepišeš v Excel.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                Vsak projekt je drugačen, zato ti pošljem fiksno oceno po prvem
                klicu. Spodnje cene so orientacijske. Klic je brezplačen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                name: "Landing page",
                price: "500 €",
                prefix: "od",
                features: [
                  "Enostranska stran",
                  "Odziven dizajn",
                  "SEO osnove",
                  "Kontaktni obrazec",
                  "Dostava v 3–5 dneh",
                ],
              },
              {
                name: "Predstavitvena stran",
                price: "1.200 €",
                prefix: "od",
                features: [
                  "Več podstrani",
                  "Celostno oblikovanje",
                  "SEO optimizacija",
                  "Blog ali novice",
                  "Dostava v 1–2 tednih",
                ],
                featured: true,
              },
              {
                name: "Po meri",
                price: "Po dogovoru",
                prefix: "",
                features: [
                  "E-trgovina ali aplikacija",
                  "Prilagojene funkcionalnosti",
                  "Integracije (API-ji)",
                  "Mobilna aplikacija",
                  "Dolgoročno sodelovanje",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 md:p-9 transition-all duration-300 ${
                  tier.featured
                    ? "bg-gray-900 dark:bg-white ring-1 ring-gray-900 dark:ring-white"
                    : "bg-white dark:bg-gray-900/60 ring-1 ring-gray-100 dark:ring-gray-800 hover:ring-gray-200 dark:hover:ring-gray-700"
                }`}
              >
                <div className="mb-8">
                  <h3
                    className={`text-[15px] font-medium mb-6 ${
                      tier.featured
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    {tier.prefix && (
                      <span
                        className={`text-sm ${tier.featured ? "text-gray-500 dark:text-gray-400" : "text-gray-400"}`}
                      >
                        {tier.prefix}
                      </span>
                    )}
                    <span
                      className={`font-[family-name:var(--font-serif-display)] text-4xl md:text-5xl ${
                        tier.featured
                          ? "text-white dark:text-gray-900"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                  </div>
                </div>

                <div
                  className={`h-px mb-8 ${tier.featured ? "bg-gray-800 dark:bg-gray-200" : "bg-gray-100 dark:bg-gray-800"}`}
                />

                <ul className="space-y-3.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`text-[14px] flex items-center gap-3 ${
                        tier.featured
                          ? "text-gray-300 dark:text-gray-600"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 ${
                          tier.featured
                            ? "bg-gray-500 dark:bg-gray-400"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH ==================== */}
      <section className="py-16 md:py-20 border-y border-gray-100 dark:border-gray-800/50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium shrink-0">
              Tehnologije
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-8">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Figma",
                "Vercel",
                "Node.js",
                "Ionic",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[14px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Izkušnje
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                Gradila sem za pravo uporabnico, ne za PowerPoint.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Pri Popsy (Y Combinator), MooHero in Topsi AI sem se naučila,
                da dobre stvari preživijo samo, če jih nekdo zares uporablja.
                Vsak projekt obravnavam z isto pozornostjo, od enostavnega
                landing pagea do aplikacije, ki bo prišla v App Store.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {[
                  { name: "Popsy", note: "Y Combinator" },
                  { name: "Topsi.ai", note: "Soustanoviteljica" },
                  { name: "MooHero", note: "Dizajn & razvoj" },
                  { name: "manjatk.com", note: "Spletna stran" },
                ].map((brand) => (
                  <div key={brand.name}>
                    <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
                      {brand.name}
                    </span>
                    <span className="text-[13px] text-gray-400 dark:text-gray-500 ml-2">
                      {brand.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/80 dark:bg-[#0d0d0d]">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4 lg:sticky lg:top-28">
                Vprašanja
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug lg:sticky lg:top-36">
                Stvari, ki me ljudje najpogosteje vprašajo.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {faqs.map((faq, i) => (
                  <details
                    key={faq.q}
                    className={`group ${
                      i < faqs.length - 1
                        ? "border-b border-gray-200 dark:border-gray-800"
                        : ""
                    }`}
                  >
                    <summary className="flex items-start justify-between cursor-pointer py-6 text-[15px] font-medium text-gray-900 dark:text-white select-none">
                      <span className="pr-6">{faq.q}</span>
                      <span className="mt-1 w-5 h-5 shrink-0 flex items-center justify-center text-gray-400">
                        <svg
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
                    <p className="pb-6 pr-12 text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 text-center">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-6">
            Naslednji korak
          </p>
          <h2 className="font-[family-name:var(--font-serif-display)] text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 max-w-3xl mx-auto leading-[1.05]">
            Pošlji par stavkov o projektu.
          </h2>
          <p className="text-[15px] text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            V 24 urah dobiš odgovor in prvo oceno. Klic je brezplačen, brez
            obveznosti, brez agencijskega scenarija.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sl#kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-[14px] hover:opacity-90 transition-opacity"
            >
              Pošlji povpraševanje
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
            <Link
              href="/sl#delo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-500 dark:text-gray-400 font-medium text-[14px] hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Poglej projekte
            </Link>
          </div>
        </div>
      </section>

      <Footer lang="sl" />

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
              "Izdelava spletne strani po meri za startupe in mala podjetja v Ljubljani. Oblikovanje v Figmi, razvoj v Next.js, objava na tvoji domeni.",
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Domov",
                item: "https://ajdazajc.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Izdelava spletnih strani",
                item: "https://ajdazajc.com/storitve/izdelava-spletnih-strani",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
