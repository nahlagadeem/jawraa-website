import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { PageShell } from "./page-shell";
import { LocalizedIotContent } from "./localized-iot-content";

const lowCurrentContainerClass = "jawraa-container max-w-[1080px]";

const coreAreas = [
  "Structured cabling and low-current connectivity",
  "Field installation, termination, and physical connectivity",
  "Testing, labeling, port mapping, and validation",
  "Documentation and operational handover",
];

const heroStats = [
  { value: "5 Stages", label: "Plan through support" },
  { value: "Fiber & Copper", label: "Structured cabling works" },
  { value: "Multi-site", label: "Mobilization readiness" },
  { value: "Traceable", label: "Testing and acceptance evidence" },
];

const whyJawraa = [
  {
    title: "End-to-end Field Execution",
    description: "From site readiness through installation, testing, and handover.",
    image: "/assets/low-current/end-to-end-field-execution.svg",
  },
  {
    title: "Fiber & Copper Cabling",
    description: "Structured cabling works covering fiber and copper infrastructure.",
    image: "/assets/low-current/fiber-copper-cabling.svg",
  },
  {
    title: "Rack, Cabinet & Endpoint Connectivity",
    description: "Physical connectivity for field endpoints, racks, and cabinets.",
    image: "/assets/low-current/rack-cabinet-endpoint-connectivity.svg",
  },
  {
    title: "Testing & Acceptance Readiness",
    description: "Testing, validation, records, and support readiness.",
    image: "/assets/low-current/testing-acceptance-readiness.svg",
  },
  {
    title: "Compliance-focused Execution",
    description:
      "Execution aligned with applicable project, HSE, quality, documentation, and handover requirements.",
    image: "/assets/low-current/compliance-focused-execution.svg",
  },
];

const portfolio = [
  {
    title: "Structured Cabling",
    description:
      "Structured cabling across fiber and copper, including routing, containment, and patching.",
    image: "/assets/low-current/structured-cabling.svg",
  },
  {
    title: "ELV Endpoint Connectivity",
    description:
      "Device-side physical connectivity for ELV, CCTV, access-control, IoT, telecom, and network endpoints.",
    image: "/assets/low-current/elv-endpoint-connectivity.svg",
  },
  {
    title: "Device-side Installation",
    description:
      "Installation, cabling, termination, and physical connectivity for cameras, access-control devices, sensors, panels, intercom units, access points, cabinets, racks, and related field endpoints.",
    image: "/assets/low-current/device-side-installation.svg",
  },
  {
    title: "Termination & Labeling",
    description:
      "Termination, labeling, port mapping, and structured records for field connectivity.",
    image: "/assets/low-current/termination-labeling.svg",
  },
  {
    title: "Testing & Validation",
    description:
      "Testing and validation supported by project-defined acceptance criteria, evidence, documentation, and operational handover.",
    image: "/assets/low-current/testing-validation.svg",
  },
  {
    title: "Multi-site Mobilization",
    description:
      "Scalable mobilization and operational support across multiple sites and sectors.",
    image: "/assets/low-current/multi-site-mobilization.svg",
  },
];

const coverage = [
  {
    title: "Site Survey & Installation Readiness",
    description:
      "Confirm site conditions, access, routes, and execution readiness before deployment.",
  },
  {
    title: "Fiber & Copper Works",
    description: "Execute structured cabling and associated fiber/copper works.",
  },
  {
    title: "Cable Routing & Pulling",
    description:
      "Route and pull cables according to the agreed drawings, pathways, and installation requirements.",
  },
  {
    title: "Low-current & ELV Connectivity",
    description: "Deliver the physical connectivity needed by low-current and ELV systems.",
  },
  {
    title: "HSE, Quality & Documentation",
    description:
      "Apply the agreed HSE and quality controls while maintaining delivery records.",
  },
  {
    title: "Handover & Acceptance",
    description:
      "Complete testing, evidence, documentation, and traceable acceptance against the agreed criteria.",
  },
];

const valueFocus = [
  "Risk Reduction Focus",
  "Reliability-focused Infrastructure",
  "Traceable Acceptance",
];

const deliverySteps = [
  {
    number: "01",
    title: "Plan",
    description:
      "Define scope, review drawings, confirm access requirements, and establish acceptance needs.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Confirm routing, materials, HSE requirements, and installation readiness.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Complete installation, termination, and physical connectivity works.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Perform testing, prepare records, finalize as-built information, and complete handover.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Provide troubleshooting, reporting, and continuity support according to the agreed service scope and service levels.",
  },
];

