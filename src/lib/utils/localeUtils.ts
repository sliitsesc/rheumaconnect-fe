import { headers, cookies } from "next/headers";
import { defaultLocale, isLocale, type Locale, localeCookieName } from "@/config/i18n";

export async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  const cookiesList = await cookies();
  
  // Try to get locale from header first (set by middleware)
  let locale = headersList.get("x-next-locale");
  
  // If not in header, try to get from cookie
  if (!locale) {
    locale = cookiesList.get(localeCookieName)?.value || null;
  }
  
  return isLocale(locale) ? locale : defaultLocale;
}
