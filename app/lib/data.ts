import type { StaticImageData } from "next/image";
import mooheroLogo from "../../src/images/MooHero.svg";
import manjatkShowcase from "../../src/images/manjatk-showcase.png";
import ordinemShowcase from "../../src/images/ordinem-showcase.png";
import popsyLogo from "../../src/images/popsy.png";
import topsiShowcase from "../../src/images/topsi-showcase.png";

export type ProjectKey = "topsi" | "manjatk" | "ordinem";
export type OtherProjectKey = "popsy" | "moohero" | "devilwears";

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
    image: topsiShowcase,
    tags: ["Angular", "TypeScript", "Ionic", "AI"],
  },
  {
    key: "manjatk",
    name: "manjatk.com",
    url: "https://manjatk.com/",
    image: manjatkShowcase,
    tags: ["Next.js", "Design", "Booking"],
  },
  {
    key: "ordinem",
    name: "Ordinem",
    url: "https://ordinem.ink",
    image: ordinemShowcase,
    tags: ["Next.js", "TypeScript", "Web App"],
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
    key: "moohero",
    name: "MooHero",
    url: "https://www.moohero.com/",
    logo: mooheroLogo,
    tags: ["UI Design", "Mobile", "Marketing"],
  },
  {
    key: "devilwears",
    name: "DevilWearsDesign",
    url: "https://www.etsy.com/shop/DevilWearsDesign",
    logo: null,
    tags: ["Brand Design", "Digital Prints", "Etsy"],
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
