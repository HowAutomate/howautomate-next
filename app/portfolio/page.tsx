import type { Metadata } from "next";
import PortfolioContent from "@/components/pages/PortfolioContent";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://howautomate.com/portfolio#list",
  name: "HowAutomate Case Studies & Portfolio",
  description: "Real automation and AI project results from HowAutomate — data dashboards, AI receptionists, ETL pipelines, cloud migrations, and marketing campaigns.",
  url: "https://howautomate.com/portfolio",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "AI CRM Lead Engine: Google Maps → Sheets → Auto-Email", description: "Generated 2,400 fresh leads & 47 booked demos in the first 30 days using n8n, OpenAI, and Gmail API." },
    { "@type": "ListItem", position: 2, name: "AI Telegram Bot for 24/7 Customer Support", description: "Handles 1,500+ queries/day with GPT-4, cut response time from 4 hours to under 10 seconds, reduced support costs 65%." },
    { "@type": "ListItem", position: 3, name: "Retail Sales Analytics Dashboard", description: "Real-time Power BI dashboard tracking 2M+ sales records across 50 locations, 90% reduction in report generation time." },
    { "@type": "ListItem", position: 4, name: "AI Receptionist for Medical Clinic", description: "AI voice receptionist handling 200+ calls/day for appointment booking and patient FAQs." },
    { "@type": "ListItem", position: 5, name: "E-Commerce ETL Pipeline", description: "ETL pipeline pulling data from 5 e-commerce platforms into a centralised data warehouse." },
    { "@type": "ListItem", position: 6, name: "Cloud Migration to Azure", description: "Migrated legacy data warehouse to Azure, reducing infrastructure costs by 60%." },
    { "@type": "ListItem", position: 7, name: "Amazon PPC Campaign for D2C Brand", description: "Reduced ACoS from 42% to 18% and increased sales 3.2× in 4 months." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://howautomate.com/portfolio" },
  ],
};

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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortfolioContent />
    </>
  );
}
