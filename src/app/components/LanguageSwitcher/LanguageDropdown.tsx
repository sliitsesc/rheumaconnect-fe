"use client";

import { useRouter } from "next/navigation";
import { type Locale, supportedLocales, localeCookieName } from "@/config/i18n";
import { useTransition } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

interface LanguageDropdownProps {
  currentLocale: Locale;
  className?: string;
}

const localeLabels: Record<Locale, string> = {
  "en-US": "English",
  "si-LK": "සිංහල",
};

export function LanguageDropdown({
  currentLocale,
  className = "",
}: LanguageDropdownProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;

    if (newLocale === currentLocale) return;

    // Set locale cookie with proper formatting
    document.cookie = `${localeCookieName}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    startTransition(() => {
      router.refresh();
      // Add a small delay to ensure cookie is set before refresh
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2">
        <GlobeAltIcon className="w-5 h-5 text-gray-600" />
        <select
          value={currentLocale}
          onChange={handleChange}
          disabled={isPending}
          className={`
            appearance-none bg-white border border-gray-300 rounded-md
            px-3 py-2 pr-8 text-sm font-medium text-gray-700
            hover:border-gray-400 focus:outline-none focus:ring-2
            focus:ring-[#2F7CC4] focus:border-transparent
            ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}
          `}
          aria-label="Select language"
        >
          {supportedLocales.map((locale) => (
            <option key={locale} value={locale}>
              {localeLabels[locale]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
