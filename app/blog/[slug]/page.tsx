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

      <main className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px] tracking-wide text-gray-400 dark:text-gray-500 mb-16 md:mb-20">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Domov</Link>
            <span className="mx-2.5 text-gray-300 dark:text-gray-700">/</span>
            <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Blog</Link>
            <span className="mx-2.5 text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">{post.title}</span>
          </nav>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <time className="text-[12px] text-gray-400 dark:text-gray-500 font-[family-name:var(--font-geist-mono)] tabular-nums">
                  {new Date(post.date).toLocaleDateString("sl-SI", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="mt-4 text-[13px] text-gray-400 dark:text-gray-500">
                  Avtorica
                </p>
                <p className="text-[14px] font-medium text-gray-900 dark:text-white">
                  Ajda Zajc
                </p>
                <div className="h-px bg-gray-100 dark:bg-gray-800 my-6" />
                <div className="flex flex-col gap-2">
                  <Link href="/storitve/izdelava-spletnih-strani" className="text-[13px] text-accent hover:underline">
                    Izdelava spletnih strani
                  </Link>
                  <Link href="/#kontakt" className="text-[13px] text-accent hover:underline">
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <header className="mb-12">
                <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">Blog</p>
                <h1 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight">
                  {post.title}
                </h1>
                <p className="mt-4 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {post.description}
                </p>
                <div className="h-px bg-gray-200 dark:bg-gray-800 mt-10" />
              </header>

              <div className="max-w-2xl">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-[family-name:var(--font-serif-display)] text-gray-900 dark:text-white mt-12 mb-4">
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-3">
                        {block.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2.5 my-5">
                        {block.split("\n").map((li, j) => (
                          <li key={j} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 mt-2.5 shrink-0" />
                            {li.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  const parts = block.split(/\[([^\]]+)\]\(([^)]+)\)/);
                  if (parts.length > 1) {
                    return (
                      <p key={i} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed my-5">
                        {parts.map((part, j) => {
                          if (j % 3 === 1) {
                            return (
                              <Link key={j} href={parts[j + 1]} className="text-accent hover:underline">
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
                    <p key={i} className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed my-5">
                      {block}
                    </p>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
                <p className="text-[15px] text-gray-500 dark:text-gray-400 mb-5">
                  Potrebujete profesionalno spletno stran? Poglejte ponudbo ali me kontaktirajte za brezplačen posvet.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/storitve/izdelava-spletnih-strani"
                    className="group inline-flex items-center gap-3 text-[14px] font-medium text-gray-900 dark:text-white"
                  >
                    <span className="w-9 h-9 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3.5 h-3.5 text-white dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                    </span>
                    Izdelava spletnih strani
                  </Link>
                  <Link href="/#kontakt" className="text-[14px] text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors py-2">
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: "Ajda Zajc", url: "https://ajdazajc.com" },
            publisher: { "@type": "Organization", name: "Ajda Zajc", url: "https://ajdazajc.com" },
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
