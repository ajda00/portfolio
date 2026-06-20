import type { Lang } from "./types";

type Dict = {
  nav: {
    items: readonly [string, string, string, string];
    labels: Record<string, string>;
    cta: string;
    home: string;
    blog: string;
  };
  hero: {
    kicker: string;
    title1: string;
    titleEm: string;
    titleConnector: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  stats: { label: string }[];
  services: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
    techLabel: string;
  };
  work: {
    label: string;
    title: string;
    visitSite: string;
    other: string;
    projects: Record<
      "topsi" | "manjatk" | "ordinem" | "moohero" | "nina",
      { desc: string; role: string }
    >;
    otherProjects: Record<"popsy" | "devilwears", string>;
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    resume: string;
  };
  cta: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    fillAll: string;
    invalidEmail: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
    cta: { heading: string; subtitle: string; primary: string; secondary: string };
    columns: { pages: string; social: string };
  };
  language: { toggleAria: string };
};

const sl: Dict = {
  nav: {
    items: ["storitve", "delo", "o-meni", "kontakt"] as const,
    labels: { storitve: "Storitve", delo: "Delo", "o-meni": "O meni", kontakt: "Kontakt" },
    cta: "Sodelujmo",
    home: "Domov",
    blog: "Blog",
  },
  hero: {
    kicker: "Oblikovanje & razvoj",
    title1: "Izdelava spletnih strani",
    titleEm: "premišljenim dizajnom",
    titleConnector: "z ",
    subtitle:
      "Spletne strani in aplikacije za startupe in mala podjetja. Od strategije in oblikovanja do razvoja in objave.",
    cta1: "Pošlji povpraševanje",
    cta2: "Oglej si portfolio",
  },
  stats: [
    { label: "Projektov" },
    { label: "Let izkušenj" },
    { label: "Full Stack" },
  ],
  services: {
    label: "Storitve",
    title: "Ena oseba, celoten projekt",
    items: [
      {
        title: "Spletno oblikovanje",
        description: "Dizajn po meri v Figmi. Brez predlog, brez recikliranih wireframov.",
      },
      {
        title: "Spletni razvoj",
        description: "Spletne strani in landing pagei z Next.js, React in TypeScript. Hitro nalaganje, dobra SEO osnova.",
      },
      {
        title: "Mobilne aplikacije",
        description: "iOS in Android aplikacije z Ionic in Angular. Ena koda za obe platformi.",
      },
      {
        title: "Celostna podoba",
        description: "Logotipi, barvne palete in pravila uporabe, ki zdržijo onkraj prvega ogleda.",
      },
      {
        title: "Družbena omrežja & oglasi",
        description: "Vizuali za oglase in objave. Pripravljeni za Meta in Google formate.",
      },
      {
        title: "AI rešitve",
        description: "Integracija AI v obstoječi produkt. Pomoč pri izbiri modela in arhitekture.",
      },
    ],
    techLabel: "Tehnologije",
  },
  work: {
    label: "Portfolio",
    title: "Izbrani projekti",
    visitSite: "Oglej si stran",
    other: "Ostali projekti",
    projects: {
      topsi: {
        desc: "AI platforma za frizerje. Aplikacija, spletna stran in celostna podoba. Barve in stranke na enem mestu.",
        role: "Co-founder",
      },
      manjatk: {
        desc: "Spletna stran z rezervacijskim sistemom za vizažistko z Bleda.",
        role: "Oblikovanje & razvoj",
      },
      ordinem: {
        desc: "Spletna stran za gradbeno svetovanje. Tih, zanesljiv dizajn za zahtevno publiko.",
        role: "Oblikovanje & razvoj",
      },
      moohero: {
        desc: "Nadzorna plošča in mobilna aplikacija za spremljanje živine s pametno ovratnico.",
        role: "UI dizajn & marketing",
      },
      nina: {
        desc: "Portfolio in spletna trgovina umetnice Nine Hribar. Galerija del in sistem za naročila.",
        role: "Oblikovanje & razvoj",
      },
    },
    otherProjects: {
      popsy: "No-code gradnik spletnih strani, sprejet v Y Combinator. Zgradila sem jedro produkta.",
      devilwears: "Etsy trgovina z digitalnimi printi. Blagovna znamka, identiteta in oblikovanje izložbe.",
    },
  },
  process: {
    label: "Proces",
    title: "Kako poteka sodelovanje",
    steps: [
      {
        title: "Uvodni kontakt",
        description: "Po povpraševanju ali klicu razumem cilje, obseg in rok.",
      },
      {
        title: "Osnutek v 24–72h",
        description: "Pripravim prvi dizajn za pregled. Brez 30 strani uvoda, le zaslon, ki ga lahko presodiš.",
      },
      {
        title: "Izvedba & objava",
        description: "Stran zgradim, objavim in predam. Skupaj z navodili za vzdrževanje.",
      },
    ],
  },
  about: {
    label: "O meni",
    title1: "Oblikovalka & razvijalka",
    title2: "od ideje do objave",
    p1: "Sem Ajda iz Ljubljane. Produkte gradim sama od začetka do konca, brez izgubljenih prevodov med dizajnerjem in razvijalcem.",
    p2: "Pri Popsy (Y Combinator), MooHero in Topsi AI sem se naučila delati hitro in graditi stvari, ki delujejo za prave uporabnike. Za spletno stran, aplikacijo ali celostno podobo prinesem isto energijo.",
    resume: "Življenjepis",
  },
  cta: {
    title: "Začnimo z vašim projektom",
    subtitle: "Pošlji povpraševanje. V 24 urah dobiš odgovor s prvo oceno.",
    cta1: "Sodelujmo",
    cta2: "Oglej si portfolio",
  },
  faq: {
    label: "Pogosta vprašanja",
    title: "Vse o izdelavi spletne strani",
    items: [
      {
        q: "Koliko stane izdelava spletne strani?",
        a: "Cena je odvisna od obsega projekta. Enostavna predstavitvena stran se začne pri 500 €, kompleksnejše strani z rezervacijskim sistemom ali e-trgovino stanejo več. Vsak projekt ocenim individualno po brezplačnem posvetu.",
      },
      {
        q: "Kako dolgo traja izdelava spletne strani?",
        a: "Večino spletnih strani dostavim v 1–2 tednih. Enostaven landing page je pripravljen v nekaj dneh, kompleksnejši projekti z mobilno aplikacijo ali zahtevnim dizajnom trajajo 3–4 tedne.",
      },
      {
        q: "Katere tehnologije uporabljate?",
        a: "Spletne strani gradim z Next.js, React, TypeScript in Tailwind CSS. To prinese hitro nalaganje, dobro SEO osnovo in enostavno vzdrževanje.",
      },
      {
        q: "Ali ponujate tudi oblikovanje?",
        a: "Da. Pokrijem celoten paket, od UI/UX dizajna v Figmi do razvoja in objave. Ni vam treba iskati ločenega oblikovalca in razvijalca.",
      },
      {
        q: "Ali je stran optimizirana za mobilne naprave?",
        a: "Da. Vsaka stran, ki jo izdelam, je polno odzivna in tehnično pripravljena za SEO.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Sodelujmo",
    subtitle: "Opiši projekt. V 24 urah dobiš odgovor.",
    name: "Ime",
    namePlaceholder: "Tvoje ime",
    email: "E-pošta",
    emailPlaceholder: "tvoj@email.com",
    message: "Sporočilo",
    messagePlaceholder: "Opiši projekt, časovnico in proračun.",
    send: "Pošlji sporočilo",
    sending: "Pošiljam...",
    fillAll: "Vsa polja so obvezna.",
    invalidEmail: "Vnesi veljaven e-poštni naslov (npr. tvoj@email.com).",
    success: "Sporočilo poslano. Odgovorim v 24 urah.",
    error: "Pošiljanje ni uspelo. Poskusi znova ali piši na domen.zajc@gmail.com.",
  },
  footer: {
    rights: "Vse pravice pridržane.",
    cta: {
      heading: "Pripravljeni na nov projekt?",
      subtitle:
        "Če iščeš oblikovalko in razvijalko, ki posluša, razume in gradi premišljeno, začnimo pogovor.",
      primary: "Pošlji povpraševanje",
      secondary: "E-mail",
    },
    columns: {
      pages: "Strani",
      social: "Družbena omrežja",
    },
  },
  language: { toggleAria: "Preklopi jezik" },
};

const en: Dict = {
  nav: {
    items: ["services", "work", "about", "contact"] as const,
    labels: { services: "Services", work: "Work", about: "About", contact: "Contact" },
    cta: "Let's Collaborate",
    home: "Home",
    blog: "Blog",
  },
  hero: {
    kicker: "Design & Development",
    title1: "Websites and apps,",
    titleEm: "shipped end to end",
    titleConnector: "",
    subtitle:
      "I design and build websites and apps for startups and small businesses. Strategy to launch, no handoff seams.",
    cta1: "Get Started",
    cta2: "View Portfolio",
  },
  stats: [
    { label: "Projects" },
    { label: "Years" },
    { label: "Full Stack" },
  ],
  services: {
    label: "Services",
    title: "One person, end to end",
    items: [
      {
        title: "Web Design",
        description: "Custom UI in Figma. No templates, no recycled wireframes.",
      },
      {
        title: "Web Development",
        description: "Websites and landing pages in Next.js, React, and TypeScript. Fast to load, ready for SEO.",
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android apps in Ionic and Angular. One codebase, both stores.",
      },
      {
        title: "Brand Identity",
        description: "Logos, color systems, and usage rules that survive past the first launch post.",
      },
      {
        title: "Social Media & Ads",
        description: "Ad creative and post visuals, sized for Meta and Google formats.",
      },
      {
        title: "AI Solutions",
        description: "Integrating AI into a product you already have. Help with model choice and architecture.",
      },
    ],
    techLabel: "Technologies",
  },
  work: {
    label: "Portfolio",
    title: "Selected work",
    visitSite: "Visit site",
    other: "Other projects",
    projects: {
      topsi: {
        desc: "AI platform for hairdressers. Mobile app, web app, and brand identity. Color matching and clients in one place.",
        role: "Co-founder",
      },
      manjatk: {
        desc: "Portfolio and booking site for a makeup artist in Bled, Slovenia.",
        role: "Design & Development",
      },
      ordinem: {
        desc: "Site for a construction consultancy. Quiet, confident design for a serious audience.",
        role: "Design & Development",
      },
      moohero: {
        desc: "Smart-collar dashboard and mobile app for livestock monitoring with heat detection.",
        role: "UI design & marketing",
      },
      nina: {
        desc: "Portfolio and online store for artist Nina Hribar. Gallery of works and a custom-order flow.",
        role: "Design & Development",
      },
    },
    otherProjects: {
      popsy: "No-code website builder accepted into Y Combinator. Built the core product.",
      devilwears: "Etsy shop selling digital design prints. Brand, identity, and storefront.",
    },
  },
  process: {
    label: "Process",
    title: "How we work together",
    steps: [
      {
        title: "Initial contact",
        description: "A short inquiry or call. I learn the goal, scope, and deadline.",
      },
      {
        title: "Draft in 24–72h",
        description: "First design for review. Not 30 slides of intro, just a screen you can judge.",
      },
      {
        title: "Build & launch",
        description: "I build it, ship it, and hand it over with instructions for upkeep.",
      },
    ],
  },
  about: {
    label: "About",
    title1: "Designer & developer,",
    title2: "from idea to launch",
    p1: "I'm Ajda, based in Ljubljana. I build products solo from start to finish, so nothing gets lost in translation between designer and developer.",
    p2: "At Popsy (Y Combinator), MooHero, and Topsi AI I learned to move fast and build things that work for real users. Same energy whether you need a site, an app, or a brand.",
    resume: "Resume",
  },
  cta: {
    title: "Start your project today",
    subtitle: "Send the brief. I reply within 24 hours with a first estimate.",
    cta1: "Let's Collaborate",
    cta2: "View Portfolio",
  },
  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "How much does a website cost?",
        a: "It depends on scope. A simple presentation site starts at €500. More complex sites with booking or e-commerce cost more. I estimate each project after a free 30-minute call.",
      },
      {
        q: "How long does it take?",
        a: "Most sites ship in 1–2 weeks. A simple landing page can be ready in a few days. Larger projects with custom design or a mobile app take 3–4 weeks.",
      },
      {
        q: "What technologies do you use?",
        a: "Next.js, React, TypeScript, and Tailwind CSS. Fast to load, easy to maintain, ready for SEO out of the box.",
      },
      {
        q: "Do you also offer design?",
        a: "Yes. Figma UI/UX through to development and launch. You don't have to coordinate a separate designer and developer.",
      },
      {
        q: "Is the website mobile-optimized?",
        a: "Yes. Every site I ship is fully responsive and technically ready for SEO.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's work together",
    subtitle: "Tell me about the project. I reply within 24 hours.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message",
    messagePlaceholder: "Project, timeline, and budget.",
    send: "Send Message",
    sending: "Sending...",
    fillAll: "All fields are required.",
    invalidEmail: "Enter a valid email address (e.g. name@example.com).",
    success: "Message sent. I'll reply within 24 hours.",
    error: "Sending failed. Try again or email domen.zajc@gmail.com.",
  },
  footer: {
    rights: "All rights reserved.",
    cta: {
      heading: "Ready to start your project?",
      subtitle:
        "If you're looking for a designer and developer who listens, understands, and builds with intention, let's start the conversation.",
      primary: "Get in touch",
      secondary: "Email",
    },
    columns: {
      pages: "Pages",
      social: "Social",
    },
  },
  language: { toggleAria: "Switch language" },
};

const dictionaries: Record<Lang, Dict> = { sl, en };

export function getDictionary(lang: Lang): Dict {
  return dictionaries[lang];
}

export type Dictionary = Dict;
