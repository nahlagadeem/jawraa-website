import { IotPlaceholderPage } from "@/components/public-pages/iot-placeholder-page";

export default function DtPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <IotPlaceholderPage params={params} pageKey="dt" />;
}
