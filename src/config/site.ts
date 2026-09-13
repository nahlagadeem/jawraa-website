export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const publicPages = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "partners", href: "/partners" },
  { key: "clients", href: "/clients" },
  { key: "media", href: "/media-center" },
  { key: "contact", href: "/media-center#contact-center" },
] as const;
