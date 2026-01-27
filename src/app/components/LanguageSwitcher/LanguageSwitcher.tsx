"use client";

import { useRouter } from "next/navigation";
import { type Locale, supportedLocales, localeCookieName } from "@/config/i18n";
import { useState, useTransition } from "react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({
  currentLocale,
  className = "",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Set locale cookie with proper formatting
    document.cookie = `${localeCookieName}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Refresh the page to apply new locale
    startTransition(() => {
      router.refresh();
      // Add a small delay to ensure cookie is set before refresh
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {supportedLocales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          disabled={isPending}
          className={`
            px-4 py-2 rounded-md font-medium transition-all
            ${
              currentLocale === locale
                ? "bg-[#2F7CC4] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
            ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}
          `}
          aria-label={`Switch to ${locale === "en" ? "English" : "Sinhala"}`}
          aria-current={currentLocale === locale ? "true" : undefined}
        >
          {locale === "en" ? "English" : "සිංහල"}
        </button>
      ))}
    </div>
  );
}
