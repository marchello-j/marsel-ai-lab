import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marsel-ai-lab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Marsel AI Lab | AI Automation, Landing Pages & YouTube Research Tools",
  description:
    "Marsel AI Lab builds practical AI workflows, Telegram bots, landing pages, YouTube niche research tools, and business automation systems.",
  keywords: [
    "AI automation",
    "Telegram AI bots",
    "landing pages",
    "YouTube research tools",
    "n8n workflows",
    "business automation",
    "Marsel AI Lab"
  ],
  authors: [{ name: "Marsel AI Lab" }],
  creator: "Marsel AI Lab",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/"
    }
  },
  openGraph: {
    title: "Marsel AI Lab",
    description:
      "AI automation, landing pages, Telegram bots, and YouTube niche research tools for small businesses and creators.",
    url: "/",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    siteName: "Marsel AI Lab",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Marsel AI Lab portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marsel AI Lab",
    description:
      "Practical AI workflows, Telegram bots, landing pages, and YouTube research tools.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
