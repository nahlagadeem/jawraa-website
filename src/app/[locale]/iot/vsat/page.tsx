import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { VsatPage } from "@/components/public-pages/vsat-page";
import { routing } from "@/i18n/routing";

export default async function VsatRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <VsatPage locale={locale as Locale} />;
}
