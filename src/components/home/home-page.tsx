import Image from "next/image";
import { Apple } from "lucide-react";
import type { Locale } from "@/config/site";
import {
  clients,
  homeCopy,
  identityCards,
  partners,
  services,
  stats,
} from "@/data/home";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./section-heading";

const text = (value: Record<Locale, string>, locale: Locale) => value[locale];

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
    <section className="relative overflow-hidden bg-white pb-24 pt-[188px] md:pb-[150px]">
      <div className="jawraa-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#858c96]">
                {homeCopy.eyebrow[locale]}
              </span>
            </div>
            <h1 className="max-w-[520px] text-[54px] font-black leading-[0.88] tracking-[-0.055em] text-[#15171c] md:text-[82px]">
              {homeCopy.heroTitle[locale]}
            </h1>
            <p className="mt-7 max-w-[520px] text-[30px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#666d79] md:text-[37px]">
              {homeCopy.heroLead[locale]}
            </p>
            <p className="mt-7 max-w-[555px] text-[15px] leading-7 text-[#777d88]">
              {homeCopy.heroBody[locale]}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="relative">
          <div className="relative mx-auto aspect-[1.28] w-full max-w-[600px]">
            <Image
              src="/assets/home/hero-building.webp"
              alt="Jawraa corporate building"
              fill
              sizes="(min-width: 1024px) 600px, 90vw"
              className="object-contain"
              priority
            />
          </div>
        </FadeIn>
      </div>

      <div className="jawraa-container mt-5 grid gap-4 lg:grid-cols-[auto_1fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="min-h-[94px] rounded-[16px] border border-[#f6be15] bg-white px-5 py-4 shadow-[0_20px_42px_rgb(17_17_17_/_7%)]"
            >
              <p className="text-[30px] font-black leading-none tracking-[-0.04em]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] text-[#68707c]">{stat.label[locale]}</p>
            </div>
          ))}
        </div>
        <div className="min-h-[94px] rounded-[16px] border border-[#f6be15] bg-white px-6 py-4 shadow-[0_20px_42px_rgb(17_17_17_/_7%)]">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#8d949e]">
            {homeCopy.impactLabel[locale]}
          </p>
          <p className="max-w-[610px] text-[15px] font-black leading-5 text-[#16191e]">
            {homeCopy.impactText[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

function IdentitySection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[34px] md:py-[78px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="identityEyebrow"
            title="identityTitle"
            body="identityBody"
          />
        </FadeIn>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {identityCards.map((card, index) => (
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
    <section className="py-[70px] md:py-[92px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="servicesEyebrow"
            title="servicesTitle"
            body="servicesBody"
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <FadeIn key={service.title.en} delay={index * 0.035}>
              <InfoCard item={service} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[72px] md:py-[112px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="partnersEyebrow"
            title="partnersTitle"
            body="partnersBody"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <FadeIn
              key={partner.title.en}
              delay={index * 0.035}
              className={index === partners.length - 1 ? "lg:col-start-2" : ""}
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
    <section className="py-[76px] md:py-[118px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="storiesEyebrow"
            title="storiesEyebrow"
            className="sr-only"
          />
          <div className="mb-14 flex items-center gap-3">
            <span className="h-px w-8 bg-[#f6be15]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
              {homeCopy.storiesEyebrow[locale]}
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="grid gap-10 rounded-[24px] border border-[#f6be15] bg-white p-8 shadow-[0_34px_70px_rgb(17_17_17_/_12%)] md:grid-cols-[330px_1fr] md:p-9">
            <div className="flex min-h-[290px] items-center justify-center rounded-[22px] bg-[#eef2f6] p-7">
              <div className="relative aspect-[1.05] w-full max-w-[230px] rounded-[20px] bg-white shadow-[0_24px_42px_rgb(34_48_67_/_11%)]">
                <Image
                  src="/assets/home/client-nwc.webp"
                  alt="National Water Company"
                  fill
                  sizes="230px"
                  className="object-contain p-7"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <StoryText locale={locale} />
              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={[
                        "size-2 rounded-full",
                        dot === 0 ? "bg-[#f6be15]" : "bg-[#d8dde5]",
                      ].join(" ")}
                    />
                  ))}
                </div>
                <Link
                  href="/clients"
                  className="rounded-full border border-[#e4e7eb] px-6 py-3 text-[13px] font-bold text-[#17191f]"
                >
                  {locale === "ar" ? "اقرأ المزيد" : "Read more"}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ClientsSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-[72px] md:py-[116px]">
      <div className="jawraa-container">
        <FadeIn>
          <SectionHeading
            locale={locale}
            eyebrow="clientsEyebrow"
            title="clientsTitle"
            body="clientsBody"
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {clients.map((client, index) => (
            <FadeIn
              key={client.title.en}
              delay={index * 0.035}
              className={index === clients.length - 1 ? "lg:col-span-1" : ""}
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
    <section className="pb-[118px] pt-[70px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="flex flex-col gap-8 rounded-[28px] bg-[#14171c] px-9 py-10 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)] md:flex-row md:items-center md:justify-between md:px-14">
            <div>
              <h2 className="text-[34px] font-black leading-tight tracking-[-0.04em] md:text-[43px]">
                {homeCopy.ctaTitle[locale]}
              </h2>
              <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-[#d6dae0]">
                {homeCopy.ctaBody[locale]}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f6be15] px-7 text-[13px] font-black text-black"
            >
              {homeCopy.ctaButton[locale]}
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
  item: (typeof identityCards)[number];
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

function LogoTextCard({
  item,
  locale,
}: {
  item: (typeof partners)[number];
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

function StoryText({ locale }: { locale: Locale }) {
  if (locale === "ar") {
    return (
      <div className="space-y-7">
        <div>
          <h3 className="text-[21px] font-black tracking-[-0.025em]">
            تعزيز كفاءات تقنية المعلومات في شركة المياه الوطنية
          </h3>
          <p className="mt-3 text-[13px] font-bold text-[#5f6671]">
            نطاق المشروع: خدمات إسناد كوادر تقنية المعلومات
          </p>
          <p className="mt-2 text-[13px] font-bold text-[#5f6671]">
            المدة: ثلاث سنوات
          </p>
          <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
            نجحت جوراء في توفير مختصين مؤهلين لشركة المياه الوطنية لضمان استمرارية العمليات ودعم التنفيذ ومتابعة أداء الكوادر التقنية طوال فترة المشروع.
          </p>
        </div>
        <div>
          <h3 className="text-[21px] font-black tracking-[-0.025em]">
            تمكين التحول المؤسسي في حياة المياه الوطنية
          </h3>
          <p className="mt-3 text-[13px] font-bold text-[#5f6671]">
            نطاق المشروع: برنامج إدارة التغيير للعمليات الموحدة
          </p>
          <p className="mt-2 text-[13px] font-bold text-[#5f6671]">
            المدة: سنة واحدة
          </p>
          <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
            لعبت جوراء دورا محوريا في تطبيق برنامج تحول استراتيجي وتحسين تجربة المستخدم عبر إدارات متعددة.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-[21px] font-black tracking-[-0.025em]">
          NWC IT Staff Augmentation
        </h3>
        <p className="mt-3 text-[13px] font-bold text-[#5f6671]">
          Project Scope: Managed IT staff augmentation services
        </p>
        <p className="mt-2 text-[13px] font-bold text-[#5f6671]">
          Duration: Three years (starting Q3 2019)
        </p>
        <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
          Jawraa successfully provided highly skilled IT professionals to NWC, ensuring seamless operations and project execution. Our comprehensive managed services ensured the effective management and supervision of IT staff throughout the project.
        </p>
      </div>
      <div>
        <h3 className="text-[21px] font-black tracking-[-0.025em]">
          NWC Hayat Transformation Business Enablement
        </h3>
        <p className="mt-3 text-[13px] font-bold text-[#5f6671]">
          Project Scope: Change management program for standardized processes across directorates
        </p>
        <p className="mt-2 text-[13px] font-bold text-[#5f6671]">
          Duration: One year (starting Q3 2019)
        </p>
        <p className="mt-3 text-[13px] leading-6 text-[#68707c]">
          Jawraa played a pivotal role in implementing a strategic transformation program at NWC, enabling standardized processes and enhancing user experience across multiple directorates.
        </p>
      </div>
    </div>
  );
}
