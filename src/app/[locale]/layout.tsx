import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { localeDirections } from "@/config/site";
import { HtmlLocaleSync } from "@/components/layout/html-locale-sync";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = localeDirections[locale as keyof typeof localeDirections];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HtmlLocaleSync locale={locale as keyof typeof localeDirections} direction={direction} />
      <div lang={locale} dir={direction} className="min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
