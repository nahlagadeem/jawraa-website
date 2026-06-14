import { ServicesOverviewPage } from "@/components/public-pages/services-pages";
import { getRouteLocale } from "@/lib/locale";

export default async function ServicesRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <ServicesOverviewPage locale={locale} />;
}
