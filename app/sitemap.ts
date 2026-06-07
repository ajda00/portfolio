import type { MetadataRoute } from "next";
import { allPosts } from "./blog/_posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ajdazajc.com";

  const blogEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}/sl`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          sl: `${baseUrl}/sl`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          sl: `${baseUrl}/sl`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/storitve/izdelava-spletnih-strani`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
