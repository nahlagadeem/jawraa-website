import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { AiPage } from "@/components/public-pages/ai-page";
import { routing } from "@/i18n/routing";

export default async function AiRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <AiPage locale={locale as Locale} />;
}
