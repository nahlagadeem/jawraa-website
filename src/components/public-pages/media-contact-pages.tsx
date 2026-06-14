import Image from "next/image";
import { Mail, MapPin, Phone, Search } from "lucide-react";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { contactPage, mediaPage } from "@/data/public-pages";
import { InnerHero, PageShell } from "./page-shell";

const mediaHero = {
  title: {
    en: "Where our innovations, news, and milestones come to life",
    ar: "حيث تنبض ابتكاراتنا وأخبارنا وإنجازاتنا بالحياة",
  },
  description: {
    en: "Jawraa leads digital transformation through a Saudi vision that integrates innovation and progress, delivering solutions that make a tangible difference.",
    ar: "تقود جورا التحول الرقمي برؤية سعودية تجمع بين الابتكار والتقدم، وتقدم حلولا تصنع أثرا ملموسا.",
  },
};

const news = [
  {
    title: {
      en: "Strategic Partnership with Waseela at GITEX 2025",
      ar: "شراكة استراتيجية مع وسيلة في جيتكس 2025",
    },
    description: {
      en: "Jawraa signed a strategic partnership agreement with Waseela during GITEX 2025 to strengthen collaboration in technology solutions and digital integration.",
      ar: "وقعت جورا اتفاقية شراكة استراتيجية مع وسيلة خلال جيتكس 2025 لتعزيز التعاون في الحلول التقنية والتكامل الرقمي.",
    },
    image: "/assets/pages/media-11.webp",
  },
  {
    title: { en: "Ramadan Kareem from Jawraa", ar: "رمضان كريم من جورا" },
    description: {
      en: "Jawraa extends warmest wishes to our partners, clients, and community on the occasion of the holy month of Ramadan.",
      ar: "تتقدم جورا بأطيب التهاني إلى شركائها وعملائها ومجتمعها بمناسبة حلول شهر رمضان المبارك.",
    },
    image: "/assets/pages/media-10.webp",
  },
  {
    title: {
      en: "Strategic Partnership with Waseela at GITEX 2025",
      ar: "شراكة استراتيجية مع وسيلة في جيتكس 2025",
    },
    description: {
      en: "Jawraa signed a strategic partnership agreement during GITEX 2025 to strengthen collaboration in technology solutions and digital integration.",
      ar: "وقعت جورا اتفاقية شراكة استراتيجية خلال جيتكس 2025 لتعزيز التعاون في الحلول التقنية والتكامل الرقمي.",
    },
    image: "/assets/pages/media-12.webp",
  },
  {
    title: { en: "Memorandum of Understanding with APPSWAVE", ar: "مذكرة تفاهم مع APPSWAVE" },
    description: {
      en: "Jawraa signed an MoU with APPSWAVE to advance cooperation in digital transformation and artificial intelligence solutions.",
      ar: "وقعت جورا مذكرة تفاهم مع APPSWAVE لتعزيز التعاون في التحول الرقمي وحلول الذكاء الاصطناعي.",
    },
    image: "/assets/pages/media-13.webp",
  },
  {
    title: {
      en: "Jawraa Honored at NABH 2025 Cybersecurity Exhibition",
      ar: "تكريم جورا في معرض نبه للأمن السيبراني 2025",
    },
    description: {
      en: "Jawraa was recognized during the NABH 2025 Cybersecurity Awareness Exhibition for its contributions to digital transformation.",
      ar: "تم تكريم جورا خلال معرض نبه للتوعية بالأمن السيبراني 2025 تقديرا لمساهماتها في التحول الرقمي.",
    },
    image: "/assets/pages/media-02.webp",
  },
];

