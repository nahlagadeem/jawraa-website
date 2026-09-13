import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { PageShell } from "./page-shell";
import { LocalizedIotContent } from "./localized-iot-content";

const vsatContainerClass = "jawraa-container max-w-[1080px]";

const siteTypes = [
  "Remote and restricted-access locations",
  "Industrial and critical infrastructure sites",
  "Onshore and offshore environments",
  "Mining, oil & gas, and rooftop deployments",
];

const heroStats = [
  { value: "5 Stages", label: "Plan to operational support" },
  { value: "6 Areas", label: "Core capabilities and services" },
  { value: "KSA-wide", label: "Nationwide mobilization model" },
  { value: "24/7", label: "Support readiness" },
];

const lifecycleCoverage = [
  "Site survey",
  "Installation",
  "Antenna alignment",
  "Modem configuration",
  "Gateway integration",
  "Commissioning",
  "Connectivity validation",
  "Testing",
  "Documentation",
  "Operational handover",
];

const capabilities = [
  {
    title: "Internet over VSAT",
    description:
      "Internet over VSAT and branch connectivity for locations that require satellite-enabled access.",
    image: "/assets/vsat/internet-over-vsat.svg",
  },
  {
    title: "Site-to-site Connectivity",
    description:
      "Dedicated site-to-site connectivity with bandwidth validation and voice/data support where included in the project scope.",
    image: "/assets/vsat/site-to-site-connectivity.svg",
  },
  {
    title: "Terminal & Gateway Delivery",
    description:
      "Terminal and gateway integration, installation, antenna alignment, modem configuration, commissioning, and activation.",
    image: "/assets/vsat/terminal-gateway-delivery.svg",
  },
  {
    title: "Technical Support",
    description:
      "Technical support, troubleshooting, dispatch, escalation, and SLA reporting.",
    image: "/assets/vsat/technical-support.svg",
  },
  {
    title: "Logistics & Rollout Governance",
    description:
      "Logistics, warehousing, inventory, access coordination, and rollout governance.",
    image: "/assets/vsat/logistics-rollout-governance.svg",
  },
  {
    title: "HSE, Cybersecurity & Handover",
    description:
      "HSE, cybersecurity, compliance documentation, and client handover.",
    image: "/assets/vsat/hse-cybersecurity-handover.svg",
  },
];

const strengths = [
  {
    title: "Gateway Integration",
    description:
      "Gateway integration with MPLS/VPN validation, where required by the project scope, and controlled technical demarcation.",
  },
  {
    title: "Execution Governance",
    description:
      "Documentation discipline, execution control, and compliance-driven delivery.",
  },
  {
    title: "Network Validation",
    description:
      "Network testing, connectivity and bandwidth validation, and evidence capture for acceptance.",
  },
  {
    title: "Complex Site Readiness",
    description:
      "Support for onshore, offshore, mining, oil & gas, rooftop, and critical infrastructure sites.",
  },
  {
    title: "Scalable Rollout",
    description:
      "A scalable rollout model supported by qualified field execution and controlled operations.",
  },
  {
    title: "Auditable Handover",
    description:
      "Acceptance packs, issue logs, evidence, documentation, and operational handover.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Plan",
    description:
      "Capture requirements, commercial scope, technical requirements, rollout priorities, access conditions, SLA expectations, and acceptance criteria.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Develop the technical design, confirm readiness, define gateway and network requirements, and establish delivery controls.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Mobilize resources, install terminals and gateways, align antennas, configure modems, and activate connectivity.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Complete network testing, MPLS/VPN validation, bandwidth checks, evidence capture, commissioning, and acceptance documentation.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Provide troubleshooting, dispatch, escalation, SLA reporting, maintenance coordination, and operational continuity support.",
  },
];

const assurance = [
  "Testing and connectivity validation",
  "Acceptance packs and issue logs",
  "Resource-backed delivery proposals",
  "Technical demarcation and handover",
  "Auditable documentation",
  "Controlled operations and logistics readiness",
];

