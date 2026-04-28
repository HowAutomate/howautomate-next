import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | HowAutomate",
  description: "Get in touch with HowAutomate. Book a free call, send an inquiry, or reach us via WhatsApp. We respond within 24 hours.",
  alternates: { canonical: "https://howautomate.com/contact" },
  openGraph: {
    type: "website",
    title: "Contact Us | HowAutomate",
    description: "Get in touch with HowAutomate. Book a free call, send an inquiry, or reach us via WhatsApp.",
    url: "https://howautomate.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
