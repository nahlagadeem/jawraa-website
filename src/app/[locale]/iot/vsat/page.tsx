import { IotPlaceholderPage } from "@/components/public-pages/iot-placeholder-page";

export default function VsatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <IotPlaceholderPage params={params} pageKey="vsat" />;
}
