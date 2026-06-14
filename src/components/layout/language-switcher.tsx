"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <Button asChild variant="outline" size="sm" className="gap-2 rounded-full">
      <Link href={pathname} locale={nextLocale}>
        <Languages className="size-4" aria-hidden="true" />
        <span>{nextLocale.toUpperCase()}</span>
      </Link>
    </Button>
  );
}
