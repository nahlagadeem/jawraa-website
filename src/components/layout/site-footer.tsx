import type { Locale } from "@/config/site";
import { Link } from "@/i18n/navigation";

const footerLinks = [
  { href: "/", label: { en: "Home", ar: "الرئيسية" } },
  { href: "/about", label: { en: "About us", ar: "من نحن" } },
  { href: "/services", label: { en: "Services", ar: "الخدمات" } },
  { href: "/partners", label: { en: "Partners", ar: "الشركاء" } },
  { href: "/media-center", label: { en: "Media Center", ar: "المركز الإعلامي" } },
  { href: "/clients", label: { en: "Clients", ar: "العملاء" } },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-[#f3f6fa] py-[58px] text-[#59616d]">
      <div className="jawraa-container grid gap-10 md:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#858c96]">
            {locale === "ar" ? "تابعنا" : "Follow us"}
          </p>
          <div className="space-y-3 text-[12px] leading-6">
            <p>LinkedIn - X - Facebook</p>
            <p>{locale === "ar" ? "سياسة الخصوصية | الشروط والأحكام" : "Privacy Policy | Terms and Conditions"}</p>
            <p>© 2022 All Rights Reserved.</p>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#858c96]">
            {locale === "ar" ? "العنوان" : "Address"}
          </p>
          <p className="max-w-[210px] text-[12px] leading-6">
            Uthman Ibn Affan Road,
            <br />
            Al-Narjis
            <br />
            District 13328 Riyad, KSA
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 self-start text-[12px] leading-6">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-black">
              {link.label[locale]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
