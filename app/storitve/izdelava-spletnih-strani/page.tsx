import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

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

const faqs = [
  {
    q: "Koliko stane izdelava spletne strani?",
    a: "Cena je odvisna od obsega projekta. Enostaven landing page se začne pri 500 €, poslovna spletna stran z več podstranmi pri 1.200 €, kompleksnejše rešitve (e-trgovina, aplikacija) pa ocenim individualno. Vedno ponudim brezplačen posvet pred začetkom.",
  },
  {
    q: "Kako dolgo traja izdelava spletne strani?",
    a: "Enostaven landing page je pripravljen v 3–5 dneh. Poslovna spletna stran v 1–2 tednih. Bolj obsežni projekti z mobilno aplikacijo ali kompleksnim dizajnom trajajo 3–4 tedne.",
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

export default function IzdelavaSpletneStrani() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-hidden">
      <Nav lang="sl" variant="sub" />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
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
                Izdelava
                <br />
                spletne strani
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                Od ideje in oblikovanja do razvoja in objave. Moderna
                tehnologija, odziven dizajn in optimizacija za iskalnike —
                vključeno v vsak projekt.
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
                  Brezplačen posvet
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-24">
          <div className="h-px bg-gray-200 dark:bg-gray-800" />
        </div>
      </section>

      {/* ==================== NUMBERS ==================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "20+", label: "dostavljenih projektov" },
              { number: "5+", label: "let izkušenj" },
              { number: "1–2", label: "tedna do objave" },
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4 sticky top-28">
                Kaj dobite
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug sticky top-36">
                Vsaka spletna stran je zgrajena za rezultate
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-0">
                {[
                  {
                    num: "01",
                    title: "Dizajn po meri",
                    desc: "Vsaka stran je oblikovana od začetka v Figmi — brez predlog, brez kompromisov. Vaša blagovna znamka, vaša zgodba, vaš dizajn.",
                  },
                  {
                    num: "02",
                    title: "Moderna tehnologija",
                    desc: "Next.js, React, TypeScript. Enake tehnologije kot Vercel, Netflix in Notion. Hitra, varna, pripravljena za rast.",
                  },
                  {
                    num: "03",
                    title: "SEO optimizacija",
                    desc: "Struktura, meta podatki, hitrost nalaganja, strukturirani podatki — vse je vgrajeno od začetka, ne dodano naknadno.",
                  },
                  {
                    num: "04",
                    title: "Odziven na vseh napravah",
                    desc: "Pixel-perfect na telefonu, tablici in namizju. Brez lomljenja, brez kompromisov pri uporabniški izkušnji.",
                  },
                  {
                    num: "05",
                    title: "Hitra dostava",
                    desc: "Landing page v 3–5 dneh. Poslovna stran v 1–2 tednih. Jasen rok, brez presenečenj.",
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

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Proces
            </p>
            <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-5xl text-white max-w-xl">
              Od ideje do objave v štirih korakih
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/50 rounded-2xl overflow-hidden">
            {[
              {
                step: "01",
                title: "Strategija",
                desc: "Spoznam vaše cilje, publiko in konkurenco. Definiramo strukturo in funkcionalnosti.",
              },
              {
                step: "02",
                title: "Oblikovanje",
                desc: "V Figmi oblikujem vizualni dizajn. Osnutek prejmete v 24–72 urah za pregled.",
              },
              {
                step: "03",
                title: "Razvoj",
                desc: "Dizajn pretvorim v kodo z Next.js in React. Hitra, čista, pripravljena za rast.",
              },
              {
                step: "04",
                title: "Objava",
                desc: "Testiranje na vseh napravah, optimizacija hitrosti in objava na vaši domeni.",
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
            <div className="lg:col-span-5">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Investicija
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                Transparentne cene, brez skritih stroškov
              </h2>
            </div>
            <div className="lg:col-span-7 lg:flex lg:items-end">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                Vsak projekt je unikaten — ceno določim individualno po
                brezplačnem posvetu. Spodnje cene so orientacijske.
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
                name: "Poslovna stran",
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
                name: "Kompleksna rešitev",
                price: "Po meri",
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
        <div className="max-w-6xl mx-auto px-6">
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Izkušnje
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                Gradim produkte za prave uporabnike
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
                Izkušnje pri Popsy (Y Combinator), MooHero in Topsi AI so me
                naučile hitrega dela in gradnje stvari, ki delujejo. Vsak
                projekt obravnavam z enako pozornostjo do detajlov — od
                enostranskega landing pagea do kompleksne aplikacije.
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4 lg:sticky lg:top-28">
                Pogosta vprašanja
              </p>
              <h2 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug lg:sticky lg:top-36">
                Vse o izdelavi spletne strani
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-6">
            Naslednji korak
          </p>
          <h2 className="font-[family-name:var(--font-serif-display)] text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 max-w-3xl mx-auto leading-[1.05]">
            Začnimo z vašim projektom
          </h2>
          <p className="text-[15px] text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Pošljite povpraševanje — v 24 urah prejmete odgovor z oceno
            projekta. Posvet je brezplačen.
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
              Oglej si portfolio
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
