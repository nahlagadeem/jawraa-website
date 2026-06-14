import { ClientsPage } from "@/components/public-pages/logos-page";
import { getRouteLocale } from "@/lib/locale";

export default async function ClientsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <ClientsPage locale={locale} />;
}
