import Image from "next/image";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { PageShell } from "./page-shell";

const aiContainerClass = "jawraa-container max-w-[1080px]";

const heroStats = [
  {
    value: "88%",
    label: "Organizations using AI in 2025 - Stanford AI Index 2026",
  },
  {
    value: "70%",
    label: "Organizations using GenAI in at least one function in 2025",
  },
  {
    value: "$91.9B",
    label: "Global private AI investment in 2022 - historical benchmark",
  },
  {
    value: "$15.7T",
    label: "PwC projection: potential global contribution by 2030",
  },
];

const aiCategories = [
  "Narrow AI: task-specific systems such as voice assistants",
  "General AI: human-level reasoning across domains",
  "Superintelligence: theoretical systems surpassing human intellect",
  "Current deployed applications primarily fall under Narrow AI",
];

const capabilities = [
  {
    title: "AI-driven Decision-Making",
    description: "AI-driven decision-making for smart infrastructure.",
    image: "/assets/ai/ai-driven-decision-making.svg",
  },
  {
    title: "AI Technology Stack",
    description:
      "Computer vision, NLP, LLM, Machine Learning, RAG, AI Agent, and MCP automation systems (Agentic AI).",
    image: "/assets/ai/ai-technology-stack.svg",
  },
  {
    title: "Predictive Analytics",
    description: "Predictive analytics and anomaly detection for operational insight.",
    image: "/assets/ai/predictive-analytics.svg",
  },
  {
    title: "Scalable AI Models",
    description: "Scalable AI models for real-time insights.",
    image: "/assets/ai/scalable-ai-models.svg",
  },
];

const statistics = [
  "Organizational AI adoption reached 88% among surveyed organizations in 2025 (Stanford AI Index 2026).",
  "Generative AI was used in at least one business function at 70% of surveyed organizations in 2025 (Stanford AI Index 2026).",
  "Global private AI investment was $91.9 billion in 2022; this was a 26.7% decrease from 2021, not an increase (Stanford AI Index 2023).",
  "PwC estimates that AI could contribute up to $15.7 trillion to the global economy by 2030; this is a projection, not a realized figure.",
  "WIPO reports 37,808 published GenAI patent families in 2025, representing about 8.7% of all AI patent-family publications.",
];

const whyItMatters = [
  "AI is actively reshaping industries and automating complex tasks",
  "It enables data-driven decisions at unprecedented speed and scale",
  "It expands organizational capabilities in seeing, hearing, speaking, and acting with precision",
  "It strengthens interpretation and effectiveness through integration with existing systems",
];

const workflow = [
  {
    number: "01",
    title: "Define the Problem",
    description: "Clearly define what problem you are trying to solve with AI.",
  },
  {
    number: "02",
    title: "Collect Data",
    description: "Data collection, data cleaning, and data preprocessing.",
  },
  {
    number: "03",
    title: "Choose a Model",
    description: "Select supervised, unsupervised, or reinforcement learning approaches.",
  },
  {
    number: "04",
    title: "Split the Data",
    description: "Prepare training, testing, and validation datasets.",
  },
  {
    number: "05",
    title: "Train the Model",
    description: "Train the model using the training dataset.",
  },
  {
    number: "06",
    title: "Evaluate the Model",
    description: "Use the testing set and validation set, if available, to assess performance.",
  },
  {
    number: "07",
    title: "Model Optimization",
    description: "Tune the model parameters based on evaluation results to improve performance.",
  },
  {
    number: "08",
    title: "Deployment",
    description:
      "Deploy the model to a production environment where it can make predictions or decisions based on new data.",
  },
];

const benefits = [
  "Increased Efficiency",
  "Enhanced Decision-Making",
  "Innovation & New Models",
  "Cost Reduction",
  "Scalability",
];

const challenges = [
  "Ethical Concerns & Bias",
  "Data Privacy & Security",
  "Job Displacement",
  "Lack of Transparency",
  "Regulatory Uncertainty",
];

