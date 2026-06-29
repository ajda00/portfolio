import { notFound } from "next/navigation";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../components/sections/About";
import Approach from "../components/sections/Approach";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import MorphMarquee from "../components/sections/MorphMarquee";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import TechStack from "../components/sections/TechStack";
import Work from "../components/sections/Work";
import { isLang } from "../lib/types";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <div className="noise relative min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-x-clip">
      <a href="#main-content" className="skip-link">
        {lang === "sl" ? "Preskoči na vsebino" : "Skip to content"}
      </a>
      <Nav lang={lang} />
      <main id="main-content">
        <Hero lang={lang} />
        <Stats lang={lang} />
        <Work lang={lang} />
        <Approach lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        <Services lang={lang} />
        <TechStack lang={lang} />
        <MorphMarquee lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
