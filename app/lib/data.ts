import type { StaticImageData } from "next/image";
import manjatkHero from "../../src/images/manjatk-hero.png";
import mooheroHero from "../../src/images/moohero-hero.png";
import ninaHero from "../../src/images/nina-hero.png";
import ordinemHero from "../../src/images/ordinem-hero.png";
import popsyLogo from "../../src/images/popsy.png";
import topsiHero from "../../src/images/topsi-hero.png";

export type ProjectKey = "topsi" | "manjatk" | "ordinem" | "moohero" | "nina";
export type OtherProjectKey = "popsy" | "devilwears" | "talk9" | "printpop";

export interface FeaturedProject {
  key: ProjectKey;
  name: string;
  url: string;
  image: StaticImageData;
  tags: string[];
}

export interface OtherProject {
  key: OtherProjectKey;
  name: string;
  url: string | null;
  logo: StaticImageData | null;
  badge?: string;
  tags: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    key: "topsi",
    name: "Topsi.ai",
    url: "https://www.topsi.ai/",
    image: topsiHero,
    tags: ["Angular", "TypeScript", "Ionic", "AI"],
  },
  {
    key: "manjatk",
    name: "manjatk.com",
    url: "https://manjatk.com/",
    image: manjatkHero,
    tags: ["Next.js", "Design", "Booking"],
  },
  {
    key: "ordinem",
    name: "Ordinem",
    url: "https://ordinem.ink",
    image: ordinemHero,
    tags: ["Next.js", "TypeScript", "Web App"],
  },
  {
    key: "moohero",
    name: "MooHero",
    url: "https://www.moohero.com/",
    image: mooheroHero,
    tags: ["UI Design", "Mobile", "Marketing"],
  },
  {
    key: "nina",
    name: "ninahribar.art",
    url: "https://ninahribar.art",
    image: ninaHero,
    tags: ["Next.js", "Portfolio", "Design"],
  },
];

export const otherProjects: OtherProject[] = [
  {
    key: "popsy",
    name: "Popsy",
    url: null,
    logo: popsyLogo,
    badge: "YC",
    tags: ["React", "TypeScript", "Web Platform"],
  },
  {
    key: "devilwears",
    name: "DevilWearsDesign",
    url: "https://www.etsy.com/shop/DevilWearsDesign",
    logo: null,
    tags: ["Brand Design", "Digital Prints", "Etsy"],
  },
  {
    key: "talk9",
    name: "Talk9",
    url: "https://talk9.ai/",
    logo: null,
    badge: "Inovativna SI",
    tags: ["AI", "Voice", "Product Design"],
  },
  {
    key: "printpop",
    name: "PrintPop",
    url: "https://printpop.vercel.app/",
    logo: null,
    tags: ["Side Project", "Etsy", "Tool"],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  "Ionic",
  "Tailwind CSS",
  "Figma",
  "Node.js",
];

export const statsValues = ["20+", "5+", "Web & Mobile"] as const;
