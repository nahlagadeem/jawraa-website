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
      <h2 className="max-w-[850px] text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191f] sm:text-[34px] md:text-[46px] md:leading-[0.98]">
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