const clientInputs = [
  "Commercial scope",
  "Technical requirements",
  "Rollout priorities",
  "Service-level agreement requirements",
  "Testing and acceptance criteria",
];

const whyJawraa = [
  {
    title: "End-to-end Execution",
    description: "Lifecycle ownership from planning and survey through handover and support.",
  },
  {
    title: "Reliable Governance",
    description:
      "Clear execution controls, technical demarcation, and documentation discipline.",
  },
  {
    title: "Nationwide Mobilization",
    description:
      "A Saudi-based model designed for scalable project mobilization across the Kingdom.",
  },
  {
    title: "Compliance-focused Delivery",
    description:
      "HSE, cybersecurity, and compliance requirements embedded in delivery.",
  },
  {
    title: "24/7 Support Readiness",
    description:
      "Readiness for troubleshooting, escalation, dispatch, SLA reporting, and operational support.",
  },
  {
    title: "Client Acceptance Mindset",
    description:
      "Testing, evidence, acceptance packs, issue logs, and structured handover.",
  },
];

export function VsatPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active="/iot">
      <LocalizedIotContent locale={locale}>
      <section className="bg-white pb-[62px] pt-[112px] md:pb-[70px] md:pt-[132px]">
        <div className={`${vsatContainerClass} grid gap-7 lg:grid-cols-[1fr_486px] lg:items-stretch lg:gap-2`}>
          <FadeIn className="h-full">
            <div className="flex h-full max-w-[570px] flex-col">
              <Eyebrow text="VSAT & SATCOM" />
              <h1
                className={
                  locale === "ar"
                    ? "mt-4 max-w-[560px] text-[32px] font-bold leading-[1.24] tracking-[0] text-[#161922] sm:text-[42px] md:text-[56px] md:leading-[1.2]"
                    : "mt-4 max-w-[540px] text-[34px] font-bold leading-[1.04] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[66px] md:leading-[0.96]"
                }
              >
                End-to-end VSAT deployment and support for demanding environments.
              </h1>
              <p className="mt-6 max-w-[528px] text-[13px] leading-6 text-[#7a828e]">
                JAWRAA supports end-to-end VSAT and SATCOM delivery across the
                service lifecycle, from site survey and readiness verification
                through installation, commissioning, validation, documentation,
                and operational handover.
              </p>
              <div className="mt-auto grid max-w-[540px] grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <StatCard key={stat.value} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="h-full">
            <article className="jawraa-lift-card flex h-full flex-col rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-4 shadow-[0_22px_48px_rgb(17_17_17_/_9%)] hover:jawraa-lift-card-hover">
              <div className="rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Designed for challenging sites
                </h2>
                <ul className="mt-3 space-y-1.5 text-[11px] leading-4 text-[#747b86]">
                  {siteTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex h-[184px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f2f5] p-3">
                <Image
                  src="/assets/vsat/top-image.svg"
                  alt=""
                  width={475}
                  height={143}
                  priority
                  className="h-auto w-full max-w-[426px]"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Lifecycle coverage
                </h2>
                <p className="mt-3 text-[11px] leading-5 text-[#747b86]">
                  {lifecycleCoverage.join(", ")}.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[40px]">
        <div className={vsatContainerClass}>
          <Eyebrow text="Overview" />
          <div className="mt-5">
            <ImageStoryCard
              eyebrow="VSAT Business Unit"
              title="A Saudi-based delivery model designed for nationwide mobilization."
              description="JAWRAA's VSAT and SATCOM delivery model covers the complete service lifecycle. The business-unit profile states nationwide mobilization and 24/7 support readiness, with delivery designed for remote, industrial, offshore, restricted-access, and critical infrastructure sites."
              image="/assets/vsat/vsat-overview.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={vsatContainerClass}>
          <SectionIntro
            eyebrow="Core Capabilities & Services"
            title="Connectivity, deployment, support, and controlled delivery."
            description="The source profile identifies six core service areas spanning network connectivity, field execution, technical support, logistics, compliance, and handover."
            titleClassName="!text-[24px] md:!text-[34px]"
          />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard title={item.title} description={item.description} image={item.image} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={`${vsatContainerClass} grid gap-5 lg:grid-cols-[360px_1fr] lg:items-start`}>
          <FadeIn>
            <div className="rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-6 shadow-[0_18px_42px_rgb(17_17_17_/_7%)] md:p-7">
              <Eyebrow text="Expertise & Key Strengths" />
              <h2 className="mt-3 text-[20px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#161922] md:text-[26px]">
                Technical readiness from survey through operational support.
              </h2>
              <p className="mt-3 text-[12px] leading-6 text-[#747b86]">
                JAWRAA&apos;s VSAT model combines technical validation,
                execution governance, field readiness, compliance discipline,
                and scalable delivery across the Kingdom.
              </p>
            </div>
          </FadeIn>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <TextCard title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={vsatContainerClass}>
          <SectionIntro
            eyebrow="Delivery Framework"
            title="A five-stage lifecycle from planning to support."
            description="The business-unit profile presents a five-stage delivery framework: Plan, Engineer, Deploy, Validate, and Support."
            titleClassName="!text-[24px] md:!text-[34px]"
          />
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {deliverySteps.map((step) => (
              <FadeIn key={step.number} delay={Number(step.number) * 0.03}>
                <StepCard {...step} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={vsatContainerClass}>
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <ChecklistCard
              eyebrow="Execution Confidence"
              title="Operational assurance"
              items={assurance}
            />
            <ChecklistCard
              eyebrow="Client Inputs"
              title="Inputs required for delivery"
              items={clientInputs}
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-[44px] pt-[18px]">
        <div className={vsatContainerClass}>
          <SectionIntro
            eyebrow="Why JAWRAA"
            title="Built around ownership, governance, and acceptance."
            description=""
            titleClassName="!text-[24px] md:!text-[34px]"
            hideDescription
          />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {whyJawraa.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <TextCard title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.08}>
            <article className="mt-6 rounded-[14px] border border-[#efd284] bg-[#fbfaf6] p-5 shadow-[0_12px_28px_rgb(17_17_17_/_5%)]">
              <p className="text-[10px] font-bold tracking-[-0.01em] text-[#8b919b]">
                Regulatory Note
              </p>
              <p className="mt-3 text-[10px] leading-5 text-[#747b86]">
                In Saudi Arabia, the provision of VSAT, broadband satellite,
                and non-terrestrial-network services and the use of satellite
                earth stations, radio equipment, and spectrum are subject to the
                applicable CST licensing, registration, technical-specification,
                and frequency-authorization requirements. This page describes
                the technical delivery capabilities stated in JAWRAA&apos;s
                business-unit profile and does not by itself establish a
                specific regulatory license status.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-[74px]">
        <div className={vsatContainerClass}>
          <article className="rounded-[18px] bg-[#14171c] px-8 py-8 text-white shadow-[0_24px_56px_rgb(17_17_17_/_18%)] md:flex md:items-center md:justify-between md:px-10">
            <div>
              <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] md:text-[36px]">
                Ready to explore Jawraa&apos;s next chapter?
              </h2>
              <p className="mt-4 max-w-[620px] text-[12px] leading-6 text-white/62">
                Let&apos;s transform this company story into a stronger digital
                experience that reflects leadership, trust, and future-ready
                ambition.
              </p>
            </div>
            <a
              href={`/${locale}/media-center#contact-center`}
              className="jawraa-gold-action mt-7 inline-flex h-9 items-center justify-center rounded-full bg-[#f6be15] px-6 text-[11px] font-bold text-black shadow-[0_10px_22px_rgb(246_190_21_/_28%)] hover:jawraa-gold-action-hover md:mt-0"
            >
              Contact Jawraa
            </a>
          </article>
        </div>
      </section>
      </LocalizedIotContent>
    </PageShell>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-bold tracking-[-0.01em] text-[#8b919b]">
      {text}
    </p>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="jawraa-lift-card min-h-[82px] rounded-[12px] border border-[#f6be15] bg-white p-4 shadow-[0_12px_26px_rgb(17_17_17_/_6%)] hover:jawraa-lift-card-hover">
      <p className="text-[13px] font-bold leading-tight text-[#161922]">{value}</p>
      <p className="mt-2 text-[10px] leading-4 text-[#747b86]">{label}</p>
    </article>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  titleClassName,
  hideDescription = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName?: string;
  hideDescription?: boolean;
}) {
  return (
    <FadeIn>
      <div>
        <Eyebrow text={eyebrow} />
        <h2
          className={[
            "mt-5 max-w-[820px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161922]",
            "text-[28px] md:text-[40px]",
            titleClassName,
          ].join(" ")}
        >
          {title}
        </h2>
        {hideDescription ? null : (
          <p className="mt-5 max-w-[760px] text-[12px] leading-6 text-[#747b86]">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

function ImageStoryCard({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <FadeIn>
      <article className="jawraa-lift-card grid min-h-[230px] gap-6 rounded-[16px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_38px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_486px] md:items-center">
        <div className="px-1 md:px-3">
          <p className="text-[9px] font-bold tracking-[-0.01em] text-[#635217]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-[20px] font-bold leading-[1.08] tracking-[-0.02em] text-[#161922] md:text-[24px]">
            {title}
          </h3>
          <p className="mt-4 text-[12px] leading-6 text-[#747b86]">
            {description}
          </p>
        </div>
        <div className="flex min-h-[190px] items-center justify-center rounded-[14px] bg-[#eef1f5] p-3">
          <Image
            src={image}
            alt=""
            width={451}
            height={187}
            className="h-auto w-full object-contain"
          />
        </div>
      </article>
    </FadeIn>
  );
}

function IconCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="jawraa-lift-card flex h-full min-h-[166px] flex-col rounded-[14px] border border-[#f6be15] bg-white p-5 text-start shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
      <span className="relative mb-4 flex size-10 shrink-0 items-center justify-center rounded-[9px] border border-[#efd284] bg-[#fbf2d7]">
        <Image src={image} alt="" fill sizes="40px" className="object-contain p-2" />
      </span>
      <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p className="mt-2 max-w-[270px] text-[10px] leading-4 text-[#747b86]">
        {description}
      </p>
    </article>
  );
}

function TextCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="jawraa-lift-card h-full min-h-[118px] rounded-[14px] border border-[#f6be15] bg-white p-5 shadow-[0_14px_30px_rgb(17_17_17_/_6%)] hover:jawraa-lift-card-hover">
      <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p className="mt-2 text-[10px] leading-4 text-[#747b86]">
        {description}
      </p>
    </article>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="jawraa-lift-card flex h-full min-h-[232px] flex-col rounded-[14px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
      <span className="inline-flex size-9 items-center justify-center rounded-[9px] border border-[#efd284] bg-[#fbf2d7] text-[10px] font-bold text-[#635217]">
        {number}
      </span>
      <h3 className="mt-4 text-[13px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p className="mt-3 text-[10px] leading-4 text-[#747b86]">
        {description}
      </p>
    </article>
  );
}

function ChecklistCard({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <FadeIn>
      <article className="jawraa-lift-card h-full min-h-[230px] rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
        <p className="text-[9px] font-bold tracking-[-0.01em] text-[#8b919b]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-[18px] font-bold tracking-[-0.02em] text-[#161922]">
          {title}
        </h3>
        <ul className="mt-5 space-y-3 text-[12px] leading-5 text-[#747b86]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}
