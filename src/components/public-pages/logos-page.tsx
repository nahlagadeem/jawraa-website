import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import {
  clientsPage,
  partnerPage,
  type SimpleCard,
} from "@/data/public-pages";
import { PageShell } from "./page-shell";

export function PartnersPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={partnerPage.active}>
      <PartnersHero locale={locale} />
      <PartnerLogoGrid
        locale={locale}
        items={partnerPage.items}
        eyebrow={partnerPage.gridEyebrow[locale]}
        title={partnerPage.gridTitle[locale]}
        description={partnerPage.gridDescription[locale]}
      />
      <PartnerLogoStrip />
    </PageShell>
  );
}

export function ClientsPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={clientsPage.active}>
      <ClientsHero locale={locale} />
      <PartnerLogoGrid
        locale={locale}
        items={clientsPage.items}
        eyebrow={clientsPage.gridEyebrow[locale]}
        title={clientsPage.gridTitle[locale]}
        description={clientsPage.gridDescription[locale]}
      />
      <ClientLogoStrip />
    </PageShell>
  );
}

function PartnersHero({ locale }: { locale: Locale }) {
  return (
    <section className="bg-[#f5f6f8] pb-[48px] pt-[112px] md:pb-[62px] md:pt-[136px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="max-w-[760px] md:pl-[8px]">
            <h1 className="max-w-[720px] text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#161922] sm:text-[38px] md:text-[48px] md:leading-[0.98]">
              {partnerPage.title[locale]}
            </h1>
            <p className="mt-7 max-w-[490px] text-[12px] leading-6 text-[#818894] md:text-[13px]">
              {partnerPage.description[locale]}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ClientsHero({ locale }: { locale: Locale }) {
  return (
    <section className="bg-[#f5f6f8] pb-[48px] pt-[112px] md:pb-[62px] md:pt-[136px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="max-w-[820px] md:pl-[8px]">
            <h1 className="max-w-[820px] text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#161922] sm:text-[38px] md:text-[48px] md:leading-[0.98]">
              {clientsPage.title[locale]}
            </h1>
            <p className="mt-7 max-w-[490px] text-[12px] leading-6 text-[#818894] md:text-[13px]">
              {clientsPage.description[locale]}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PartnerLogoGrid({
  locale,
  items,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  items: SimpleCard[];
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pb-[58px] pt-[46px] md:pb-[72px] md:pt-[50px]">
      <div className="jawraa-container">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-[700px] text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#f6be15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8b919b]">
                {eyebrow}
              </span>
            </div>
            <h2 className="mx-auto max-w-[660px] text-[26px] font-bold leading-[1.12] tracking-[-0.03em] text-[#151922] sm:text-[32px] md:text-[40px] md:leading-[1.04]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-[630px] text-[12px] leading-6 text-[#7a828e]">
              {description}
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn
              key={item.title.en}
              delay={index * 0.03}
              className={
                index === items.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-[49%]"
                  : ""
              }
            >
              <PartnerLogoCard item={item} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogoCard({
  item,
  locale,
}: {
  item: SimpleCard;
  locale: Locale;
}) {
  return (
    <article className="relative flex min-h-[228px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-[#f6be15] bg-white px-9 py-7 text-center shadow-[0_20px_44px_rgb(17_17_17_/_8%)]">
      <span className="pointer-events-none absolute bottom-[-32px] right-[-28px] size-24 rounded-full bg-[#f6be15]/15 blur-2xl rtl:left-[-28px] rtl:right-auto" />
      {item.image ? (
        <div className="relative mb-5 h-[76px] w-[214px] rounded-[14px] bg-white shadow-[0_12px_26px_rgb(17_17_17_/_10%)]">
          <Image
            src={item.image}
            alt={item.title[locale]}
            fill
            sizes="214px"
            className="object-contain p-3"
          />
        </div>
      ) : null}
      <h3 className="text-[22px] font-black tracking-[-0.03em] text-[#151922]">
        {item.title[locale]}
      </h3>
      <p className="mt-5 max-w-[350px] text-[12px] leading-6 text-[#68707c]">
        {item.description[locale]}
      </p>
    </article>
  );
}

const partnerStripLogos = [
  {
    name: "Jamf",
    src: "/assets/pages/partners-strip-jamf.png",
    width: 98,
  },
  {
    name: "Sphero",
    src: "/assets/pages/partners-strip-sphero.png",
    width: 118,
  },
  {
    name: "Adobe",
    src: "/assets/pages/partners-strip-adobe.png",
    width: 112,
  },
  {
    name: "Logitech for education",
    src: "/assets/pages/partners-06.png",
    width: 168,
  },
  {
    name: "Microsoft 365",
    src: "/assets/pages/partners-02.png",
    width: 156,
  },
];

function PartnerLogoStrip() {
  const logos = [...partnerStripLogos, ...partnerStripLogos];

  return (
    <section className="pb-[62px]">
      <div className="jawraa-container">
        <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-[16px] border border-[#f6be15] bg-white px-5 py-4 shadow-[0_18px_42px_rgb(17_17_17_/_8%)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-white/0" />
          <div className="partner-logo-strip flex w-max items-center gap-5">
            {logos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative flex h-[52px] w-[150px] shrink-0 items-center justify-center rounded-[12px] border border-[#eceff3] bg-white px-5 shadow-[0_10px_22px_rgb(17_17_17_/_5%)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes={`${logo.width}px`}
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .partner-logo-strip {
          animation: partner-logo-slide 24s linear infinite;
        }

        @keyframes partner-logo-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-logo-strip {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

const clientStripLogos = [
  {
    name: "Ministry of Education",
    src: "/assets/home/client-education.webp",
    width: 150,
  },
  {
    name: "Ministry of Culture",
    src: "/assets/home/client-culture.webp",
    width: 152,
  },
  {
    name: "EXPRO",
    src: "/assets/home/client-expo.webp",
    width: 146,
  },
  {
    name: "Ministry of Health",
    src: "/assets/home/client-health.webp",
    width: 150,
  },
  {
    name: "Princess Nourah bint Abdulrahman University",
    src: "/assets/home/client-pnu.webp",
    width: 142,
  },
];

function ClientLogoStrip() {
  const logos = [...clientStripLogos, ...clientStripLogos];

  return (
    <section className="pb-[62px]">
      <div className="jawraa-container">
        <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-[16px] border border-[#f6be15] bg-white px-5 py-4 shadow-[0_18px_42px_rgb(17_17_17_/_8%)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-white/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-white/0" />
          <div className="client-logo-strip flex w-max items-center gap-5">
            {logos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative flex h-[52px] w-[150px] shrink-0 items-center justify-center rounded-[12px] border border-[#eceff3] bg-white px-5 shadow-[0_10px_22px_rgb(17_17_17_/_5%)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes={`${logo.width}px`}
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .client-logo-strip {
          animation: client-logo-slide 24s linear infinite;
        }

        @keyframes client-logo-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-strip {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
