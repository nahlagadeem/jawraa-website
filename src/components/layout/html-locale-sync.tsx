"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/config/site";

export function HtmlLocaleSync({
  locale,
  direction,
}: {
  locale: Locale;
  direction: "ltr" | "rtl";
}) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(direction)};`,
      }}
    />
  );
}
