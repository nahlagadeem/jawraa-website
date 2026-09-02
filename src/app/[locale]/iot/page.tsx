import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { IotPage } from "@/components/public-pages/iot-page";
import { routing } from "@/i18n/routing";

export default async function IotRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <IotPage locale={locale as Locale} />;
}
