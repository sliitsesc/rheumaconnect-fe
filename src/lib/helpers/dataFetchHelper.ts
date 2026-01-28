import { API_URL } from "@/config";
import { defaultLocale, type Locale } from "@/config/i18n";

// Track which fallbacks have already been logged to avoid console spam
const loggedFallbacks = new Set<string>();

const mapLocaleForApi = (locale: Locale): string => {
  // Map frontend locales to Strapi API locales
  const localeMap: Record<Locale, string> = {
    "en-US": "en",
    "si-LK": "si-LK",
  };
  return localeMap[locale] || locale;
};

const appendLocale = (path: string, locale: Locale) => {
  const apiLocale = mapLocaleForApi(locale);
  const hasQuery = path.includes("?");
  return `${path}${hasQuery ? "&" : "?"}locale=${apiLocale}`;
};

export async function getData(
  path: string,
  options?: {
    locale?: Locale;
    init?: RequestInit;
    allowFallback?: boolean;
  }
) {
  const locale = options?.locale ?? defaultLocale;
  const allowFallback = options?.allowFallback !== false; // Default true for backward compatibility

  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }

  try {
    const url = API_URL + appendLocale(path, locale);
    const response = await fetch(url, {
      ...options?.init,
      // Ensure locale-specific caching is keyed per locale with unique cache tag
      next: {
        revalidate: options?.init?.next?.revalidate ?? 3600,
        tags: [
          ...(options?.init?.next?.tags || []),
          `locale-${mapLocaleForApi(locale)}`,
        ],
      },
    });

    const jsonData = await response.json();

    // If we got data or it's successful, return it
    if (response.ok) {
      return jsonData;
    }

    // Helper function to check if data is empty (works for both arrays and objects)
    const hasData = (data: unknown): boolean => {
      if (!data) return false;
      if (Array.isArray(data)) return data.length > 0;
      if (typeof data === 'object') return Object.keys(data as Record<string, unknown>).length > 0;
      return true;
    };

    // If the locale-specific resource is missing (404) or we got empty data, try fallback
    if ((response.status === 404 || !hasData(jsonData.data)) && locale !== defaultLocale && allowFallback) {
      // When falling back, use the API mapped locale of the default locale
      const fallbackApiLocale = mapLocaleForApi(defaultLocale);
      const hasQuery = path.includes("?");
      const fallbackUrl = `${API_URL}${path}${hasQuery ? "&" : "?"}locale=${fallbackApiLocale}`;
      
      const fallbackResponse = await fetch(fallbackUrl, {
        ...options?.init,
        next: {
          revalidate: options?.init?.next?.revalidate ?? 3600,
          tags: options?.init?.next?.tags,
        },
      });

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        if (hasData(fallbackData.data)) {
          const key = `${path}|${locale}`;
          if (!loggedFallbacks.has(key)) {
            loggedFallbacks.add(key);
            console.warn(
              `API fallback: ${url} returned no data, served default locale (${fallbackApiLocale})`
            );
          }
          return fallbackData;
        }
      }

      console.error(
        `API Error: ${fallbackUrl} returned ${fallbackResponse.status} after fallback`
      );
      return { data: [] };
    }

    console.error(`API Error: ${url} returned ${response.status}`);
    // Return empty data instead of throwing to allow graceful fallback
    return { data: [] };
  } catch (error) {
    console.error(`Failed to fetch ${path}:`, error);
    // Return empty data to allow graceful fallback to 404
    return { data: [] };
  }
}

