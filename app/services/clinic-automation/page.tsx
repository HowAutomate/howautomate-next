import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Clinic Automation for Dental & Medical Practices | HowAutomate",
  description: "Automate appointment booking, patient follow-ups, and clinic operations. AI receptionist, CRM integration, and workflow automation for healthcare.",
  alternates: { canonical: "https://howautomate.com/services/clinic-automation" },
  openGraph: { type: "website", title: "Clinic Automation | HowAutomate", url: "https://howautomate.com/services/clinic-automation" },
};

export default function ClinicAutomationPage() {
  return (
    <IndustryLanding
      industry="Dental & Medical Clinics"
      headline="Stop Losing Patients to Missed Calls and Manual Workflows"
      subheadline="We automate appointment booking, patient follow-ups, and clinic operations — so your staff focuses on care, not paperwork."
      description="Running a dental or medical clinic today means managing not just clinical care but an entire operational machine — appointment scheduling, patient communication, insurance processing, staff coordination, and compliance. When any part of this breaks down, patient satisfaction suffers and revenue leaks.

HowAutomate specialises in clinic automation for dental practices, GP clinics, and multi-speciality centres. Our AI receptionist answers every call, books appointments, and routes complex queries to staff — running 24 hours a day without vacation or sick leave. Patient reminder workflows cut no-shows automatically, without adding workload to your front desk team.

We integrate with common clinic management systems including Practo, Medinous, and custom setups. Whether you're a single-location clinic or a growing chain, our automation scales with you — giving you real-time visibility into every location's appointment flow, revenue, and patient satisfaction from a single dashboard."
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
      faqs={[
        { q: "Does the AI receptionist sound natural?", a: "Yes. We use advanced voice AI that handles conversational booking, understands appointment types, and escalates complex queries to your staff seamlessly — patients often cannot tell the difference." },
        { q: "Which clinic management software do you integrate with?", a: "We work with Practo, Medinous, ClinicPRO, and can integrate with any system that has an API or data export. Custom setups are also supported." },
        { q: "What happens if the AI cannot handle a patient query?", a: "The AI automatically escalates to a human staff member via call transfer or WhatsApp notification, so no patient is left without a response." },
        { q: "How are patient reminders sent?", a: "Via SMS, WhatsApp, and email — depending on patient preferences. Reminders go out at configurable intervals, for example 48 hours and 2 hours before the appointment." },
        { q: "Is patient data handled securely?", a: "All patient data is encrypted at rest and in transit. We follow healthcare data security best practices and work within your existing compliance requirements." },
      ]}
    />
  );
}
