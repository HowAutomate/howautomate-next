import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Coaching Institute Automation — Admissions & Operations | HowAutomate",
  description: "Automate student admissions, fee reminders, attendance tracking, and parent communication for coaching institutes and training centres.",
  alternates: { canonical: "https://howautomate.com/services/coaching-automation" },
  openGraph: { title: "Coaching Institute Automation | HowAutomate", url: "https://howautomate.com/services/coaching-automation" },
};

export default function CoachingAutomationPage() {
  return (
    <IndustryLanding
      industry="Coaching Institutes"
      headline="Automate Admissions, Student Communication, and Institute Operations"
      subheadline="From enquiry to enrolment to results tracking — streamline your coaching institute with smart automation."
      painPoints={[
        { icon: "Users", title: "Manual Admission Process", desc: "Enquiries come from calls, walk-ins, and social media — but follow-up is inconsistent and slow." },
        { icon: "FileText", title: "Fee Collection Chaos", desc: "Tracking payments, sending reminders, and managing defaulters is a full-time job." },
        { icon: "Clock", title: "No Performance Visibility", desc: "Batch performance, attendance trends, and student progress are tracked in scattered spreadsheets." },
      ]}
      solutions={[
        { title: "Automated Enquiry Management", desc: "Capture enquiries from all channels, auto-respond, and nurture with drip campaigns until enrolment." },
        { title: "Fee Reminders & Payment Tracking", desc: "Automated SMS/WhatsApp reminders before due dates. Dashboard shows paid, pending, and overdue at a glance." },
        { title: "Attendance & Performance Dashboards", desc: "Digital attendance with parent notifications. Batch-wise performance analytics for faculty and management." },
        { title: "Bulk Communication", desc: "Send exam schedules, results, and announcements to students and parents via WhatsApp/SMS in one click." },
      ]}
      outcomes={[
        { metric: "+50%", label: "Enquiry-to-enrolment rate" },
        { metric: "10 hrs/wk", label: "Admin time saved" },
        { metric: "95%", label: "Fee collection on time" },
      ]}
    />
  );
}
