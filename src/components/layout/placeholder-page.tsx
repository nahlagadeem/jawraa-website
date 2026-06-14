import { useTranslations } from "next-intl";

type PlaceholderPageProps = {
  titleKey: string;
  admin?: boolean;
};

export function PlaceholderPage({ titleKey, admin = false }: PlaceholderPageProps) {
  const pageT = useTranslations(admin ? "admin" : "pages");
  const siteT = useTranslations("site");

  return (
    <main className="min-h-screen bg-background">
      <section className="jawraa-container py-16 md:py-24">
        <div className="jawraa-card max-w-3xl p-8 md:p-12">
          <div className="mb-5 h-1.5 w-16 rounded-full bg-accent" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {siteT("placeholder")}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {pageT(titleKey)}
          </h1>
        </div>
      </section>
    </main>
  );
}
