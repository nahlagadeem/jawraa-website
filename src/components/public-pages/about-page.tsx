import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutPage } from "@/data/public-pages";
import { PageShell } from "./page-shell";

export function AboutPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={aboutPage.active}>
      <section className="bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_55%,#fff9e8_100%)] pb-[88px] pt-[126px]">
        <div className="jawraa-container md:pl-[190px]">
          <FadeIn>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {aboutPage.eyebrow[locale]}
              </span>
            </div>
            <h1 className="max-w-[590px] text-[50px] font-black leading-[0.92] tracking-[-0.05em] md:text-[72px]">
              {aboutPage.title[locale]}
            </h1>
            <p className="mt-6 max-w-[570px] text-[27px] font-medium leading-tight tracking-[-0.035em] text-[#626a75]">
              {aboutPage.lead[locale]}
            </p>
            <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-[#717782]">
              {aboutPage.body[locale]}
            </p>
          </FadeIn>
          <div className="mt-9 grid max-w-[620px] gap-4 sm:grid-cols-3">
            {aboutPage.stats.map((stat, index) => (
              <FadeIn key={stat.value} delay={index * 0.04}>
                <div className="rounded-[14px] border border-[#eee7cb] bg-white p-5 shadow-[0_18px_38px_rgb(17_17_17_/_8%)]">
                  <p className="text-[26px] font-black tracking-[-0.04em]">
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

      <section className="py-[88px]">
        <div className="jawraa-container">
          <div className="rounded-[18px] border border-[#f6be15] bg-white p-8 shadow-[0_24px_52px_rgb(17_17_17_/_10%)]">
            <div className="grid gap-8 md:grid-cols-5">
              {aboutPage.timeline.map((item) => (
                <div key={item.year} className="text-center">
                  <span className="mx-auto mb-5 block size-2 rounded-full bg-[#f6be15]" />
                  <p className="text-[14px] font-black">{item.year}</p>
                  <p className="mt-2 text-[12px] leading-5 text-[#737a85]">
                    {item.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[84px]">
        <div className="jawraa-container max-w-[760px]">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-[420px] rounded-[16px] border border-[#f6be15] bg-white p-6 text-center shadow-[0_20px_44px_rgb(17_17_17_/_8%)]">
              <h2 className="text-[24px] font-black leading-tight tracking-[-0.03em]">
                {locale === "ar"
                  ? "ست قيم تشكل ثقافة جوراء وقراراتها."
                  : "Six core values shape Jawraa's culture and decision-making."}
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {aboutPage.values.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <div className="rounded-[15px] border border-[#eee7cb] bg-white p-6 shadow-[0_16px_34px_rgb(17_17_17_/_7%)]">
                  <span className="mb-4 block size-3 rounded-full bg-[#f6be15]" />
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

      <section className="pb-[92px] pt-[38px]">
        <div className="jawraa-container">
          <div className="flex flex-col gap-8 rounded-[24px] bg-[#14171c] px-9 py-9 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)] md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <h2 className="text-[30px] font-black leading-tight tracking-[-0.04em] md:text-[38px]">
                {locale === "ar"
                  ? "Ready to explore Jawraa's next chapter?"
                  : "Ready to explore Jawraa's next chapter?"}
              </h2>
              <p className="mt-3 max-w-[680px] text-[13px] leading-6 text-[#d6dae0]">
                {locale === "ar"
                  ? aboutPage.body.ar
                  : "Let's transform this company story into a stronger digital experience that reflects leadership, trust, and future-ready ambition."}
              </p>
            </div>
            <div className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#f6be15] px-7 text-[12px] font-black text-black">
              Contact Jawraa
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
