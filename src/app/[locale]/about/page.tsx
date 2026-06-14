import { AboutPage } from "@/components/public-pages/about-page";
import { getRouteLocale } from "@/lib/locale";

export default async function AboutRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <AboutPage locale={locale} />;
}
