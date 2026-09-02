import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { ClientLogoStrip, PartnerLogoStrip } from "./logos-page";
import { PageShell } from "./page-shell";

const heroBullets = [
  "Real-time monitoring and decision support",
  "Device integration, connectivity, and data management",
  "Smart city, utility, and industrial IoT solutions",
  "Edge-to-cloud architecture with secure deployment",
];

const heroStats = [
  { value: "Hosted", label: "In Saudi Arabia" },
  { value: "4 Core", label: "Platform functions" },
  { value: "24+", label: "Listed IoT use cases" },
  { value: "End-to-end", label: "IoT & radio deployment" },
];

const pillars = [
  {
    title: "Integration & Middleware",
    description: "Acts as a middleware that connects various IoT devices.",
    image: "/assets/iot/integration-middleware.svg",
  },
  {
    title: "Ecosystem Support",
    description: "Integrating with other systems and services.",
    image: "/assets/iot/ecosystem-support.svg",
  },
  {
    title: "Customized Dashboards",
    description: "Fully customized dashboards and reports.",
    image: "/assets/iot/customized-dashboards.svg",
  },
  {
    title: "Facilitates ML & AI",
    description: "Supports AI and machine-learning creation.",
    image: "/assets/iot/facilitates-ml-ai.svg",
  },
];

const useCases = [
  "Fleet Management",
  "Smart Waste Management",
  "Smart Parking",
  "Air Quality",
  "Indoor Asset Tracking",
  "Outdoor Asset Tracking",
  "Smart Metering",
  "Fire & Safety",
  "Smart Street Light",
  "Water Leakage",
  "Smart Panic Button",
  "Smart Washroom",
  "Genset Monitoring",
  "Noise Monitoring",
  "Rodent Detection",
  "Water Quality Monitoring",
  "Manhole Monitoring",
  "Cold Storage Monitoring",
  "Water Pressure Monitoring",
  "Machine Vibration Monitoring",
  "Occupancy Detection",
  "Gas Detection",
  "Soil Monitoring",
  "Vape Detection",
];

