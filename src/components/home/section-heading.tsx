import type { Locale } from "@/config/site";
import { homePageCopy } from "@/data/home";

type SectionHeadingProps = {
  locale: Locale;
  eyebrow: keyof typeof homePageCopy;
  title: keyof typeof homePageCopy;
  body?: keyof typeof homePageCopy;
  className?: string;
};

export function SectionHeading({
  locale,
  eyebrow,
  title,
  body,
  className,
}: SectionHeadingProps) {
  return (
    <div className={["max-w-[760px]", className].filter(Boolean).join(" ")}>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-[#f6be15]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
          {homePageCopy[eyebrow][locale]}
        </span>
      </div>
      <h2 className="max-w-[820px] text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#17191f] sm:text-[32px] md:text-[40px] md:leading-[1.04]">
        {homePageCopy[title][locale]}
      </h2>
      {body ? (
        <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-[#717782]">
          {homePageCopy[body][locale]}
        </p>
      ) : null}
    </div>
  );
}
