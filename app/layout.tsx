import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <head>
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
        </Providers>
      </body>
    </html>
  );
}
