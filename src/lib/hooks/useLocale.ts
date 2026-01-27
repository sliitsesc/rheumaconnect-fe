"use client";

import { useEffect, useState } from "react";
import { type Locale } from "@/config/i18n";

/**
 * Hook to safely read locale from pathname on client side
 * Prevents hydration mismatches
 */
export function useClientLocale(): Locale | null {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    // Only runs on client, after hydration
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const potentialLocale = segments[0] as Locale;

    if (potentialLocale === "en" || potentialLocale === "si") {
      setLocale(potentialLocale);
    }
  }, []);

  return locale;
}

/**
 * Hook to get current path without locale prefix
 */
export function usePathWithoutLocale(): string {
  const [path, setPath] = useState("/");

  useEffect(() => {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);

    // Remove locale from path
    if (segments[0] === "en" || segments[0] === "si") {
      segments.shift();
    }

    setPath("/" + segments.join("/"));
  }, []);

  return path;
}
