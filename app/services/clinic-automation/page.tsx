import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Clinic Automation for Dental & Medical Practices | HowAutomate",
  description: "Automate appointment booking, patient follow-ups, and clinic operations. AI receptionist, CRM integration, and workflow automation for healthcare.",
  alternates: { canonical: "https://howautomate.com/services/clinic-automation" },
  openGraph: { title: "Clinic Automation | HowAutomate", url: "https://howautomate.com/services/clinic-automation" },
};

export default function ClinicAutomationPage() {
  return (
    <IndustryLanding
      industry="Dental & Medical Clinics"
      headline="Stop Losing Patients to Missed Calls and Manual Workflows"
      subheadline="We automate appointment booking, patient follow-ups, and clinic operations — so your staff focuses on care, not paperwork."
      painPoints={[
        { icon: "Phone", title: "Missed Calls = Lost Patients", desc: "Every missed call is a patient booking elsewhere. Your front desk can't answer every call during peak hours." },
        { icon: "Clock", title: "Hours Wasted on Admin", desc: "Staff spend hours on appointment reminders, follow-ups, and data entry instead of patient care." },
        { icon: "FileText", title: "Paper-Based Chaos", desc: "Patient records, insurance forms, and reports scattered across systems with no single source of truth." },
      ]}
      solutions={[
        { title: "AI Receptionist — 24/7 Call Handling", desc: "Our AI answers every call, books appointments, answers FAQs, and updates your CRM — even after hours." },
        { title: "Automated Patient Reminders", desc: "SMS and email reminders reduce no-shows by up to 40%. Patients confirm, reschedule, or cancel without calling." },
        { title: "Digital Intake & Records", desc: "Patients fill forms online before arrival. Data flows directly into your system — no re-entry needed." },
        { title: "Dashboard & Reporting", desc: "Real-time dashboards showing daily appointments, revenue, no-show rates, and patient satisfaction metrics." },
      ]}
      outcomes={[
        { metric: "80%", label: "Calls handled by AI" },
        { metric: "-40%", label: "Reduction in no-shows" },
        { metric: "15 hrs/wk", label: "Admin time saved" },
      ]}
    />
  );
}
