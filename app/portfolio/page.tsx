import type { Metadata } from "next";
import PortfolioContent from "@/components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Automation & AI Case Studies — Real Client Results | HowAutomate",
  description: "Browse real project results from HowAutomate: data dashboards, AI receptionists, ETL pipelines, cloud migrations, and marketing campaigns.",
  alternates: { canonical: "https://howautomate.com/portfolio" },
  openGraph: {
    type: "website",
    title: "Automation & AI Case Studies — Real Client Results | HowAutomate",
    description: "Browse real project results from HowAutomate: data dashboards, AI receptionists, ETL pipelines, cloud migrations, and marketing campaigns.",
    url: "https://howautomate.com/portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
