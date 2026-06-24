import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Marsel AI Lab",
    description:
      "AI automation, landing pages, Telegram bots, and YouTube niche research tools for small businesses and creators.",
    type: "website",
    locale: "en_US",
    siteName: "Marsel AI Lab"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marsel AI Lab",
    description:
      "Practical AI workflows, Telegram bots, landing pages, and YouTube research tools."
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
