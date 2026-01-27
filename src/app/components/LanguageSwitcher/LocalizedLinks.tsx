"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Locale, supportedLocales } from "@/config/i18n";

interface LocalizedLink {
  locale: Locale;
  slug: string;
  title?: string;
}

interface LocalizedLinksProps {
  currentLocale: Locale;
  currentSlug: string;
  localizations?: LocalizedLink[];
  className?: string;
}

export function LocalizedLinks({
  currentLocale,
  currentSlug,
  localizations = [],
  className = "",
}: LocalizedLinksProps) {
  const pathname = usePathname();

  // Build the base path without the locale and slug
  const pathSegments = pathname.split("/").filter(Boolean);
  pathSegments.shift(); // Remove locale
  pathSegments.pop(); // Remove current slug
  const basePath = pathSegments.join("/");

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-gray-600">Available in:</span>

      {/* Current locale */}
      <span className="text-sm font-semibold text-[#2F7CC4]">
        {currentLocale === "en" ? "English" : "සිංහල"}
      </span>

      {/* Other available locales */}
      {localizations.map((loc) => {
        const href = basePath
          ? `/${loc.locale}/${basePath}/${loc.slug}`
          : `/${loc.locale}/${loc.slug}`;

        return (
          <Link
            key={loc.locale}
            href={href}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            hrefLang={loc.locale}
          >
            {loc.locale === "en" ? "English" : "සිංහල"}
          </Link>
        );
      })}
    </div>
  );
}