const customerInputs = [
  "Scope and service type",
  "Sites, drawings, and routes",
  "Cable specifications and quantities",
  "Connectivity, testing, and acceptance criteria",
  "Timeline, HSE, and access requirements",
];

const deliveryConfidence = [
  "Lifecycle delivery approach",
  "Multi-sector and multi-site readiness",
  "Clear technical demarcation",
  "Acceptance evidence and documentation",
];

export function LowCurrentPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active="/iot">
      <LocalizedIotContent locale={locale}>
      <section className="bg-white pb-[62px] pt-[112px] md:pb-[70px] md:pt-[132px]">
        <div className={`${lowCurrentContainerClass} grid gap-7 lg:grid-cols-[1fr_486px] lg:items-start lg:gap-2`}>
          <FadeIn className="h-full">
            <div className="flex h-full max-w-[570px] flex-col">
              <Eyebrow text="Low Current" />
              <h1
                className={
                  locale === "ar"
                    ? "mt-4 max-w-[560px] text-[32px] font-bold leading-[1.24] tracking-[0] text-[#161922] sm:text-[42px] md:text-[56px] md:leading-[1.2]"
                    : "mt-4 max-w-[540px] text-[34px] font-bold leading-[1.04] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[62px] md:leading-[0.98]"
                }
              >
                Structured low-current infrastructure delivered with controlled execution and traceable acceptance.
              </h1>
              <p className="mt-6 max-w-[528px] text-[13px] leading-6 text-[#7a828e]">
                JAWRAA&apos;s Low Current capability profile covers structured
                cabling, low-current connectivity, field installation, testing,
                labeling, documentation, and operational handover through a
                Saudi-based, scalable multi-site delivery model.
              </p>
              <div className="mt-auto grid max-w-[540px] grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <StatCard key={stat.value} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <article className="jawraa-lift-card flex flex-col rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-4 shadow-[0_22px_48px_rgb(17_17_17_/_9%)] hover:jawraa-lift-card-hover">
              <div className="rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Core delivery areas
                </h2>
                <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-4 text-[#747b86]">
                  {coreAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex h-[184px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f2f5] p-3">
                <Image
                  src="/assets/low-current/top-image.svg"
                  alt=""
                  width={451}
                  height={175}
                  priority
                  className="h-auto w-full max-w-[426px]"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Delivery model
                </h2>
                <p className="mt-3 text-[11px] leading-5 text-[#747b86]">
                  Saudi-based execution supported by governance, HSE, quality
                  control, logistics, and a scalable approach across sectors and
                  sites.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[40px]">
        <div className={lowCurrentContainerClass}>
          <Eyebrow text="Low Current Capability Profile" />
          <div className="mt-5">
            <ImageStoryCard
              eyebrow="Who We Are"
              title="Field execution for structured cabling and connected endpoints."
              description="JAWRAA delivers structured cabling, low-current connectivity, and field installation, supported by testing, labeling, documentation, and operational handover. The delivery model is Saudi-based and incorporates governance, HSE, quality control, logistics, and scalable multi-site execution across sectors."
              image="/assets/low-current/low-current-overview.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-[28px]">
        <div className={lowCurrentContainerClass}>
          <Eyebrow text="Why JAWRAA" />
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyJawraa.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard title={item.title} description={item.description} image={item.image} align="center" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[28px]">
        <div className={lowCurrentContainerClass}>
          <SectionIntro
            eyebrow="Core Capability Portfolio"
            title="From cable routes to connected field endpoints."
            description="The capability portfolio covers structured cabling, physical endpoint connectivity, termination, labeling, testing, validation, and multi-site operational support."
            titleClassName="!text-[24px] md:!text-[34px]"
          />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard title={item.title} description={item.description} image={item.image} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[28px]">
        <div className={`${lowCurrentContainerClass} grid gap-5 lg:grid-cols-[360px_1fr] lg:items-start`}>
          <FadeIn>
            <div className="rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-6 shadow-[0_18px_42px_rgb(17_17_17_/_7%)] md:p-7">
              <Eyebrow text="Technical Coverage Framework" />
              <h2 className="mt-3 text-[20px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#161922] md:text-[26px]">
                Controlled coverage from survey to handover.
              </h2>
              <p className="mt-3 text-[12px] leading-6 text-[#747b86]">
                The source framework organizes delivery around installation
                readiness, routing, cabling works, low-current connectivity,
                HSE, quality, documentation, and handover.
              </p>
            </div>
          </FadeIn>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {coverage.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <TextCard title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[28px]">
        <div className={lowCurrentContainerClass}>
          <FadeIn>
            <article className="grid gap-5 rounded-[16px] border border-[#f6be15] bg-[#fbfaf6] p-6 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] md:grid-cols-[1fr_270px] md:items-center md:p-7">
              <div>
                <h2 className="text-[20px] font-semibold leading-tight tracking-[-0.02em] text-[#161922] md:text-[28px]">
                  Customer value focus
                </h2>
                <p className="mt-3 text-[12px] leading-6 text-[#747b86]">
                  The business-unit profile identifies risk reduction,
                  infrastructure reliability, and traceable acceptance as
                  intended customer outcomes; actual results depend on the
                  approved design, materials, installation quality, testing, and
                  operating environment.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {valueFocus.map((item) => (
                  <div
                    key={item}
                    className="w-fit rounded-full border border-[#efd284] bg-[#fbf2d7] px-4 py-2 text-[11px] font-semibold text-[#635217]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[28px]">
        <div className={lowCurrentContainerClass}>
          <SectionIntro
            eyebrow="Execution & Delivery Model"
            title="A five-stage path from scope to continuity."
            description="The delivery model follows five stages: Plan, Engineer, Deploy, Validate, and Support."
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

      <section className="bg-white py-[28px]">
        <div className={lowCurrentContainerClass}>
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <ChecklistCard
              eyebrow="Customer Inputs"
              title="Inputs required for delivery"
              items={customerInputs}
            />
            <ChecklistCard
              eyebrow="Delivery Confidence"
              title="Execution confidence factors"
              items={deliveryConfidence}
            />
          </div>
          <FadeIn delay={0.08}>
            <article className="mt-6 rounded-[14px] border border-[#efd284] bg-[#fbfaf6] p-5 shadow-[0_12px_28px_rgb(17_17_17_/_5%)]">
              <p className="text-[10px] font-bold tracking-[-0.01em] text-[#8b919b]">
                Standards & Scope Note
              </p>
              <p className="mt-3 text-[10px] leading-5 text-[#747b86]">
                Low Current is used here as the service-category name from
                JAWRAA&apos;s source profile. For structured telecommunications
                cabling, the applicable design, installation, testing,
                documentation, and acceptance requirements should be defined by
                the project specifications and relevant standards. References to
                CCTV, access control, IoT, telecom, and network endpoints
                describe device-side installation and physical connectivity;
                they do not by themselves claim full system design, software
                configuration, regulatory approval, or certification.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-[74px]">
        <div className={lowCurrentContainerClass}>
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName?: string;
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
        <p className="mt-5 max-w-[760px] text-[12px] leading-6 text-[#747b86]">
          {description}
        </p>
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
      <article className="jawraa-lift-card grid min-h-[210px] gap-5 rounded-[16px] border border-[#f6be15] bg-white p-4 shadow-[0_16px_38px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_486px] md:items-center md:p-4">
        <div className="px-0 md:px-2">
          <p className="text-[9px] font-bold tracking-[-0.01em] text-[#8b919b]">
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
            width={405}
            height={215}
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
  align = "start",
}: {
  title: string;
  description: string;
  image: string;
  align?: "start" | "center";
}) {
  const isCenter = align === "center";

  return (
    <article
      className={[
        "jawraa-lift-card flex h-full min-h-[166px] flex-col rounded-[14px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover",
        isCenter ? "items-center text-center" : "items-start text-start",
      ].join(" ")}
    >
      <span
        className={[
          "relative mb-4 flex size-10 shrink-0 items-center justify-center rounded-[9px] border border-[#efd284] bg-[#fbf2d7]",
          isCenter ? "mx-auto" : "",
        ].join(" ")}
      >
        <Image src={image} alt="" fill sizes="40px" className="object-contain p-2" />
      </span>
      <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p
        className={[
          "mt-2 max-w-[270px] text-[10px] leading-4 text-[#747b86]",
          isCenter ? "mx-auto" : "",
        ].join(" ")}
      >
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
      <article className="jawraa-lift-card h-full min-h-[220px] rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
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
