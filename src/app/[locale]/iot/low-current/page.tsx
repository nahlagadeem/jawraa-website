import { IotPlaceholderPage } from "@/components/public-pages/iot-placeholder-page";

export default function LowCurrentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <IotPlaceholderPage params={params} pageKey="low-current" />;
}
