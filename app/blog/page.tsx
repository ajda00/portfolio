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

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 dark:text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">Domov</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 dark:text-gray-300">Blog</span>
          </nav>

          <h1 className="font-[family-name:var(--font-serif-display)] text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
            Nasveti, vodiči in razmi��ljanja o izdelavi spletnih strani, oblikovanju in digitalnem marketingu.
          </p>

          <div className="space-y-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg hover:shadow-gray-100/50 dark:hover:shadow-none transition-all"
              >
                <time className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString("sl-SI", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {post.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] text-gray-400 group-hover:text-pink-500 transition-colors">
                  Preberi več
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
