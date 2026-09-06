import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { DtPage } from "@/components/public-pages/dt-page";
import { routing } from "@/i18n/routing";

export default async function DtRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <DtPage locale={locale as Locale} />;
}
