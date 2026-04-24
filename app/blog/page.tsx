import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Blog & Insights | HowAutomate",
  description: "Practical guides on ETL, AI agents, Power BI, cloud migration, CRM automation, and digital marketing from the HowAutomate team.",
  alternates: { canonical: "https://howautomate.com/blog" },
  openGraph: {
    title: "Blog & Insights | HowAutomate",
    description: "Practical guides on ETL, AI agents, Power BI, cloud migration, CRM automation, and digital marketing from the HowAutomate team.",
    url: "https://howautomate.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
