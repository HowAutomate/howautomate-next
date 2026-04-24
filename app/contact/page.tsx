import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | HowAutomate",
  description: "Get in touch with HowAutomate. Book a free call, send an inquiry, or reach us via WhatsApp. We respond within 24 hours.",
  alternates: { canonical: "https://howautomate.com/contact" },
  openGraph: {
    title: "Contact Us | HowAutomate",
    description: "Get in touch with HowAutomate. Book a free call, send an inquiry, or reach us via WhatsApp.",
    url: "https://howautomate.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
