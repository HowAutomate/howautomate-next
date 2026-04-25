"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MessageCircle, Calendar, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

function glowHandler(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const services = ["Data Analysis","ETL Pipeline","Power BI Dashboard","Google Sheets Automation","Report Automation","Web Crawlers","AI Receptionist","Marketing AI Agent","Workflow Automation","API Integration","Azure Solutions","AWS Architecture","SnapLogic Integration","Website / Web App","Amazon PPC Management","B2C SEO & Content","E-Commerce Marketing","Quick Commerce Marketing","Other / Not Sure"];

const faqs = [
  { question: "How quickly can you start on a project?", answer: "We typically onboard new clients within 1–2 weeks. For urgent requests, we can often start sooner — reach out and let us know your timeline." },
  { question: "Do you work with small businesses or only enterprises?", answer: "Both. We work with startups, SMEs, and larger organisations. Our solutions are scoped to fit your budget and ambitions, not the other way around." },
  { question: "What does a typical project engagement look like?", answer: "It starts with a free discovery call to understand your needs. We then provide a scoped proposal, timeline, and fixed or retainer pricing. Most projects run 2–8 weeks." },
  { question: "Can you maintain and update solutions after delivery?", answer: "Absolutely. We offer maintenance retainers so your pipelines, dashboards, and AI agents stay up-to-date and performing as your business evolves." },
  { question: "Do you sign NDAs and data privacy agreements?", answer: "Yes. We take data security seriously and are happy to sign NDAs, DPAs, or any other agreements required before engagement." },
];

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://n8n.srv1198552.hstgr.cloud/webhook/fc45ca98-8ddb-4da0-af07-041d235cc2c0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact_form", submitted_at: new Date().toISOString() }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">Let's <span className="gradient-text">Work Together</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tell us about your project and we'll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Reach Us Directly</h2>
              </motion.div>
              {[
                { icon: Mail, label: "Email", value: "hello@howautomate.com", href: "mailto:hello@howautomate.com", color: "text-primary", bg: "bg-accent" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us now", href: "https://wa.me/919602094213?text=Hi%2C%20I%27m%20interested%20in%20your%20services", color: "text-green-400", bg: "bg-green-950/40" },
                { icon: Calendar, label: "Book a Call", value: "Schedule via Calendly", href: "https://calendly.com/hello-howautomate/30min", color: "text-secondary", bg: "bg-orange-950/40" },
                { icon: Phone, label: "Phone", value: "+91 96020 94213", href: "tel:+919602094213", color: "text-neon-purple", bg: "bg-indigo-950/40" },
              ].map((item, i) => (
                <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp} onMouseMove={glowHandler} className="flex items-center gap-4 p-5 glass-card glow-card rounded-xl hover:border-primary/30 transition-all duration-300 group">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} onMouseMove={glowHandler} className="lg:col-span-3 glass-card glow-card rounded-2xl">
              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Message Received!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours. In the meantime, feel free to book a call on Calendly.</p>
                    <Button asChild size="lg" className="mt-6 bg-gradient-neon text-white rounded-xl shadow-md shadow-primary/20 hover:opacity-90">
                      <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Send an Inquiry</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} required className="border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} required className="border-border" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organisation</Label>
                      <Input id="company" name="company" placeholder="Your Company Ltd" value={form.company} onChange={handleChange} className="border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest *</Label>
                      <select id="service" name="service" value={form.service} onChange={handleChange} required className="w-full h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea id="message" name="message" placeholder="Describe your data challenge, current setup, and what outcome you're looking for..." value={form.message} onChange={handleChange} required rows={5} className="border-border resize-none" />
                    </div>
                    <Button type="submit" size="lg" disabled={sending} className="w-full bg-gradient-neon text-white rounded-xl shadow-md shadow-primary/20 hover:opacity-90">
                      <Send className="w-4 h-4 mr-2" />{sending ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/20 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-bold mt-3 text-foreground">Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="glass-card rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-foreground hover:text-primary transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.question}
                  {openFaq === i ? <ChevronUp className="w-4 h-4 flex-shrink-0 text-primary" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
