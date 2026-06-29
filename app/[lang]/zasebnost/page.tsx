import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { isLang } from "../../lib/types";

interface Props {
  params: Promise<{ lang: string }>;
}

export const metadata: Metadata = {
  title: "Politika zasebnosti | Ajda Zajc",
  description:
    "Politika zasebnosti za ajdazajc.com. Katere osebne podatke zbiramo, zakaj in kako jih hranimo.",
  robots: { index: true, follow: true },
};

const sl = {
  title: "Politika zasebnosti",
  updated: "Zadnja posodobitev: 29. 6. 2026",
  sections: [
    {
      h: "1. Upravljavec osebnih podatkov",
      p: "Ajda Zajc s.p., Ljubljana, Slovenija. Za vprašanja v zvezi z osebnimi podatki me lahko kontaktiraš na ajda.zajc@gmail.com.",
    },
    {
      h: "2. Katere podatke zbiram",
      p: "Ko mi pošlješ sporočilo prek kontaktnega obrazca, zberem ime in priimek, e-poštni naslov in vsebino sporočila. Drugih osebnih podatkov pri običajnem obisku te strani ne zbiram.",
    },
    {
      h: "3. Zakaj zbiram podatke",
      p: "Podatke uporabljam izključno za odgovor na tvoje povpraševanje in morebitno nadaljnje sodelovanje. Podatkov ne uporabljam za marketinške namene in jih ne posredujem tretjim osebam.",
    },
    {
      h: "4. Kako dolgo hranim podatke",
      p: "Podatke hranim, dokler je to potrebno za izvršitev namena, najdlje 2 leti od zadnjega stika. Po tem jih izbrišem.",
    },
    {
      h: "5. Tvoje pravice",
      p: "Imaš pravico do dostopa do svojih podatkov, popravka, izbrisa, omejitve obdelave, ugovora obdelavi in prenosa podatkov. Pravice lahko uveljaviš tako, da mi pišeš na ajda.zajc@gmail.com.",
    },
    {
      h: "6. Piškotki",
      p: "Ta stran ne uporablja sledilnih piškotkov. Uporablja le tehnično nujne piškotke, na primer za shranjevanje izbire jezika.",
    },
    {
      h: "7. Pritožbe",
      p: "Če meniš, da so tvoje pravice kršene, lahko vložiš pritožbo pri Informacijskem pooblaščencu Republike Slovenije (ip-rs.si).",
    },
    {
      h: "8. Spremembe politike",
      p: "Pridržujem si pravico do sprememb te politike. Nove različice bodo objavljene na tej strani.",
    },
  ],
};

const en = {
  title: "Privacy Policy",
  updated: "Last updated: 29 June 2026",
  sections: [
    {
      h: "1. Data controller",
      p: "Ajda Zajc s.p., Ljubljana, Slovenia. For any questions about your personal data, write to ajda.zajc@gmail.com.",
    },
    {
      h: "2. What data I collect",
      p: "When you send a message through the contact form, I collect your name, email address and the content of your message. I don't collect any other personal data during regular visits to this site.",
    },
    {
      h: "3. Why I collect it",
      p: "I use the data only to reply to your enquiry and for any follow-up work we agree on. I don't use it for marketing and I don't share it with third parties.",
    },
    {
      h: "4. How long I keep it",
      p: "I keep the data for as long as needed to fulfil the purpose, at most 2 years from our last contact. After that I delete it.",
    },
    {
      h: "5. Your rights",
      p: "You have the right to access, rectify, erase, restrict processing, object to processing and port your data. Exercise these rights by writing to ajda.zajc@gmail.com.",
    },
    {
      h: "6. Cookies",
      p: "This site does not use tracking cookies. It only uses strictly necessary cookies, e.g. to remember your language preference.",
    },
    {
      h: "7. Complaints",
      p: "If you believe your rights have been violated, you can lodge a complaint with the Information Commissioner of the Republic of Slovenia (ip-rs.si).",
    },
    {
      h: "8. Changes to this policy",
      p: "I reserve the right to update this policy. New versions will be published on this page.",
    },
  ],
};

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = lang === "sl" ? sl : en;

  return (
    <div className="noise relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <Nav lang={lang} variant="sub" />
      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="font-display text-ink leading-[1.1] tracking-[-0.02em] font-semibold"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            {t.title}
          </h1>
          <p className="mt-4 text-sm text-muted-soft">{t.updated}</p>

          <div className="mt-12 space-y-10">
            {t.sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-lg md:text-xl font-semibold text-ink mb-3">
                  {s.h}
                </h2>
                <p className="text-base text-muted leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
