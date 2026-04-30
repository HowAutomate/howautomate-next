import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Coaching Institute Automation — Admissions & Operations | HowAutomate",
  description: "Automate student admissions, fee reminders, attendance tracking, and parent communication for coaching institutes and training centres.",
  alternates: { canonical: "https://howautomate.com/services/coaching-automation" },
  openGraph: { type: "website", title: "Coaching Institute Automation | HowAutomate", url: "https://howautomate.com/services/coaching-automation", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://howautomate.com/services/coaching-automation#service",
  name: "Coaching Institute Automation — Admissions & Operations",
  description: "Automate student admissions, fee reminders, attendance tracking, and parent communication for coaching institutes and training centres.",
  url: "https://howautomate.com/services/coaching-automation",
  serviceType: "Business Process Automation",
  provider: { "@type": "Organization", "@id": "https://howautomate.com/#organization", name: "HowAutomate", url: "https://howautomate.com" },
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you automate WhatsApp communication with parents?", acceptedAnswer: { "@type": "Answer", text: "Yes. We build WhatsApp automation for parent updates, fee reminders, exam schedules, and result announcements — all triggered automatically based on events in your system." } },
    { "@type": "Question", name: "Do you integrate with Razorpay or other payment gateways?", acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate with Razorpay, PayU, and other payment gateways to track fee payments and trigger automated reminders for pending dues — with payment links sent directly via WhatsApp." } },
    { "@type": "Question", name: "How does enquiry management work?", acceptedAnswer: { "@type": "Answer", text: "Enquiries from all channels — website forms, Facebook/Instagram ads, walk-ins — are captured in a central CRM. Automated follow-up sequences run via WhatsApp and email until the student converts or opts out." } },
    { "@type": "Question", name: "Can you track student attendance automatically?", acceptedAnswer: { "@type": "Answer", text: "Yes. With RFID, biometric, or QR-based attendance systems, attendance is tracked digitally and parent notifications are sent automatically for absences." } },
    { "@type": "Question", name: "What is the typical ROI for coaching institutes?", acceptedAnswer: { "@type": "Answer", text: "Clients typically see a 40–60% reduction in admin time, 20–30% improvement in fee collection rates, and significant uplift in enquiry-to-enrolment conversion within 90 days of going live." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://howautomate.com/services" },
    { "@type": "ListItem", position: 3, name: "Coaching Institute Automation", item: "https://howautomate.com/services/coaching-automation" },
  ],
};

export default function CoachingAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLanding
      industry="Coaching Institutes"
      headline="Automate Admissions, Student Communication, and Institute Operations"
      subheadline="From enquiry to enrolment to results tracking — streamline your coaching institute with smart automation."
      description="Coaching institutes face a unique operational challenge: managing hundreds or thousands of students across batches, subjects, and schedules — while keeping parents informed and fees collected on time. Manual processes don't scale, and the administrative overhead grows faster than enrolments.

HowAutomate builds end-to-end automation for coaching institutes and training centres — from the moment a student enquires to results day and beyond. Enquiries from websites, social media, walk-ins, and calls are captured centrally. Automated drip sequences follow up until enrolment. After admission, fee reminders, attendance alerts, and exam communications run on autopilot.

Our systems are designed for the Indian education market — supporting Hindi and English communications, integrating with local payment gateways like Razorpay, and working with the tools your admin team already uses. Whether you run a JEE/NEET coaching centre, a CA coaching institute, or a skill development training business, we have experience specific to your context."
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
      faqs={[
        { q: "Can you automate WhatsApp communication with parents?", a: "Yes. We build WhatsApp automation for parent updates, fee reminders, exam schedules, and result announcements — all triggered automatically based on events in your system." },
        { q: "Do you integrate with Razorpay or other payment gateways?", a: "Yes. We integrate with Razorpay, PayU, and other payment gateways to track fee payments and trigger automated reminders for pending dues — with payment links sent directly via WhatsApp." },
        { q: "How does enquiry management work?", a: "Enquiries from all channels — website forms, Facebook/Instagram ads, walk-ins — are captured in a central CRM. Automated follow-up sequences run via WhatsApp and email until the student converts or opts out." },
        { q: "Can you track student attendance automatically?", a: "Yes. With RFID, biometric, or QR-based attendance systems, attendance is tracked digitally and parent notifications are sent automatically for absences." },
        { q: "What is the typical ROI for coaching institutes?", a: "Clients typically see a 40–60% reduction in admin time, 20–30% improvement in fee collection rates, and significant uplift in enquiry-to-enrolment conversion within 90 days of going live." },
      ]}
    />
    </>
  );
}
