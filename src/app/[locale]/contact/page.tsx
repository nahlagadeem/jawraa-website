import { ContactPage } from "@/components/public-pages/media-contact-pages";
import { getRouteLocale } from "@/lib/locale";

export default async function ContactRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getRouteLocale(params);
  return <ContactPage locale={locale} />;
}
