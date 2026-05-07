"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import profilePic from "../src/images/ajda.png";
import azGradient from "../src/images/AZ-gradient.svg";
import popsyLogo from "../src/images/popsy.png";
import mooheroLogo from "../src/images/MooHero.svg";
import topsiLogo from "../src/images/topsi.svg";
import ajdaWalking from "../src/images/ajda-2.png";
import topsiShowcase from "../src/images/topsi-showcase.png";
import manjatkShowcase from "../src/images/manjatk-showcase.png";
import ordinemShowcase from "../src/images/ordinem-showcase.png";

const t = {
  sl: {
    nav: {
      items: ["storitve", "delo", "o-meni", "kontakt"] as const,
      labels: { storitve: "Storitve", delo: "Delo", "o-meni": "O meni", kontakt: "Kontakt" },
      cta: "Sodelujmo",
    },
    hero: {
      title1: "Izdelava spletnih strani",
      titleEm: "premišljenim dizajnom",
      subtitle: "Profesionalna izdelava spletne strani za startupi in mala podjetja — od strategije in oblikovanja do razvoja in objave.",
      cta1: "Pošlji povpraševanje",
      cta2: "Oglej si portfolio",
    },
    stats: [
      { value: "20+", label: "Projektov" },
      { value: "5+", label: "Let izkušenj" },
      { value: "Web & Mobile", label: "Full Stack" },
    ],
    services: {
      label: "Storitve",
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
      title: "Izbrani projekti",
      visitSite: "Oglej si stran",
      visitShop: "Oglej si trgovino",
      topsi: "AI platforma za frizerje — aplikacija, spletna stran in celostna podoba. Barve in stranke na enem mestu.",
      manjatk: "Spletna stran z rezervacijskim sistemom za vizažistko z Bleda.",
      popsy: "No-code spletni gradnik, sprejet v Y Combinator. Zgradila sem jedro produkta.",
      moohero: "Nadzorna plošča in mobilna aplikacija za spremljanje živine s pametno ovratnico.",
      devilwears: "Etsy trgovina z digitalnimi printi — blagovna znamka, vizualna identiteta in oblikovanje izložbe.",
    },
    process: {
      label: "Proces",
      title: "Kako poteka sodelovanje",
      steps: [
        { title: "Uvodni kontakt", description: "Preko povpraševanja ali klica razumem tvoje cilje in obseg projekta." },
        { title: "Osnutek v 24–72h", description: "Pripravim prvi dizajn za pregled in mirno uskladitev." },
        { title: "Izvedba & objava", description: "Stran dodelam, objavim in jo pripravim za dolgoročno uporabo." },
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
      title: "Začnimo z vašim projektom",
      subtitle: "Zgradimo nekaj odličnega skupaj.",
      cta1: "Sodelujmo",
      cta2: "Oglej si portfolio",
    },
    faq: {
      label: "Pogosta vprašanja",
      title: "Vse o izdelavi spletne strani",
      items: [
        { q: "Koliko stane izdelava spletne strani?", a: "Cena izdelave spletne strani je odvisna od obsega projekta. Enostavna predstavitvena stran se začne pri 500\u00A0€, medtem ko bolj kompleksne spletne strani z dodatnimi funkcionalnostmi (rezervacijski sistem, e-trgovina) stanejo več. Vsak projekt ocenim individualno po brezplačnem posvetu." },
        { q: "Kako dolgo traja izdelava spletne strani?", a: "Večino spletnih strani dostavim v 1–2 tednih. Enostaven landing page je lahko pripravljen v nekaj dneh, medtem ko bolj obsežni projekti z mobilno aplikacijo ali kompleksnim dizajnom trajajo 3–4 tedne." },
        { q: "Katere tehnologije uporabljate?", a: "Spletne strani gradim z modernimi tehnologijami: Next.js, React, TypeScript in Tailwind CSS. To zagotavlja hitro nalaganje, odlično SEO optimizacijo in enostavno vzdrževanje." },
        { q: "Ali ponujate tudi oblikovanje?", a: "Da, ponujam celoten paket — od oblikovanja (UI/UX dizajn v Figmi) do razvoja in objave spletne strani. Ni vam treba iskati ločenega oblikovalca in razvijalca." },
        { q: "Ali je stran optimizirana za mobilne naprave?", a: "Absolutno. Vsaka spletna stran, ki jo izdelam, je popolnoma odzivna (responsive) in optimizirana za iskalnike (SEO)." },
      ],
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
      titleEm: "thoughtful design",
      subtitle: "I help startups and small businesses turn their vision into polished, high-performing websites and apps — from strategy to launch.",
      cta1: "Get Started",
      cta2: "View Portfolio",
    },
    stats: [
      { value: "20+", label: "Projects" },
      { value: "5+", label: "Years" },
      { value: "Web & Mobile", label: "Full Stack" },
    ],
    services: {
      label: "Services",
      items: [
        { title: "Web Design", description: "Custom UI/UX from wireframes to polished, pixel-perfect interfaces." },
        { title: "Web Development", description: "Fast, responsive websites and landing pages with Next.js, React, and TypeScript." },
        { title: "Mobile Apps", description: "Cross-platform iOS & Android apps with native feel." },
        { title: "Brand Identity", description: "Logos, color systems, and visual language that stand out." },
        { title: "Social Media & Ads", description: "Eye-catching ad creatives and marketing visuals that convert." },
        { title: "AI Solutions", description: "AI feature integration from concept to deployed product." },
      ],
    },
    work: {
      label: "Portfolio",
      title: "Selected work",
      visitSite: "Visit site",
      visitShop: "Visit shop",
      topsi: "AI-powered platform for hairdressers — app, landing page, and brand identity.",
      manjatk: "Portfolio and booking site for a professional makeup artist based in Bled, Slovenia.",
      popsy: "No-code website builder accepted into Y Combinator. Built the core product experience.",
      moohero: "Smart collar dashboard and mobile app for livestock monitoring with heat detection.",
      devilwears: "Etsy shop selling digital design prints — brand, visual identity, and storefront design.",
    },
    process: {
      label: "Process",
      title: "How we work together",
      steps: [
        { title: "Initial contact", description: "Through an inquiry or call, I understand your goals and project scope." },
        { title: "Draft in 24–72h", description: "I prepare the first design for review and smooth alignment." },
        { title: "Build & launch", description: "I refine the site, publish it, and set it up for long-term use." },
      ],
    },
    about: {
      label: "About",
      title1: "Designer & developer",
      title2: "who ships products",
      p1: "I'm Ajda, based in Ljubljana, Slovenia. I specialize in building products from scratch — taking ideas from concept through design to a shipped, working product.",
      p2: "My experience across Popsy (Y Combinator), MooHero, and Topsi AI taught me to move fast, wear many hats, and build things that work for real users.",
      resume: "Resume",
    },
    cta: {
      title: "Start your project today",
      subtitle: "Let's build something great together.",
      cta1: "Let's Collaborate",
      cta2: "View Portfolio",
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "How much does a website cost?", a: "The cost depends on the project scope. A simple presentation website starts at €500, while more complex sites cost more. I evaluate each project individually after a free consultation." },
        { q: "How long does it take?", a: "Most websites are delivered within 1–2 weeks. A simple landing page can be ready in a few days, while more complex projects take 3–4 weeks." },
        { q: "What technologies do you use?", a: "I build with Next.js, React, TypeScript, and Tailwind CSS. This ensures fast loading, excellent SEO, and easy maintenance." },
        { q: "Do you also offer design?", a: "Yes — from UI/UX design in Figma to development and publishing. You don't need a separate designer and developer." },
        { q: "Is the website mobile-optimized?", a: "Absolutely. Every website I build is fully responsive and SEO-optimized." },
      ],
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

const techStack = [
  "React", "Next.js", "TypeScript", "Angular", "Ionic",
  "Tailwind CSS", "Figma", "Node.js",
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("sl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const goToSlide = (i: number) => {
    setActiveSlide(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false, isSubmitted: false, isError: false, message: "",
  });

  const l = t[lang];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true, message: l.contact.fillAll });
      return;
    }
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false, message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false, message: data.message || l.contact.success });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, isError: true, message: error instanceof Error ? error.message : l.contact.error });
    }
  };

  const sectionId = (idx: number) => l.nav.items[idx];

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-hidden">

      {/* ==================== NAV ==================== */}
      <header className="fixed top-0 left-0 w-full z-40">
        <nav className="backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Image src={azGradient} alt="Ajda Zajc Logo" width={80} height={40} className="h-7 w-auto" />
            <div className="hidden md:flex items-center gap-8">
              {l.nav.items.map((item) => (
                <a key={item} href={`#${item}`} className="text-[13px] tracking-wide text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {(l.nav.labels as Record<string, string>)[item]}
                </a>
              ))}
              <a href={`#${l.nav.items[3]}`} className="ml-2 px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-90 transition-opacity">
                {l.nav.cta}
              </a>
              <button type="button" onClick={() => setLang(lang === "sl" ? "en" : "sl")} className="ml-1 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-[12px] font-medium text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                {lang === "sl" ? "EN" : "SL"}
              </button>
            </div>
            <div className="flex items-center gap-3 md:hidden">
              <button type="button" onClick={() => setLang(lang === "sl" ? "en" : "sl")} className="px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-[12px] font-medium text-gray-400">
                {lang === "sl" ? "EN" : "SL"}
              </button>
              <button type="button" className="w-6 h-6 flex flex-col justify-around" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu">
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
                  <a key={item} href={`#${item}`} className="text-base text-gray-800 dark:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
                    {(l.nav.labels as Record<string, string>)[item]}
                  </a>
                ))}
                <a href={`#${l.nav.items[3]}`} className="mt-1 text-center px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {l.nav.cta}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
            <div className="lg:col-span-8">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-6">
                {lang === "sl" ? "Oblikovanje & razvoj" : "Design & Development"}
              </p>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.0] tracking-tight text-gray-900 dark:text-white">
                {l.hero.title1}
                <br />
                <span className="italic text-accent">{lang === "sl" ? "z " : "with "}{l.hero.titleEm}</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {l.hero.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <a href={`#${l.nav.items[3]}`} className="group inline-flex items-center gap-3 text-[14px] font-medium text-gray-900 dark:text-white">
                  <span className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                  </span>
                  {l.hero.cta1}
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mt-16 md:mt-20" />

          {/* Stats inline */}
          <div className="grid grid-cols-3 gap-6 mt-10 md:mt-12">
            {l.stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-2xl md:text-4xl text-gray-900 dark:text-white">{stat.value}</span>
                <p className="mt-1 text-[12px] md:text-[13px] text-gray-400 dark:text-gray-500 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id={sectionId(0)} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">
                {l.services.label}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                {lang === "sl" ? "Izdelava spletnih strani in aplikacij" : "Crafting exceptional digital experiences"}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {l.services.items.map((service, i) => (
                <div key={service.title} className={`group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-7 md:py-8 ${i < l.services.items.length - 1 ? "border-b border-gray-100 dark:border-gray-800/60" : ""}`}>
                  <span className="font-[family-name:var(--font-geist-mono)] text-[12px] text-gray-300 dark:text-gray-700 pt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium shrink-0">
              {lang === "sl" ? "Tehnologije" : "Technologies"}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8">
              {techStack.map((tech) => (
                <span key={tech} className="text-[14px] text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORK ==================== */}
      <section id={sectionId(1)} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">{l.work.label}</p>
          <h2 className="font-display text-3xl md:text-5xl text-gray-900 dark:text-white mb-16">{l.work.title}</h2>

          {/* Featured projects — center featured, sides visible, click to select */}
          {(() => {
            const projects = [
              {
                name: "Topsi.ai",
                role: "Co-founder",
                url: "https://www.topsi.ai/",
                image: topsiShowcase,
                desc: l.work.topsi,
                tags: ["Angular", "TypeScript", "Ionic", "AI"],
              },
              {
                name: "manjatk.com",
                role: lang === "sl" ? "Oblikovanje & razvoj" : "Design & Development",
                url: "https://manjatk.com/",
                image: manjatkShowcase,
                desc: l.work.manjatk,
                tags: ["Next.js", "Design", "Booking"],
              },
              {
                name: "Ordinem",
                role: lang === "sl" ? "Oblikovanje & razvoj" : "Design & Development",
                url: "https://ordinem.ink",
                image: ordinemShowcase,
                desc: lang === "sl" ? "Spletna stran za gradbeno svetovanje — profesionalen dizajn, ki gradi zaupanje." : "Website for construction consulting — professional design that builds trust.",
                tags: ["Next.js", "TypeScript", "Web App"],
              },
            ];
            const active = projects[activeSlide];
            const leftIdx = activeSlide === 0 ? projects.length - 1 : activeSlide - 1;
            const rightIdx = activeSlide === projects.length - 1 ? 0 : activeSlide + 1;

            const BrowserMockup = ({ project, isSide }: { project: typeof projects[0]; isSide: boolean }) => (
              <div className={`rounded-xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 transition-all duration-500 ${isSide ? "opacity-50 hover:opacity-70 scale-[0.97]" : "shadow-xl shadow-gray-200/60 dark:shadow-none"}`}>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  {!isSide && (
                    <div className="flex-1 mx-2">
                      <div className="max-w-xs mx-auto px-2 py-0.5 rounded bg-gray-50 dark:bg-gray-800 text-[10px] text-gray-400 dark:text-gray-500 text-center truncate">
                        {project.url.replace("https://", "")}
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={project.image} alt={project.name} fill className="object-cover object-top" />
                </div>
              </div>
            );

            return (
              <div>
                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {projects.map((p, i) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => goToSlide(i)}
                        className={`text-[13px] font-medium transition-colors ${
                          i === activeSlide ? "text-gray-900 dark:text-white" : "text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => goToSlide(leftIdx)} className="w-9 h-9 rounded-full ring-1 ring-gray-200 dark:ring-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:ring-gray-400 dark:hover:text-white dark:hover:ring-gray-600 transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    </button>
                    <button type="button" onClick={() => goToSlide(rightIdx)} className="w-9 h-9 rounded-full ring-1 ring-gray-200 dark:ring-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:ring-gray-400 dark:hover:text-white dark:hover:ring-gray-600 transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </button>
                  </div>
                </div>

                {/* Three-panel layout */}
                <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
                  {/* Left */}
                  <button type="button" onClick={() => goToSlide(leftIdx)} className="col-span-3 cursor-pointer text-left">
                    <BrowserMockup project={projects[leftIdx]} isSide />
                    <p className="mt-3 text-[13px] font-medium text-gray-400 dark:text-gray-500 truncate">{projects[leftIdx].name}</p>
                  </button>

                  {/* Center — active */}
                  <div className="col-span-6">
                    <a href={active.url} target="_blank" rel="noopener noreferrer" className="group block">
                      <BrowserMockup project={active} isSide={false} />
                    </a>
                  </div>

                  {/* Right */}
                  <button type="button" onClick={() => goToSlide(rightIdx)} className="col-span-3 cursor-pointer text-left">
                    <BrowserMockup project={projects[rightIdx]} isSide />
                    <p className="mt-3 text-[13px] font-medium text-gray-400 dark:text-gray-500 truncate">{projects[rightIdx].name}</p>
                  </button>
                </div>

                {/* Active project info */}
                <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{active.name}</h3>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">{active.role}</span>
                    </div>
                    <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">{active.desc}</p>
                  </div>
                  <a href={active.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 shrink-0">
                    <div className="flex flex-wrap gap-1.5">
                      {active.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">{tag}</span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center ml-2 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-colors duration-300 text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    </div>
                  </a>
                </div>
              </div>
            );
          })()}

          {/* Other projects */}
          <div className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-8">
              {lang === "sl" ? "Ostali projekti" : "Other projects"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group rounded-xl p-5 ring-1 ring-gray-100 dark:ring-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={popsyLogo} alt="" width={18} height={18} className="rounded-full" />
                  <h3 className="font-semibold text-[14px] text-gray-900 dark:text-white">Popsy</h3>
                  <span className="ml-auto text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">YC</span>
                </div>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{l.work.popsy}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Web Platform"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-medium text-gray-500 dark:text-gray-400">{tag}</span>
                  ))}
                </div>
              </div>
              <a href="https://www.moohero.com/" target="_blank" rel="noopener noreferrer" className="group rounded-xl p-5 ring-1 ring-gray-100 dark:ring-gray-800 hover:ring-gray-200 dark:hover:ring-gray-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={mooheroLogo} alt="" width={18} height={18} className="rounded-full" />
                  <h3 className="font-semibold text-[14px] text-gray-900 dark:text-white">MooHero</h3>
                </div>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{l.work.moohero}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["UI Design", "Mobile", "Marketing"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-medium text-gray-500 dark:text-gray-400">{tag}</span>
                  ))}
                </div>
              </a>
              <a href="https://www.etsy.com/shop/DevilWearsDesign" target="_blank" rel="noopener noreferrer" className="group rounded-xl p-5 ring-1 ring-gray-100 dark:ring-gray-800 hover:ring-gray-200 dark:hover:ring-gray-700 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                  <h3 className="font-semibold text-[14px] text-gray-900 dark:text-white">DevilWearsDesign</h3>
                </div>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{l.work.devilwears}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Brand Design", "Digital Prints", "Etsy"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-medium text-gray-500 dark:text-gray-400">{tag}</span>
                  ))}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-900 dark:bg-[#111] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">{l.process.label}</p>
            <h2 className="font-display text-3xl md:text-5xl text-white max-w-xl">{l.process.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800/50 rounded-2xl overflow-hidden">
            {l.process.steps.map((step, i) => (
              <div key={step.title} className="bg-gray-900 dark:bg-[#111] p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {i === 0 && (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                  )}
                  {i === 1 && (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>
                  )}
                  {i === 2 && (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id={sectionId(2)} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="rounded-2xl overflow-hidden">
                <Image src={ajdaWalking} alt="Ajda Zajc" className="w-full max-w-[320px] mx-auto rounded-2xl" />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">{l.about.label}</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white mb-6 leading-snug">
                {l.about.title1}<br />{l.about.title2}
              </h2>
              <div className="space-y-4 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                <p>{l.about.p1}</p>
                <p>{l.about.p2}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/ajda00" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  GitHub
                </a>
                <a href="/AjdaZajc_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] text-gray-900 dark:text-white font-medium hover:opacity-60 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  {l.about.resume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="relative py-24 md:py-32 bg-gray-900 dark:bg-[#111] overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.05]">{l.cta.title}</h2>
              <p className="text-gray-400 text-[15px] mb-8 max-w-md">{l.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <a href={`#${l.nav.items[3]}`} className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-gray-900 font-medium text-[14px] hover:bg-gray-100 transition-colors">
                  {l.cta.cta1}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                </a>
                <a href={`#${l.nav.items[1]}`} className="text-gray-400 hover:text-white text-[14px] font-medium transition-colors">{l.cta.cta2}</a>
              </div>
            </div>
            <div className="relative aspect-[9/16] w-full max-w-[200px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 shrink-0">
              <iframe className="absolute inset-0 w-full h-full pointer-events-none" src="https://www.youtube.com/embed/QiGk8JJ26bw?autoplay=1&mute=1&loop=1&playlist=QiGk8JJ26bw&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=0" title="YouTube Shorts video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">{l.faq.label}</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">{l.faq.title}</h2>
            </div>
            <div className="lg:col-span-8">
              {l.faq.items.map((faq, i) => (
                <details key={faq.q} className={`group ${i < l.faq.items.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}>
                  <summary className="flex items-start justify-between cursor-pointer py-5 text-[15px] font-medium text-gray-900 dark:text-white select-none">
                    <span className="pr-6">{faq.q}</span>
                    <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center text-gray-400">
                      <svg className="w-4 h-4 transition-transform duration-200 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <p className="pb-5 pr-12 text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id={sectionId(3)} className="py-20 md:py-28 bg-gray-50/80 dark:bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">{l.contact.label}</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 leading-snug">{l.contact.title}</h2>
              <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">{l.contact.subtitle}</p>
            </div>
            <div className="lg:col-span-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {formStatus.message && (
                  <div className={`p-4 rounded-xl text-sm ${formStatus.isError ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" : "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"}`}>
                    {formStatus.message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">{l.contact.name}</label>
                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-[14px]" placeholder={l.contact.namePlaceholder} disabled={formStatus.isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">{l.contact.email}</label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-[14px]" placeholder={l.contact.emailPlaceholder} disabled={formStatus.isSubmitting} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-gray-500 dark:text-gray-400 mb-1.5">{l.contact.message}</label>
                  <textarea id="message" rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent outline-none transition-all text-[14px]" placeholder={l.contact.messagePlaceholder} disabled={formStatus.isSubmitting} />
                </div>
                <button type="submit" className="px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium text-[14px] hover:opacity-90 transition-opacity disabled:opacity-50" disabled={formStatus.isSubmitting}>
                  {formStatus.isSubmitting ? l.contact.sending : l.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-10 border-t border-gray-100 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
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
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
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
