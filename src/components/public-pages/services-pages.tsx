import Image from "next/image";
import {
  Cable,
  ChartNetwork,
  Cog,
  FingerprintPattern,
  LockKeyhole,
  Monitor,
  Server,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
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
      <section className="py-[58px]">
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
  const strengths = page.strengths ?? [];
  const outcomeCards = page.outcomeCards ?? [];
  const managedContentClass = "jawraa-container max-w-[1200px]";

  return (
    <PageShell locale={locale} active="/services">
      <section className="pb-[48px] pt-[96px]">
        <div className="jawraa-container max-w-[820px]">
          <Eyebrow text={page.eyebrow[locale]} />
          {locale === "en" ? (
            <h1 className="mt-7 max-w-[660px] text-[34px] font-bold leading-[0.98] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[68px] md:leading-[0.94]">
              <span className="block">Managed services</span>
              <span className="block text-[28px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[38px] md:text-[50px]">
                built for continuity, speed,
              </span>
              <span className="block text-[28px] font-light leading-[1.08] tracking-[-0.025em] sm:text-[38px] md:text-[50px]">
                and operational confidence.
              </span>
            </h1>
          ) : (
            <h1 className="mt-7 max-w-[660px] text-[34px] font-bold leading-[0.98] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[68px] md:leading-[0.94]">
              {page.title[locale]}
            </h1>
          )}
          <span className="mt-5 block h-[2px] w-12 bg-[#f6be15]" />
          <p className="mt-4 max-w-[580px] text-[17px] font-medium leading-tight tracking-[-0.03em] text-[#66707d] sm:text-[19px] md:text-[22px]">
            {page.description[locale]}
          </p>
        </div>
      </section>

      <section className="border-y border-[#f6be15] bg-[#f7f8fa] py-[50px]">
        <div className={managedContentClass}>
          <Eyebrow
            text={(page.overviewEyebrow ?? page.eyebrow)[locale]}
            className="mb-10"
          />
          <div className="space-y-10">
            {page.featureCards.slice(0, 1).map((item) => (
              <FadeIn key={item.title.en}>
                <ManagedWideCard item={item} locale={locale} />
              </FadeIn>
            ))}
            {page.featureCards[1] ? (
              <FadeIn delay={0.03}>
                <ManagedWideCard item={page.featureCards[1]} locale={locale} />
              </FadeIn>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f6be15] bg-[#f7f8fa] py-[46px]">
        <div className={managedContentClass}>
          <Eyebrow
            text={(page.strengthsEyebrow ?? page.eyebrow)[locale]}
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-4">
            {strengths.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <ManagedMiniCard item={item} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f6be15] bg-[#f7f8fa] py-[50px]">
        <div className={`${managedContentClass} space-y-10`}>
          {page.featureCards.slice(2, 3).map((item) => (
            <FadeIn key={item.title.en}>
              <ManagedWideCard item={item} locale={locale} />
            </FadeIn>
          ))}
          {page.featureCards[3] ? (
            <FadeIn delay={0.03}>
              <ManagedWideCard item={page.featureCards[3]} locale={locale} />
            </FadeIn>
          ) : null}
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-[50px]">
        <div className={managedContentClass}>
          <div className="grid gap-5 md:grid-cols-4">
            {outcomeCards.map((item, index) => (
              <FadeIn key={item.title.en} delay={index * 0.03}>
                <ManagedMiniCard
                  locale={locale}
                  item={item}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] pb-[58px] pt-[28px]">
        <div className={managedContentClass}>
          <h2 className="mb-8 flex items-center gap-3 text-[18px] font-bold tracking-[-0.02em]">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#fff4c7]">
              <Cog className="size-4 text-[#8d97a3]" />
            </span>
            {page.includedTitle[locale]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {page.included.map((item, index) => (
              <IncludedCell
                key={`${item.title.en}-${index}`}
                item={item}
                locale={locale}
              />
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
  const introCards =
    page.introCards ?? [
      {
        title: page.introTitle,
        description: page.introBody,
        image: "/assets/pages/infra-07.webp",
      },
    ];

  return (
    <PageShell locale={locale} active="/services">
      <InnerHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        compact
        titleClassName="!text-[30px] sm:!text-[42px] md:!text-[56px]"
      />

      <section className="py-[44px]">
        <div className="jawraa-container max-w-[980px]">
          <h2 className="mb-6 text-[20px] font-bold">
            {page.eyebrow[locale]}
          </h2>
          <div className="space-y-5">
            {introCards.map((item) => (
              <InfrastructureRow
                key={item.title.en}
                title={item.title[locale]}
                description={item.description[locale]}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      <InfrastructureBand items={page.featureCards.slice(0, 2)} locale={locale} />
      <section className="py-[46px]">
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
      <InfrastructureBand items={page.featureCards.slice(4, 6)} locale={locale} />
      <InfrastructureIncludedGrid
        title={page.includedTitle[locale]}
        items={page.included}
        locale={locale}
      />
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
  const introCard = page.introCards?.[0];

  return (
    <PageShell locale={locale} active="/services">
      <InnerHero
        eyebrow={page.eyebrow[locale]}
        title={page.title[locale]}
        description={page.description[locale]}
        compact
        titleClassName="!text-[30px] sm:!text-[42px] md:!text-[56px]"
      />
      <section className="py-[30px]">
        <div className="jawraa-container max-w-[980px]">
          <h2 className="mb-5 text-[18px] font-bold">
            {(page.overviewEyebrow ?? page.eyebrow)[locale]}
          </h2>
          <div className="space-y-5">
            <CloudRow
              title={(introCard?.title ?? page.introTitle)[locale]}
              description={(introCard?.description ?? page.introBody)[locale]}
              image={introCard?.image}
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
      <SystemsCloudIncludedGrid
        title={page.includedTitle[locale]}
        items={page.included}
        locale={locale}
      />
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
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fa_100%)] pb-[48px] pt-[132px]">
        <div className="jawraa-container">
          <h1 className="max-w-[700px] text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#17191f] sm:text-[38px] md:text-[48px] md:leading-[0.98]">
            {page.title[locale]}
          </h1>
          <p className="mt-5 max-w-[540px] text-[13px] font-medium leading-6 text-[#68707c]">
            {page.description[locale]}
          </p>
        </div>
      </section>
      <section className="py-[30px] text-center">
        <div className="jawraa-container max-w-[920px]">
          <h2 className="mb-9 text-[24px] font-bold">
            {page.eyebrow[locale]}
          </h2>
          <h3 className="text-[22px] font-black tracking-[-0.03em] sm:text-[24px]">
            {page.introTitle[locale]}
          </h3>
          <p className="mx-auto mt-5 max-w-[820px] text-[13px] leading-6 text-[#68707c]">
            {page.introBody[locale]}
          </p>
        </div>
      </section>
      <section className="pb-[46px]">
        <div className="jawraa-container max-w-[1060px]">
          <div className="jawraa-lift-card rounded-[20px] border border-[#f6be15] bg-[#f8fafc] p-10 shadow-[0_20px_44px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
            <div className="space-y-12">
              {page.featureCards.map((item) => (
                <div key={item.title.en}>
                  <span className="mb-4 block h-px w-6 bg-[#f6be15]" />
                  <h3 className="text-[22px] font-black tracking-[-0.03em] sm:text-[25px]">
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
      <CybersecurityIncludedGrid
        title={page.includedTitle[locale]}
        items={page.included}
        locale={locale}
      />
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
  const eyebrow = getManagedWideCardEyebrow(item, locale);
  const isManagedLogoVisual = item.image?.startsWith("/assets/logos/managed-services-");

  return (
    <article className="jawraa-lift-card grid min-h-[168px] gap-8 rounded-[18px] border border-[#f6be15] bg-white p-7 shadow-[0_22px_48px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_410px]">
      <div>
        <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.26em] text-[#8b919b]">
          {eyebrow}
        </p>
        <h3 className="max-w-[520px] text-[24px] font-black leading-[0.98] tracking-[-0.035em] text-[#161922]">
          {item.title[locale]}
        </h3>
        <p className="mt-4 max-w-[520px] text-[11px] leading-[1.65] text-[#68707c]">
          {item.description[locale]}
        </p>
      </div>
      {item.image ? (
        <div className="relative min-h-[140px] overflow-hidden rounded-[16px] bg-[#f4f7fa]">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="410px"
            className={isManagedLogoVisual ? "object-contain p-0" : "object-contain p-3"}
          />
        </div>
      ) : null}
    </article>
  );
}

function getManagedWideCardEyebrow(item: SimpleCard, locale: Locale) {
  if (
    item.title.en === "We accelerate digital transformation with tailored IT services." ||
    item.title.en === "Strategic IT governance for sustainable success."
  ) {
    return locale === "ar" ? "الخدمات المُدارة" : "MANAGED SERVICES";
  }

  return locale === "ar" ? "لماذا جوراء" : "WHY JAWRAA";
}

const infrastructureIncludedIcons: LucideIcon[] = [
  Cable,
  Server,
  Monitor,
  LockKeyhole,
  FingerprintPattern,
  ChartNetwork,
];
function ManagedMiniCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card min-h-[166px] rounded-[14px] border border-[#f6be15] bg-white p-5 text-center shadow-[0_18px_34px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover">
      <div className="relative mx-auto mb-5 flex size-14 items-center justify-center rounded-[12px] bg-[#fff4c7] text-[#8d97a3]">
        {item.image ? (
          <Image src={item.image} alt="" fill sizes="56px" className="object-contain p-1.5" />
        ) : (
          <Cog className="size-5" />
        )}
      </div>
      <h3 className="text-[12px] font-black leading-tight tracking-[-0.01em] text-[#161922]">
        {item.title[locale]}
      </h3>
      <p className="mx-auto mt-2 max-w-[170px] text-[10px] leading-4 text-[#747b86]">
        {item.description[locale]}
      </p>
    </article>
  );
}

function InfrastructureBand({ items, locale }: { items: SimpleCard[]; locale: Locale }) {
  return (
    <section className="bg-[#eef2f6] py-[46px]">
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
    <article className="jawraa-lift-card grid min-h-[104px] items-center gap-5 rounded-[14px] border border-[#f6be15] bg-white px-6 py-5 shadow-[0_14px_30px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_76px]">
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
    <article className="jawraa-lift-card grid min-h-[105px] items-center gap-5 rounded-[14px] border border-[#f6be15] bg-white px-6 py-5 shadow-[0_14px_30px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_70px]">
      <div>
        <h3 className="text-[15px] font-black">{title}</h3>
        <p className="mt-2 text-[12px] leading-5 text-[#68707c]">{description}</p>
      </div>
      {image ? (
        <div className="relative size-[62px] rounded-[12px] bg-[#fff4c7]">
          <Image src={image} alt="" fill sizes="62px" className="object-contain p-1.5" />
        </div>
      ) : null}
    </article>
  );
}

function InfrastructureIncludedGrid({
  title,
  items,
  locale,
}: {
  title: string;
  items: SimpleCard[];
  locale: Locale;
}) {
  return (
    <section className="py-[46px]">
      <div className="jawraa-container max-w-[980px]">
        <h2 className="mb-8 flex items-center gap-3 text-[20px] font-bold tracking-[-0.02em]">
          {title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = infrastructureIncludedIcons[index] ?? Cog;

            return (
            <article
              key={item.title.en}
              className="jawraa-lift-card min-h-[104px] rounded-[12px] border border-[#ebe4c8] bg-white p-5 text-center shadow-[0_12px_26px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover"
            >
              <span className="relative mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px] bg-[#fff4c7] text-[#8d97a3]">
                {item.image ? (
                  <Image src={item.image} alt="" fill sizes="48px" className="object-contain p-1.5" />
                ) : (
                  <Icon className="size-4" />
                )}
              </span>
              <h3 className="text-[13px] font-black leading-tight tracking-[-0.01em]">
                {item.title[locale]}
              </h3>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SystemsCloudIncludedGrid({
  title,
  items,
  locale,
}: {
  title: string;
  items: SimpleCard[];
  locale: Locale;
}) {
  return (
    <section className="pb-[52px] pt-[22px]">
      <div className="jawraa-container max-w-[980px]">
        <h2 className="mb-8 flex items-center gap-3 text-[20px] font-bold tracking-[-0.02em]">
          {title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title.en}
              className="jawraa-lift-card min-h-[122px] rounded-[12px] border border-[#f6be15] bg-white p-5 text-center shadow-[0_12px_26px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover"
            >
              <span className="relative mx-auto mb-4 flex size-12 items-center justify-center rounded-[10px] bg-[#fff4c7]">
                <Image
                  src={item.image ?? "/assets/pages/cloud-03.webp"}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </span>
              <h3 className="text-[13px] font-black leading-tight tracking-[-0.01em]">
                {item.title[locale]}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CybersecurityIncludedGrid({
  title,
  items,
  locale,
}: {
  title: string;
  items: SimpleCard[];
  locale: Locale;
}) {
  return (
    <section className="pb-[52px] pt-[22px]">
      <div className="jawraa-container max-w-[820px]">
        <h2 className="mb-8 flex items-center justify-center gap-3 text-center text-[22px] font-bold tracking-[-0.02em]">
          <span className="relative flex size-10 items-center justify-center">
            <Image
              src="/assets/logos/cyber-services-include.svg"
              alt=""
              fill
              sizes="40px"
              className="object-contain"
            />
          </span>
          {title}
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
              <article
                key={item.title.en}
                className="jawraa-lift-card flex min-h-[170px] flex-col items-center rounded-[12px] border border-[#f6be15] bg-white p-6 pt-7 text-center shadow-[0_16px_34px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover"
              >
                <span className="relative mb-5 flex size-16 shrink-0 items-center justify-center rounded-[14px] bg-[#fff4c7]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  ) : (
                    <ShieldAlert className="size-5 text-[#8d97a3]" />
                  )}
                </span>
                <h3 className="flex min-h-[48px] max-w-[190px] items-center justify-center text-[18px] font-black leading-tight tracking-[-0.02em] text-[#161922]">
                  {item.title[locale]}
                </h3>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedCell({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="jawraa-lift-card -ml-px -mt-px min-h-[152px] border border-[#f6be15] bg-white p-6 hover:jawraa-lift-card-hover">
      <span className="relative mb-4 flex size-12 items-center justify-center rounded-[10px] bg-[#fff4c7] text-[#8d97a3]">
        {item.image ? (
          <Image src={item.image} alt="" fill sizes="48px" className="object-contain p-1.5" />
        ) : (
          <Cog className="size-4" />
        )}
      </span>
      <h3 className="max-w-[250px] text-[14px] font-black leading-tight text-[#161922]">
        {item.title[locale]}
      </h3>
      <p className="mt-2 max-w-[260px] text-[10px] leading-4 text-[#747b86]">
        {item.description[locale]}
      </p>
    </article>
  );
}

export function getServicePage(slug: string) {
  return servicePages[slug];
}
