export type Lang = "sl" | "en";

export const LANGS: Lang[] = ["sl", "en"];

export const DEFAULT_LANG: Lang = "sl";

export function isLang(value: string): value is Lang {
  return value === "sl" || value === "en";
}
