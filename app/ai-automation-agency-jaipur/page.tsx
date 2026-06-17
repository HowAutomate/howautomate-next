import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "AI Automation Agency in Jaipur | HowAutomate",
  description:
    "HowAutomate is an AI automation agency in Jaipur. We help Jaipur and Rajasthan businesses automate workflows, build AI agents, and connect WhatsApp, CRM, and Tally — in person or remote. Book a free call.",
  alternates: { canonical: "https://howautomate.com/ai-automation-agency-jaipur" },
  openGraph: {
    type: "website",
    title: "AI Automation Agency in Jaipur | HowAutomate",
    description:
      "Jaipur-based AI & automation agency helping local businesses automate workflows, leads, and back-office tasks. Serving Jaipur, Rajasthan, and all of India.",
    url: "https://howautomate.com/ai-automation-agency-jaipur",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://howautomate.com/ai-automation-agency-jaipur#localbusiness",
  name: "HowAutomate — AI Automation Agency in Jaipur",
  image: "https://howautomate.com/og-image.jpg",
  url: "https://howautomate.com/ai-automation-agency-jaipur",
  telephone: "+91-96020-94213",
  email: "hello@howautomate.com",
  priceRange: "₹₹",
  description:
    "AI and business automation agency based in Jaipur, Rajasthan. We build workflow automation, AI agents, WhatsApp and CRM automation, and data pipelines for businesses in Jaipur and across India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 06, Govind Vihar-A, Nangal Jaisa Bohara, Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.9558, longitude: 75.7460 },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  parentOrganization: { "@id": "https://howautomate.com/#organization" },
  sameAs: [
    "https://www.linkedin.com/company/howautomate",
    "https://www.instagram.com/howautomate",
    "https://www.youtube.com/@HowAutomate",
    "https://clutch.co/profile/howautomate",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is HowAutomate an AI automation agency based in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HowAutomate is an AI and business automation agency headquartered in Jhotwara, Jaipur, Rajasthan. We work with businesses across Jaipur in person, and serve clients throughout Rajasthan and the rest of India remotely.",
      },
    },
    {
      "@type": "Question",
      name: "Can we meet in person in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Being based in Jaipur, we offer in-person discovery meetings and workshops for local businesses, alongside video calls. Many of our Jaipur clients prefer an initial face-to-face session to map their workflows before we build.",
      },
    },
    {
      "@type": "Question",
      name: "What does automation cost for a small business in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most automation projects for Jaipur SMBs start from ₹15,000–₹50,000 to build, depending on complexity, with low monthly running costs for tools and AI usage. We scope every project to your budget and prioritise the automations with the fastest payback first.",
      },
    },
    {
      "@type": "Question",
      name: "Which Jaipur businesses do you help automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with real estate agencies, CA and accounting firms, clinics and hospitals, coaching institutes, e-commerce and D2C brands, and service businesses across Jaipur. Our local case studies include a Jaipur real estate agency (WhatsApp lead automation) and a Jaipur CA firm (compliance automation).",
      },
    },
    {
      "@type": "Question",
      name: "Do you only serve Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Jaipur is our home base, but we deliver automation and AI projects for clients across India and globally — fully remotely. Local Jaipur clients simply get the added option of in-person collaboration.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "AI Automation Agency in Jaipur", item: "https://howautomate.com/ai-automation-agency-jaipur" },
  ],
};

export default function JaipurAgencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLanding
        industry="Jaipur Businesses"
        headline="AI Automation Agency in Jaipur"
        subheadline="We're a Jaipur-based AI and automation agency. We help local businesses cut manual work, respond to leads instantly, and run their back office on autopilot — with the option to meet in person."
        description={`Looking for an AI automation agency in Jaipur? HowAutomate is based right here in Jhotwara, Jaipur — and we build practical automation for businesses across the city and Rajasthan. From real estate agencies drowning in WhatsApp inquiries to CA firms buried in compliance work, we replace repetitive manual tasks with reliable AI-powered systems.

Unlike a faceless agency, being local means we can sit down with you in person, understand exactly how your business runs, and build automation that fits. We've already delivered results for Jaipur clients — including a real estate agency whose lead-to-site-visit conversion rose 42% after we automated their WhatsApp pipeline, and a Jaipur CA firm that saved 18 hours a week during filing season.

Whether you want a website chatbot, WhatsApp Business automation, CRM and lead workflows, Tally and accounting automation, or custom AI agents, we scope it to your budget and ship the fastest-payback automation first. Based in Jaipur, serving all of India.`}
        painPoints={[
          { icon: "Clock", title: "Hours Lost to Manual Work", desc: "Your Jaipur team spends hours every week on data entry, follow-ups, and reports that should run themselves." },
          { icon: "Phone", title: "Leads Going Cold", desc: "Inquiries on WhatsApp and calls don't get answered fast enough — and high-intent buyers move to a competitor." },
          { icon: "Database", title: "Data Scattered Everywhere", desc: "Spreadsheets, WhatsApp, Tally, and email don't talk to each other, so nothing is ever in one place." },
        ]}
        solutions={[
          { title: "Local, In-Person Setup", desc: "We meet you in Jaipur, map your workflows in person, and build automation that matches how your business actually operates." },
          { title: "Instant Lead Response", desc: "Every WhatsApp inquiry and web lead gets an instant reply and a systematic follow-up — 24/7, in Hindi or English." },
          { title: "Back-Office on Autopilot", desc: "Invoicing, Tally data entry, GST reminders, reports, and CRM updates run automatically, freeing your team for real work." },
          { title: "Custom AI Agents", desc: "Website chatbots, voice agents, and AI assistants trained on your business — built and maintained by a team you can actually call." },
        ]}
        outcomes={[
          { metric: "42%", label: "Higher lead conversion (Jaipur client)" },
          { metric: "18 hrs/wk", label: "Saved for a Jaipur CA firm" },
          { metric: "In person", label: "Local Jaipur meetings available" },
        ]}
        faqs={[
          { q: "Is HowAutomate an AI automation agency based in Jaipur?", a: "Yes. HowAutomate is an AI and business automation agency headquartered in Jhotwara, Jaipur, Rajasthan. We work with businesses across Jaipur in person, and serve clients throughout Rajasthan and the rest of India remotely." },
          { q: "Can we meet in person in Jaipur?", a: "Absolutely. Being based in Jaipur, we offer in-person discovery meetings and workshops for local businesses, alongside video calls. Many of our Jaipur clients prefer an initial face-to-face session to map their workflows before we build." },
          { q: "What does automation cost for a small business in Jaipur?", a: "Most automation projects for Jaipur SMBs start from ₹15,000–₹50,000 to build, depending on complexity, with low monthly running costs for tools and AI usage. We scope every project to your budget and prioritise the automations with the fastest payback first." },
          { q: "Which Jaipur businesses do you help automate?", a: "We work with real estate agencies, CA and accounting firms, clinics and hospitals, coaching institutes, e-commerce and D2C brands, and service businesses across Jaipur. Our local case studies include a Jaipur real estate agency (WhatsApp lead automation) and a Jaipur CA firm (compliance automation)." },
          { q: "Do you only serve Jaipur?", a: "No. Jaipur is our home base, but we deliver automation and AI projects for clients across India and globally — fully remotely. Local Jaipur clients simply get the added option of in-person collaboration." },
        ]}
      />
    </>
  );
}
