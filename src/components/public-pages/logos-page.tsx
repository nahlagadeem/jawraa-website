import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { clientsPage, partnerPage } from "@/data/public-pages";
import { LogoCard } from "./cards";
import { InnerHero, PageShell } from "./page-shell";

export function PartnersPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={partnerPage.active}>
      <InnerHero
        eyebrow={partnerPage.eyebrow[locale]}
        title={partnerPage.title[locale]}
        description={partnerPage.description[locale]}
        compact
      />
      <LogoGrid
        locale={locale}
        items={partnerPage.items}
        eyebrow={partnerPage.eyebrow[locale]}
        title={
          locale === "ar"
            ? clientsPage.title.ar
            : "Organizations that trust Jawraa to support critical initiatives."
        }
        description={
          locale === "ar"
            ? clientsPage.description.ar
            : "Each relationship reflects confidence in Jawraa's ability to deliver dependable digital solutions across education, health, culture, technology, and institutional transformation."
        }
      />
      <section className="pb-[84px]">
        <div className="jawraa-container">
          <div className="mx-auto flex max-w-[760px] flex-wrap items-center justify-center gap-7 rounded-[14px] border border-[#eee7cb] bg-white px-8 py-5 shadow-[0_14px_30px_rgb(17_17_17_/_7%)]">
            {partnerPage.strip.map((name) => (
              <span key={name} className="text-[17px] font-black text-[#9aa1aa]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ClientsPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={clientsPage.active}>
      <InnerHero
        eyebrow={clientsPage.eyebrow[locale]}
        title={clientsPage.title[locale]}
        description={clientsPage.description[locale]}
        compact
      />
      <LogoGrid
        locale={locale}
        items={clientsPage.items}
        eyebrow={clientsPage.eyebrow[locale]}
        title={
          locale === "ar"
            ? clientsPage.title.ar
            : "Organizations that trust Jawraa to support critical initiatives."
        }
        description={
          locale === "ar"
            ? clientsPage.description.ar
            : "Each relationship reflects confidence in Jawraa's ability to deliver dependable digital solutions across education, health, culture, technology, and institutional transformation."
        }
      />
    </PageShell>
  );
}

function LogoGrid({
  locale,
  items,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  items: typeof partnerPage.items;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="py-[84px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-[30px] font-black leading-tight tracking-[-0.04em] md:text-[40px]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[12px] leading-6 text-[#68707c]">
              {description}
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid max-w-[940px] gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn
              key={item.title.en}
              delay={index * 0.03}
              className={
                index === items.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-[48%]"
                  : ""
              }
            >
              <LogoCard item={item} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
