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
  { key: "contact", href: "/contact#contact-form" },
] as const;

export const adminSections = [
  { key: "dashboard", href: "/admin" },
  { key: "homeSections", href: "/admin/home-sections" },
  { key: "services", href: "/admin/services" },
  { key: "partners", href: "/admin/partners" },
  { key: "clients", href: "/admin/clients" },
  { key: "successStories", href: "/admin/success-stories" },
  { key: "media", href: "/admin/media-center" },
  { key: "seo", href: "/admin/seo" },
  { key: "assets", href: "/admin/assets" },
] as const;
