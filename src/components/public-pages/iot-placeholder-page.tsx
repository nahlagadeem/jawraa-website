import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { routing } from "@/i18n/routing";
import { PageShell } from "./page-shell";

const pageTitles = {
  iot: "IOT",
  ai: "AI",
  dt: "DT",
  vsat: "VSAT",
  "low-current": "LOW CURRENT",
} as const;

type IotPageKey = keyof typeof pageTitles;

export async function IotPlaceholderPage({
  params,
  pageKey,
}: {
  params: Promise<{ locale: string }>;
  pageKey: IotPageKey;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <PageShell locale={locale as Locale} active="/iot">
      <main className="min-h-screen bg-white">
        <section className="jawraa-container flex min-h-[520px] items-center justify-center pb-20 pt-[138px]">
          <h1 className="text-center text-[42px] font-bold leading-none tracking-[-0.035em] text-[#17191f] sm:text-[64px] md:text-[82px]">
            {pageTitles[pageKey]}
          </h1>
        </section>
      </main>
    </PageShell>
  );
}
