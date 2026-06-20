import type { Lang } from "../../lib/types";
import { GooeyText } from "../ui/gooey-text-morphing";

interface Props {
  lang: Lang;
}

const words: Record<Lang, string[]> = {
  sl: ["Oblikovanje", "Razvoj", "Strategija", "Objava"],
  en: ["Design", "Engineering", "Strategy", "Launch"],
};

export default function MorphMarquee({ lang }: Props) {
  return (
    <section
      aria-hidden="true"
      className="bg-app py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <GooeyText
          texts={words[lang]}
          morphTime={1.2}
          cooldownTime={0.6}
          textClassName="font-display font-bold text-ink tracking-[-0.04em] !text-[clamp(2rem,6vw,3.5rem)]"
        />
      </div>
    </section>
  );
}
