import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "CA Firm Automation — Compliance, Reporting & Workflow | HowAutomate",
  description: "Automate GST filing prep, client document collection, financial reporting, and workflow management for CA and accounting firms.",
  alternates: { canonical: "https://howautomate.com/services/ca-firm-automation" },
  openGraph: { type: "website", title: "CA Firm Automation | HowAutomate", url: "https://howautomate.com/services/ca-firm-automation" },
};

export default function CAFirmAutomationPage() {
  return (
    <IndustryLanding
      industry="CA & Accounting Firms"
      headline="Automate Compliance, Client Communication, and Financial Reporting"
      subheadline="We help CA firms eliminate repetitive data work so you focus on advisory — not data entry."
      painPoints={[
        { icon: "FileText", title: "Document Collection Nightmares", desc: "Chasing clients for invoices, bank statements, and documents every month eats up valuable time." },
        { icon: "Clock", title: "Repetitive Data Entry", desc: "Manually entering data from PDFs and Excel sheets into Tally or accounting software is error-prone and slow." },
        { icon: "Database", title: "Deadline Overload", desc: "GST, TDS, ITR, audit deadlines pile up with no automated tracking or reminders." },
      ]}
      solutions={[
        { title: "Automated Document Collection", desc: "Clients upload documents via a branded portal. Auto-reminders ensure you get everything before deadlines." },
        { title: "Data Extraction & Entry Automation", desc: "AI extracts data from invoices, bank statements, and PDFs — auto-populating your accounting software." },
        { title: "Compliance Calendar & Alerts", desc: "Never miss a filing deadline. Automated reminders for GST, TDS, ITR, and audit milestones." },
        { title: "Client Reporting Dashboard", desc: "Auto-generated financial reports and MIS dashboards for each client — ready to share in one click." },
      ]}
      outcomes={[
        { metric: "70%", label: "Data entry time reduced" },
        { metric: "0", label: "Missed deadlines" },
        { metric: "2×", label: "More clients handled per team" },
      ]}
    />
  );
}
