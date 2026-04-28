import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About HowAutomate | Data, AI & Automation Agency",
  description: "Learn about HowAutomate — a lean, expert team helping businesses automate workflows, build data pipelines, and deploy AI solutions.",
  alternates: { canonical: "https://howautomate.com/about" },
  openGraph: {
    type: "website",
    title: "About HowAutomate",
    description: "Learn about HowAutomate — a lean, expert team helping businesses automate workflows, build data pipelines, and deploy AI solutions.",
    url: "https://howautomate.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
