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
    default: "Naeem Iqbal | Accountant & Business Advisor — Portlaoise, Co. Laois",
    template: "%s | Naeem Iqbal",
  },
  description:
    "Naeem Iqbal is an accountant and business advisor based in Portlaoise, Co. Laois. Working for the community with the community.",
  keywords: [
    "Naeem Iqbal",
    "accountant Portlaoise",
    "business advisor Laois",
    "accountant Co. Laois",
    "Portlaoise community",
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
      "Accountant and business advisor in Portlaoise, Co. Laois. Contact info@naeem.ie or 089 230 9015.",
    url: "https://naeem.ie",
    siteName: "Naeem Iqbal",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naeem Iqbal | Portlaoise, Co. Laois",
    description:
      "Accountant and business advisor. Working for the community with the community.",
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
        <meta name="geo.placename" content="Portlaoise, Co. Laois, Ireland" />
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
