import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { allPosts } from "./_posts";

export const metadata: Metadata = {
  title: "Blog — Nasveti za spletne strani in digitalni marketing",
  description:
    "Praktični nasveti za izdelavo spletne strani, SEO optimizacijo in digitalni marketing za mala podjetja in startupi.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <Nav />

      <main className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px] tracking-wide text-gray-400 dark:text-gray-500 mb-16 md:mb-20">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Domov</Link>
            <span className="mx-2.5 text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">Blog</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-[0.2em] text-accent font-medium mb-4">Blog</p>
              <h1 className="font-[family-name:var(--font-serif-display)] text-3xl md:text-4xl text-gray-900 dark:text-white leading-snug">
                Nasveti, vodniki in razmišljanja
              </h1>
              <p className="mt-4 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
                O izdelavi spletnih strani, oblikovanju in digitalnem marketingu.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-0">
                {allPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group block py-8 ${i < allPosts.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}
                  >
                    <time className="text-[12px] text-gray-400 dark:text-gray-500 font-[family-name:var(--font-geist-mono)] tabular-nums">
                      {new Date(post.date).toLocaleDateString("sl-SI", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-[17px] font-semibold text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                      {post.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-gray-400 group-hover:text-accent transition-colors">
                      Preberi več
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
