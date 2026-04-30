import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://howautomate.com/about#page",
  name: "About HowAutomate",
  url: "https://howautomate.com/about",
  description: "Meet Amit Singh and the HowAutomate team — specialists in data engineering, AI automation, and workflow automation.",
  about: { "@type": "Organization", "@id": "https://howautomate.com/#organization" },
};

export const metadata: Metadata = {
  title: "About HowAutomate — AI & Automation Experts | Amit Singh",
  description: "Meet Amit Singh and the HowAutomate team — specialists in data engineering, AI automation, and workflow automation for Indian SMBs and global clients.",
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <AboutContent />
    </>
  );
}
