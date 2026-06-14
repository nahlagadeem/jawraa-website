import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import {
  servicePages,
  servicesOverview,
  type ServicePageData,
  type SimpleCard,
} from "@/data/public-pages";
import { CompactFeatureCard } from "./cards";
import { InnerHero, PageShell } from "./page-shell";

export function ServicesOverviewPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={servicesOverview.active}>
      <InnerHero
        eyebrow={servicesOverview.eyebrow[locale]}
        title={servicesOverview.title[locale]}
        description={servicesOverview.description[locale]}
        compact
      />
      <section className="py-[86px]">
        <div className="jawraa-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {servicesOverview.items.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <CompactFeatureCard item={item} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ServiceDetailPage({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePageData;
}) {
  if (page.slug === "managed-services") {
    return <ManagedServicesPage locale={locale} page={page} />;
  }

  if (page.slug === "infrastructure") {
    return <InfrastructurePage locale={locale} page={page} />;
  }

  if (page.slug === "systems-cloud") {
    return <SystemsCloudPage locale={locale} page={page} />;
  }

  return <CybersecurityPage locale={locale} page={page} />;
}

function ManagedServicesPage({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePageData;
}) {
  const strategy = [
    "Industry Experts",
    "On-Time Delivery",
    "Cost Efficiency",
    "High-Quality Outcomes",
  ].map((title) => ({
    title: { en: title, ar: title },
    description: {
      en: "Reliable execution aligned with client standards.",
      ar: "Reliable execution aligned with client standards.",
    },
  }));

  return (
    <PageShell locale={locale} active="/services">
      <section className="pb-[72px] pt-[118px]">
        <div className="jawraa-container max-w-[720px]">
          <Eyebrow text={page.eyebrow[locale]} />
          {locale === "en" ? (
            <h1 className="mt-7 max-w-[660px] text-[42px] leading-[0.99] tracking-[-0.052em] text-[#161922] md:text-[54px]">
              <span className="block font-black">Managed services</span>
              <span className="block font-medium">
                built for continuity, speed, and operational confidence.
              </span>
            </h1>
          ) : (
            <h1 className="mt-7 max-w-[660px] text-[42px] font-black leading-[0.99] tracking-[-0.052em] md:text-[54px]">
              {page.title[locale]}
            </h1>
          )}
          <p className="mt-5 max-w-[580px] text-[19px] font-medium leading-tight tracking-[-0.03em] text-[#66707d] md:text-[22px]">
            {page.description[locale]}
          </p>
        </div>
      </section>

      <section className="border-y border-[#f6be15] py-[76px]">
        <div className="jawraa-container">
          <Eyebrow text="Services Overview" className="mb-10" />
          <div className="mx-auto max-w-[840px] space-y-5">
            {page.featureCards.slice(0, 2).map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <ManagedWideCard item={item} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f6be15] py-[68px]">
        <div className="jawraa-container">
          <Eyebrow text="Service Strengths" className="mb-10" />
          <div className="mx-auto grid max-w-[840px] gap-5 md:grid-cols-4">
            {strategy.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <CompactFeatureCard item={item} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f6be15] py-[76px]">
        <div className="jawraa-container">
          <div className="mx-auto max-w-[840px] space-y-5">
            {page.featureCards.slice(2).map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <ManagedWideCard item={item} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[74px]">
        <div className="jawraa-container">
          <div className="mx-auto grid max-w-[840px] gap-5 md:grid-cols-4">
            {["Business Digitization", "Operational Excellence", "Stakeholder Alignment", "Accelerated Delivery"].map(
              (title, index) => (
                <FadeIn key={title} delay={index * 0.03}>
                  <CompactFeatureCard
                    locale={locale}
                    item={{
                      title: { en: title, ar: title },
                      description: {
                        en: "Structured support for transformation outcomes.",
                        ar: "Structured support for transformation outcomes.",
                      },
                    }}
                  />
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="pb-[88px] pt-[38px]">
        <div className="jawraa-container">
          <h2 className="mx-auto mb-8 flex max-w-[820px] items-center gap-3 text-[18px] font-black tracking-[-0.03em]">
            <span className="size-4 rounded-full bg-[#f6be15]" />
            {page.includedTitle[locale]}
          </h2>
          <div className="mx-auto grid max-w-[820px] grid-cols-1 border border-[#f6be15] md:grid-cols-3">
            {page.included.map((item, index) => (
              <IncludedCell key={`${item.title.en}-${index}`} item={item} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function InfrastructurePage({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePageData;
}) {
  return (
    <PageShell locale={locale} active="/services">
      <InnerHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        compact
      />

      <section className="py-[66px]">
        <div className="jawraa-container max-w-[980px]">
          <h2 className="mb-6 text-[20px] font-black">Infrastructure</h2>
          <div className="space-y-5">
            <InfrastructureRow
              title={page.introTitle[locale]}
              description={page.introBody[locale]}
              image="/assets/pages/infra-07.webp"
            />
            <InfrastructureRow
              title={locale === "ar" ? "Protect What Matters Most" : "Protect What Matters Most"}
              description={
                locale === "ar"
                  ? page.description.ar
                  : "People, property, and processes. Jawraa's security solutions protect assets, manage access, and optimize building operations."
              }
              image="/assets/pages/infra-27.webp"
            />
          </div>
        </div>
      </section>

      <InfrastructureBand items={page.featureCards.slice(0, 2)} locale={locale} />
      <section className="py-[70px]">
        <div className="jawraa-container max-w-[980px] space-y-5">
          {page.featureCards.slice(2, 4).map((item) => (
            <InfrastructureRow
              key={item.title.en}
              title={item.title[locale]}
              description={item.description[locale]}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <InfrastructureBand
        items={[
          {
            title: {
              en: "Transform Meeting Rooms into Dynamic and Inspiring Environments",
              ar: "Transform Meeting Rooms into Dynamic and Inspiring Environments",
            },
            description: {
              en: "Jawraa's solutions enable seamless communication and productive collaboration for in-office and remote teams.",
              ar: "Jawraa's solutions enable seamless communication and productive collaboration for in-office and remote teams.",
            },
            image: "/assets/pages/infra-18.webp",
          },
          {
            title: {
              en: "Foster Engagement and Drive Business Success",
              ar: "Foster Engagement and Drive Business Success",
            },
            description: {
              en: "Enterprise digital signage solutions elevate workplace communication and employee engagement.",
              ar: "Enterprise digital signage solutions elevate workplace communication and employee engagement.",
            },
            image: "/assets/pages/infra-05.webp",
          },
        ]}
        locale={locale}
      />
      <IncludedGrid title={page.includedTitle[locale]} items={page.included} locale={locale} />
    </PageShell>
  );
}

function SystemsCloudPage({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePageData;
}) {
  return (
    <PageShell locale={locale} active="/services">
      <InnerHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        compact
      />
      <section className="py-[42px]">
        <div className="jawraa-container max-w-[980px]">
          <h2 className="mb-5 text-[18px] font-black">
            {locale === "ar" ? "Systems & Cloud Services" : "Systems & Cloud Services"}
          </h2>
          <div className="space-y-5">
            <CloudRow
              title={page.introTitle[locale]}
              description={page.introBody[locale]}
              image="/assets/pages/cloud-03.webp"
            />
            {page.featureCards.map((item) => (
              <CloudRow
                key={item.title.en}
                title={item.title[locale]}
                description={item.description[locale]}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
      <IncludedGrid title={page.includedTitle[locale]} items={page.included} locale={locale} compact />
    </PageShell>
  );
}

function CybersecurityPage({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePageData;
}) {
  return (
    <PageShell locale={locale} active="/services">
      <InnerHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        compact
      />
      <section className="py-[42px] text-center">
        <div className="jawraa-container max-w-[920px]">
          <h2 className="mb-9 text-[26px] font-black">Cybersecurity</h2>
          <h3 className="text-[24px] font-black tracking-[-0.03em]">
            {page.introTitle[locale]}
          </h3>
          <p className="mx-auto mt-5 max-w-[820px] text-[13px] leading-6 text-[#68707c]">
            {page.introBody[locale]}
          </p>
        </div>
      </section>
      <section className="pb-[70px]">
        <div className="jawraa-container max-w-[1060px]">
          <div className="rounded-[20px] border border-[#f6be15] bg-[#f8fafc] p-10 shadow-[0_20px_44px_rgb(17_17_17_/_7%)]">
            <div className="space-y-12">
              {page.featureCards.map((item) => (
                <div key={item.title.en}>
                  <span className="mb-4 block h-px w-6 bg-[#f6be15]" />
                  <h3 className="text-[25px] font-black tracking-[-0.03em]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 max-w-[880px] text-[13px] leading-6 text-[#68707c]">
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <IncludedGrid title={page.includedTitle[locale]} items={page.included} locale={locale} compact />
    </PageShell>
  );
}

function Eyebrow({ text, className }: { text: string; className?: string }) {
  return (
    <div className={["flex items-center gap-3", className].filter(Boolean).join(" ")}>
      <span className="h-px w-8 bg-[#f6be15]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
        {text}
      </span>
    </div>
  );
}

function ManagedWideCard({ item, locale }: { item: SimpleCard; locale: Locale }) {
  return (
    <article className="grid min-h-[160px] gap-7 rounded-[18px] border border-[#f6be15] bg-white p-6 shadow-[0_18px_42px_rgb(17_17_17_/_8%)] md:grid-cols-[1fr_280px]">
      <div>
        <h3 className="text-[18px] font-black leading-tight tracking-[-0.03em]">
          {item.title[locale]}
        </h3>
        <p className="mt-4 max-w-[460px] text-[12px] leading-5 text-[#68707c]">
          {item.description[locale]}
        </p>
      </div>
      {item.image ? (
        <div className="relative min-h-[130px] overflow-hidden rounded-[16px] bg-[#f4f7fa]">
          <Image src={item.image} alt="" fill sizes="280px" className="object-contain p-3" />
        </div>
      ) : null}
    </article>
  );
}

function InfrastructureBand({ items, locale }: { items: SimpleCard[]; locale: Locale }) {
  return (
    <section className="bg-[#eef2f6] py-[70px]">
      <div className="jawraa-container max-w-[980px] space-y-5">
        {items.map((item) => (
          <InfrastructureRow
            key={item.title.en}
            title={item.title[locale]}
            description={item.description[locale]}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

function InfrastructureRow({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <article className="grid min-h-[104px] items-center gap-5 rounded-[14px] border border-[#f6be15] bg-white px-6 py-5 shadow-[0_14px_30px_rgb(17_17_17_/_7%)] md:grid-cols-[1fr_76px]">
      <div>
        <h3 className="text-[15px] font-black">{title}</h3>
        <p className="mt-2 text-[12px] leading-5 text-[#68707c]">{description}</p>
      </div>
      {image ? (
        <div className="relative size-[70px] rounded-[12px] bg-[#f8f3e5]">
          <Image src={image} alt="" fill sizes="70px" className="object-contain p-2" />
        </div>
      ) : null}
    </article>
  );
}

function CloudRow({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <article className="grid min-h-[105px] items-center gap-5 rounded-[14px] border border-[#f6be15] bg-white px-6 py-5 shadow-[0_14px_30px_rgb(17_17_17_/_7%)] md:grid-cols-[1fr_70px]">
      <div>
        <h3 className="text-[15px] font-black">{title}</h3>
        <p className="mt-2 text-[12px] leading-5 text-[#68707c]">{description}</p>
      </div>
      {image ? (
        <div className="relative size-[62px] rounded-[12px] bg-[#f6f1e3]">
          <Image src={image} alt="" fill sizes="62px" className="object-contain p-3" />
        </div>
      ) : null}
    </article>
  );
}

function IncludedGrid({
  title,
  items,
  locale,
  compact = false,
}: {
  title: string;
  items: SimpleCard[];
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "pb-[78px] pt-[28px]" : "py-[70px]"}>
      <div className="jawraa-container max-w-[980px]">
        <h2 className="mb-8 flex items-center gap-3 text-[20px] font-black tracking-[-0.03em]">
          <span className="size-4 rounded-full bg-[#f6be15]" />
          {title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <CompactFeatureCard key={item.title.en} item={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedCell({ item, locale }: { item: SimpleCard; locale: Locale }) {
  return (
    <article className="min-h-[122px] border-b border-r border-[#f6be15] p-5">
      <span className="mb-3 block size-7 rounded-full bg-[#fff4c7]" />
      <h3 className="text-[13px] font-black">{item.title[locale]}</h3>
      <p className="mt-2 text-[10px] leading-4 text-[#747b86]">{item.description[locale]}</p>
    </article>
  );
}

export function getServicePage(slug: string) {
  return servicePages[slug];
}
