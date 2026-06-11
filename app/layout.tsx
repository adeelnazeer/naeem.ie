import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naeem.ie"),
  title: {
    default: "Naeem Iqbal | Working for the community with the community",
    template: "%s | Naeem Iqbal",
  },
  description:
    "Naeem Iqbal is a candidate for Laois County Council in the 2026 local elections. He is working for the community with the community.",
  keywords: [
    "Naeem Iqbal",
    "Laois County Council",
    "Local elections",
    "2026 local elections",
    "Laois community",
  ],
  authors: [{ name: "Naeem Iqbal", url: "https://naeem.ie" }],
  creator: "Naeem Iqbal",
  publisher: "Naeem Iqbal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Naeem Iqbal | Working for the community with the community",
    description:
      "Naeem Iqbal is a candidate for Laois County Council in the 2026 local elections. He is working for the community with the community.",
    url: "https://naeem.ie",
    siteName: "Naeem Iqbal",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naeem Iqbal | Working for the community with the community",
    description:
      "Naeem Iqbal is a candidate for Laois County Council in the 2026 local elections. He is working for the community with the community.",
  },
  alternates: {
    canonical: "https://naeem.ie",
  },
  category: "Personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Laois, Ireland" />
        <meta name="geo.position" content="53.0294;-7.2983" />
        <meta name="ICBM" content="53.0294, -7.2983" />
        <link rel="canonical" href="https://naeem.ie" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${inter.className}`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col bg-[#fafbfc] text-text-dark antialiased">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
