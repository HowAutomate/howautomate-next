import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Space_Grotesk, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-space",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plexmono",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
});
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "HowAutomate — Data, AI & Automation for Modern Businesses",
  description: "We help businesses automate operations using AI, data pipelines, and smart workflows. Based in India, serving globally.",
  metadataBase: new URL("https://howautomate.com"),
  alternates: { canonical: "https://howautomate.com" },
  openGraph: {
    type: "website",
    siteName: "HowAutomate",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HowAutomate",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
          <Analytics />
          <SpeedInsights />
        </Providers>
        {/* Google tag (gtag.js) — GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-579ZF0T5KV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-579ZF0T5KV');`}
        </Script>
      </body>
    </html>
  );
}
