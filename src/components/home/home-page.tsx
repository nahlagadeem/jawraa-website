import Image from "next/image";
import {
  Apple,
  Cloud,
  Network,
  Settings,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/config/site";
import {
  type CardItem,
  homeClients,
  homeIdentityCards,
  homePageCopy,
  homePartners,
  homeServices,
  homeStats,
  homeSuccessStories,
} from "@/data/home";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./section-heading";

const text = (value: Record<Locale, string>, locale: Locale) => value[locale];

const storyCarouselStyles = homeSuccessStories
  .map(
    (_, index) => `
      .home-stories-carousel #home-story-${index}:checked ~ .story-panels .story-panel-${index} {
        display: grid;
      }

      .home-stories-carousel #home-story-${index}:checked ~ .story-panels .story-dot-${index} {
        background: #f6be15;
        transform: scale(1.25);
      }
    `,
  )
  .join("\n");

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="bg-white text-[#17191f]">
      <SiteHeader locale={locale} />
      <HeroSection locale={locale} />
      <IdentitySection locale={locale} />
      <ServicesSection locale={locale} />
      <PartnersSection locale={locale} />
      <SuccessStoriesSection locale={locale} />
      <ClientsSection locale={locale} />
      <CtaSection locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}

function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-[136px] md:pb-[72px]">
      <div className="jawraa-container grid items-start gap-x-8 gap-y-6 lg:grid-cols-[0.94fr_1.06fr] lg:gap-y-0">
        <FadeIn className="min-w-0">
          <header className="min-w-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#858c96]">
                {homePageCopy.eyebrow[locale]}
              </span>
            </div>
            <h1 className="max-w-full text-[34px] font-bold leading-[0.98] tracking-[-0.035em] text-[#15171c] sm:max-w-[520px] sm:text-[48px] md:text-[68px] md:leading-[0.94]">
              {homePageCopy.heroTitle[locale]}
            </h1>
            <p className="mt-6 max-w-full text-[21px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#666d79] sm:max-w-[500px] sm:text-[28px] md:text-[35px] md:leading-[1.05]">
              {homePageCopy.heroLead[locale]}
            </p>
            <p className="mt-6 max-w-full text-[13px] leading-6 text-[#777d88] sm:max-w-[555px]">
              {homePageCopy.heroBody[locale]}
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.08} className="relative min-w-0">
          <figure className="relative mx-auto aspect-[1.48] w-full max-w-[610px]">
            <Image
              src="/assets/home/hero-building.webp"
              alt={locale === "ar" ? "مبنى جوراء" : "Jawraa corporate building"}
              fill
              sizes="(min-width: 1024px) 600px, 90vw"
              className="object-contain"
              style={{
                WebkitMaskImage:
                  "linear-gradient(90deg, rgb(0 0 0 / 25%) 0%, black 8%, black 92%, rgb(0 0 0 / 25%) 100%), linear-gradient(180deg, black 0%, black 86%, rgb(0 0 0 / 35%) 96%, rgb(0 0 0 / 20%) 100%)",
                WebkitMaskComposite: "source-in",
                maskImage:
                  "linear-gradient(90deg, rgb(0 0 0 / 25%) 0%, black 8%, black 92%, rgb(0 0 0 / 25%) 100%), linear-gradient(180deg, black 0%, black 86%, rgb(0 0 0 / 35%) 96%, rgb(0 0 0 / 20%) 100%)",
                maskComposite: "intersect",
              }}
              priority
            />
          </figure>
        </FadeIn>

        <FadeIn delay={0.1} className="relative z-10 min-w-0 lg:col-span-2 lg:-mt-5">
          <div
            className="grid gap-3 lg:grid-cols-[0.94fr_1.06fr]"
            aria-label={locale === "ar" ? "إحصاءات جوراء" : "Jawraa statistics"}
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {homeStats.map((stat) => (
                <article
                  key={stat.value}
                  className="min-h-[74px] rounded-[12px] border border-[#f6be15] bg-white px-4 py-3 shadow-[0_16px_32px_rgb(17_17_17_/_7%)]"
                  aria-label={`${stat.value} ${stat.label[locale]}`}
                >
                  <p dir="ltr" className="text-[24px] font-extrabold leading-none tracking-[-0.025em]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-4 text-[#68707c]">
                    {stat.label[locale]}
                  </p>
                </article>
              ))}
            </div>
            <aside
              className="min-h-[74px] w-full max-w-[610px] justify-self-center rounded-[12px] border border-[#f6be15] bg-white/95 px-5 py-4 shadow-[0_20px_42px_rgb(17_17_17_/_10%)] backdrop-blur-sm"
              aria-label={homePageCopy.impactLabel[locale]}
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8d949e]">
                {homePageCopy.impactLabel[locale]}
              </p>
              <p className="max-w-[520px] text-[13px] font-extrabold leading-5 text-[#16191e]">
                {homePageCopy.impactText[locale]}
              </p>
            </aside>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function IdentitySection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[28px] md:py-[52px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="identityEyebrow"
            title="identityTitle"
            body="identityBody"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {homeIdentityCards.map((card, index) => (
            <FadeIn key={card.title.en} delay={index * 0.04}>
              <InfoCard item={card} locale={locale} large />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[48px] md:py-[62px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="servicesEyebrow"
            title="servicesTitle"
            body="servicesBody"
          />
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {homeServices.map((service, index) => (
            <FadeIn key={service.title.en} delay={index * 0.035}>
              <ServiceCard item={service} locale={locale} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[44px] md:py-[62px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="partnersEyebrow"
            title="partnersTitle"
            body="partnersBody"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homePartners.map((partner, index) => (
            <FadeIn
              key={partner.title.en}
              delay={index * 0.035}
              className={index === homePartners.length - 1 ? "lg:col-start-2" : ""}
            >
              <LogoTextCard item={partner} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[44px] md:py-[64px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="storiesEyebrow"
            title="storiesEyebrow"
            className="sr-only"
          />
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#f6be15]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
              {homePageCopy.storiesEyebrow[locale]}
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="home-stories-carousel rounded-[24px] border border-[#f6be15] bg-white p-8 shadow-[0_34px_70px_rgb(17_17_17_/_12%)] md:p-9">
            {homeSuccessStories.map((story, index) => (
              <input
                key={story.title.en}
                id={`home-story-${index}`}
                type="radio"
                name="home-success-story"
                className="sr-only"
                defaultChecked={index === 0}
              />
            ))}

            <div className="story-panels">
              {homeSuccessStories.map((story, index) => (
                <article
                  key={story.title.en}
                  className={`story-panel story-panel-${index} hidden gap-10 md:grid-cols-[320px_1fr]`}
                >
                  <StoryVisual story={story} locale={locale} />
                  <div className="flex min-h-[290px] flex-col justify-center">
                    <StoryText story={story} locale={locale} />
                    <div className="story-controls mt-7 flex items-center justify-between gap-4">
                      <div className="flex gap-2">
                        {homeSuccessStories.map((dotStory, dotIndex) => (
                          <label
                            key={dotStory.title.en}
                            htmlFor={`home-story-${dotIndex}`}
                            aria-label={`${homePageCopy.storiesEyebrow[locale]} ${dotIndex + 1}`}
                            className={`story-dot story-dot-${dotIndex} size-2 cursor-pointer rounded-full bg-[#d8dde5] transition duration-200`}
                          />
                        ))}
                      </div>
                      <Link
                        href="/clients"
                        locale={locale}
                        className="jawraa-outline-action rounded-full border border-[#e4e7eb] px-6 py-3 text-[12px] font-bold text-[#17191f] hover:jawraa-outline-action-hover"
                      >
                        {homePageCopy.readMore[locale]}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <style>{`
              .home-stories-carousel .story-panel {
                display: none;
              }

              ${storyCarouselStyles}
            `}</style>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ClientsSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[44px] md:py-[62px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="clientsEyebrow"
            title="clientsTitle"
            body="clientsBody"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homeClients.map((client, index) => (
            <FadeIn
              key={client.title.en}
              delay={index * 0.035}
              className={index === homeClients.length - 1 ? "lg:col-span-1" : ""}
            >
              <LogoTextCard item={client} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ locale }: { locale: Locale }) {
  return (
    <section className="pb-[76px] pt-[46px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="flex flex-col gap-8 rounded-[28px] bg-[#14171c] px-9 py-10 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)] md:flex-row md:items-center md:justify-between md:px-14">
            <div>
              <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] sm:text-[32px] md:text-[40px]">
                {homePageCopy.ctaTitle[locale]}
              </h2>
              <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-[#d6dae0]">
                {homePageCopy.ctaBody[locale]}
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              locale={locale}
              className="jawraa-gold-action inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f6be15] px-7 text-[13px] font-black text-black hover:jawraa-gold-action-hover"
            >
              {homePageCopy.ctaButton[locale]}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function InfoCard({
  item,
  locale,
  large = false,
}: {
  item: CardItem;
  locale: Locale;
  large?: boolean;
}) {
  return (
    <article
      className={[
        "h-full rounded-[20px] border border-[#f6be15] bg-white shadow-[0_22px_44px_rgb(17_17_17_/_8%)]",
        large ? "min-h-[250px] p-8" : "min-h-[275px] p-6",
      ].join(" ")}
    >
      <div className="mb-7 flex size-12 items-center justify-center rounded-[15px] bg-[#fff6df]">
        {item.image ? (
          <Image src={item.image} alt="" width={24} height={24} />
        ) : (
          <Apple className="size-7 fill-black text-black" />
        )}
      </div>
      <h3 className="text-[18px] font-black leading-tight tracking-[-0.025em] text-[#17191f]">
        {text(item.title, locale)}
      </h3>
      <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
        {text(item.description, locale)}
      </p>
    </article>
  );
}

const serviceIcons: LucideIcon[] = [
  Settings,
  Network,
  Cloud,
  ShieldCheck,
];

function ServiceCard({
  item,
  locale,
  index,
}: {
  item: CardItem;
  locale: Locale;
  index: number;
}) {
  const Icon = serviceIcons[index] ?? Settings;

  return (
    <article className="h-full min-h-[248px] rounded-[16px] border border-[#f6be15] bg-white p-6 shadow-[0_18px_38px_rgb(17_17_17_/_7%)]">
      <div className="mb-6 flex size-11 items-center justify-center rounded-[14px] bg-[#fff6df] text-[#8f949c]">
        {index === 4 ? (
          <AppleCompanyLogo className="size-6 text-black" />
        ) : (
          <Icon className="size-5" strokeWidth={1.9} />
        )}
      </div>
      <h3 className="text-[16px] font-extrabold leading-tight tracking-[-0.015em] text-[#17191f]">
        {text(item.title, locale)}
      </h3>
      <p className="mt-3 text-[12px] leading-5 text-[#68707c]">
        {text(item.description, locale)}
      </p>
    </article>
  );
}

function AppleCompanyLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
      focusable="false"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 20.3-27.8 45.5-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function LogoTextCard({
  item,
  locale,
}: {
  item: CardItem;
  locale: Locale;
}) {
  return (
    <article className="grid min-h-[150px] gap-5 rounded-[20px] border border-[#f6be15] bg-white p-7 shadow-[0_22px_44px_rgb(17_17_17_/_8%)] sm:grid-cols-[158px_1fr]">
      <div className="relative flex h-[92px] items-center justify-center rounded-[14px] border border-[#eceff3] bg-white p-5">
        {item.image ? (
          <Image
            src={item.image}
            alt={text(item.title, locale)}
            fill
            sizes="160px"
            className="object-contain p-4"
          />
        ) : null}
      </div>
      <div className="self-center">
        <h3 className="text-[19px] font-black tracking-[-0.025em] text-[#17191f]">
          {text(item.title, locale)}
        </h3>
        <p className="mt-2 text-[13px] leading-6 text-[#69717d]">
          {text(item.description, locale)}
        </p>
      </div>
    </article>
  );
}

function StoryVisual({
  story,
  locale,
}: {
  story: (typeof homeSuccessStories)[number];
  locale: Locale;
}) {
  const title = story.title.en.toLowerCase();
  const visual =
    title.includes("nwc") || title.includes("water")
      ? { src: "/assets/home/client-nwc.webp", alt: "National Water Company" }
      : title.includes("education") ||
          title.includes("tetco") ||
          title.includes("zain")
        ? { src: "/assets/home/client-education.webp", alt: "Ministry of Education" }
        : null;

  return (
    <div className="flex min-h-[290px] items-center justify-center rounded-[22px] bg-[#eef2f6] p-7">
      <div className="relative flex aspect-[1.05] w-full max-w-[230px] items-center justify-center rounded-[20px] bg-white p-7 text-center shadow-[0_24px_42px_rgb(34_48_67_/_11%)]">
        {visual ? (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="230px"
            className="object-contain p-7"
          />
        ) : (
          <span className="text-[18px] font-black leading-tight tracking-[-0.025em] text-[#17191f]">
            {(story.organization ?? story.title)[locale]}
          </span>
        )}
      </div>
    </div>
  );
}

function StoryText({
  story,
  locale,
}: {
  story: (typeof homeSuccessStories)[number];
  locale: Locale;
}) {
  return (
    <div>
      <h3 className="text-[21px] font-black tracking-[-0.025em]">
        {story.title[locale]}
      </h3>
      <p className="mt-3 text-[13px] font-bold text-[#5f6671]">
        {story.scope[locale]}
      </p>
      <p className="mt-2 text-[13px] font-bold text-[#5f6671]">
        {story.duration[locale]}
      </p>
      <div className="mt-3 space-y-2">
        {story.body.map((paragraph) => (
          <p key={paragraph.en} className="text-[13px] leading-6 text-[#68707c]">
            {paragraph[locale]}
          </p>
        ))}
      </div>
    </div>
  );
}
