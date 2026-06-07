import { notFound } from "next/navigation";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import CTABanner from "../components/sections/CTABanner";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import MorphMarquee from "../components/sections/MorphMarquee";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import Work from "../components/sections/Work";
import { isLang } from "../lib/types";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-clip">
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Stats lang={lang} />
        <MorphMarquee lang={lang} />
        <Services lang={lang} />
        <Work lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <CTABanner lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
