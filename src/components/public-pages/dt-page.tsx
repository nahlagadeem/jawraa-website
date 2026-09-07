import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { PageShell } from "./page-shell";

const dtContainerClass = "jawraa-container max-w-[1080px]";

const heroStats = [
  { value: "5", label: "Technologies listed in the source" },
  { value: "4", label: "Main capability areas" },
  { value: "4", label: "Manufacturing example components" },
  { value: "5", label: "Key application domains" },
];

const conceptLayers = [
  "Physical Asset or Process",
  "Digital Model",
  "Real-time Data",
  "Analytics",
];

const capabilities = [
  {
    title: "3D Representation",
    description: "3D digital representation of assets, systems, and cities.",
    image: "/assets/dt/3d-representation.svg",
  },
  {
    title: "Simulation & Predictive Maintenance",
    description: "Simulation and predictive-maintenance support.",
    image: "/assets/dt/simulation-predictive-maintenance.svg",
  },
  {
    title: "Physical-System Synchronization",
    description:
      "Supports real-time or near-real-time synchronization with physical systems, depending on the available data and system architecture.",
    image: "/assets/dt/physical-system-synchronization.svg",
  },
  {
    title: "Planning & Optimization",
    description: "Advanced planning and optimization tools.",
    image: "/assets/dt/planning-optimization.svg",
  },
];

const technologies = [
  {
    title: "Artificial Intelligence",
    description:
      "Leverages historical and real-time data paired with machine-learning frameworks to make predictions about future scenarios or events within the context of the asset.",
    image: "/assets/dt/artificial-intelligence.svg",
  },
  {
    title: "Internet of Things",
    description:
      "Sensors can continuously collect machine data, state, and condition from the physical asset and transmit it to the digital twin through wired or wireless networks.",
    image: "/assets/dt/internet-of-things.svg",
  },
  {
    title: "Computing",
    description:
      "Provides the computing resources needed to store and process large volumes of data from the asset and its digital twin.",
    image: "/assets/dt/computing.svg",
  },
  {
    title: "APIs",
    description:
      "Provide the necessary tools to extract, share, and harmonize data from multiple systems that contribute to a single digital twin.",
    image: "/assets/dt/apis.svg",
  },
  {
    title: "AR, VR & XR",
    description:
      "Renders the spatial model and visualization of the digital twin, providing the medium for collaboration and interaction with it.",
    image: "/assets/dt/ar-vr-xr.svg",
  },
];

const manufacturingSteps = [
  {
    number: "01",
    title: "Sensors",
    description:
      "Sensors distributed throughout the manufacturing process create signals that enable the twin to capture operational and environmental data pertaining to the physical process in the real world.",
  },
  {
    number: "02",
    title: "Data",
    description:
      "Real-world operational and environmental data from the sensors are aggregated and combined with enterprise data such as bill of materials, enterprise systems, and design specifications.",
  },
  {
    number: "03",
    title: "Analytics",
    description:
      "Analytics techniques are used to analyse the data through algorithmic simulations and visualization routines that are used by the digital twin to produce insights.",
  },
  {
    number: "04",
    title: "Actuators",
    description:
      "In the manufacturing example, the digital twin can support or trigger an action through actuators, subject to the system's control design and any required human oversight.",
  },
];

const businessValue = [
  "Reduce costs for businesses by enabling predictive maintenance",
  "Identify potential issues before they escalate into expensive problems",
  "Optimize resource allocation based on real-time data, minimizing waste and inefficiencies",
  "Facilitate virtual testing and simulation, reducing the need for physical prototypes",
  "Accelerate product development and time-to-market",
];

const outcomes = [
  "Predictive Maintenance",
  "Reduced Unplanned Downtime",
  "Post-manufacturing Visibility",
  "Improved Build",
  "Early Detection & Warnings",
  "Aggregated Data",
  "Improved Design",
];

const applications = [
  {
    title: "Smart Cities",
    description:
      "Cities can integrate IoT sensors throughout urban infrastructures, such as water pipes, roads, and electrical grids. The digital twin uses this data to monitor the city's infrastructure.",
    image: "/assets/dt/smart-cities.svg",
  },
  {
    title: "Urban Development",
    description:
      "Urban development digital twins streamline land management, enhance planning, and optimize maintenance for efficient and sustainable operations.",
    image: "/assets/dt/urban-development.svg",
  },
  {
    title: "Smart Building",
    description:
      "Smart-building digital twins can help optimize energy use, anticipate maintenance needs, and improve occupant comfort and safety.",
    image: "/assets/dt/smart-building.svg",
  },
  {
    title: "Infrastructure",
    description:
      "Smart-infrastructure digital twins can support urban planning, improve resource allocation, and strengthen resilience for more sustainable development.",
    image: "/assets/dt/infrastructure.svg",
  },
  {
    title: "Museums",
    description:
      "Digital twins, together with AR or VR, can support interactive and immersive visitor experiences, including detailed exploration of artifacts that may not be physically displayed because of space or conservation constraints.",
    image: "/assets/dt/museums.svg",
  },
];

