import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "WhatsApp Business Automation for Small Businesses | HowAutomate",
  description: "Automate WhatsApp replies, lead follow-ups, appointment bookings, and customer communication using WhatsApp Business API and AI workflows.",
  alternates: { canonical: "https://howautomate.com/services/whatsapp-automation" },
  openGraph: { type: "website", title: "WhatsApp Business Automation | HowAutomate", url: "https://howautomate.com/services/whatsapp-automation", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://howautomate.com/services/whatsapp-automation#service",
  name: "WhatsApp Business Automation for Small Businesses",
  description: "End-to-end WhatsApp automation using WhatsApp Business API — auto-replies, lead follow-up sequences, appointment booking, and customer communication for small businesses in India.",
  url: "https://howautomate.com/services/whatsapp-automation",
  serviceType: "Business Process Automation",
  provider: { "@type": "Organization", "@id": "https://howautomate.com/#organization", name: "HowAutomate", url: "https://howautomate.com" },
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does WhatsApp Business API automation cost in India?", acceptedAnswer: { "@type": "Answer", text: "A WhatsApp automation setup costs ₹15,000–₹40,000 to build, plus ₹2,000–₹8,000/month for the BSP platform (AiSensy, Wati, or similar) and WhatsApp conversation fees (₹0.30–₹1.50 per conversation). Most businesses recover the implementation cost within 30–45 days through improved lead conversion." } },
    { "@type": "Question", name: "Do I need the WhatsApp Business API or is the free app enough?", acceptedAnswer: { "@type": "Answer", text: "The free WhatsApp Business app is suitable for manual messaging only — it cannot send automated messages, run sequences, or integrate with your CRM. The WhatsApp Business API is required for any automation. You access it through a BSP (Business Solution Provider) such as AiSensy, Wati, or Interakt." } },
    { "@type": "Question", name: "What types of messages can be automated on WhatsApp?", acceptedAnswer: { "@type": "Answer", text: "You can automate: instant auto-replies to new inquiries, lead qualification flows, appointment booking and reminders, order confirmations and delivery updates, payment links and reminders, customer feedback requests, and re-engagement sequences. All automated messages must use pre-approved Message Templates for messages sent outside the 24-hour conversation window." } },
    { "@type": "Question", name: "How long does it take to set up WhatsApp automation?", acceptedAnswer: { "@type": "Answer", text: "A standard WhatsApp automation setup takes 2–3 weeks: WhatsApp Business API approval takes 3–7 business days, workflow building takes 3–5 days, and testing + go-live takes 3–4 days. You'll be receiving automated responses and running lead follow-up sequences within 3 weeks of starting the project." } },
    { "@type": "Question", name: "Which industries benefit most from WhatsApp automation?", acceptedAnswer: { "@type": "Answer", text: "Any business where customers communicate via WhatsApp benefits from automation. The highest ROI is seen in: real estate agencies (instant inquiry responses), medical and dental clinics (appointment booking and reminders), coaching institutes (batch admission workflows), CA firms (document collection and compliance reminders), and e-commerce businesses (order updates and customer support)." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://howautomate.com/services" },
    { "@type": "ListItem", position: 3, name: "WhatsApp Automation", item: "https://howautomate.com/services/whatsapp-automation" },
  ],
};

export default function WhatsAppAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLanding
        industry="Small Businesses"
        headline="Automate Your WhatsApp — Reply Instantly, Follow Up Automatically"
        subheadline="Stop losing leads to slow responses. We connect WhatsApp Business API to your business so every inquiry gets an instant reply and every lead gets a systematic follow-up — 24/7."
        description="WhatsApp is where your customers are. In India, over 500 million people use WhatsApp daily — and most of your business inquiries arrive there first. Yet most small businesses still reply manually, miss messages outside business hours, and lose leads who don't get a fast response.

HowAutomate builds WhatsApp automation systems for small businesses across India. We connect your WhatsApp Business API to custom n8n workflows that send instant auto-replies, qualify leads through conversational flows, book appointments directly into your calendar, and run multi-step follow-up sequences — all without you typing a single message.

Whether you're a clinic automating appointment reminders, a real estate agency handling inquiry floods, a coaching institute managing batch admissions, or an e-commerce business sending order updates — we build the automation that keeps your WhatsApp working for you 24 hours a day."
        painPoints={[
          { icon: "Clock", title: "Late Replies = Lost Leads", desc: "Leads who don't hear back within 30 minutes often move on to a competitor. Manual replies simply can't keep up." },
          { icon: "Phone", title: "Missed Messages After Hours", desc: "Your business hours end at 7pm. Customer inquiries don't. Every after-hours message is a potential sale missed." },
          { icon: "Workflow", title: "No Systematic Follow-Up", desc: "Most businesses reply once and hope. Without a systematic follow-up sequence, 70% of leads go cold unnecessarily." },
        ]}
        solutions={[
          { title: "Instant Auto-Reply to Every Inquiry", desc: "Every new WhatsApp message gets an instant, personalised response — property details, pricing, or FAQs — within 30 seconds, 24/7." },
          { title: "Automated Follow-Up Sequences", desc: "Multi-step follow-up sequences run automatically over 7 days — brochure, similar options, booking prompt — without you sending a single manual message." },
          { title: "Appointment Booking via WhatsApp", desc: "Customers book appointments directly through the WhatsApp conversation — connected to your Google Calendar or booking system." },
          { title: "CRM Integration", desc: "Every lead is automatically entered into your CRM with full context — source, inquiry details, and conversation history — no manual data entry." },
        ]}
        outcomes={[
          { metric: "30 sec", label: "Auto-reply response time" },
          { metric: "40%", label: "Higher lead conversion" },
          { metric: "10 hrs/wk", label: "Manual messaging eliminated" },
        ]}
        faqs={[
          { q: "How much does WhatsApp Business API automation cost in India?", a: "A WhatsApp automation setup costs ₹15,000–₹40,000 to build, plus ₹2,000–₹8,000/month for the BSP platform (AiSensy, Wati, or similar) and WhatsApp conversation fees (₹0.30–₹1.50 per conversation). Most businesses recover the implementation cost within 30–45 days through improved lead conversion." },
          { q: "Do I need the WhatsApp Business API or is the free app enough?", a: "The free WhatsApp Business app is suitable for manual messaging only — it cannot send automated messages, run sequences, or integrate with your CRM. The WhatsApp Business API is required for any automation. You access it through a BSP (Business Solution Provider) such as AiSensy, Wati, or Interakt." },
          { q: "What types of messages can be automated on WhatsApp?", a: "You can automate: instant auto-replies to new inquiries, lead qualification flows, appointment booking and reminders, order confirmations and delivery updates, payment links and reminders, customer feedback requests, and re-engagement sequences." },
          { q: "How long does it take to set up WhatsApp automation?", a: "A standard WhatsApp automation setup takes 2–3 weeks: WhatsApp Business API approval takes 3–7 business days, workflow building takes 3–5 days, and testing + go-live takes 3–4 days." },
          { q: "Which industries benefit most from WhatsApp automation?", a: "Real estate agencies, medical and dental clinics, coaching institutes, CA firms, and e-commerce businesses see the highest ROI from WhatsApp automation." },
        ]}
      />
    </>
  );
}
