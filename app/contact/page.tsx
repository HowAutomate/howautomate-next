import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://howautomate.com/contact#page",
  name: "Contact HowAutomate",
  url: "https://howautomate.com/contact",
  description: "Book a free automation consultation or send an enquiry to HowAutomate.",
  about: { "@type": "Organization", "@id": "https://howautomate.com/#organization" },
};

export const metadata: Metadata = {
  title: "Book a Free Automation Consultation | HowAutomate",
  description: "Book a free 30-minute call with HowAutomate. Discuss your automation project, AI agents, data pipelines, or workflow needs. We respond within 24 hours.",
  alternates: { canonical: "https://howautomate.com/contact" },
  openGraph: {
    type: "website",
    title: "Book a Free Automation Consultation | HowAutomate",
    description: "Book a free 30-minute call with HowAutomate. Discuss your automation project, AI agents, data pipelines, or workflow needs.",
    url: "https://howautomate.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactContent />
    </>
  );
}