export function DtPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active="/iot">
      <section className="bg-white pb-[66px] pt-[112px] md:pb-[76px] md:pt-[132px]">
        <div className={`${dtContainerClass} grid gap-7 lg:grid-cols-[1fr_486px] lg:items-stretch lg:gap-2`}>
          <FadeIn className="h-full">
            <div className="flex h-full max-w-[570px] flex-col">
              <Eyebrow text="Digital Twin" />
              <h1 className="mt-4 max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[68px] md:leading-[1.04]">
                Dynamic digital representations that mirror the physical world.
              </h1>
              <p className="mt-6 max-w-[520px] text-[13px] leading-6 text-[#7a828e]">
                Digital twins create dynamic digital representations of physical
                assets, systems, or processes. They support simulation,
                analysis, and prediction of behavior and performance, helping
                organizations improve product development and operational
                efficiency.
              </p>
              <div className="mt-auto grid max-w-[540px] grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <StatCard key={`${stat.value}-${stat.label}`} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="h-full">
            <article className="jawraa-lift-card flex h-full flex-col rounded-[18px] border border-[#f6be15] bg-[#fbfaf6] p-4 shadow-[0_22px_48px_rgb(17_17_17_/_9%)] hover:jawraa-lift-card-hover">
              <div className="rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  What is a Digital Twin?
                </h2>
                <p className="mt-3 text-[11px] leading-5 text-[#747b86]">
                  A digital twin is a synchronized virtual representation of a
                  physical object, system, or process. It can support monitoring,
                  simulation, and analysis using operational data, often supplied
                  by connected sensors.
                </p>
              </div>
              <div className="mt-4 flex h-[162px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f2f5] p-3">
                <Image
                  src="/assets/dt/top-image.svg"
                  alt=""
                  width={444}
                  height={159}
                  priority
                  className="h-auto w-full max-w-[412px]"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  Concept layers
                </h2>
                <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-4 text-[#747b86]">
                  {conceptLayers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[40px]">
        <div className={dtContainerClass}>
          <Eyebrow text="Overview" />
          <div className="mt-5">
            <ImageStoryCard
              eyebrow="Digital Twin Core"
              title="Bridge the physical and digital worlds with synchronized operational insight."
              description="By bridging physical and digital systems, digital twins can help organizations test scenarios, predict outcomes, optimize performance, and make better-informed decisions before selected changes are applied to real assets. The business-unit profile frames Digital Twin as a strategic capability for monitoring, simulation, and analytics-driven optimization."
              image="/assets/dt/dt-overview.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={dtContainerClass}>
          <Eyebrow text="Digital Twin Capabilities" />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-4">
            {capabilities.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard title={item.title} description={item.description} image={item.image} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={dtContainerClass}>
          <SectionIntro
            eyebrow="Technologies of Digital Twin"
            title="Five enablers that make the twin intelligent and interactive."
            description="The source file highlights five supporting technologies behind the digital-twin ecosystem. They are presented here in a cleaner card system."
            titleClassName="!text-[30px] md:!text-[42px]"
          />
          <div className="mt-9 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  tall
                  align="start"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={dtContainerClass}>
          <SectionIntro
            eyebrow="Manufacturing Process Example"
            title="How the digital twin operates in a real process context."
            description="The manufacturing example in the source profile explains how data, analytics, sensors, and actuators work together to create a live operational feedback loop."
            titleClassName="!text-[30px] md:!text-[42px]"
          />
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-4">
            {manufacturingSteps.map((step) => (
              <FadeIn key={step.number} delay={Number(step.number) * 0.03}>
                <article className="jawraa-lift-card flex h-full min-h-[260px] flex-col rounded-[16px] border border-[#f6be15] bg-white p-6 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <span className="inline-flex size-9 items-center justify-center rounded-[9px] border border-[#efd284] bg-[#fbf2d7] text-[10px] font-bold text-[#635217]">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold leading-tight text-[#161922]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-5 text-[#747b86]">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[34px]">
        <div className={dtContainerClass}>
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            <ValueCard
              eyebrow="Why Digital Twin?"
              title="Business value"
              items={businessValue}
            />
            <PillGroup
              eyebrow="Advantages of Digital Twin"
              title="Key outcomes"
              items={outcomes}
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-[44px] pt-[18px]">
        <div className={dtContainerClass}>
          <SectionIntro
            eyebrow="Applications of Digital Twin"
            title="Applied across cities, infrastructure, and immersive cultural experiences."
            description=""
            titleClassName="!text-[30px] md:!text-[42px]"
            hideDescription
          />
          <div className="mt-9 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  tall
                  align="start"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-[74px]">
        <div className={dtContainerClass}>
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
            width={486}
            height={200}
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
  tall = false,
  align = "center",
}: {
  title: string;
  description: string;
  image: string;
  tall?: boolean;
  align?: "center" | "start";
}) {
  const isStart = align === "start";

  return (
    <article
      className={[
        "jawraa-lift-card flex h-full flex-col rounded-[14px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover",
        isStart ? "items-start text-start" : "items-center text-center",
        tall ? "min-h-[254px]" : "min-h-[184px]",
      ].join(" ")}
    >
      <span
        className={[
          "relative mb-4 flex size-10 shrink-0 items-center justify-center rounded-[9px] border border-[#efd284] bg-[#fbf2d7]",
          isStart ? "" : "mx-auto",
        ].join(" ")}
      >
        <Image src={image} alt="" fill sizes="40px" className="object-contain p-2" />
      </span>
      <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p
        className={[
          "mt-2 max-w-[170px] text-[10px] leading-4 text-[#747b86]",
          isStart ? "" : "mx-auto",
        ].join(" ")}
      >
        {description}
      </p>
    </article>
  );
}

function ValueCard({
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
      <article className="jawraa-lift-card h-full min-h-[260px] rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
        <p className="text-[9px] font-bold tracking-[-0.01em] text-[#635217]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-[22px] font-bold tracking-[-0.02em] text-[#161922]">
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

function PillGroup({
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
      <article className="jawraa-lift-card h-full min-h-[260px] rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
        <p className="text-[9px] font-bold tracking-[-0.01em] text-[#635217]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-[22px] font-bold tracking-[-0.02em] text-[#161922]">
          {title}
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#efd284] bg-[#fbf2d7] px-4 py-2 text-[11px] font-semibold text-[#635217]"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}
