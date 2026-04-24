"use client";
import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground text-[15px] leading-relaxed">
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Acceptance of Terms</h2><p>By accessing or using the services provided by HowAutomate ("Company"), you agree to be bound by these Terms & Conditions.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Services</h2><p>HowAutomate provides data engineering, AI automation, cloud infrastructure, and related consulting services. The specific scope, deliverables, and timelines for each engagement will be outlined in a separate proposal or statement of work.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. Engagement & Payment</h2><ul className="list-disc pl-5 space-y-1"><li>All project fees will be communicated upfront before work begins.</li><li>Payment terms will be defined in the project proposal.</li><li>Invoices are due within 7 days of issuance unless otherwise agreed upon.</li><li>Late payments may attract interest at 1.5% per month on the outstanding amount.</li></ul></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Intellectual Property</h2><p>Upon full payment, all deliverables and custom-built solutions become the intellectual property of the client unless otherwise specified. Pre-existing tools, frameworks, and libraries used by HowAutomate remain our property.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">5. Confidentiality</h2><p>Both parties agree to keep confidential any proprietary information shared during the course of the engagement.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">6. Limitation of Liability</h2><p>HowAutomate shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the fees paid by the client for the specific engagement in question.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">7. Termination</h2><p>Either party may terminate an engagement with 15 days' written notice. The client shall pay for all work completed up to the date of termination.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">8. Governing Law</h2><p>These terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts in Rajasthan, India.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">9. GSTIN</h2><p>GSTIN: 08CCZPD0661F1ZG</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">10. Contact</h2><p>For questions regarding these terms, reach us at <a href="mailto:hello@howautomate.com" className="text-primary hover:underline">hello@howautomate.com</a>.</p></section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
