import { MediaCenterPage } from "@/components/public-pages/media-contact-pages";
import { getRouteLocale } from "@/lib/locale";

export default async function MediaCenterRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <MediaCenterPage locale={locale} />;
}
