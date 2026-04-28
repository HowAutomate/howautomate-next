import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Data, AI, Cloud & Marketing | HowAutomate",
  description: "Explore HowAutomate's services: data analytics, ETL pipelines, AI agents, cloud engineering, and digital marketing for modern businesses.",
  alternates: { canonical: "https://howautomate.com/services" },
  openGraph: {
    type: "website",
    title: "Services — Data, AI, Cloud & Marketing | HowAutomate",
    description: "Explore HowAutomate's services: data analytics, ETL pipelines, AI agents, cloud engineering, and digital marketing for modern businesses.",
    url: "https://howautomate.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
