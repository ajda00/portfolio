import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { allPosts, getPostBySlug } from "../_posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Ajda Zajc"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <Nav />

      <main className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 dark:text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">Domov</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
          </nav>

          <header className="mb-10">
            <time className="text-sm text-gray-400 dark:text-gray-500">
              {new Date(post.date).toLocaleDateString("sl-SI", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-3 font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              {post.description}
            </p>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-serif-display)] prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-[family-name:var(--font-serif-display)] text-gray-900 dark:text-white mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 my-4 text-gray-600 dark:text-gray-400">
                    {block.split("\n").map((li, j) => (
                      <li key={j}>{li.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              // Handle inline links [text](url)
              const parts = block.split(/\[([^\]]+)\]\(([^)]+)\)/);
              if (parts.length > 1) {
                return (
                  <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed my-4">
                    {parts.map((part, j) => {
                      if (j % 3 === 1) {
                        return (
                          <Link key={j} href={parts[j + 1]} className="text-pink-500 hover:underline">
                            {part}
                          </Link>
                        );
                      }
                      if (j % 3 === 2) return null;
                      return <span key={j}>{part}</span>;
                    })}
                  </p>
                );
              }
              return (
                <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed my-4">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Author + CTA */}
          <div className="mt-16 p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Avtorica: <span className="font-medium text-gray-900 dark:text-white">Ajda Zajc</span> — oblikovalka in razvijalka spletnih strani
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Potrebujete profesionalno spletno stran? Poglejte mojo ponudbo ali me kontaktirajte za brezplačen posvet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/storitve/izdelava-spletnih-strani"
                className="px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-90 transition-opacity"
              >
                Izdelava spletnih strani
              </Link>
              <Link
                href="/#kontakt"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[13px] font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Ajda Zajc",
              url: "https://ajdazajc.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Ajda Zajc",
              url: "https://ajdazajc.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://ajdazajc.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://ajdazajc.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://ajdazajc.com/blog/${post.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
