import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajda Zajc | Web Design & Development for Startups",
  description: "I design and build modern websites and mobile apps for startups and businesses. Based in Ljubljana, Slovenia. Y Combinator alumni experience.",
  keywords: ["Ajda Zajc", "software developer", "designer", "portfolio", "Ljubljana", "Slovenia", "startups", "MooHero", "Topsi AI", "Popsy", "web development"],
  authors: [{ name: "Ajda Zajc", url: "https://www.linkedin.com/in/ajda-zajc/" }],
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
  },
  openGraph: {
    title: "Ajda Zajc | Web Design & Development for Startups",
    description: "I design and build modern websites and mobile apps for startups and businesses. Based in Ljubljana, Slovenia. Y Combinator alumni experience.",
    url: "https://ajdazajc.com",
    siteName: "Ajda Zajc Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/images/ajda.png",
        width: 1200,
        height: 630,
        alt: "Ajda Zajc - Software Developer and Designer",
      },
    ],
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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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
        
        {/* JSON-LD structured data */}
        <Script id="schema-person" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ajda Zajc",
              "url": "https://ajdazajc.com",
              "image": "https://ajdazajc.com/src/images/ajda.png",
              "jobTitle": "Software Developer & Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Topsi.ai"
              },
              "sameAs": [
                "https://www.linkedin.com/in/ajda-zajc/",
                "https://github.com/ajda00"
              ],
              "knowsAbout": ["Software Development", "Web Design", "Startups", "UI/UX Design"],
              "description": "Software developer and designer from Ljubljana, Slovenia. Experienced in startups, web development, and creating innovative solutions."
            }
          `}
        </Script>
        
        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ajda Zajc Portfolio",
              "url": "https://ajdazajc.com",
              "description": "Personal portfolio of Ajda Zajc, software developer and designer",
              "author": {
                "@type": "Person",
                "name": "Ajda Zajc"
              }
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
