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
    />
  );
}
