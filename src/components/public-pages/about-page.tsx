import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { homeIdentityCards } from "@/data/home";
import { aboutPage } from "@/data/public-pages";
import { Link } from "@/i18n/navigation";
import {
  BarChart3,
  Cog,
  Globe2,
  Handshake,
  Lightbulb,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "./page-shell";

export function AboutPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={aboutPage.active}>
      <section className="bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_55%,#fff9e8_100%)] pb-[58px] pt-[104px]">
        <div className="jawraa-container max-w-[720px]">
          <FadeIn>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {aboutPage.eyebrow[locale]}
              </span>
            </div>
            <h1 className="max-w-[590px] text-[34px] font-bold leading-[0.98] tracking-[-0.035em] sm:text-[48px] md:text-[68px] md:leading-[0.94]">
              {aboutPage.title[locale]}
            </h1>
            <p className="mt-6 max-w-[570px] text-[20px] font-medium leading-tight tracking-[-0.035em] text-[#626a75] sm:text-[27px]">
              {aboutPage.lead[locale]}
            </p>
            <span className="mt-5 block h-[2px] w-12 bg-[#f6be15]" />
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-[#717782]">
              {aboutPage.body[locale]}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#jawraa-journey"
                className="jawraa-gold-action inline-flex h-11 items-center justify-center rounded-full bg-[#f6be15] px-6 text-[12px] font-black text-black hover:jawraa-gold-action-hover"
              >
                {aboutPage.heroCta[locale]}
              </a>
              <a
                href="#jawraa-identity"
                className="jawraa-outline-action inline-flex h-11 items-center justify-center rounded-full border border-[#e4e7eb] bg-white px-6 text-[12px] font-black text-[#17191f] hover:jawraa-outline-action-hover"
              >
                {aboutPage.visionLabel[locale]}
              </a>
            </div>
          </FadeIn>
          <div className="mt-9 grid max-w-[620px] gap-4 sm:grid-cols-3">
            {aboutPage.stats.map((stat, index) => (
              <FadeIn key={stat.value} delay={index * 0.04}>
                <div className="rounded-[14px] border border-[#eee7cb] bg-white p-5 shadow-[0_18px_38px_rgb(17_17_17_/_8%)]">
                  <p dir="ltr" className="text-[26px] font-black tracking-[-0.04em]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] text-[#6f7681]">
                    {stat.label[locale]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="jawraa-journey" className="scroll-mt-28 py-[58px]">
        <div className="jawraa-container">
          <FadeIn>
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {aboutPage.timelineEyebrow[locale]}
              </span>
            </div>
          </FadeIn>
          <div className="jawraa-lift-card overflow-x-auto rounded-[18px] border border-[#f6be15] bg-white p-8 shadow-[0_24px_52px_rgb(17_17_17_/_10%)] hover:jawraa-lift-card-hover">
            <div className="flex min-w-max gap-0">
              {aboutPage.timeline.map((item, index) => (
                <FadeIn key={item.year} delay={index * 0.02}>
                  <div className="relative w-[156px] px-4 pt-7 text-center">
                    <span className="absolute left-0 right-0 top-[10px] h-px bg-[#eee7cb]" />
                    <span className="relative z-10 mx-auto mb-4 block size-3 rounded-full bg-[#f6be15]" />
                    <p className="text-[13px] font-black text-[#161922]">{item.year}</p>
                    <p className="mt-3 text-[10px] leading-4 text-[#737a85]">
                      {item.label[locale]}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jawraa-identity" className="scroll-mt-28 py-[56px]">
        <div className="jawraa-container">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {aboutPage.identityEyebrow[locale]}
              </span>
            </div>
          </FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutPage.identity.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.04}>
                <article className="jawraa-lift-card h-full rounded-[18px] border border-[#f6be15] bg-white p-7 shadow-[0_20px_44px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover">
                  <AboutIcon imageSrc={homeIdentityCards[index]?.image} />
                  <h2 className="text-[20px] font-bold leading-tight tracking-[-0.02em]">
                    {item.title[locale]}
                  </h2>
                  <p className="mt-4 text-[13px] leading-6 text-[#68707c]">
                    {item.description[locale]}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[56px]">
        <div className="jawraa-container max-w-[760px]">
          <FadeIn>
            <div className="jawraa-lift-card mx-auto mb-8 max-w-[420px] rounded-[16px] border border-[#f6be15] bg-white p-6 text-center shadow-[0_20px_44px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#f6be15]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                  {aboutPage.valuesEyebrow[locale]}
                </span>
              </div>
              <h2 className="text-[22px] font-bold leading-tight tracking-[-0.02em]">
                {aboutPage.valuesTitle[locale]}
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {aboutPage.values.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <div className="jawraa-lift-card rounded-[15px] border border-[#f6be15] bg-white p-6 text-center shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <AboutIcon icon={valueIcons[index]} compact centered />
                  <h3 className="text-[16px] font-black">{item.title[locale]}</h3>
                  <p className="mt-2 text-[12px] leading-5 text-[#737a85]">
                    {item.description[locale]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[62px] pt-[28px]">
        <div className="jawraa-container">
          <div className="flex flex-col gap-8 rounded-[24px] bg-[#14171c] px-9 py-9 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)] md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.03em] md:text-[36px]">
                {aboutPage.ctaTitle[locale]}
              </h2>
              <p className="mt-3 max-w-[680px] text-[13px] leading-6 text-[#d6dae0]">
                {aboutPage.ctaBody[locale]}
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              locale={locale}
              className="jawraa-gold-action inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#f6be15] px-7 text-[12px] font-black text-black hover:jawraa-gold-action-hover"
            >
              {aboutPage.ctaButton[locale]}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const valueIcons: LucideIcon[] = [
  Handshake,
  Lightbulb,
  ShieldCheck,
  BarChart3,
  Cog,
  Globe2,
];

function AboutIcon({
  icon: Icon = Search,
  imageSrc,
  compact = false,
  centered = false,
}: {
  icon?: LucideIcon;
  imageSrc?: string;
  compact?: boolean;
  centered?: boolean;
}) {
  return (
    <span
      className={[
        "mb-5 flex items-center justify-center rounded-[10px] bg-[#fff8df] text-[#7c8794]",
        compact ? "size-9" : "size-12",
        centered ? "mx-auto" : "",
      ].join(" ")}
    >
      {imageSrc ? (
        <Image src={imageSrc} alt="" width={24} height={24} />
      ) : (
        <Icon className={compact ? "size-4" : "size-5"} strokeWidth={1.9} />
      )}
    </span>
  );
}
