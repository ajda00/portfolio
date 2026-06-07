import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default:
      "Izdelava spletnih strani | Ajda Zajc — Spletne strani, aplikacije & landing page",
    template: "%s | Ajda Zajc",
  },
  description:
    "Izdelava spletne strani po meri — spletne strani, landing page in mobilne aplikacije za startupi in mala podjetja. Profesionalno oblikovanje in razvoj v Ljubljani. Hitra dostava, moderna tehnologija (Next.js, React). Od ideje do objave v nekaj dneh.",
  keywords: [
    "izdelava spletne strani",
    "izdelava spletnih strani",
    "spletna stran",
    "spletne strani",
    "izdelava spletne strani cena",
    "izdelava spletne strani Ljubljana",
    "oblikovanje spletnih strani",
    "izdelava landing page",
    "landing page",
    "pristajalna stran",
    "web design Ljubljana",
    "web development Ljubljana",
    "mobilne aplikacije",
    "razvoj spletnih strani",
    "spletna stran za podjetje",
    "cenovna spletna stran",
    "profesionalna spletna stran",
    "moderna spletna stran",
    "hitra spletna stran",
    "Ajda Zajc",
    "spletna agencija Ljubljana",
    "oblikovanje",
    "UI UX dizajn",
    "React",
    "Next.js",
    "freelance web designer Slovenija",
  ],
  authors: [{ name: "Ajda Zajc", url: "https://ajdazajc.com" }],
  creator: "Ajda Zajc",
  publisher: "Ajda Zajc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ajdazajc.com"),
  alternates: {
    canonical: "/",
    languages: {
      sl: "/sl",
      en: "/en",
      "x-default": "/sl",
    },
  },
  openGraph: {
    title: "Izdelava spletnih strani | Ajda Zajc — od ideje do objave",
    description:
      "Izdelava spletnih strani, landing page strani in mobilnih aplikacij. Oblikovanje in razvoj po meri za startupi in mala podjetja. Ljubljana, Slovenija.",
    url: "https://ajdazajc.com",
    siteName: "Ajda Zajc — Izdelava spletnih strani",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajda Zajc — Izdelava spletnih strani, landing page & mobilnih aplikacij",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izdelava spletnih strani | Ajda Zajc",
    description:
      "Spletne strani, landing page strani in mobilne aplikacije za startupi in mala podjetja. Ljubljana, Slovenija.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/AZ.svg",
    apple: "/AZ.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const lang = h.get("x-url-lang") === "en" ? "en" : "sl";

  return (
    <html lang={lang}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2WB7W4V53G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2WB7W4V53G');
          `}
        </Script>

        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ajda Zajc — Izdelava spletnih strani",
              "url": "https://ajdazajc.com",
              "image": "https://ajdazajc.com/og-image.png",
              "description": "Izdelava spletnih strani, landing page strani in mobilnih aplikacij za startupi in mala podjetja. Oblikovanje in razvoj po meri.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ljubljana",
                "addressCountry": "SI"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.0569,
                "longitude": 14.5058
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Slovenia"
                }
              ],
              "founder": {
                "@type": "Person",
                "name": "Ajda Zajc",
                "jobTitle": "Oblikovalka in razvijalka spletnih strani",
                "sameAs": [
                  "https://www.linkedin.com/in/ajda-zajc/",
                  "https://github.com/ajda00"
                ]
              },
              "knowsAbout": [
                "Izdelava spletnih strani",
                "Landing page",
                "Mobilne aplikacije",
                "Web Design",
                "UI/UX Design",
                "React",
                "Next.js",
                "Celostna podoba"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/ajda-zajc/",
                "https://github.com/ajda00"
              ]
            }
          `}
        </Script>

        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ajda Zajc — Izdelava spletnih strani",
              "url": "https://ajdazajc.com",
              "description": "Izdelava spletnih strani, landing page in mobilnih aplikacij. Ljubljana, Slovenija.",
              "inLanguage": "sl",
              "author": {
                "@type": "Person",
                "name": "Ajda Zajc"
              }
            }
          `}
        </Script>

        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Koliko stane izdelava spletne strani?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cena izdelave spletne strani je odvisna od obsega projekta. Enostavna predstavitvena stran se začne pri 500€, medtem ko bolj kompleksne spletne strani z dodatnimi funkcionalnostmi (rezervacijski sistem, e-trgovina) stanejo več. Vsak projekt ocenim individualno po brezplačnem posvetu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kako dolgo traja izdelava spletne strani?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Večino spletnih strani dostavim v 1–2 tednih. Enostaven landing page je lahko pripravljen v nekaj dneh, medtem ko bolj obsežni projekti z mobilno aplikacijo ali kompleksnim dizajnom trajajo 3–4 tedne."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Katere tehnologije uporabljate za izdelavo spletnih strani?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Spletne strani gradim z modernimi tehnologijami: Next.js, React, TypeScript in Tailwind CSS. To zagotavlja hitro nalaganje, odlično SEO optimizacijo in enostavno vzdrževanje. Za mobilne aplikacije uporabljam Ionic in Angular."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ali ponujate tudi oblikovanje (dizajn) spletne strani?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Da, ponujam celoten paket — od oblikovanja (UI/UX dizajn v Figmi) do razvoja in objave spletne strani. Ni vam treba iskati ločenega oblikovalca in razvijalca."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ali je spletna stran optimizirana za mobilne naprave in Google?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutno. Vsaka spletna stran, ki jo izdelam, je popolnoma odzivna (responsive) in optimizirana za iskalnike (SEO). Uporabljam hitre tehnologije, ki zagotavljajo odlične rezultate na Google PageSpeed testu."
                  }
                }
              ]
            }
          `}
        </Script>
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
