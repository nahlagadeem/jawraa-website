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
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  compact?: boolean;
  titleClassName?: string;
}) {
  return (
    <section
      className={[
        "bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fa_100%)]",
        compact ? "pb-[48px] pt-[132px]" : "pb-[62px] pt-[138px]",
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
            "text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#17191f] sm:text-[48px] md:text-[68px] md:leading-[1.04]",
            compact ? "max-w-[760px]" : "max-w-[720px]",
            titleClassName,
          ].join(" ")}
        >
          {title}
        </h1>
        <p className="mt-7 max-w-[540px] text-[13px] font-medium leading-6 text-[#68707c]">
          {description}
        </p>
      </div>
    </section>
  );
}
