"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { contactPage, mediaPage } from "@/data/public-pages";
import { InnerHero, PageShell } from "./page-shell";

type ContactFormStatus = "idle" | "sending" | "sent" | "error";

export function MediaCenterPage({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "latest">("all");

  const visibleNews = useMemo(() => {
    const source =
      activeFilter === "latest" ? mediaPage.news.slice(0, 3) : mediaPage.news;
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return source;
    }

    return source.filter((item) =>
      [item.title.en, item.title.ar, item.description.en, item.description.ar]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [activeFilter, query]);

  return (
    <PageShell locale={locale} active={mediaPage.active}>
      <section className="bg-[#f5f6f8] pb-[46px] pt-[108px] md:pb-[58px] md:pt-[132px]">
        <div className="jawraa-container">
          <div className="max-w-[710px] md:pl-[24px]">
            <FadeIn>
              <h1 className="text-[28px] font-bold leading-[1.02] tracking-[-0.03em] text-[#161922] sm:text-[38px] md:text-[48px] md:leading-[0.98]">
                {mediaPage.title[locale]}
              </h1>
              <p className="mt-7 max-w-[470px] text-[12px] leading-6 text-[#818894] md:text-[13px]">
                {mediaPage.description[locale]}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-[48px] pt-[50px] md:pb-[56px] md:pt-[62px]">
        <div className="jawraa-container max-w-[1100px]">
          <div className="mb-8 flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-5">
            <label className="block min-w-0 md:w-[240px]">
              <span className="sr-only">{mediaPage.searchLabel[locale]}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={mediaPage.searchLabel[locale]}
                className="block h-9 w-full bg-transparent text-[12px] font-medium text-[#23262d] outline-none placeholder:text-[#23262d]"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
                className={[
                  "jawraa-outline-action inline-flex h-9 min-w-10 items-center justify-center rounded-full border px-4 text-[10px] font-bold",
                  activeFilter === "all"
                    ? "jawraa-gold-action border-[#f6be15] bg-[#f6be15] text-black hover:jawraa-gold-action-hover"
                    : "border-transparent bg-[#eef0f2] text-[#23262d] hover:jawraa-outline-action-hover",
                ].join(" ")}
              >
                {mediaPage.filters.all[locale]}
              </button>
              <button
                type="button"
                aria-pressed={activeFilter === "latest"}
                onClick={() => setActiveFilter("latest")}
                className={[
                  "jawraa-outline-action inline-flex h-9 items-center justify-center rounded-full border px-5 text-[10px] font-bold",
                  activeFilter === "latest"
                    ? "jawraa-gold-action border-[#f6be15] bg-[#f6be15] text-black hover:jawraa-gold-action-hover"
                    : "border-transparent bg-[#eef0f2] text-[#23262d] hover:jawraa-outline-action-hover",
                ].join(" ")}
              >
                {mediaPage.filters.latest[locale]}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {visibleNews.map((item, index) => (
              <FadeIn key={`${item.title.en}-${index}`} delay={index * 0.025}>
                <article className="jawraa-lift-card grid overflow-hidden rounded-[14px] border border-[#f6be15] bg-white shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[196px_1fr]">
                  <div className="relative min-h-[150px] bg-[#f4f4f2] md:min-h-[118px]">
                    <Image
                      src={item.image}
                      alt={item.title[locale]}
                      fill
                      sizes="196px"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-6 py-5 md:px-7 md:py-[18px]">
                    <h2 className="text-[15px] font-bold leading-tight tracking-[-0.01em] text-[#161922] md:text-[16px]">
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

          <section
            id="contact-center"
            className="mt-6 grid scroll-mt-24 items-stretch gap-6 md:grid-cols-[1fr_1fr]"
          >
            <FadeIn className="h-full">
              <div className="jawraa-lift-card relative h-full min-h-[300px] overflow-hidden rounded-[16px] border border-[#f6be15] bg-[#edf1f5] shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:min-h-[430px]">
                <iframe
                  title={locale === "ar" ? "موقع جوراء" : "Jawraa location"}
                  src="https://maps.google.com/maps?q=24.8374125,46.6785469&z=17&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
            <FadeIn className="h-full" delay={0.04}>
              <div className="flex h-full flex-col gap-4 md:min-h-[430px]">
                <div className="jawraa-lift-card flex flex-1 flex-col rounded-[16px] border border-[#f6be15] bg-white px-8 py-8 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover">
                  <h2 className="max-w-[390px] text-[22px] font-bold leading-[1.12] tracking-[-0.025em] text-[#151922] md:text-[26px]">
                    {mediaPage.contact.title[locale]}
                  </h2>
                  <form className="mt-6 grid w-full max-w-[320px] gap-3 self-center">
                    <input
                      type="text"
                      name="name"
                      aria-label={mediaPage.contact.fields.name[locale]}
                      placeholder={mediaPage.contact.fields.name[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <input
                      type="email"
                      name="email"
                      aria-label={mediaPage.contact.fields.email[locale]}
                      placeholder={mediaPage.contact.fields.email[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      aria-label={mediaPage.contact.fields.phone[locale]}
                      placeholder={mediaPage.contact.fields.phone[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <textarea
                      name="message"
                      aria-label={mediaPage.contact.fields.message[locale]}
                      placeholder={mediaPage.contact.fields.message[locale]}
                      rows={3}
                      className="min-h-[72px] resize-none rounded-[8px] bg-[#eef0f2] px-4 py-3 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <button
                      type="button"
                      className="jawraa-gold-action mt-1 h-9 rounded-[8px] bg-[#f6be15] text-center text-[10px] font-black leading-9 text-white hover:jawraa-gold-action-hover"
                    >
                      {mediaPage.contact.send[locale]}
                    </button>
                  </form>
                </div>
                <div className="jawraa-lift-card grid min-h-[72px] items-center gap-4 rounded-[16px] border border-[#f6be15] bg-white px-8 py-4 shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover sm:grid-cols-[auto_1fr]">
                  <p className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-[#151922]">
                    {locale === "ar" ? "التواصل المباشر:" : "Direct contact:"}
                  </p>
                  <div className="text-[12px] leading-5 text-[#68707c] sm:justify-self-end">
                    <a href="mailto:info@jawraa.com" className="block transition-colors hover:text-[#b18408]">
                      info@jawraa.com
                    </a>
                    <p dir="ltr">0115250600 | 0115250622</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        </div>
      </section>
    </PageShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Unable to send message.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send message.",
      );
    }
  }

  return (
    <PageShell locale={locale} active={contactPage.active}>
      <InnerHero
        eyebrow={contactPage.eyebrow[locale]}
        title={contactPage.title[locale]}
        description={contactPage.description[locale]}
      />
      <section id="contact-form" className="scroll-mt-28 py-24">
        <div className="jawraa-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="rounded-[24px] bg-[#14171c] p-9 text-white shadow-[0_30px_70px_rgb(17_17_17_/_24%)]">
              <h2 className="text-[30px] font-bold tracking-[-0.03em]">
                {locale === "ar" ? "معلومات التواصل" : "Contact information"}
              </h2>
              <div className="mt-9 space-y-7 text-[15px] leading-7 text-[#d8dce3]">
                <p className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span>
                    {locale === "ar"
                      ? "شارع عثمان بن عفان، حي النرجس، الرياض 13328، المملكة العربية السعودية"
                      : "Uthman Ibn Affan Road, Al-Narjis, District 13328 Riyadh, KSA"}
                  </span>
                </p>
                <p className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span>info@jawraa.com</span>
                </p>
                <p className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-[#f6be15]" />
                  <span dir="ltr">+966 11 000 0000</span>
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="jawraa-lift-card rounded-[24px] border border-[#f6be15] bg-white p-9 shadow-[0_22px_44px_rgb(17_17_17_/_8%)] hover:jawraa-lift-card-hover">
              <h2 className="text-[26px] font-bold tracking-[-0.025em]">
                {locale === "ar" ? "أرسل طلبك" : "Send an inquiry"}
              </h2>
              <form className="mt-8 grid gap-4" onSubmit={handleContactSubmit}>
                {[
                  { en: "Full name", ar: "الاسم الكامل", type: "text", name: "name" },
                  { en: "Your email", ar: "بريدك الإلكتروني", type: "email", name: "email" },
                  { en: "Your number", ar: "رقمك", type: "tel", name: "phone" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    required
                    aria-label={field[locale]}
                    placeholder={field[locale]}
                    className="h-12 rounded-[14px] border border-[#e8e5dc] bg-[#fbfbfa] px-5 text-[13px] text-[#15171c] outline-none placeholder:text-[#8a9099]"
                  />
                ))}
                <textarea
                  name="message"
                  aria-label={locale === "ar" ? "الرسالة" : "Message"}
                  placeholder={locale === "ar" ? "اكتب رسالتك هنا ." : "Write your message here ."}
                  rows={5}
                  required
                  className="min-h-[140px] resize-none rounded-[14px] border border-[#e8e5dc] bg-[#fbfbfa] px-5 py-5 text-[13px] text-[#15171c] outline-none placeholder:text-[#8a9099]"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="jawraa-gold-action mt-2 inline-flex h-12 w-fit items-center rounded-full bg-[#f6be15] px-7 text-[13px] font-black text-white hover:jawraa-gold-action-hover disabled:pointer-events-none disabled:opacity-70"
                >
                  {status === "sending"
                    ? locale === "ar"
                      ? "جاري الإرسال..."
                      : "Sending..."
                    : locale === "ar"
                      ? "إرسال"
                      : "send"}
                </button>
                {status === "sent" ? (
                  <p className="text-[13px] font-bold text-[#1f7a43]">
                    {locale === "ar"
                      ? "تم إرسال رسالتك بنجاح."
                      : "Your message has been sent."}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-[13px] font-bold text-[#b42318]">
                    {errorMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
