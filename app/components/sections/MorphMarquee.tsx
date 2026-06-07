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
      className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <GooeyText
          texts={words[lang]}
          morphTime={1.2}
          cooldownTime={0.6}
          className="h-[96px] sm:h-[120px] md:h-[160px]"
          textClassName="font-heading font-bold text-gray-900 dark:text-white tracking-tight !text-[clamp(2.5rem,10vw,5rem)]"
        />
      </div>
    </section>
  );
}
