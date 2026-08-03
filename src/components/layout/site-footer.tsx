import type { Locale } from "@/config/site";
import { Link } from "@/i18n/navigation";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jawraa/posts/?feedView=all", icon: LinkedInIcon },
  { label: "X", href: "https://x.com/jawraa", icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/jawraa", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/jawraasa/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@jawraa.sa", icon: TikTokIcon },
];

const footerLinks = [
  { href: "/", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/about", label: { en: "About us", ar: "من نحن" } },
  { href: "/services/managed-services", label: { en: "Services", ar: "الخدمات" } },
  { href: "/partners", label: { en: "Partners", ar: "الشركاء" } },
  { href: "/media-center", label: { en: "Media Center", ar: "المركز الإعلامي" } },
  { href: "/clients", label: { en: "Clients", ar: "العملاء" } },
];

const footerAddress = {
  en: ["Uthman Ibn Affan Road,", "Al-Narjis", "District 13328 Riyadh, KSA"],
  ar: ["شارع عثمان بن عفان", "حي النرجس", "الرياض 13328، المملكة العربية السعودية"],
} satisfies Record<Locale, string[]>;

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-[#f3f6fa] py-[58px] text-[#59616d]">
      <div className="jawraa-container grid gap-10 md:grid-cols-[1.25fr_1fr_1.1fr]">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#858c96]">
            {locale === "ar" ? "تابعنا" : "Follow us"}
          </p>
          <div className="space-y-3 text-[12px] leading-6">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href === "#" ? undefined : "_blank"}
                  rel={link.href === "#" ? undefined : "noopener noreferrer"}
                  className="flex size-9 items-center justify-center rounded-full border border-[#dfe4eb] bg-white text-[#17191f] transition hover:border-[#f6be15] hover:bg-[#fff8df] hover:text-[#b18408]"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon aria-hidden className="size-4" />
                </a>
              ))}
            </div>
            <p>
              {locale === "ar"
                ? "سياسة الخصوصية | الشروط والأحكام"
                : "Privacy Policy | Terms and Conditions"}
            </p>
            <p>
              {locale === "ar" ? "جميع الحقوق محفوظة 2026" : "© 2026 All Rights Reserved."}
            </p>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#858c96]">
            {locale === "ar" ? "العنوان" : "Address"}
          </p>
          <p className="max-w-[210px] text-[12px] leading-6">
            {footerAddress[locale].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <nav
          aria-label={locale === "ar" ? "روابط التذييل" : "Footer navigation"}
          className="grid grid-flow-col grid-rows-3 gap-x-16 gap-y-3 self-start text-[12px] leading-6 md:pt-8"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              locale={locale}
              className="transition-colors hover:text-[#b18408]"
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

type SocialIconProps = React.SVGProps<SVGSVGElement>;

function LinkedInIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.98H3.74v10.28h3.2V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72Zm13.92 9.36c0-3.1-1.65-4.55-3.86-4.55a3.32 3.32 0 0 0-3.02 1.66V8.98H9.31v10.28h3.2v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.53 1.66 2.73v4.99h3.18v-5.9Z" />
    </svg>
  );
}

function XIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.31 10.16 21.63 2h-1.73l-6.36 7.09L8.46 2H2.6l7.68 10.73L2.6 22h1.73l6.72-7.5 5.37 7.5h5.86l-7.97-11.84Zm-2.38 2.65-.78-1.07L4.96 3.25h2.67l4.99 6.84.78 1.07 6.51 8.94h-2.67l-5.31-7.29Z" />
    </svg>
  );
}

function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.2 8.5V6.74c0-.84.56-1.04.95-1.04h2.42V2.02L14.24 2C10.54 2 9.7 4.77 9.7 6.54V8.5H7.43v3.8H9.7V22h4.5v-9.7h3.04l.4-3.8H14.2Z" />
    </svg>
  );
}

function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M16.9 7.1h.01" strokeLinecap="round" />
    </svg>
  );
}

function TikTokIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.15 2c.34 2.42 1.7 3.86 4.05 4.02v3.43a7.02 7.02 0 0 1-4-1.23v6.47c0 3.28-2.05 5.31-5.11 5.31-2.72 0-4.92-1.78-5.27-4.3-.42-3.03 1.9-5.6 4.93-5.68.38-.01.76.03 1.13.12v3.55a2.1 2.1 0 0 0-1.3-.2 1.65 1.65 0 0 0-1.31 1.8 1.68 1.68 0 0 0 1.76 1.48c1.08 0 1.73-.66 1.73-1.88V2h3.39Z" />
    </svg>
  );
}
