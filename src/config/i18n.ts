export const supportedLocales = ["en-US", "si-LK"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en-US";
export const localeCookieName = "NEXT_LOCALE";

export const isLocale = (value: string | undefined | null): value is Locale =>
  !!value && supportedLocales.includes(value as Locale);
