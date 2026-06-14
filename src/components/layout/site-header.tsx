import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const primaryItems = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { label: { en: "About us", ar: "من نحن" }, href: "/about" },
];

const serviceItems = [
  {
    label: { en: "Managed Services", ar: "الخدمات المدارة" },
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
];

const secondaryItems = [
  { label: { en: "Media Center", ar: "المركز الإعلامي" }, href: "/media-center" },
  { label: { en: "Partners", ar: "الشركاء" }, href: "/partners" },
  { label: { en: "Clients", ar: "العملاء" }, href: "/clients" },
  { label: { en: "Apple", ar: "Apple" }, href: "/services/apple-education" },
];

export function SiteHeader({
  locale,
  active = "/",
}: {
  locale: Locale;
  active?: string;
}) {
  const alternateLocale = locale === "ar" ? "en" : "ar";

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-transparent">
      <div className="jawraa-container flex h-[66px] items-center justify-between gap-8">
        <Link href="/" className="relative block h-[21px] w-[114px] shrink-0">
          <Image
            src="/assets/logos/jawraa-logo.svg"
            alt="Jawraa"
            fill
            sizes="151px"
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[14px] text-[10px] font-semibold text-[#15171b] min-[900px]:flex xl:gap-[18px] xl:text-[11px]">
          {primaryItems.map((item, index) => (
            <HeaderLink
              key={item.href}
              item={item}
              locale={locale}
              active={active}
              home={index === 0}
            />
          ))}

          <div className="group relative">
            <Link
              href="/services"
              className={[
                "inline-flex h-[22px] items-center gap-1 whitespace-nowrap rounded-full transition-colors hover:text-black",
                active.startsWith("/services")
                  ? "border border-[#f6be15] px-2 text-black"
                  : "text-[#191b20]",
              ].join(" ")}
            >
              {locale === "ar" ? "الخدمات" : "Services"}
              <ChevronDown className="size-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-40 mt-3 w-[236px] -translate-x-1/2 rounded-[14px] border border-[#f6be15] bg-white p-2 opacity-0 shadow-[0_22px_46px_rgb(17_17_17_/_12%)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2">
              <Link
                href="/services"
                className="block rounded-[10px] px-4 py-3 text-[11px] font-black text-[#15171b] hover:bg-[#fff7dc]"
              >
                {locale === "ar" ? "نظرة عامة على الخدمات" : "Services overview"}
              </Link>
              <div className="my-1 h-px bg-[#f2e3af]" />
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[10px] px-4 py-3 text-[11px] font-semibold text-[#59616d] hover:bg-[#fff7dc] hover:text-black"
                >
                  {item.label[locale]}
                </Link>
              ))}
            </div>
          </div>

          {secondaryItems.map((item) => (
            <HeaderLink key={item.href} item={item} locale={locale} active={active} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 rounded-full border-[#e5e8ed] bg-white px-3 text-[12px] font-semibold shadow-none"
          >
            <Link href="/" locale={alternateLocale}>
              {locale === "ar" ? "AR" : "EN"}
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-[30px] rounded-full bg-[#f6be15] px-5 text-[11px] font-bold text-black shadow-[0_10px_22px_rgb(246_190_21_/_28%)] hover:bg-[#e9b40f]"
          >
            <Link href="/contact">{locale === "ar" ? "تواصل معنا" : "Contact us"}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeaderLink({
  item,
  locale,
  active,
  home = false,
}: {
  item: { label: Record<Locale, string>; href: string };
  locale: Locale;
  active: string;
  home?: boolean;
}) {
  const isActive =
    (home && active === "/") || (!home && item.href !== "/" && active.startsWith(item.href));

  return (
    <Link
      href={item.href}
      className={[
        "inline-flex h-[22px] items-center whitespace-nowrap rounded-full transition-colors hover:text-black",
        isActive ? "border border-[#f6be15] px-2 text-black" : "text-[#191b20]",
      ].join(" ")}
    >
      {item.label[locale]}
    </Link>
  );
}
