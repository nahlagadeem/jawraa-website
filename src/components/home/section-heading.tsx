import type { Locale } from "@/config/site";
import { homeCopy } from "@/data/home";

type SectionHeadingProps = {
  locale: Locale;
  eyebrow: keyof typeof homeCopy;
  title: keyof typeof homeCopy;
  body?: keyof typeof homeCopy;
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
          {homeCopy[eyebrow][locale]}
        </span>
      </div>
      <h2 className="max-w-[850px] text-[34px] font-black leading-[0.98] tracking-[-0.04em] text-[#17191f] md:text-[46px]">
        {homeCopy[title][locale]}
      </h2>
      {body ? (
        <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-[#717782]">
          {homeCopy[body][locale]}
        </p>
      ) : null}
    </div>
  );
}
