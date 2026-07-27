"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Locale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";

type NavItem = {
  label: Record<Locale, string>;
  href: string;
  external?: boolean;
};

const primaryItems = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { label: { en: "About us", ar: "من نحن" }, href: "/about" },
] satisfies NavItem[];

const serviceItems = [
  {
    label: { en: "Managed Services", ar: "الخدمات المُدارة" },
    href: "/services/managed-services",
  },
  {
    label: { en: "Infrastructure", ar: "البنية التحتية" },
    href: "/services/infrastructure",
  },
  {
    label: { en: "Systems & Cloud", ar: "الأنظمة والسحابة" },
    href: "/services/systems-cloud",
  },
  {
    label: { en: "Cybersecurity", ar: "الأمن السيبراني" },
    href: "/services/cybersecurity",
  },
] satisfies NavItem[];

const secondaryItems = [
  { label: { en: "Media Center", ar: "المركز الإعلامي" }, href: "/media-center" },
  { label: { en: "Partners", ar: "الشركاء" }, href: "/partners" },
  { label: { en: "Clients", ar: "العملاء" }, href: "/clients" },
  { label: { en: "Apple", ar: "آبل" }, href: "https://www.jawraa.sa/", external: true },
] satisfies NavItem[];

export function SiteHeader({
  locale,
  active = "/",
}: {
  locale: Locale;
  active?: string;
}) {
  const alternateLocale = locale === "ar" ? "en" : "ar";
  const pathname = usePathname();
  const currentPath = pathname || active;
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuLabel = mobileOpen
    ? locale === "ar"
      ? "إغلاق التنقل"
      : "Close navigation"
    : locale === "ar"
      ? "فتح التنقل"
      : "Open navigation";
  const mobileItems = [
    ...primaryItems,
    ...serviceItems,
    ...secondaryItems,
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-transparent">
      <div className="jawraa-container flex h-[66px] items-center justify-between gap-4 min-[900px]:gap-8">
        <Link
          href="/"
          locale={locale}
          className="relative block h-[19px] w-[96px] shrink-0 sm:h-[21px] sm:w-[114px]"
        >
          <Image
            src="/assets/logos/jawraa-logo.svg"
            alt="Jawraa"
            fill
            sizes="151px"
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 min-[900px]:gap-5 xl:gap-6">
        <nav className="hidden items-center gap-[10px] text-[11px] font-semibold text-[#15171b] min-[900px]:flex xl:gap-[13px] xl:text-[12px]">
          {primaryItems.map((item, index) => (
            <HeaderLink
              key={item.href}
              item={item}
              locale={locale}
              active={currentPath}
              home={index === 0}
            />
          ))}

          <div className="group relative">
            <button
              type="button"
              className={[
                "inline-flex h-[22px] items-center gap-1 whitespace-nowrap rounded-full transition-colors hover:text-black",
                currentPath.startsWith("/services/")
                  ? "border border-[#f6be15] px-2 text-black"
                  : "text-[#191b20]",
              ].join(" ")}
            >
              {locale === "ar" ? "الخدمات" : "Services"}
              <ChevronDown className="size-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-40 mt-3 w-[236px] -translate-x-1/2 rounded-[14px] border border-[#f6be15] bg-white p-2 opacity-0 shadow-[0_22px_46px_rgb(17_17_17_/_12%)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  locale={locale}
                  className={[
                    "block rounded-[10px] px-4 py-3 text-[12px] font-semibold hover:bg-[#fff7dc] hover:text-black",
                    currentPath === item.href ? "bg-[#fff7dc] text-black" : "text-[#59616d]",
                  ].join(" ")}
                >
                  {item.label[locale]}
                </Link>
              ))}
            </div>
          </div>

          {secondaryItems.map((item) => (
            <HeaderLink key={item.href} item={item} locale={locale} active={currentPath} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 rounded-full border-[#e5e8ed] bg-white px-3 text-[12px] font-semibold shadow-none"
          >
            <Link href={pathname} locale={alternateLocale}>
              <span>{locale === "ar" ? "AR" : "EN"}</span>
              <ChevronDown className="size-3" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-[30px] rounded-full bg-[#f6be15] px-3 text-[11px] font-bold text-black shadow-[0_10px_22px_rgb(246_190_21_/_28%)] hover:bg-[#e9b40f] sm:px-5 sm:text-[12px]"
          >
            <Link href="/contact#contact-form" locale={locale}>
              {locale === "ar" ? "تواصل معنا" : "Contact us"}
            </Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={mobileMenuLabel}
            aria-expanded={mobileOpen}
            className="size-8 rounded-full border-[#e5e8ed] bg-white text-[#15171b] shadow-none min-[900px]:hidden"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="jawraa-container min-[900px]:hidden">
          <nav className="max-h-[calc(100vh-82px)] overflow-y-auto rounded-[18px] border border-[#f6be15] bg-white p-3 text-[13px] font-bold text-[#15171b] shadow-[0_22px_46px_rgb(17_17_17_/_12%)]">
            {mobileItems.map((item) => (
              <MobileNavLink
                key={item.href}
                item={item}
                active={currentPath}
                locale={locale}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function HeaderLink({
  item,
  locale,
  active,
  home = false,
}: {
  item: NavItem;
  locale: Locale;
  active: string;
  home?: boolean;
}) {
  const isActive =
    !item.external &&
    ((home && active === "/") || (!home && item.href !== "/" && active.startsWith(item.href)));

  const className = [
    "inline-flex h-[22px] items-center whitespace-nowrap rounded-full transition-colors hover:text-black",
    isActive ? "border border-[#f6be15] px-2 text-black" : "text-[#191b20]",
  ].join(" ");

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label[locale]}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      locale={locale}
      className={className}
    >
      {item.label[locale]}
    </Link>
  );
}

function MobileNavLink({
  item,
  locale,
  active,
  onClick,
}: {
  item: NavItem;
  locale: Locale;
  active: string;
  onClick: () => void;
}) {
  const isActive =
    !item.external && (active === item.href || (item.href !== "/" && active.startsWith(item.href)));
  const className = [
    "block rounded-[12px] px-4 py-3 transition-colors hover:bg-[#fff7dc]",
    isActive ? "bg-[#fff7dc] text-black" : "text-[#59616d]",
  ].join(" ");

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {item.label[locale]}
      </a>
    );
  }

  return (
    <Link href={item.href} locale={locale} className={className} onClick={onClick}>
      {item.label[locale]}
    </Link>
  );
}
