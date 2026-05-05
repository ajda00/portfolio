"use client";

import Image from "next/image";
import { useState } from "react";
import profilePic from "../src/images/ajda.png";
import topsiProject from "../src/images/topsi-project.png";
import azGradient from "../src/images/AZ-gradient.svg";
import popsyLogo from "../src/images/popsy.png";
import mooheroLogo from "../src/images/MooHero.svg";
import topsiLogo from "../src/images/topsi.svg";
import ajdaWalking from "../src/images/ajda-2.png";

const t = {
  sl: {
    nav: {
      items: ["storitve", "delo", "o-meni", "kontakt"] as const,
      labels: { storitve: "Storitve", delo: "Delo", "o-meni": "O meni", kontakt: "Kontakt" },
      cta: "Sodelujmo",
    },
    hero: {
      title1: "Izdelava spletnih strani",
      title2: "z ",
      titleEm: "premišljenim dizajnom",
      subtitle: "Profesionalna izdelava spletne strani za startupi in mala podjetja — od strategije in oblikovanja do razvoja in objave.",
      cta1: "Pošlji povpraševanje",
      cta2: "Oglej si portfolio",
      trust: "Zaupajo mi startupi in mala podjetja",
    },
    stats: [
      { value: "20+", label: "Projektov" },
      { value: "5+", label: "Let izkušenj" },
      { value: "Web & Mobile", label: "Full Stack" },
    ],
    services: {
      label: "Storitve",
      title: "Izdelava spletnih strani ",
      titleBreak: "in aplikacij z",
      badges: [
        { label: "Kreativnost", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
        { label: "Inovativnost", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
        { label: "Strategija", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400" },
      ],
      items: [
        { title: "Spletno oblikovanje", description: "Dizajn po meri — od skic do dovršenih vmesnikov, ki delujejo." },
        { title: "Spletni razvoj", description: "Hitre, odzivne spletne in pristajalne strani z Next.js, React in TypeScript." },
        { title: "Mobilne aplikacije", description: "iOS & Android aplikacije z nativnim občutkom." },
        { title: "Celostna podoba", description: "Logotipi, barve in vizualni jezik, ki izstopa." },
        { title: "Družbena omrežja & oglasi", description: "Kreative za oglase in objave, ki pritegnejo in prodajajo." },
        { title: "AI rešitve", description: "Integracija AI funkcij od ideje do končnega produkta." },
      ],
    },
    work: {
      label: "Portfolio",
      title: "Kjer se inovacija sreča z ",
      titleEm: "estetiko",
      visitSite: "Oglej si stran",
      visitShop: "Oglej si trgovino",
      topsi: "AI platforma za frizerje — aplikacija, spletna stran in celostna podoba. Barve in stranke na enem mestu.",
      manjatk: "Spletna stran z rezervacijskim sistemom za vizažistko z Bleda.",
      popsy: "No-code spletni gradnik, sprejet v Y Combinator. Zgradila sem jedro produkta.",
      moohero: "Nadzorna plošča in mobilna aplikacija za spremljanje živine s pametno ovratnico.",
      devilwears: "Etsy trgovina z digitalnimi printi — blagovna znamka, vizualna identiteta in oblikovanje izložbe.",
    },
    process: {
      title: "Kako poteka sodelovanje",
      steps: [
        { label: "KORAK 1", title: "Uvodni kontakt in uskladitev", description: "Preko povpraševanja ali klica razumem tvoje cilje in obseg projekta." },
        { label: "KORAK 2", title: "Osnutek v 24–72 urah", description: "Pripravim prvi dizajn za pregled in mirno uskladitev." },
        { label: "KORAK 3", title: "Izvedba, objava in rast", description: "Stran dodelam, objavim in jo pripravim za dolgoročno uporabo." },
      ],
    },
    about: {
      label: "O meni",
      title1: "Oblikovalka & razvijalka,",
      title2: "ki dostavlja rezultate",
      p1: "Sem Ajda iz Ljubljane. Produkte gradim od začetka — od ideje skozi dizajn do delujočega produkta.",
      p2: "Izkušnje pri Popsy (Y Combinator), MooHero in Topsi AI so me naučile hitrega dela in gradnje stvari, ki delujejo za prave uporabnike. Potrebujete spletno stran, aplikacijo ali celostno podobo — prinesem isto energijo.",
      resume: "Življenjepis",
    },
    cta: {
      eyebrow: "Oglej si moje delo",
      title: "Začni svojo kreativno pot danes",
      subtitle: "Zgradimo nekaj odličnega skupaj.",
      cta1: "Sodelujmo",
      cta2: "Oglej si portfolio",
    },
    contact: {
      label: "Kontakt",
      title: "Sodelujmo",
      subtitle: "Povej mi o svojem projektu — odgovorim v 24 urah.",
      name: "Ime",
      namePlaceholder: "Tvoje ime",
      email: "E-pošta",
      emailPlaceholder: "tvoj@email.com",
      message: "Sporočilo",
      messagePlaceholder: "Povej mi o projektu, časovnici in proračunu...",
      send: "Pošlji sporočilo",
      sending: "Pošiljam...",
      fillAll: "Prosim izpolni vsa polja.",
      success: "Sporočilo uspešno poslano!",
      error: "Pošiljanje ni uspelo. Poskusi znova.",
    },
    footer: {
      rights: "Vse pravice pridržane.",
    },
  },
  en: {
    nav: {
      items: ["services", "work", "about", "contact"] as const,
      labels: { services: "Services", work: "Work", about: "About", contact: "Contact" },
      cta: "Let's Collaborate",
    },
    hero: {
      title1: "Building bold brands",
      title2: "with ",
      titleEm: "thoughtful design",
      subtitle: "I help startups and small businesses turn their vision into polished, high-performing websites and apps — from strategy to launch.",
      cta1: "Get Started",
      cta2: "View Portfolio",
      trust: "Trusted by startups & small businesses",
    },
    stats: [
      { value: "20+", label: "Projects Worked On" },
      { value: "5+", label: "Years Experience" },
      { value: "Web & Mobile", label: "Full Stack" },
    ],
    services: {
      label: "Services",
      title: "Crafting exceptional digital ",
      titleBreak: "experiences with",
      badges: [
        { label: "Creativity", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
        { label: "Innovation", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
        { label: "Strategy", color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400" },
      ],
      items: [
        { title: "Web Design", description: "Custom UI/UX from wireframes to polished, pixel-perfect interfaces." },
        { title: "Web Development", description: "Fast, responsive sites with Next.js, React, and TypeScript." },
        { title: "Mobile Apps", description: "Cross-platform iOS & Android apps with native feel." },
        { title: "Brand Identity", description: "Logos, color systems, and visual language that stand out." },
        { title: "Social Media & Ads", description: "Eye-catching ad creatives, social media posts, and marketing visuals that convert." },
        { title: "AI Solutions", description: "AI feature integration from concept to deployed product." },
        { title: "Landing Pages", description: "High-converting landing pages that capture attention and turn visitors into customers." },
      ],
    },
    work: {
      label: "Portfolio",
      title: "Where innovation meets ",
      titleEm: "aesthetics",
      visitSite: "Visit site",
      visitShop: "Visit shop",
      topsi: "AI-powered platform for hairdressers — app, landing page, and brand identity. Color confidence and client clarity, all in one place.",
      manjatk: "Portfolio and booking site for a professional makeup artist based in Bled, Slovenia.",
      popsy: "No-code website builder accepted into Y Combinator. Built the core product experience.",
      moohero: "Smart collar dashboard and mobile app for livestock monitoring with heat detection.",
      devilwears: "Etsy shop selling digital design prints and printable artwork — brand, visual identity, and storefront design.",
    },
    process: {
      title: "How we work together",
      steps: [
        { label: "STEP 1", title: "Initial contact & alignment", description: "Through an inquiry or call, I understand your goals and project scope." },
        { label: "STEP 2", title: "Draft in 24–72 hours", description: "I prepare the first design for review and smooth alignment." },
        { label: "STEP 3", title: "Build, launch & grow", description: "I refine the site, publish it, and set it up for long-term use." },
      ],
    },
    about: {
      label: "About",
      title1: "Designer & developer",
      title2: "who ships products",
      p1: "I'm Ajda, based in Ljubljana, Slovenia. I specialize in building products from scratch — taking ideas from concept through design to a shipped, working product.",
      p2: "My experience across Popsy (Y Combinator), MooHero, and Topsi AI taught me to move fast, wear many hats, and build things that work for real users. Whether you need a website, mobile app, or brand identity — I bring that same energy.",
      resume: "Resume",
    },
    cta: {
      eyebrow: "See my work in action",
      title: "Start your creative journey today",
      subtitle: "Let's build something great together.",
      cta1: "Let's Collaborate",
      cta2: "View Portfolio",
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      subtitle: "Tell me about your project and I'll get back to you within 24 hours.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project, timeline, and budget...",
      send: "Send Message",
      sending: "Sending...",
      fillAll: "Please fill out all fields.",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

type Lang = keyof typeof t;

const serviceIcons = [
  <svg key="design" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
  <svg key="dev" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
  <svg key="mobile" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  <svg key="brand" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg>,
  <svg key="social" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.75.75 0 0 1-1.021-.27l-.112-.194a5.988 5.988 0 0 1-.653-2.21m1.921-7.983C11.227 5.756 14.343 3 18 3v0a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-.75.75v0c-3.657 0-6.773-2.756-7.66-6.5m0 0a12.3 12.3 0 0 1 0-3" /></svg>,
  <svg key="ai" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>,
  <svg key="landing" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>,
];

const techStack = [
  "React", "Next.js", "TypeScript", "Angular", "Ionic",
  "Tailwind CSS", "Figma", "Node.js",
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("sl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const l = t[lang];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: l.contact.fillAll,
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: data.message || l.contact.success,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message:
          error instanceof Error
            ? error.message
            : l.contact.error,
      });
    }
  };

  const sectionId = (idx: number) => l.nav.items[idx];

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40">
        <nav
          className="backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Image
              src={azGradient}
              alt="Ajda Zajc Logo"
              width={80}
              height={40}
              className="h-7 w-auto"
            />

            <div className="hidden md:flex items-center gap-8">
              {l.nav.items.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[13px] tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {(l.nav.labels as Record<string, string>)[item]}
                </a>
              ))}
              <a
                href={`#${l.nav.items[3]}`}
                className="ml-2 px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-90 transition-opacity"
              >
                {l.nav.cta}
              </a>
              <button
                type="button"
                onClick={() => setLang(lang === "sl" ? "en" : "sl")}
                className="ml-1 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-[12px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                {lang === "sl" ? "EN" : "SL"}
              </button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => setLang(lang === "sl" ? "en" : "sl")}
                className="px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-[12px] font-medium text-gray-500 dark:text-gray-400"
              >
                {lang === "sl" ? "EN" : "SL"}
              </button>
              <button
                type="button"
                className="w-6 h-6 flex flex-col justify-around"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fadeIn">
              <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
                {l.nav.items.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-base text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {(l.nav.labels as Record<string, string>)[item]}
                  </a>
                ))}
                <a
                  href={`#${l.nav.items[3]}`}
                  className="mt-1 text-center px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.nav.cta}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-blue-50/40 to-transparent dark:from-pink-950/20 dark:via-blue-950/10 dark:to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display text-[2rem] sm:text-4xl md:text-[5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-gray-900 dark:text-white md:whitespace-nowrap">
            {l.hero.title1}
            <br />
            {l.hero.title2}<em className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400" style={{ paddingRight: '0.1em' }}>{l.hero.titleEm}</em>
          </h1>

          <p className="mt-6 md:mt-8 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {l.hero.subtitle}
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`#${l.nav.items[3]}`}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {l.hero.cta1}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <a
              href={`#${l.nav.items[1]}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {l.hero.cta2}
            </a>
          </div>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 ring-2 ring-white dark:ring-gray-900 overflow-hidden">
                  <Image src={profilePic} alt="" fill={false} width={32} height={32} className="object-cover" />
                </div>
              </div>
              <span>{l.hero.trust}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-14 md:py-20 border-y border-gray-100 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {l.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-500 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id={sectionId(0)} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              {l.services.label}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-gray-900 dark:text-white">
              {l.services.title}
              <br className="hidden md:block" />
              {l.services.titleBreak}
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {l.services.badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${badge.color}`}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {l.services.items.map((service, i) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 mb-4 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-colors duration-300">
                  {serviceIcons[i]}
                </div>
                <h3 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 text-[13px] text-gray-500 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORK ==================== */}
      <section id={sectionId(1)} className="py-20 md:py-28 bg-gray-50/80 dark:bg-gray-900/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              {l.work.label}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-gray-900 dark:text-white">
              {l.work.title}
              <em className="not-italic font-display italic text-gray-400 dark:text-gray-500">{l.work.titleEm}</em>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Topsi.ai */}
            <div className="group bg-white dark:bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="relative aspect-[16/9]">
                <Image
                  src={topsiProject}
                  alt="Topsi.ai - AI-powered hairdresser platform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a
                    href="https://www.topsi.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    {l.work.visitSite}
                  </a>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={topsiLogo} alt="" width={22} height={22} className="rounded-full" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Topsi.ai</h3>
                  <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider text-pink-500 bg-pink-50 dark:bg-pink-900/20 px-2.5 py-1 rounded-full">
                    Co-founder
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {l.work.topsi}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Angular", "TypeScript", "Ionic", "iOS", "Android", "AI", "Landing Page"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* manjatk.com */}
              <a
                href="https://manjatk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center text-white text-[10px] font-bold">
                    M
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">manjatk.com</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {l.work.manjatk}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Web Design", "Development", "Booking"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-[12px] text-gray-400 dark:text-gray-500 group-hover:text-pink-500 transition-colors flex items-center gap-1">
                  {l.work.visitSite}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </a>

              {/* Popsy */}
              <div className="bg-white dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={popsyLogo} alt="" width={22} height={22} className="rounded-full" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Popsy</h3>
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">
                    YC
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {l.work.popsy}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Web Platform"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* MooHero */}
              <a
                href="https://www.moohero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image src={mooheroLogo} alt="" width={22} height={22} className="rounded-full" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">MooHero</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {l.work.moohero}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["UI Design", "Mobile", "Marketing"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-[12px] text-gray-400 dark:text-gray-500 group-hover:text-pink-500 transition-colors flex items-center gap-1">
                  {l.work.visitSite}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </a>

              {/* DevilWearsDesign */}
              <a
                href="https://www.etsy.com/shop/DevilWearsDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-[10px] font-bold">
                    D
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">DevilWearsDesign</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {l.work.devilwears}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Brand Design", "Digital Prints", "Etsy"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-[12px] text-gray-400 dark:text-gray-500 group-hover:text-pink-500 transition-colors flex items-center gap-1">
                  {l.work.visitShop}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="relative py-20 md:py-28 bg-gray-900 dark:bg-white/[0.03] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl text-white text-center mb-16">
            {l.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {l.process.steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-5">
                  {step.label}
                </p>
                <div className="w-14 h-14 rounded-2xl bg-gray-800 dark:bg-gray-800 flex items-center justify-center mb-6">
                  {i === 0 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.251 2.251 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id={sectionId(2)} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-14">
            <div className="w-full md:w-2/5">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={ajdaWalking}
                  alt="Ajda Zajc"
                  className="w-full max-w-[320px] mx-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
                {l.about.label}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
                {l.about.title1}<br />{l.about.title2}
              </h2>
              <div className="space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
                <p>{l.about.p1}</p>
                <p>{l.about.p2}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/ajda-zajc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-900 dark:text-white font-medium hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ajda00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-900 dark:text-white font-medium hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="/AjdaZajc_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-900 dark:text-white font-medium hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {l.about.resume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 dark:bg-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-blue-500/10" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[13px] uppercase tracking-widest text-gray-400 mb-4">
                {l.cta.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
                {l.cta.title}
              </h2>
              <p className="text-gray-400 text-base mb-8">
                {l.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                <a
                  href={`#${l.nav.items[3]}`}
                  className="px-7 py-3.5 rounded-full bg-white text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors"
                >
                  {l.cta.cta1}
                </a>
                <a
                  href={`#${l.nav.items[1]}`}
                  className="px-7 py-3.5 rounded-full border border-gray-700 text-gray-300 font-medium text-sm hover:bg-gray-800 transition-colors"
                >
                  {l.cta.cta2}
                </a>
              </div>
            </div>

            <div className="relative aspect-[9/16] w-full max-w-[220px] rounded-2xl overflow-hidden shadow-lg shrink-0">
              <iframe
                className="absolute inset-0 w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/QiGk8JJ26bw?autoplay=1&mute=1&loop=1&playlist=QiGk8JJ26bw&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0"
                title="YouTube Shorts video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/80 dark:bg-gray-900/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
              {lang === "sl" ? "Pogosta vprašanja" : "FAQ"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white">
              {lang === "sl" ? "Vse o izdelavi spletne strani" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="space-y-4">
            {(lang === "sl" ? [
              { q: "Koliko stane izdelava spletne strani?", a: "Cena izdelave spletne strani je odvisna od obsega projekta. Enostavna predstavitvena stran se začne pri 500\u00A0€, medtem ko bolj kompleksne spletne strani z dodatnimi funkcionalnostmi (rezervacijski sistem, e-trgovina) stanejo več. Vsak projekt ocenim individualno po brezplačnem posvetu." },
              { q: "Kako dolgo traja izdelava spletne strani?", a: "Večino spletnih strani dostavim v 1–2 tednih. Enostaven landing page je lahko pripravljen v nekaj dneh, medtem ko bolj obsežni projekti z mobilno aplikacijo ali kompleksnim dizajnom trajajo 3–4 tedne." },
              { q: "Katere tehnologije uporabljate za izdelavo spletnih strani?", a: "Spletne strani gradim z modernimi tehnologijami: Next.js, React, TypeScript in Tailwind CSS. To zagotavlja hitro nalaganje, odlično SEO optimizacijo in enostavno vzdrževanje." },
              { q: "Ali ponujate tudi oblikovanje (dizajn) spletne strani?", a: "Da, ponujam celoten paket — od oblikovanja (UI/UX dizajn v Figmi) do razvoja in objave spletne strani. Ni vam treba iskati ločenega oblikovalca in razvijalca." },
              { q: "Ali je spletna stran optimizirana za mobilne naprave in Google?", a: "Absolutno. Vsaka spletna stran, ki jo izdelam, je popolnoma odzivna (responsive) in optimizirana za iskalnike (SEO). Uporabljam hitre tehnologije, ki zagotavljajo odlične rezultate na Google PageSpeed testu." },
            ] : [
              { q: "How much does a website cost?", a: "The cost depends on the project scope. A simple presentation website starts at €500, while more complex sites with additional functionality (booking system, e-commerce) cost more. I evaluate each project individually after a free consultation." },
              { q: "How long does it take to build a website?", a: "Most websites are delivered within 1–2 weeks. A simple landing page can be ready in a few days, while more complex projects take 3–4 weeks." },
              { q: "What technologies do you use?", a: "I build websites with modern technologies: Next.js, React, TypeScript, and Tailwind CSS. This ensures fast loading, excellent SEO, and easy maintenance." },
              { q: "Do you also offer design?", a: "Yes, I offer the full package — from design (UI/UX in Figma) to development and publishing. You don't need to find a separate designer and developer." },
              { q: "Is the website optimized for mobile and Google?", a: "Absolutely. Every website I build is fully responsive and SEO-optimized. I use fast technologies that ensure excellent Google PageSpeed scores." },
            ]).map((faq) => (
              <details key={faq.q} className="group bg-white dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
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

      {/* ==================== CONTACT ==================== */}
      <section id={sectionId(3)} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] uppercase tracking-widest text-pink-500 dark:text-pink-400 font-medium mb-3">
                {l.contact.label}
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-gray-900 dark:text-white mb-4">
                {l.contact.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {l.contact.subtitle}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {formStatus.message && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    formStatus.isError
                      ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                      : "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    {l.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm"
                    placeholder={l.contact.namePlaceholder}
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                    {l.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm"
                    placeholder={l.contact.emailPlaceholder}
                    disabled={formStatus.isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                  {l.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-sm"
                  placeholder={l.contact.messagePlaceholder}
                  disabled={formStatus.isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? l.contact.sending : l.contact.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-10 border-t border-gray-100 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image src={azGradient} alt="Ajda Zajc" width={80} height={40} className="h-6 w-auto" />
            <div className="hidden md:flex items-center gap-6 text-[13px] text-gray-400 dark:text-gray-500">
              {l.nav.items.map((item) => (
                <a key={item} href={`#${item}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {(l.nav.labels as Record<string, string>)[item]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <a href="https://github.com/ajda00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-[12px] text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Ajda Zajc s.p. {l.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
