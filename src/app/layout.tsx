import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Arabic,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import { defaultLocale } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jawraa.sa"),
  title: {
    default: "Jawraa",
    template: "%s | Jawraa",
  },
  description: "Jawraa official corporate website.",
  icons: {
    icon: "/assets/logos/jawraa-logo.svg",
    shortcut: "/assets/logos/jawraa-logo.svg",
    apple: "/assets/logos/jawraa-logo.svg",
  },
  openGraph: {
    title: "Jawraa",
    description: "Jawraa official corporate website.",
    siteName: "Jawraa",
    images: [
      {
        url: "/assets/logos/jawraa-logo.svg",
        alt: "Jawraa",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      dir="ltr"
      className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable} ${ibmPlexArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
