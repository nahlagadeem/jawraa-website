"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { mediaPage } from "@/data/public-pages";
import { PageShell } from "./page-shell";

type ContactFormStatus = "idle" | "sending" | "sent" | "error";

export function MediaCenterPage({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "latest">("all");
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (window.location.hash !== "#contact-center") {
      return;
    }

    window.setTimeout(() => {
      document
        .getElementById("contact-center")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }, []);

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
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jawraa-lift-card grid overflow-hidden rounded-[14px] border border-[#f6be15] bg-white shadow-[0_16px_34px_rgb(17_17_17_/_7%)] hover:jawraa-lift-card-hover md:grid-cols-[196px_1fr]"
                  aria-label={item.title[locale]}
                >
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
                </a>
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
                  <form
                    className="mt-6 grid w-full max-w-[320px] gap-3 self-center"
                    onSubmit={handleContactSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      aria-label={mediaPage.contact.fields.name[locale]}
                      placeholder={mediaPage.contact.fields.name[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      aria-label={mediaPage.contact.fields.email[locale]}
                      placeholder={mediaPage.contact.fields.email[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      aria-label={mediaPage.contact.fields.phone[locale]}
                      placeholder={mediaPage.contact.fields.phone[locale]}
                      className="h-8 rounded-[8px] bg-[#eef0f2] px-4 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <textarea
                      name="message"
                      aria-label={mediaPage.contact.fields.message[locale]}
                      placeholder={mediaPage.contact.fields.message[locale]}
                      rows={3}
                      required
                      className="min-h-[72px] resize-none rounded-[8px] bg-[#eef0f2] px-4 py-3 text-[10px] text-[#23262d] outline-none placeholder:text-[#a1a6ad]"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="jawraa-gold-action mt-1 h-9 rounded-[8px] bg-[#f6be15] text-center text-[10px] font-black leading-9 text-white hover:jawraa-gold-action-hover disabled:pointer-events-none disabled:opacity-70"
                    >
                      {status === "sending"
                        ? locale === "ar"
                          ? "جاري الإرسال..."
                          : "Sending..."
                        : mediaPage.contact.send[locale]}
                    </button>
                    {status === "sent" ? (
                      <p className="text-[11px] font-bold text-[#1f7a43]">
                        {locale === "ar"
                          ? "تم إرسال رسالتك بنجاح."
                          : "Your message has been sent."}
                      </p>
                    ) : null}
                    {status === "error" ? (
                      <p className="text-[11px] font-bold text-[#b42318]">
                        {errorMessage}
                      </p>
                    ) : null}
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
