import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { LowCurrentPage } from "@/components/public-pages/low-current-page";
import { routing } from "@/i18n/routing";

export default async function LowCurrentRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <LowCurrentPage locale={locale as Locale} />;
}
