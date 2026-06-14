import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { HomePage } from "@/components/home/home-page";
import { routing } from "@/i18n/routing";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <HomePage locale={locale as Locale} />;
}