export function MediaCenterPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={mediaPage.active}>
      <section className="bg-[#f5f6f8] pb-[68px] pt-[120px] md:pb-[86px] md:pt-[145px]">
        <div className="jawraa-container">
          <div className="max-w-[710px] md:pl-[24px]">
            <FadeIn>
              <h1 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] text-[#161922] md:text-[52px] md:leading-[0.98]">
                {mediaHero.title[locale]}
              </h1>
              <p className="mt-7 max-w-[470px] text-[12px] leading-6 text-[#818894] md:text-[13px]">
                {mediaHero.description[locale]}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-[70px] pt-[74px] md:pb-[82px] md:pt-[92px]">
        <div className="jawraa-container max-w-[1100px]">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className="relative block md:w-[220px]">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-3 -translate-y-1/2 text-[#8a9099] rtl:left-auto rtl:right-4" />
              <span className="block h-9 rounded-full bg-white px-10 text-[10px] leading-9 text-[#23262d] shadow-[0_12px_28px_rgb(17_17_17_/_6%)]">
                {locale === "ar" ? "ابحث عن تحديثات" : "Search updates"}
              </span>
            </label>
            <div className="flex gap-3">
              <span className="inline-flex h-9 min-w-10 items-center justify-center rounded-full bg-[#f6be15] px-4 text-[10px] font-bold text-black">
                {locale === "ar" ? "الكل" : "All"}
              </span>
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-[10px] font-bold text-[#23262d] shadow-[0_12px_28px_rgb(17_17_17_/_6%)]">
                {locale === "ar" ? "آخر التحديثات" : "Latest updates"}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {news.map((item, index) => (
              <FadeIn key={`${item.title.en}-${index}`} delay={index * 0.025}>
                <article className="grid overflow-hidden rounded-[14px] border border-[#f6be15] bg-white shadow-[0_16px_34px_rgb(17_17_17_/_7%)] md:grid-cols-[196px_1fr]">
                  <div className="relative min-h-[150px] bg-[#f4f4f2] md:min-h-[118px]">
                    <Image src={item.image} alt="" fill sizes="196px" className="object-cover" />
                  </div>
                  <div className="px-6 py-5 md:px-7 md:py-[18px]">
                    <h2 className="text-[15px] font-black leading-tight tracking-[-0.02em] text-[#161922] md:text-[16px]">
                      {item.title[locale]}
                    </h2>
                    <p className="mt-3 max-w-[720px] text-[11px] leading-5 text-[#676f7c] md:text-[12px]">
                      {item.description[locale]}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-[1fr_1fr]">
            <FadeIn>
              <div className="relative min-h-[340px] overflow-hidden rounded-[16px] border border-[#f6be15] bg-[#edf1f5] shadow-[0_16px_34px_rgb(17_17_17_/_7%)]">
                <Image src="/assets/pages/media-00.webp" alt="" fill sizes="520px" className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.04}>
              <div className="flex min-h-[340px] flex-col justify-center rounded-[16px] border border-[#f6be15] bg-white px-8 py-8 shadow-[0_16px_34px_rgb(17_17_17_/_7%)]">
                <h2 className="max-w-[390px] text-[24px] font-black leading-[1.08] tracking-[-0.035em] text-[#151922] md:text-[28px]">
                  {locale === "ar"
                    ? "تواصل معنا لاكتشاف حلول مصممة لاحتياجاتك."
                    : "Reach out to explore tailored solutions for your needs."}
                </h2>
                <div className="mt-8 grid max-w-[250px] gap-3">
                  {[
                    locale === "ar" ? "الاسم الكامل" : "full name",
                    locale === "ar" ? "البريد الإلكتروني" : "your email",
                    locale === "ar" ? "رقم الهاتف" : "your number",
                    locale === "ar" ? "اكتب رسالتك هنا..." : "Write your message here...",
                  ].map((field) => (
                    <div
                      key={field}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] leading-8 text-[#a1a6ad]"
                    >
                      {field}
                    </div>
                  ))}
                  <div className="mt-1 h-9 rounded-[8px] bg-[#f6be15] text-center text-[10px] font-black leading-9 text-black">
                    {locale === "ar" ? "إرسال" : "send"}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <PageShell locale={locale} active={contactPage.active}>
      <InnerHero
        eyebrow={contactPage.eyebrow[locale]}
        title={contactPage.title[locale]}
        description={contactPage.description[locale]}
      />
      <section className="py-24">
        <div className="jawraa-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="rounded-[24px] bg-[#14171c] p-9 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)]">
              <h2 className="text-[34px] font-black tracking-[-0.04em]">
                {locale === "ar" ? "معلومات التواصل" : "Contact information"}
              </h2>
              <div className="mt-9 space-y-7 text-[15px] leading-7 text-[#d8dce3]">
                <p className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span>Uthman Ibn Affan Road, Al-Narjis, District 13328 Riyad, KSA</span>
                </p>
                <p className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span>info@jawraa.com</span>
                </p>
                <p className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span>+966 11 000 0000</span>
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="rounded-[24px] border border-[#f6be15] bg-white p-9 shadow-[0_22px_44px_rgb(17_17_17_/_8%)]">
              <h2 className="text-[28px] font-black tracking-[-0.035em]">
                {locale === "ar" ? "أرسل طلبك" : "Send an inquiry"}
              </h2>
              <div className="mt-8 grid gap-4">
                {[
                  { en: "Name", ar: "الاسم" },
                  { en: "Email", ar: "البريد الإلكتروني" },
                  { en: "Organization", ar: "الجهة" },
                  { en: "Message", ar: "الرسالة" },
                ].map((field) => (
                  <div
                    key={field.en}
                    className={[
                      "rounded-[14px] border border-[#e8e5dc] bg-[#fbfbfa] px-5 text-[13px] text-[#8a9099]",
                      field.en === "Message" ? "min-h-[140px] py-5" : "h-12 leading-[48px]",
                    ].join(" ")}
                  >
                    {field[locale]}
                  </div>
                ))}
                <div className="mt-2 inline-flex h-12 w-fit items-center rounded-full bg-[#f6be15] px-7 text-[13px] font-black text-black">
                  {locale === "ar" ? "إرسال" : "Submit"}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
