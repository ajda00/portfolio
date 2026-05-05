import { post as kakoIzbratiSpletnoStran } from "./kako-izbrati-spletno-stran";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  content: string;
};

export const allPosts: BlogPost[] = [kakoIzbratiSpletnoStran].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}
