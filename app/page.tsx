import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "HowAutomate — Data, AI & Automation for Modern Businesses",
  description: "HowAutomate helps businesses automate workflows, build data pipelines, deploy AI agents, and migrate to the cloud. Book a free call today.",
  alternates: { canonical: "https://howautomate.com" },
  openGraph: {
    type: "website",
    title: "HowAutomate — Data, AI & Automation for Modern Businesses",
    description: "HowAutomate helps businesses automate workflows, build data pipelines, deploy AI agents, and migrate to the cloud. Book a free call today.",
    url: "https://howautomate.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://howautomate.com/#organization",
  name: "HowAutomate",
  url: "https://howautomate.com",
  logo: { "@type": "ImageObject", url: "https://howautomate.com/favicon.png", width: 512, height: 512 },
  description: "B2B agency specializing in data engineering, AI automation, cloud infrastructure, and digital marketing for modern businesses.",
  email: "hello@howautomate.com",
  telephone: "+91-96020-94213",
  foundingDate: "2023-01-01",
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-96020-94213",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/howautomate",
    "https://www.instagram.com/howautomate",
    "https://www.youtube.com/@HowAutomate",
    "https://github.com/HowAutomate",
    "https://www.wikidata.org/wiki/Q139551649",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://howautomate.com/#website",
  name: "HowAutomate",
  url: "https://howautomate.com",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://howautomate.com/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is business automation?",
      acceptedAnswer: { "@type": "Answer", text: "Business automation uses technology to perform repetitive tasks without manual effort. This includes data pipelines, AI agents, CRM workflows, report generation, and more — freeing your team to focus on high-value work." },
    },
    {
      "@type": "Question",
      name: "How long does an automation project take?",
      acceptedAnswer: { "@type": "Answer", text: "Most projects take 2–6 weeks depending on complexity. Simple automations can go live in under a week. Complex AI solutions or multi-system integrations typically take 4–6 weeks." },
    },
    {
      "@type": "Question",
      name: "What tools and technologies do you use?",
      acceptedAnswer: { "@type": "Answer", text: "We work with Python, Power BI, n8n, Make.com, Google Apps Script, Azure, AWS, PostgreSQL, custom APIs, and leading AI/LLM platforms." },
    },
    {
      "@type": "Question",
      name: "How much does automation cost?",
      acceptedAnswer: { "@type": "Answer", text: "Projects range from ₹1,000 for simple automations to enterprise-level engagements. We offer fixed-price packages and custom quotes based on your specific requirements." },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we work with clients globally. All communication and delivery are handled remotely, and we are experienced working across time zones." },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: { "@type": "Answer", text: "We serve clinics and healthcare, real estate agencies, coaching institutes, CA and accounting firms, e-commerce brands, and any B2B business looking to automate repetitive operations." },
    },
    {
      "@type": "Question",
      name: "Can you build custom AI agents?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We build custom AI agents using GPT-4 and other LLMs integrated with your existing tools — for customer support, lead generation, data analysis, and workflow automation." },
    },
    {
      "@type": "Question",
      name: "What is your process for getting started?",
      acceptedAnswer: { "@type": "Answer", text: "Book a free 30-minute discovery call. We audit your current workflow, identify automation opportunities, present a proposal, and begin building within days of approval." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent />
    </>
  );
}
