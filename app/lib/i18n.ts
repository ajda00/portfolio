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
    cta: "Pogovor",
    home: "Domov",
    blog: "Blog",
  },
  hero: {
    kicker: "Oblikovanje & razvoj",
    title1: "Spletne strani in aplikacije,",
    titleEm: "narejene s pozornostjo.",
    titleConnector: "",
    subtitle:
      "Vsak projekt nastane od prve črte v Figmi do zadnje vrstice kode.",
    cta1: "Pošlji povpraševanje",
    cta2: "Poglej projekte",
  },
  stats: [
    { label: "Projektov" },
    { label: "Let izkušenj" },
    { label: "Full Stack" },
  ],
  services: {
    label: "Storitve",
    title: "Vse iz iste delavnice.",
    items: [
      {
        title: "Spletno oblikovanje",
        description: "Dizajn po meri v Figmi. Brez predlog in brez wireframov, ki so leta 2018 izgledali sveži.",
      },
      {
        title: "Spletni razvoj",
        description: "Next.js, React, TypeScript. Strani se naložijo v sekundi in jih Google razume.",
      },
      {
        title: "Mobilne aplikacije",
        description: "iOS in Android v eni kodi (Ionic + Angular). Manj dela, ena cena, dve trgovini.",
      },
      {
        title: "Celostna podoba",
        description: "Logo, barvna paleta, tipografija. Pravila, ki zdržijo dlje kot prva Instagram objava.",
      },
      {
        title: "Družbena omrežja & oglasi",
        description: "Vizuali za Meto in Google. Pripravljeni v formatih, ki jih platforme dejansko sprejmejo.",
      },
      {
        title: "AI rešitve",
        description: "Vgradnja AI v obstoječ produkt. Pomagam ti izbrati pravi model in se izogniti dragim napakam.",
      },
    ],
    techLabel: "Tehnologije",
  },
  work: {
    label: "Portfolio",
    title: "Projekti, ki sem jih pomagala graditi.",
    visitSite: "Odpri stran",
    other: "Še nekaj projektov",
    projects: {
      topsi: {
        desc: "AI za frizerske salone. Aplikacija, spletna stran, blagovna znamka. Slovenski startup leta 2026, finalist.",
        role: "Soustanoviteljica",
      },
      manjatk: {
        desc: "Spletna stran in rezervacijski sistem za vizažistko na Bledu. 15 let dela na eni strani.",
        role: "Dizajn & razvoj",
      },
      ordinem: {
        desc: "Stran za neodvisno gradbeno svetovanje. Mirno oblikovanje za publiko, ki nima rada presežnikov.",
        role: "Dizajn & razvoj",
      },
      moohero: {
        desc: "Pametne ovratnice za govedo. Aplikacija, ki kmetom prihrani ure dela na teden.",
        role: "UI dizajn",
      },
      nina: {
        desc: "Portfolio in trgovina za slikarko Nino Hribar. Vsaka slika z lastno galerijo in obrazcem za naročilo.",
        role: "Dizajn & razvoj",
      },
    },
    otherProjects: {
      popsy: "No-code gradnik spletnih strani, ki je prišel v Y Combinator. Pisala sem jedro produkta.",
      devilwears: "Etsy trgovina z digitalnimi printi. Blagovna znamka, identiteta, listingi.",
    },
  },
  process: {
    label: "Proces",
    title: "Trije koraki, brez 30 strani uvoda.",
    steps: [
      {
        title: "Pogovor",
        description: "Po e-mailu ali na kratkem klicu razumem cilj, obseg in rok. Brez zaslišanja.",
      },
      {
        title: "Prvi osnutek v 24–72 urah",
        description: "Ne 30 strani strategije. En zaslon v Figmi, ki ga lahko presodiš na pogled.",
      },
      {
        title: "Zgradim in objavim",
        description: "Pretvorim v kodo, testiram, objavim. Dam ti navodila, da znaš sam zamenjati besedilo.",
      },
    ],
  },
  about: {
    label: "O meni",
    title1: "Oblikujem v Figmi.",
    title2: "Kodiram v VS Code.",
    p1: "V Ljubljani gradim spletne strani in aplikacije za startupe in mala podjetja.",
    p2: "Začela sem pri Popsy (Y Combinator), nadaljevala v MooHero in Topsi AI. Tam sem se naučila tri stvari: hitrost ni nasprotje natančnosti, dobre stvari preživijo samo, če jih nekdo zares uporablja, in dober dizajn brez dobre kode ni dovolj.",
    resume: "Življenjepis",
  },
  cta: {
    title: "Imaš idejo. Imam Figmo in editor.",
    subtitle: "Pošlji par stavkov o projektu. V 24 urah dobiš odgovor in prvo oceno.",
    cta1: "Pošlji povpraševanje",
    cta2: "Poglej projekte",
  },
  faq: {
    label: "Vprašanja",
    title: "Stvari, ki me ljudje najpogosteje vprašajo",
    items: [
      {
        q: "Koliko stane spletna stran?",
        a: "Odvisno od projekta. Enostranska se začne pri 500 €, večja predstavitvena pri 1.200 €, e-trgovina ali aplikacija po dogovoru. Vedno pošljem oceno po brezplačnem klicu, preden začneva.",
      },
      {
        q: "Kako hitro je narejena?",
        a: "Landing page: 3–5 dni. Predstavitvena stran: 1–2 tedna. Aplikacija ali zahtevnejši projekt: 3–4 tedne. Roke spoštujem (zato jih obljubim, samo če lahko).",
      },
      {
        q: "Katere tehnologije uporabljaš?",
        a: "Next.js, React, TypeScript, Tailwind. Iste, kot jih uporabljajo Vercel, Netflix in Notion. Stran se naloži v sekundi in jo Google razume.",
      },
      {
        q: "Ponujaš tudi oblikovanje?",
        a: "Da, to je polovica posla. Figma do produkcije, brez ločenega dizajnerja in razvijalca, ki si pošiljata e-maile.",
      },
      {
        q: "Je stran prilagojena za telefone?",
        a: "Vse, kar zgradim, je v prvi vrsti narejeno za telefon. Namizje je bonus.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Povej mi o projektu.",
    subtitle: "Brief, ideja, naključna misel ob 1h zjutraj. Odpišem v 24 urah.",
    name: "Ime",
    namePlaceholder: "Tvoje ime",
    email: "E-pošta",
    emailPlaceholder: "tvoj@email.com",
    message: "Sporočilo",
    messagePlaceholder: "Kaj gradiš, do kdaj mora biti gotovo, kakšen je proračun.",
    send: "Pošlji",
    sending: "Pošiljam...",
    fillAll: "Vsa polja so obvezna.",
    invalidEmail: "Vnesi pravi e-mail, prosim.",
    success: "Sporočilo je prišlo. Vidiva se v inboxu.",
    error: "Nekaj je šlo narobe. Poskusi znova ali piši na ajda.zajc@gmail.com.",
  },
  footer: {
    rights: "Vse pravice pridržane.",
    cta: {
      heading: "Pripravljena na delo?",
      subtitle:
        "Če iščeš nekoga, ki bo tvoj projekt obravnaval kot lasten, sva na pravem mestu.",
      primary: "Pošlji povpraševanje",
      secondary: "Email",
    },
    columns: {
      pages: "Strani",
      social: "Drugje na spletu",
    },
  },
  language: { toggleAria: "Preklopi jezik" },
};

const en: Dict = {
  nav: {
    items: ["services", "work", "about", "contact"] as const,
    labels: { services: "Services", work: "Work", about: "About", contact: "Contact" },
    cta: "Talk",
    home: "Home",
    blog: "Blog",
  },
  hero: {
    kicker: "Design & Development",
    title1: "Websites and apps,",
    titleEm: "built with care.",
    titleConnector: "",
    subtitle:
      "Every project starts at the first Figma stroke and ends at the last line of code.",
    cta1: "Send a brief",
    cta2: "See projects",
  },
  stats: [
    { label: "Projects" },
    { label: "Years" },
    { label: "Full Stack" },
  ],
  services: {
    label: "Services",
    title: "All from the same workshop.",
    items: [
      {
        title: "Web Design",
        description: "Custom UI in Figma. No templates and no wireframes that looked fresh in 2018.",
      },
      {
        title: "Web Development",
        description: "Next.js, React, TypeScript. Loads in a second, indexes cleanly.",
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android from one codebase (Ionic + Angular). Less work, two stores, one bill.",
      },
      {
        title: "Brand Identity",
        description: "Logo, palette, type. Rules that survive past the launch Instagram post.",
      },
      {
        title: "Social Media & Ads",
        description: "Visuals built for Meta and Google. In the formats the platforms actually accept.",
      },
      {
        title: "AI Solutions",
        description: "Drop AI into a product you already have. I help pick the model and avoid the expensive mistakes.",
      },
    ],
    techLabel: "Technologies",
  },
  work: {
    label: "Portfolio",
    title: "Things I helped build.",
    visitSite: "Open site",
    other: "A few more",
    projects: {
      topsi: {
        desc: "AI for hair salons. App, site, brand. Slovenian Startup of the Year 2026 finalist.",
        role: "Co-founder",
      },
      manjatk: {
        desc: "Site and booking flow for a makeup artist in Bled. Fifteen years of work on one page.",
        role: "Design & Development",
      },
      ordinem: {
        desc: "Site for an independent construction consultancy. Quiet design for a crowd that hates superlatives.",
        role: "Design & Development",
      },
      moohero: {
        desc: "Smart collars for cattle. An app that saves farmers hours every week.",
        role: "UI design",
      },
      nina: {
        desc: "Portfolio and store for painter Nina Hribar. Each painting gets its own gallery and a custom-order form.",
        role: "Design & Development",
      },
    },
    otherProjects: {
      popsy: "No-code site builder that got into Y Combinator. I wrote the core of the product.",
      devilwears: "Etsy shop selling digital prints. Brand, identity, listings.",
    },
  },
  process: {
    label: "Process",
    title: "Three steps, not thirty slides.",
    steps: [
      {
        title: "Talk",
        description: "An email or a short call. I learn the goal, the scope, the deadline. No interrogation.",
      },
      {
        title: "First draft in 24–72 hours",
        description: "Not thirty pages of strategy. One Figma screen you can judge on sight.",
      },
      {
        title: "Build and ship",
        description: "I turn it into code, test it, push it live. You get notes so you can edit text yourself.",
      },
    ],
  },
  about: {
    label: "About",
    title1: "I design in Figma.",
    title2: "I code in VS Code.",
    p1: "Based in Ljubljana, I build websites and apps for startups and small businesses.",
    p2: "I started at Popsy (Y Combinator), then MooHero and Topsi AI. I learned three things: fast isn't the opposite of careful, good things survive only if someone actually uses them, and good design without good code isn't enough.",
    resume: "CV",
  },
  cta: {
    title: "You have an idea. I have Figma and an editor.",
    subtitle: "Send a few sentences about the project. You get a reply and a first estimate inside 24 hours.",
    cta1: "Send a brief",
    cta2: "See projects",
  },
  faq: {
    label: "Questions",
    title: "Things people ask me most",
    items: [
      {
        q: "How much does a website cost?",
        a: "Depends. A single-page site starts at €500, a small business site at €1,200, e-commerce or an app on quote. I always send a number after a free call, before we start.",
      },
      {
        q: "How fast can you build it?",
        a: "Landing page: 3–5 days. Business site: 1–2 weeks. App or anything custom: 3–4 weeks. I respect deadlines, which is why I only promise the ones I can hit.",
      },
      {
        q: "What stack do you use?",
        a: "Next.js, React, TypeScript, Tailwind. Same stack as Vercel, Netflix, Notion. Loads in a second, indexes cleanly.",
      },
      {
        q: "Do you also do design?",
        a: "Yes, that's half the job. Figma through to production. No separate designer and developer emailing each other.",
      },
      {
        q: "Is the site mobile-friendly?",
        a: "Everything I build is mobile-first. Desktop is the bonus.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Tell me about the project.",
    subtitle: "A brief, an idea, a thought you had at 1am. I reply within 24 hours.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message",
    messagePlaceholder: "What you're building, when it needs to ship, what the budget looks like.",
    send: "Send",
    sending: "Sending...",
    fillAll: "All fields are required.",
    invalidEmail: "Enter a real email address, please.",
    success: "Got it. See you in the inbox.",
    error: "Something broke. Try again or email ajda.zajc@gmail.com.",
  },
  footer: {
    rights: "All rights reserved.",
    cta: {
      heading: "Ready to build something?",
      subtitle:
        "If you want someone who'll treat your project like their own, we're already in the right place.",
      primary: "Send a brief",
      secondary: "Email",
    },
    columns: {
      pages: "Pages",
      social: "Elsewhere",
    },
  },
  language: { toggleAria: "Switch language" },
};

const dictionaries: Record<Lang, Dict> = { sl, en };

export function getDictionary(lang: Lang): Dict {
  return dictionaries[lang];
}

export type Dictionary = Dict;
