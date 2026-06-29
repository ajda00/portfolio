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
    otherProjects: Record<"popsy" | "devilwears" | "talk9" | "printpop", string>;
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  approach: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; description: string }[];
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
    title1: "Spletne strani in aplikacije,",
    titleEm: "narejene s pozornostjo.",
    titleConnector: "",
    subtitle:
      "Pomagam ustvarjati projekte, ki so edinstveni in ne izgledajo, kot bi jih naredil AI.",
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
    title: "Pogovoriva se na prvem sestanku.",
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
    title: "Projekti, ki sem jih naredila ali pomagala graditi.",
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
      popsy: "No-code gradnik spletnih strani, ki je prišel v Y Combinator.",
      devilwears: "Etsy trgovina z digitalnimi printi. Blagovna znamka, identiteta, listingi.",
      talk9: "AI agenti za pogovorne aplikacije. Srebrno priznanje Inovativna Slovenija 2026.",
      printpop: "Orodje za Etsy prodajalce. Samodejno razreže digitalno umetnost v vse formate, ki jih platforma zahteva.",
    },
  },
  process: {
    label: "Proces",
    title: "Kako poteka sodelovanje:",
    steps: [
      {
        title: "Pogovor",
        description: "Kaj potrebuješ, kakšni so cilji in časovne omejitve.",
      },
      {
        title: "Prvi osnutek",
        description: "Pripravim prvi osnutek, da preveriva smer projekta.",
      },
      {
        title: "Zgradim in objavim",
        description: "Sproti prilagajava in dopolnjujeva. Vsebino pregledava skupaj.",
      },
    ],
  },
  approach: {
    label: "Pristop",
    title: "Moj cilj je izstopati v dobi AI dizajna.",
    intro:
      "Zdaj, ko AI piše in oblikuje vse, vse na internetu izgleda enako. Tu lahko pomagam z osebno noto. Vzamem si čas, razmislim, razumem produkt in poskušam izvabiti edinstvenost.",
    items: [
      {
        title: "Pomagam pri pisanju boljše vsebine.",
        description:
          "Naslovi, opisi, vsaka beseda na strani — v preprostem jeziku, ki res prihaja od tebe.",
      },
      {
        title: "Potrudim se narediti spletno stran osebno.",
        description:
          "Brez stock fotografij — prave slike tebe, ekipe in dela.",
      },
      {
        title: "Poenostavim spletno stran.",
        description:
          "Manj scroll animacij, senc in gradientov — uporabnik hitreje razume produkt in klikne.",
      },
    ],
  },
  about: {
    label: "O meni",
    title1: "Oblikujem",
    title2: "in kodiram.",
    p1: "V Ljubljani gradim spletne strani in aplikacije za startupe in mala podjetja.",
    p2: "Začela sem pri Popsy (Y Combinator), nadaljevala v MooHero in Topsi AI. Tam sem se naučila tri stvari: hitrost ni nasprotje natančnosti, dobre stvari preživijo samo, če jih nekdo zares uporablja, in dober dizajn brez dobre kode ni dovolj.",
    resume: "Življenjepis",
  },
  cta: {
    title: "Slišimo se.",
    subtitle: "Pošlji par stavkov o projektu. V 24 urah dobiš odgovor in prvo oceno.",
    cta1: "Pošlji povpraševanje",
    cta2: "Poglej projekte",
  },
  faq: {
    label: "Vprašanja",
    title: "Najpogostejša vprašanja",
    items: [
      {
        q: "Koliko stane spletna stran?",
        a: "Odvisno od projekta. Spletna stran se začne pri 600 €, večja predstavitvena pri 1.200 €, e-trgovina ali aplikacija po dogovoru. Vedno pošljem oceno po brezplačnem klicu, preden začneva.",
      },
      {
        q: "Kako dolgo traja izdelava spletne strani?",
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
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Povej mi o projektu.",
    subtitle: "Odpišem v 24 urah.",
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
    titleEm: "made with care.",
    titleConnector: "",
    subtitle:
      "I help build projects that feel unique — not yet another site that looks like AI made it.",
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
    title: "Let's talk it through at our first meeting.",
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
    title: "Projects I built or helped build.",
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
      popsy: "No-code site builder that got into Y Combinator.",
      devilwears: "Etsy shop selling digital prints. Brand, identity, listings.",
      talk9: "AI agents for conversational apps. Silver award, Inovativna Slovenija 2026.",
      printpop: "Tool for Etsy sellers. Auto-resizes digital artwork into every print format the platform requires.",
    },
  },
  process: {
    label: "Process",
    title: "How we'll work together:",
    steps: [
      {
        title: "Talk",
        description: "What you need, the goals, the timing.",
      },
      {
        title: "First draft",
        description: "I put together a first draft so we can check the direction.",
      },
      {
        title: "Build and ship",
        description: "We adjust as we go. We review content together.",
      },
    ],
  },
  approach: {
    label: "Approach",
    title: "My goal is to stand out in the age of AI design.",
    intro:
      "Now that AI writes and designs everything, everything on the internet starts to look the same. This is where I can help with a personal touch. I take the time, think it through, understand the product, and try to draw out what makes it unique.",
    items: [
      {
        title: "I help with writing better content.",
        description:
          "Headlines, captions, every word on your site — in plain language that genuinely comes from you.",
      },
      {
        title: "I make the website feel personal.",
        description:
          "No stock photos — real images of you, your team, your work.",
      },
      {
        title: "I keep the website simple.",
        description:
          "Fewer scroll animations, shadows, and gradients — visitors understand the product and click faster.",
      },
    ],
  },
  about: {
    label: "About",
    title1: "I design",
    title2: "and code.",
    p1: "Based in Ljubljana, I build websites and apps for startups and small businesses.",
    p2: "I started at Popsy (Y Combinator), then MooHero and Topsi AI. I learned three things: fast isn't the opposite of careful, good things survive only if someone actually uses them, and good design without good code isn't enough.",
    resume: "CV",
  },
  cta: {
    title: "Let's talk.",
    subtitle: "Send a few sentences about the project. You get a reply and a first estimate inside 24 hours.",
    cta1: "Send a brief",
    cta2: "See projects",
  },
  faq: {
    label: "Questions",
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a website cost?",
        a: "Depends. A website starts at €600, a small business site at €1,200, e-commerce or an app on quote. I always send a number after a free call, before we start.",
      },
      {
        q: "How long does it take to build a website?",
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
    ],
  },
  contact: {
    label: "Contact",
    title: "Tell me about the project.",
    subtitle: "I reply within 24 hours.",
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
