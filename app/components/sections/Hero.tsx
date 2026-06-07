import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import HeroShader from "./HeroShader";

interface Props {
  lang: Lang;
}

export default function Hero({ lang }: Props) {
  const l = getDictionary(lang);
  const contactId = l.nav.items[3];
  const workId = l.nav.items[1];

  return (
    <HeroShader
      kicker={l.hero.kicker}
      title1={l.hero.title1}
      titleConnector={l.hero.titleConnector}
      titleEm={l.hero.titleEm}
      subtitle={l.hero.subtitle}
      cta1={{ label: l.hero.cta1, href: `#${contactId}` }}
      cta2={{ label: l.hero.cta2, href: `#${workId}` }}
    />
  );
}
