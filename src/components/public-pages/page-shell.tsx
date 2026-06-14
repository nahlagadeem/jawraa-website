import type { Locale } from "@/config/site";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function PageShell({
  locale,
  active,
  children,
}: {
  locale: Locale;
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-[#17191f]">
      <SiteHeader locale={locale} active={active} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}

export function InnerHero({
  eyebrow,
  title,
  description,
  centered = false,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      className={[
        "bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fa_100%)]",
        compact ? "pb-[70px] pt-[148px]" : "pb-[92px] pt-[154px]",
      ].join(" ")}
    >
      <div
        className={[
          "jawraa-container",
          !compact && !centered ? "md:pl-[190px]" : "",
          centered ? "text-center" : "",
        ].join(" ")}
      >
        <div
          className={[
            "mb-5 flex items-center gap-3",
            centered ? "justify-center" : "",
          ].join(" ")}
        >
          <span className="h-px w-8 bg-[#f6be15]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
            {eyebrow}
          </span>
        </div>
        <h1
          className={[
            "text-[38px] font-black leading-[1.02] tracking-[-0.04em] text-[#17191f]",
            compact ? "max-w-[760px] md:text-[52px]" : "max-w-[720px] md:text-[54px]",
          ].join(" ")}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-[540px] text-[13px] font-medium leading-6 text-[#68707c]">
          {description}
        </p>
      </div>
    </section>
  );
}