const useCases = [
  {
    title: "Analytics",
    image: "/assets/ai/analytics.svg",
  },
  {
    title: "Automation",
    image: "/assets/ai/automation.svg",
  },
  {
    title: "Predictive Maintenance",
    image: "/assets/ai/predictive-maintenance.svg",
  },
  {
    title: "Anomaly Detection",
    image: "/assets/ai/anomaly-detection.svg",
  },
  {
    title: "More Customized Use Cases",
    image: "/assets/ai/more-customized-use-cases.svg",
  },
];

export function AiPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active="/iot">
      <section className="bg-white pb-[66px] pt-[112px] md:pb-[76px] md:pt-[132px]">
        <div className={`${aiContainerClass} grid gap-7 lg:grid-cols-[1fr_486px] lg:items-stretch lg:gap-2`}>
          <FadeIn className="h-full">
            <div className="flex h-full max-w-[570px] flex-col">
              <Eyebrow text="Artificial Intelligence" />
              <h1 className="mt-4 max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#161922] sm:text-[48px] md:text-[68px] md:leading-[1.04]">
                Transforming the future with intelligent AI ecosystems.
              </h1>
              <p className="mt-6 max-w-[520px] text-[13px] leading-6 text-[#7a828e]">
                An in-depth exploration of how Artificial Intelligence is
                reshaping industries, redefining human potential, and unlocking
                transformative opportunities across the globe. Artificial
                Intelligence and Machine Learning are embedded in all JAWRAA&apos;s
                platforms.
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
                  What is Artificial Intelligence?
                </h2>
                <p className="mt-3 text-[11px] leading-5 text-[#747b86]">
                  Artificial Intelligence is the simulation of human intelligence
                  processes by machines, especially computer systems. These
                  processes include learning, reasoning, problem-solving,
                  perception, and language understanding.
                </p>
              </div>
              <div className="mt-4 flex h-[162px] shrink-0 items-center justify-center rounded-[14px] bg-[#f0f2f5] p-3">
                <Image
                  src="/assets/ai/top-image.svg"
                  alt=""
                  width={421}
                  height={170}
                  priority
                  className="h-auto w-full max-w-[390px]"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-[#e5e8ed] bg-white p-5">
                <h2 className="text-[14px] font-bold tracking-[-0.01em] text-[#161922]">
                  AI categories
                </h2>
                <ul className="mt-2 space-y-1 pl-4 text-[11px] leading-4 text-[#747b86]">
                  {aiCategories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-[54px]">
        <div className={aiContainerClass}>
          <SectionIntro
            eyebrow="Overview"
            title="AI is no longer futuristic - it is operational."
            description="The source profile frames AI as a practical transformation layer: it automates complex processes, delivers predictive analytics, enhances data processing and interpretation, and strengthens decision-making across business and infrastructure contexts."
          />
          <div className="mt-10">
            <ImageStoryCard
              eyebrow="AI Overview"
              title="Leverages AI & ML to automate complex processes and deliver predictive analytics."
              description="This platform integrates with existing systems to enhance capabilities in data processing, interpretation, and effectiveness. From machine learning and natural language processing to computer vision and robotics, AI categories are rapidly expanding and enabling real-world autonomy and precision."
              image="/assets/ai/ai-overview.svg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-[46px]">
        <div className={aiContainerClass}>
          <Eyebrow text="AI Capabilities" />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-4">
            {capabilities.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <IconCard title={item.title} description={item.description} image={item.image} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[46px]">
        <div className={aiContainerClass}>
          <Eyebrow text="Understanding AI" />
          <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2">
            <InfoCard title="Key statistics" items={statistics} footer="External benchmarks verified in August 2026. Company capabilities and service claims remain sourced from the JAWRAA business-unit profile." />
            <InfoCard title="Why it matters" items={whyItMatters} />
          </div>
        </div>
      </section>

      <section className="bg-white py-[46px]">
        <div className={aiContainerClass}>
          <SectionIntro
            eyebrow="How We Do It"
            title="An 8-step AI delivery workflow."
            description="This workflow follows the sequence presented in the AI section of the business-unit profile and turns it into a cleaner design system."
            titleClassName="!text-[30px] md:!text-[42px]"
          />
          <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <FadeIn key={step.number} delay={Number(step.number) * 0.015}>
                <article className="jawraa-lift-card flex h-full min-h-[210px] flex-col rounded-[16px] border border-[#f6be15] bg-white p-6 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <span className="inline-flex size-9 items-center justify-center rounded-[9px] border border-[#f6be15] bg-[#fff4c7] text-[10px] font-bold text-[#b18408]">
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

      <section className="bg-white py-[46px]">
        <div className={aiContainerClass}>
          <Eyebrow text="Benefits & Challenges" />
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <PillGroup title="Benefits" items={benefits} />
            <PillGroup title="Challenges" items={challenges} />
          </div>
        </div>
      </section>

      <section className="bg-white pb-[58px] pt-[28px]">
        <div className={aiContainerClass}>
          <SectionIntro
            eyebrow="AI Use Cases"
            title="Focused, high-impact use cases."
            description="The source AI page highlights these use cases directly and notes that more customized use cases are possible."
            titleClassName="!text-[30px] md:!text-[42px]"
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <article className="jawraa-lift-card flex min-h-[148px] flex-col items-center justify-center rounded-[16px] border border-[#f6be15] bg-white p-5 text-center shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <span className="relative mb-5 flex size-11 items-center justify-center rounded-[9px] border border-[#f6be15] bg-[#fff4c7]">
                    <Image src={item.image} alt="" fill sizes="44px" className="object-contain p-2.5" />
                  </span>
                  <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
                    {item.title}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-[74px]">
        <div className={aiContainerClass}>
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
            "mt-5 max-w-[760px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#161922]",
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
      <article className="jawraa-lift-card grid min-h-[230px] gap-6 rounded-[16px] border border-[#f6be15] bg-white p-5 shadow-[0_16px_38px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[1fr_470px] md:items-center">
        <div className="px-1 md:px-3">
          <p className="text-[9px] font-bold tracking-[-0.01em] text-[#b18408]">
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
            width={458}
            height={197}
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
    <article className="jawraa-lift-card flex h-full min-h-[184px] flex-col items-center rounded-[14px] border border-[#f6be15] bg-white p-5 text-center shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
      <span className="relative mx-auto mb-4 flex size-10 items-center justify-center rounded-[9px] border border-[#f6be15] bg-[#fff4c7]">
        <Image src={image} alt="" fill sizes="40px" className="object-contain p-2" />
      </span>
      <h3 className="text-[12px] font-bold leading-tight text-[#161922]">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-[170px] text-[10px] leading-4 text-[#747b86]">
        {description}
      </p>
    </article>
  );
}

function InfoCard({
  title,
  items,
  footer,
}: {
  title: string;
  items: string[];
  footer?: string;
}) {
  return (
    <FadeIn>
      <article className="jawraa-lift-card flex h-full min-h-[360px] flex-col rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_36px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
        <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#161922]">
          {title}
        </h3>
        <ul className="mt-5 space-y-4 text-[12px] leading-6 text-[#747b86]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {footer ? (
          <p className="mt-5 text-[10px] leading-4 text-[#9aa1ac]">{footer}</p>
        ) : null}
      </article>
    </FadeIn>
  );
}

function PillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <FadeIn>
      <article className="jawraa-lift-card rounded-[16px] border border-[#f6be15] bg-white p-7 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
        <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#161922]">
          {title}
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#efd284] bg-[#fbfaf6] px-4 py-2 text-[11px] font-semibold text-[#747b86]"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}
