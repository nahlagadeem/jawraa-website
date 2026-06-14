import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { routing } from "@/i18n/routing";

export async function getRouteLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return locale as Locale;
}
