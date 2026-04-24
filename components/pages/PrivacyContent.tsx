"use client";
import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</p>
          <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground text-[15px] leading-relaxed">
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">1. Introduction</h2><p>HowAutomate ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">2. Information We Collect</h2><p><strong>Personal Information:</strong> When you contact us, book a consultation, or use our services, we may collect your name, email address, phone number, company name, and project details.</p><p><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</p><p><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyse website traffic.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">3. How We Use Your Information</h2><ul className="list-disc pl-5 space-y-1"><li>To provide, maintain, and improve our services</li><li>To communicate with you about projects, updates, and promotional offers</li><li>To respond to your inquiries and support requests</li><li>To analyse usage trends and optimise our website</li><li>To comply with legal obligations</li></ul></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">4. Third-Party Services</h2><p>We may use third-party services such as analytics providers (e.g., Google Analytics), scheduling tools (e.g., Calendly), and communication platforms. These services have their own privacy policies governing the use of your information.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">5. Data Security</h2><p>We implement appropriate technical and organisational measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">6. Data Retention</h2><p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">7. Your Rights</h2><p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:hello@howautomate.com" className="text-primary hover:underline">hello@howautomate.com</a>.</p></section>
            <section><h2 className="text-lg font-semibold text-foreground mt-8 mb-3">8. Contact Us</h2><ul className="list-none pl-0 space-y-1"><li>Email: <a href="mailto:hello@howautomate.com" className="text-primary hover:underline">hello@howautomate.com</a></li><li>Phone: <a href="https://wa.me/919602094213" className="text-primary hover:underline">+91 96020 94213</a></li><li>GSTIN: 08CCZPD0661F1ZG</li></ul></section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
