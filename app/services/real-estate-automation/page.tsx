import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Real Estate Automation — CRM, Leads & Workflow | HowAutomate",
  description: "Automate lead follow-up, property listings, CRM updates, and client communication for real estate agencies. Save 20+ hours a week.",
  alternates: { canonical: "https://howautomate.com/services/real-estate-automation" },
  openGraph: { type: "website", title: "Real Estate Automation | HowAutomate", url: "https://howautomate.com/services/real-estate-automation" },
};

export default function RealEstateAutomationPage() {
  return (
    <IndustryLanding
      industry="Real Estate Agencies"
      headline="Close More Deals by Automating Lead Follow-Up and Property Operations"
      subheadline="From lead capture to deal closure — we automate the repetitive work so your agents focus on selling."
      description="Real estate agencies in India are sitting on a goldmine of inbound leads — from MagicBricks, 99acres, Housing.com, Instagram, and referrals. The problem is not generating leads. The problem is speed and consistency of follow-up. Research shows that the chance of converting a lead drops by over 80% if the first response takes more than 5 minutes. Most agencies respond in hours — or days.

HowAutomate builds lead management and CRM automation systems specifically for real estate agencies and independent brokers. The moment a lead arrives — from any source — they receive a personalised WhatsApp message and a call is routed to the next available agent. The entire enquiry, follow-up, and deal progression is tracked automatically in your CRM.

Beyond lead management, we automate property matching, listing updates across portals, and management dashboards that give principals real-time visibility into agent performance, deal pipeline, and revenue forecasts. Our clients typically close their first additional deal within 30 days of going live."
      painPoints={[
        { icon: "Users", title: "Leads Fall Through the Cracks", desc: "Enquiries from portals, social media, and walk-ins get lost without instant follow-up." },
        { icon: "Clock", title: "Manual CRM Updates", desc: "Agents waste time updating spreadsheets and CRM records instead of showing properties." },
        { icon: "Database", title: "No Visibility on Pipeline", desc: "Managers can't see deal stages, agent performance, or revenue forecasts in real time." },
      ]}
      solutions={[
        { title: "Instant Lead Capture & Response", desc: "Leads from all channels auto-sync to your CRM. Automated WhatsApp/email response within 60 seconds." },
        { title: "Smart Follow-Up Sequences", desc: "AI-powered drip campaigns nurture cold leads. Hot leads get flagged and routed to agents instantly." },
        { title: "Automated Property Matching", desc: "Match buyer requirements to available listings automatically and send personalised property alerts." },
        { title: "Real-Time Sales Dashboard", desc: "Live dashboard with deal pipeline, agent metrics, lead sources, and conversion rates." },
      ]}
      outcomes={[
        { metric: "3×", label: "Faster lead response" },
        { metric: "+35%", label: "Conversion improvement" },
        { metric: "20 hrs/wk", label: "Agent time saved" },
      ]}
      faqs={[
        { q: "Which property portals do you integrate with?", a: "We integrate with MagicBricks, 99acres, Housing.com, NoBroker, and can capture leads from Facebook and Instagram ads and your own website — all funnelling into a single CRM." },
        { q: "How fast can you respond to a new lead?", a: "Our automation typically responds within 60 seconds of lead capture — with a personalised WhatsApp message and automatic CRM entry — regardless of time of day or day of week." },
        { q: "Which CRM do you work with?", a: "We work with Salesforce, HubSpot, Zoho CRM, and custom CRM setups. We can also build a lightweight CRM tailored to real estate workflows if you don't currently have one." },
        { q: "Can you automate property recommendations to buyers?", a: "Yes. We build buyer requirement profiles and automatically match and alert them when suitable properties are listed — sent via WhatsApp or email with property details and photos." },
        { q: "How do you measure success for real estate automation?", a: "We track lead response time, lead-to-site-visit conversion rate, site-visit-to-booking conversion rate, and agent activity metrics — all visible in a live dashboard updated in real time." },
      ]}
    />
  );
}
