import { PartnersPage } from "@/components/public-pages/logos-page";
import { getRouteLocale } from "@/lib/locale";

export default async function PartnersRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <PartnersPage locale={locale} />;
}
