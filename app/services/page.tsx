import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://howautomate.com/services#list",
  name: "HowAutomate Services",
  description: "Data engineering, AI automation, cloud infrastructure, and digital marketing services for modern businesses.",
  url: "https://howautomate.com/services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Data & Analytics", url: "https://howautomate.com/services#data", description: "ETL pipelines, Power BI dashboards, automated reports and Google Sheets automation." },
    { "@type": "ListItem", position: 2, name: "AI & Automation", url: "https://howautomate.com/services#ai", description: "AI receptionists, marketing agents, workflow automation and custom API integrations." },
    { "@type": "ListItem", position: 3, name: "Cloud & Engineering", url: "https://howautomate.com/services#cloud", description: "Azure, AWS, SnapLogic, database design, web crawlers and full-stack applications." },
    { "@type": "ListItem", position: 4, name: "Digital Marketing", url: "https://howautomate.com/services#marketing", description: "Amazon PPC, B2C SEO, e-commerce and quick commerce strategies that drive real revenue." },
    { "@type": "ListItem", position: 5, name: "Clinic Automation", url: "https://howautomate.com/services/clinic-automation" },
    { "@type": "ListItem", position: 6, name: "Real Estate Automation", url: "https://howautomate.com/services/real-estate-automation" },
    { "@type": "ListItem", position: 7, name: "Coaching Institute Automation", url: "https://howautomate.com/services/coaching-automation" },
    { "@type": "ListItem", position: 8, name: "CA Firm Automation", url: "https://howautomate.com/services/ca-firm-automation" },
    { "@type": "ListItem", position: 9, name: "E-Commerce Automation", url: "https://howautomate.com/services/ecommerce-automation" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://howautomate.com/services" },
  ],
};

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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesContent />
    </>
  );
}
