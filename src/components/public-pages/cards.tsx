import Image from "next/image";
import { Apple, Circle, ShieldCheck } from "lucide-react";
import type { Locale } from "@/config/site";
import type { SimpleCard } from "@/data/public-pages";

export function TextImageCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card grid min-h-[138px] gap-7 rounded-[16px] border border-[#f6be15] bg-white p-6 shadow-[0_16px_36px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_220px]">
      <div>
        <h3 className="text-[17px] font-black leading-tight tracking-[-0.02em]">
          {item.title[locale]}
        </h3>
        <p className="mt-3 text-[12px] leading-5 text-[#68707c]">
          {item.description[locale]}
        </p>
      </div>
      {item.image ? (
        <div className="relative min-h-[112px] overflow-hidden rounded-[14px] bg-[#f4f7fa]">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="260px"
            className="object-contain p-3"
          />
        </div>
      ) : null}
    </article>
  );
}

export function CompactFeatureCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card min-h-[104px] rounded-[12px] border border-[#ebe4c8] bg-white p-4 text-center shadow-[0_12px_26px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
      <div className="mx-auto mb-3 flex size-8 items-center justify-center rounded-full bg-[#ffd21a] text-black">
        <Circle className="size-2 fill-current" />
      </div>
      <h3 className="text-[12px] font-black leading-tight tracking-[-0.01em]">
        {item.title[locale]}
      </h3>
      <p className="mt-2 text-[10px] leading-4 text-[#747b86]">
        {item.description[locale]}
      </p>
    </article>
  );
}

export function LogoCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card flex min-h-[205px] flex-col items-center justify-center rounded-[16px] border border-[#eee7cb] bg-white p-7 text-center shadow-[0_18px_40px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover">
      {item.image ? (
        <div className="relative mb-5 h-[60px] w-[170px] rounded-[12px] bg-white shadow-[0_10px_22px_rgb(17_17_17_/_8%)]">
          <Image
            src={item.image}
            alt={item.title[locale]}
            fill
            sizes="170px"
            className="object-contain p-2"
          />
        </div>
      ) : (
        <Apple className="mb-5 size-10 fill-black" />
      )}
      <h3 className="text-[18px] font-black tracking-[-0.02em]">
        {item.title[locale]}
      </h3>
      <p className="mt-3 text-[12px] leading-5 text-[#68707c]">
        {item.description[locale]}
      </p>
    </article>
  );
}

export function SecurityCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card rounded-[18px] border border-[#ece5c9] bg-white p-6 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
      <ShieldCheck className="mb-5 size-8 text-[#f6be15]" />
      <h3 className="text-[18px] font-black tracking-[-0.025em]">
        {item.title[locale]}
      </h3>
      <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
        {item.description[locale]}
      </p>
    </article>
  );
}
