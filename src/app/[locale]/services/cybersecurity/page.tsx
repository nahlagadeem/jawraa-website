import { getServicePage, ServiceDetailPage } from "@/components/public-pages/services-pages";
import { getRouteLocale } from "@/lib/locale";

export default async function CybersecurityRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <ServiceDetailPage locale={locale} page={getServicePage("cybersecurity")} />;
}