const capabilityCards = [
  {
    title: "IoT Platform Capabilities",
    items: [
      "End-to-end IoT platform with real-time monitoring",
      "Device integration, connectivity & data management",
      "Smart city, utilities, and industrial IoT solutions",
      "Edge-to-cloud architecture with secure deployment",
    ],
  },
  {
    title: "IoT Radio Capabilities",
    items: [
      "Mission-critical 450 MHz networks",
      "Coverage for HPR, FMR, VMR, dispatchers, and related communication devices",
      "System integration, staging, configuration, installation, and de-installation",
      "RF verification, testing, commissioning, acceptance documentation, maintenance, and nationwide field support",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Sensing",
    items: [
      "High Quality Sensors",
      "Real time Monitoring",
      "IP 65 Weatherproof",
      "Wired and Wireless",
    ],
  },
  {
    number: "02",
    title: "Automation",
    items: [
      "Optimized Control",
      "Real-time Decisions",
      "Integrated Automation",
      "Alerts and Notifications",
    ],
  },
  {
    number: "03",
    title: "Visualization",
    items: [
      "Dashboards with gauges, heatmaps, and line charts",
      "Scatter plots, trend lines, and anomaly detection",
      "Digital Twin, 3D models, network graphs, and flow diagrams systems",
    ],
  },
  {
    number: "04",
    title: "Data Analysis, AI & ML",
    items: [
      "Anomaly Detection",
      "Demand Forecasting",
      "Machine Learning models",
      "Predictive Maintenance",
    ],
  },
];

const products = [
  "/assets/iot/product-catalogue-1.svg",
  "/assets/iot/product-catalogue-2.svg",
  "/assets/iot/product-catalogue-3.svg",
];

const structureCards = [
  {
    eyebrow: "Device Layer",
    title: "Open Hardware IoT Devices",
    items: [
      "Sensors and connected field devices",
      "Physical-world inputs",
      "Operational data sources",
    ],
  },
  {
    eyebrow: "Management",
    title: "Device Manager",
    items: [
      "Device administration",
      "Monitoring and control",
      "Operational oversight",
    ],
  },
  {
    eyebrow: "Messaging",
    title: "IoT Broker",
    items: [
      "Message routing",
      "Connectivity orchestration",
      "Interoperable data exchange",
    ],
  },
  {
    eyebrow: "Visualization & Data Services",
    title: "AI Engine, Databases, Models, Digital Twins, Business Intelligence",
    items: [
      "AI Engine",
      "Databases",
      "Models",
      "Digital Twins",
      "Business Intelligence",
    ],
  },
];

const platformTags = [
  "Real-time monitoring",
  "Physical asset visibility",
  "Utilities & environmental sensing",
  "Industrial and smart-city applications",
];

const iotContainerClass = "jawraa-container max-w-[1080px]";

export function IotPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active="/iot">
      <section className="bg-white pb-[66px] pt-[112px] md:pb-[76px] md:pt-[132px]">
        <div className={`${iotContainerClass} grid gap-7 lg:grid-cols-[1fr_486px] lg:items-start lg:gap-2`}>
          <FadeIn>
            <div className="max-w-[570px]">
              <Eyebrow text="Internet of Things" plain />
              <h1 className="mt-4 max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[68px] md:leading-[1.04]">
                JAWRAA IoT designed for intelligent, connected operations.
              </h1>
              <p className="mt-6 max-w-[520px] text-[13px] leading-6 text-[#7a828e]">
                At JAWRAA IoT, we are at the forefront of digital transformation
                with innovative IoT solutions and services. We design and develop
                customized IoT platforms tailored to client needs, with platforms
                hosted in Saudi Arabia for secure, scalable, and reliable service.
              </p>
              <div className="mt-6 grid max-w-[540px] grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <StatCard key={stat.value} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <article className="jawraa-lift-card rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-4 shadow-[0_22px_48px_rgb(17_17_17_/_9%)] hover:jawraa-lift-card-hover">
              <div className="rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  What the platform delivers
                </h2>
                <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-4 text-[#747b86]">
                  {heroBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex h-[162px] items-center justify-center rounded-[14px] bg-[#f0f2f5] p-4">
                <Image
                  src="/assets/iot/top-image.svg"
                  alt=""
                  width={252}
                  height={252}
                  priority
                  className="h-auto w-[224px]"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Platform pillars
                </h2>
                <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-4 text-[#747b86]">
                  {pillars.map((item) => (
                    <li key={item.title}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-white py-[64px]">
        <div className={iotContainerClass}>
          <SectionIntro
            eyebrow="Service Overview"
            title="Clearer structure, stronger storytelling."
            description="The content below keeps the same IoT information from the business-unit file, but it is reorganized into a cleaner page flow: overview, platform functions, use cases, capabilities, process, product catalogue, and platform structure."
          />
          <div className="mt-10 space-y-5">
            <ImageStoryCard
              eyebrow="JAWRAA IoT"
              title="Customized IoT platforms tailored to client needs."
              description="JAWRAA IoT specializes in designing and developing customized IoT platforms. Whether the need is to integrate IoT technologies into a business or deploy a robust platform, JAWRAA provides the expertise to bring that vision to life, with hosting in Saudi Arabia to ensure secure, scalable, and reliable service."
              image="/assets/iot/customized-iot-platforms.svg"
            />
            <ImageStoryCard
              eyebrow="IoT Advantages"
              title="Connected middleware, dashboards, and AI support in one platform."
              description="The source file presents four platform functions: Integration & Middleware, Ecosystem Support, Customized Dashboards, and Facilitates ML & AI. Together, these support connection with various IoT devices, integration with other systems and services, fully customized dashboards and reports, and AI / machine-learning creation."
              image="/assets/iot/connected-middleware-dashboards-ai.svg"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-white py-[64px]">
        <div className={iotContainerClass}>
          <Eyebrow text="Service Strengths" plain />
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {pillars.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <article className="jawraa-lift-card min-h-[154px] rounded-[14px] border border-[#f6be15] bg-white p-5 text-center shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <span className="relative mx-auto mb-4 flex size-10 items-center justify-center rounded-[9px] border border-[#f6be15] bg-[#fff4c7]">
                    <Image src={item.image} alt="" fill sizes="40px" className="object-contain p-2" />
                  </span>
                  <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[150px] text-[10px] leading-4 text-[#747b86]">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-[30px] pt-[64px]">
        <div className={`${iotContainerClass} grid gap-8 lg:grid-cols-[410px_1fr]`}>
          <FadeIn>
            <div className="rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-6 shadow-[0_18px_42px_rgb(17_17_17_/_7%)] md:p-7">
              <Eyebrow text="Enterprise Core Architecture" plain />
              <h2 className="mt-3 text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161922] md:text-[32px]">
                Comprehensive IoT platforms with customized use cases.
              </h2>
              <p className="mt-3 text-[12px] leading-6 text-[#747b86]">
                The business-unit file lists use cases across operations,
                utilities, buildings, safety, and industrial monitoring. To make
                them easier to scan, they are grouped here in a cleaner grid
                while preserving the original names.
              </p>
              <div className="mt-4 space-y-2">
                {platformTags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-[#f6be15] bg-white px-4 py-2 text-[11px] font-semibold text-[#747b86]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <FadeIn key={item} delay={index * 0.015}>
                <article className="jawraa-lift-card flex min-h-[86px] items-center rounded-[12px] border border-[#f6be15] bg-white p-5 shadow-[0_12px_28px_rgb(17_17_17_/_6%)] hover:jawraa-lift-card-hover">
                  <h3 className="text-[13px] font-bold leading-tight text-[#161922]">
                    {item}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LogoSection eyebrow="Our Clients">
        <ClientLogoStrip maxWidthClass="max-w-[1080px]" sectionClassName="pb-[42px]" />
      </LogoSection>

      <SectionDivider />

      <section className="bg-white py-[64px]">
        <div className={iotContainerClass}>
          <SectionIntro
            eyebrow="Capabilities"
            title="End-to-end capabilities for platform delivery and radio deployment."
            description="The source file presents two capability areas: IoT platform capabilities and IoT radio capabilities. They are kept distinct below to improve readability and decision-making for prospective clients."
            titleClassName="!text-[24px] md:!text-[34px]"
          />
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="jawraa-lift-card rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover"
              >
                <h3 className="text-[18px] font-black tracking-[-0.02em] text-[#161922]">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-3 text-[12px] leading-5 text-[#747b86]">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LogoSection eyebrow="Our Partners">
        <PartnerLogoStrip maxWidthClass="max-w-[1080px]" sectionClassName="pb-[26px]" />
      </LogoSection>

      <section className="bg-white pb-[28px] pt-[36px]">
        <div className={iotContainerClass}>
          <SectionIntro
            eyebrow="How We Do It"
            title="A clearer step-by-step process."
            description="The original material lists four stages: Sensing, Automation, Visualization, and Data Analysis / AI / ML. This version reshapes them into a simpler visual system while preserving the original items."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="jawraa-lift-card min-h-[254px] rounded-[16px] border border-[#f6be15] bg-white p-6 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-[9px] border border-[#f6be15] bg-[#fff4c7] text-[10px] font-bold text-[#b18408]">
                  {step.number}
                </span>
                <h3 className="mt-5 min-h-[42px] text-[17px] font-black leading-tight text-[#161922]">
                  {step.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[11px] leading-4 text-[#747b86]">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-[64px] pt-[30px]">
        <div className={iotContainerClass}>
          <SectionIntro
            eyebrow="Some of Our Product Catalogue"
            title="Product catalogue section, kept visual and cleaner."
            description="The source presentation visually shows product catalogue images but does not provide text labels for each product. To avoid inventing names, this redesign keeps the catalogue visual and generic while staying faithful to the source structure."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product}
                className="jawraa-lift-card flex min-h-[246px] items-center justify-center rounded-[16px] border border-[#f6be15] bg-white p-2 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover"
              >
                <div className="flex min-h-[236px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#f3f5f8] p-0.5">
                  <Image
                    src={product}
                    alt={`IoT product catalogue ${index + 1}`}
                    width={356}
                    height={355}
                    className={[
                      "w-full object-contain",
                      index < 2 ? "max-h-[252px] scale-110" : "max-h-[234px]",
                    ].join(" ")}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-[74px] pt-[34px]">
        <div className={iotContainerClass}>
          <div className="mb-4">
            <Eyebrow text="JAWRAA IoT Structure" plain />
          </div>
          <article className="jawraa-lift-card rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-7 shadow-[0_18px_42px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
            <SectionIntro
              eyebrow=""
              title="An open, interoperable data flow."
              description="This section follows the exact labels shown in the business-unit file and reframes them in a cleaner structure view."
              compact
              hideEyebrow
            />
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {structureCards.map((card) => (
                <article
                  key={card.title}
                  className="min-h-[216px] rounded-[12px] border border-[#f6be15] bg-white p-5"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#b18408]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[15px] font-black leading-tight text-[#161922]">
                    {card.title}
                  </h3>
                  <ul className="mt-5 space-y-2 text-[10px] leading-4 text-[#747b86]">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white pb-[74px]">
        <div className={iotContainerClass}>
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
    </PageShell>
  );
}

function Eyebrow({ text, plain = false }: { text: string; plain?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {plain ? null : <span className="h-px w-8 bg-[#f6be15]" />}
      <span
        className={[
          "text-[10px] font-bold text-[#8b919b]",
          plain ? "tracking-[-0.01em]" : "uppercase tracking-[0.28em]",
        ].join(" ")}
      >
        {text}
      </span>
    </div>
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

function SectionDivider() {
  return <div className="h-px bg-[#f6be15]" />;
}

function SectionIntro({
  eyebrow,
  title,
  description,
  compact = false,
  titleClassName,
  hideEyebrow = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
  titleClassName?: string;
  hideEyebrow?: boolean;
}) {
  return (
    <FadeIn>
      <div>
        {hideEyebrow ? null : <Eyebrow text={eyebrow} plain />}
        <h2
          className={[
            "max-w-[760px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161922]",
            hideEyebrow ? "" : "mt-5",
            compact ? "text-[24px] md:text-[32px]" : "text-[28px] md:text-[40px]",
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
      <article className="jawraa-lift-card grid min-h-[230px] gap-6 rounded-[16px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_38px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_470px] md:items-center">
        <div className="px-1 md:px-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b18408]">
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
            width={476}
            height={224}
            className="h-auto w-full object-contain"
          />
        </div>
      </article>
    </FadeIn>
  );
}

function LogoSection({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white pt-0">
      <div className={iotContainerClass}>
        <Eyebrow text={eyebrow} plain />
      </div>
      {children}
    </section>
  );
}
