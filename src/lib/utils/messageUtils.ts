import { type Locale } from "@/config/i18n";
import messages from "@/messages/ui.json";

type Messages = typeof messages;

export function getMessage(locale: Locale, key: string): string {
  const keys = key.split(".");
  
  // Try exact locale match first
  let value: any = messages[locale as keyof Messages];

  // If not found and locale has a dash (e.g., si-LK), try base locale (si)
  if (!value && locale.includes("-")) {
    const baseLocale = locale.split("-")[0] as keyof Messages;
    value = messages[baseLocale];
  }

  // Traverse nested keys
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // fallback to key if not found
    }
  }

  return typeof value === "string" ? value : key;
}
