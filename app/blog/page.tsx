import type { Metadata } from "next";
import BlogContent from "@/components/pages/BlogContent";

export const metadata: Metadata = {
  title: "Automation & AI Blog — Guides & Tutorials | HowAutomate",
  description: "Practical guides on workflow automation, AI agents, ETL pipelines, cloud migration, CRM automation, and digital marketing for SMBs. New posts every week.",
  alternates: { canonical: "https://howautomate.com/blog" },
  openGraph: {
    type: "website",
    title: "Automation & AI Blog — Guides & Tutorials | HowAutomate",
    description: "Practical guides on workflow automation, AI agents, ETL pipelines, cloud migration, CRM automation, and digital marketing for SMBs. New posts every week.",
    url: "https://howautomate.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
