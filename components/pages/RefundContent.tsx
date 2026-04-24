"use client";
import { motion } from "framer-motion";

export default function RefundContent() {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground text-[15px] leading-relaxed">
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Overview</h2><p>At HowAutomate, we strive to deliver high-quality automation and consulting services. This Refund Policy outlines the terms under which refunds may be issued.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Consulting & Project Services</h2><ul className="list-disc pl-5 space-y-1"><li><strong>Before work begins:</strong> Full refund of any advance payment.</li><li><strong>Work in progress:</strong> Charged for work completed to date; remaining advance refunded.</li><li><strong>Completed deliverables:</strong> No refund once deliverables are accepted.</li></ul></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. Subscription & Retainer Services</h2><p>Cancellation must be communicated at least 7 days before the next billing cycle. No pro-rata refunds for partial months.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Disputes</h2><p>If unsatisfied with a deliverable, reach out within 7 days of delivery. We will address concerns and, where appropriate, revise the work at no additional cost.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">5. Refund Process</h2><ul className="list-disc pl-5 space-y-1"><li>Send requests to <a href="mailto:hello@howautomate.com" className="text-primary hover:underline">hello@howautomate.com</a>.</li><li>Approved refunds processed within 10–15 business days.</li></ul></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">6. Non-Refundable Items</h2><ul className="list-disc pl-5 space-y-1"><li>Third-party software licences or API costs</li><li>Cloud infrastructure costs (AWS, GCP, Azure)</li><li>Custom domain registrations or hosting fees</li></ul></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">7. Contact</h2><p>For refund inquiries: <a href="mailto:hello@howautomate.com" className="text-primary hover:underline">hello@howautomate.com</a> or <a href="https://wa.me/919602094213" className="text-primary hover:underline">+91 96020 94213</a>.</p></section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
