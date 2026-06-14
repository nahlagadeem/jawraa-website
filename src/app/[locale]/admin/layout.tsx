import { useTranslations } from "next-intl";
import { adminSections } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("admin");

  return (
    <main className="min-h-screen bg-secondary/50">
      <aside className="border-b border-border bg-background">
        <div className="jawraa-container flex min-h-16 items-center justify-between gap-6">
          <Link href="/admin" className="font-semibold">
            {t("dashboard")}
          </Link>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground xl:flex">
            {adminSections.map((section) => (
              <Link
                key={section.key}
                href={section.href}
                className="transition-colors hover:text-foreground"
              >
                {t(section.key)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </aside>
      {children}
    </main>
  );
}
