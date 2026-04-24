"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import {
  ArrowRight, BarChart3, Bot, Cloud, Star, Users, Briefcase, Globe, CheckCircle,
  Sparkles, Zap, Database, Cpu, FileText, Heart, Clock, ExternalLink, Sparkle,
  Megaphone, Phone, Search, MessageSquare, Rocket, HelpCircle, type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

const pillars = [
  {
    icon: BarChart3, title: "Data & Analytics",
    description: "From raw data to actionable insights. We design and build end-to-end data pipelines, ETL processes, Power BI dashboards, and automated reports.",
    services: ["Data Analysis", "ETL Pipelines", "Power BI Dashboards", "Google Sheets Automation", "Report Automation", "Web Crawlers"],
    iconBg: "bg-accent", iconColor: "text-primary", accentColor: "border-border hover:border-primary/30",
    image: "/assets/svc-data-analytics.webp", link: "/services#data",
  },
  {
    icon: Bot, title: "AI & Automation",
    description: "Intelligent automation that works 24/7. AI receptionists, marketing agents, workflow automation, and custom API integrations.",
    services: ["AI Receptionist", "Marketing AI Agent", "Workflow Automation", "API Integration", "Custom AI Solutions", "Business Process Automation"],
    iconBg: "bg-orange-50 dark:bg-secondary/15", iconColor: "text-secondary", accentColor: "border-border hover:border-secondary/30",
    image: "/assets/svc-ai-automation.webp", link: "/services#ai",
  },
  {
    icon: Cloud, title: "Cloud & Engineering",
    description: "Scalable cloud infrastructure and data engineering. Azure, AWS, SnapLogic, web crawlers, databases, and full-stack apps.",
    services: ["Azure Solutions", "AWS Architecture", "SnapLogic Integration", "Database Design", "Web Crawlers", "Websites & Apps"],
    iconBg: "bg-indigo-50 dark:bg-indigo-500/15", iconColor: "text-indigo-600 dark:text-indigo-400", accentColor: "border-border hover:border-indigo-300",
    image: "/assets/svc-cloud-engineering.webp", link: "/services#cloud",
  },
  {
    icon: Megaphone, title: "Digital Marketing",
    description: "Grow your brand with Amazon PPC, B2C SEO, e-commerce marketing, and quick commerce strategies that drive real revenue.",
    services: ["Amazon PPC Management", "B2C SEO & Content", "E-Commerce Marketing", "Quick Commerce Marketing", "Website & Landing Pages"],
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400", accentColor: "border-border hover:border-emerald-300",
    image: "/assets/svc-digital-marketing.webp", link: "/services#marketing",
  },
];

const testimonials = [
  { quote: "From Power BI dashboards to end-to-end automation, HowAutomate delivered beyond expectations. They transformed how we track and act on our data.", name: "Ecometra Marketing Team", role: "Marketing", company: "Ecometra360" },
  { quote: "Our Google Sheets workflows were a mess before HowAutomate stepped in. Now everything runs like clockwork — automated, accurate, and effortless.", name: "Vinay Sukhija", role: "Founder", company: "Sukhija Sales" },
  { quote: "HowAutomate designed and delivered our complete data pipeline — from ingestion to reporting. A truly reliable partner for end-to-end solutions.", name: "Mohan Yadav", role: "Partner", company: "Shree Shyam Associates" },
  { quote: "HowAutomate built our entire ETL pipeline from scratch — clean, reliable, and fully automated. Their team truly understands data operations at scale.", name: "GredFlow Team", role: "Engineering Team", company: "GredFlow" },
];

const clients = [
  { src: "/assets/client-ecometra360.webp", name: "Ecometra360", desc: "Automation & Power BI" },
  { src: "/assets/client-sukhija-sales.webp", name: "Sukhija Sales", desc: "Google Sheets Automation" },
  { src: "/assets/client-shree-shyam.webp", name: "Shree Shyam Associates", desc: "End-to-End Pipelines" },
  { src: "/assets/client-gredflow.webp", name: "GredFlow", desc: "ETL Operations" },
];

const whyUs = [
  { icon: Users, label: "Cross-disciplinary team", desc: "Data + Engineering + Marketing under one roof" },
  { icon: Globe, label: "Remote-first, globally ready", desc: "Serving clients across 3 continents" },
  { icon: Briefcase, label: "End-to-end ownership", desc: "We handle the full project — no handoffs" },
  { icon: Star, label: "Results-driven approach", desc: "We measure success by your business outcomes" },
];

const freeTools = [
  { icon: FileText, title: "File to PDF Converter", desc: "Convert documents, images, spreadsheets and more to perfectly formatted PDFs instantly.", color: "text-primary", bg: "bg-accent" },
  { icon: Sparkle, title: "UGC Content Creation", desc: "Create stunning user-generated content for social media, ads, and marketing campaigns.", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/15" },
  { icon: Heart, title: "BMI Calculator", desc: "Calculate your Body Mass Index quickly. Get instant health insights based on your height and weight.", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-500/15" },
  { icon: Clock, title: "DateTime ↔ Epoch Converter", desc: "Convert between human-readable dates and Unix epoch timestamps instantly.", color: "text-secondary", bg: "bg-orange-50 dark:bg-secondary/15" },
];

const orbDefs = [
  { x: "15%", y: "20%", size: 380, color: "hsl(245 85% 65% / 0.14)", depth: 0.10 },
  { x: "75%", y: "15%", size: 280, color: "hsl(20 95% 57% / 0.12)", depth: 0.16 },
  { x: "60%", y: "65%", size: 320, color: "hsl(235 75% 55% / 0.12)", depth: 0.12 },
  { x: "10%", y: "70%", size: 240, color: "hsl(200 80% 55% / 0.10)", depth: 0.20 },
  { x: "85%", y: "55%", size: 200, color: "hsl(245 85% 65% / 0.10)", depth: 0.14 },
];

const iconDefs = [
  { x: "20%", y: "30%", Icon: Database, depth: 0.14, delay: 0 },
  { x: "78%", y: "25%", Icon: Cpu, depth: 0.18, delay: 0.5 },
  { x: "12%", y: "60%", Icon: Zap, depth: 0.12, delay: 1 },
  { x: "82%", y: "68%", Icon: Bot, depth: 0.16, delay: 1.5 },
  { x: "50%", y: "80%", Icon: Cloud, depth: 0.10, delay: 0.8 },
  { x: "40%", y: "15%", Icon: BarChart3, depth: 0.22, delay: 0.3 },
];

function ParallaxOrb({ orb, smoothX, smoothY }: { orb: typeof orbDefs[number]; smoothX: MotionValue<number>; smoothY: MotionValue<number> }) {
  const ox = useTransform(smoothX, (v) => v * orb.depth);
  const oy = useTransform(smoothY, (v) => v * orb.depth);
  return (
    <motion.div style={{ position: "absolute", left: orb.x, top: orb.y, width: orb.size, height: orb.size, borderRadius: "50%", background: orb.color, filter: "blur(60px)", translateX: ox, translateY: oy, pointerEvents: "none" }} />
  );
}

function FloatingIcon({ item, index, smoothX, smoothY }: { item: typeof iconDefs[number]; index: number; smoothX: MotionValue<number>; smoothY: MotionValue<number> }) {
  const ix = useTransform(smoothX, (v) => v * item.depth);
  const iy = useTransform(smoothY, (v) => v * item.depth);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: item.delay + 0.5, duration: 0.6 }} style={{ position: "absolute", left: item.x, top: item.y, translateX: ix, translateY: iy, pointerEvents: "none" }}>
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }} className="w-10 h-10 rounded-xl bg-card/80 border border-border shadow-md flex items-center justify-center backdrop-blur-sm">
        <item.Icon className="w-5 h-5 text-primary/60" />
      </motion.div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      rawX.set(e.clientX - cx);
      rawY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20">
      {orbDefs.map((orb, i) => <ParallaxOrb key={i} orb={orb} smoothX={smoothX} smoothY={smoothY} />)}
      <div className="hidden md:block">
        {iconDefs.map((item, i) => <FloatingIcon key={i} item={item} index={i} smoothX={smoothX} smoothY={smoothY} />)}
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/30" style={{ left: `${(i * 8.5) % 100}%`, top: `${((i * 13) + 10) % 90}%` }} animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.8, 1] }} transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Data Engineering · AI Agents · Cloud Solutions
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
          The Answer to{" "}
          <span className="gradient-text">"How Do I Automate This?"</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          End-to-end data pipelines, AI automation, and cloud engineering — so your business runs smarter, faster, and at scale.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-neon text-white shadow-lg shadow-primary/20 hover:opacity-90 text-base px-8 rounded-xl">
            <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/40 hover:bg-accent text-base px-8 rounded-xl">
            <Link href="/portfolio">View Our Work <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="flex flex-wrap gap-3 justify-center mt-8">
          {["Marketers", "Analysts", "Founders", "Developers"].map((audience) => (
            <span key={audience} className="px-4 py-1.5 rounded-full text-sm font-medium bg-card/80 border border-border text-muted-foreground backdrop-blur-sm shadow-sm">✔ {audience}</span>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function HomeContent() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="py-16 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Four Pillars of Excellence</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From data strategy to AI deployment to digital marketing — we cover the full spectrum of modern business services.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} whileHover={{ y: -6 }} className={`glass-card rounded-2xl border ${pillar.accentColor} transition-all duration-300 overflow-hidden group`}>
                <div className="relative h-44 overflow-hidden">
                  <img src={pillar.image} alt={pillar.title} width={400} height={176} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <div className={`absolute top-3 right-3 w-9 h-9 rounded-xl ${pillar.iconBg} flex items-center justify-center shadow`}>
                    <pillar.icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{pillar.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pillar.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pillar.iconColor}`} />{svc}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full hover:bg-accent hover:border-primary/30 rounded-xl">
                    <Link href={pillar.link}>Explore Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-accent/30 border-y border-border">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Built for Results, Not Just Deliverables</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just build — we take ownership, stay accountable, and obsess over your outcomes.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-5 glass-card rounded-xl transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1 text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-accent/20 border-y border-border">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Proven Results</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Client <span className="gradient-text">Outcomes</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Measurable impact from real projects — anonymised to protect client confidentiality.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "90%", label: "Report Time Reduced", desc: "Replaced a 3-hour manual weekly report with a fully automated pipeline delivering board-ready financials every Monday at 8am.", industry: "Financial Services" },
              { metric: "3.2×", label: "Sales Growth via Amazon PPC", desc: "Reduced ACoS from 42% to 18% and increased sales by 3.2× in 4 months through Sponsored Products & Brands campaign optimisation.", industry: "D2C E-Commerce" },
              { metric: "80%", label: "Calls Handled by AI", desc: "Deployed an AI voice receptionist handling 200+ inbound calls per day — booking appointments, answering FAQs, and updating the CRM automatically.", industry: "Healthcare Clinic" },
            ].map((cs, i) => (
              <motion.div key={cs.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="glass-card rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{cs.metric}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{cs.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cs.desc}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-accent border border-border text-muted-foreground">{cs.industry}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/portfolio">View All Case Studies <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">What Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} whileHover={{ y: -4 }} className="glass-card rounded-2xl p-8 transition-all duration-300">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Trusted By</span>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-3xl mx-auto">
            {clients.map((client, i) => (
              <motion.div key={client.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="flex flex-col items-center gap-2 p-4 rounded-xl">
                <div className="w-full h-24 flex items-center justify-center bg-card rounded-xl p-3 border border-border">
                  <img src={client.src} alt={client.name} width={160} height={96} loading="lazy" className="w-auto h-full object-contain" />
                </div>
                <p className="text-xs text-muted-foreground font-medium">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-accent/20 border-y border-border">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Free Resources</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Free Online <span className="gradient-text">Tools</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A collection of powerful, free tools to convert, calculate, and automate — right in your browser.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {freeTools.map((tool, i) => (
              <motion.a key={tool.title} href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} whileHover={{ y: -4 }} className="glass-card rounded-2xl p-6 transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl ${tool.bg} flex items-center justify-center mb-4`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  {tool.title} <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Open Tool <ArrowRight className="w-3.5 h-3.5" /></span>
              </motion.a>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="rounded-xl hover:bg-accent hover:border-primary/30">
              <a href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer">View All Tools <ExternalLink className="ml-2 w-4 h-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">How It <span className="gradient-text">Works</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From first call to full automation — here's what to expect.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Phone, step: "1", title: "Free Discovery Call", desc: "We learn about your business, current workflows, and goals in a free 30-minute call." },
              { icon: Search, step: "2", title: "We Audit Your Workflow", desc: "We map your processes and identify the highest-impact automation opportunities." },
              { icon: Rocket, step: "3", title: "We Build & Automate", desc: "Our team builds and deploys custom automations, pipelines, and AI solutions." },
              { icon: Zap, step: "4", title: "You Save Time & Scale", desc: "Your team focuses on high-value work while automation handles the rest — 24/7." },
            ].map((item, i) => (
              <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent border border-primary/20 flex items-center justify-center mx-auto mb-5 relative">
                  <item.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{item.step}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup variant="leadmagnet" />

      <section className="py-16 px-4 bg-accent/30 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-3xl p-10 md:p-14 text-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get a Free Automation Audit</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Not sure where to start? We'll map your current workflow and show you exactly where automation saves you the most time — free, no commitment.</p>
            <Button asChild size="lg" className="bg-gradient-neon text-white shadow-lg shadow-primary/20 hover:opacity-90 rounded-xl px-10">
              <Link href="/contact">Get Your Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "What is business automation?", a: "Business automation uses technology to perform repetitive tasks without manual effort. This includes data pipelines, AI agents, CRM workflows, report generation, and more — freeing your team to focus on strategy and growth." },
              { q: "How long does implementation take?", a: "Most projects take 2–6 weeks depending on complexity. Simple automations (like report scheduling or CRM sync) can go live in under a week. Complex AI solutions or multi-system integrations typically take 4–6 weeks." },
              { q: "What tools and technologies do you use?", a: "We work with Python, Power BI, n8n, Make.com, Google Apps Script, Azure, AWS, PostgreSQL, custom APIs, and leading AI/LLM platforms. We choose the best tool for your specific use case — no vendor lock-in." },
              { q: "Is automation suitable for small businesses?", a: "Absolutely. Many of our clients are small and mid-size businesses. We design solutions that scale with you — starting with quick wins that deliver immediate ROI, then expanding as your needs grow." },
              { q: "What's the typical cost range?", a: "Projects typically start from ₹1,000 for micro-automations and scale up to high enterprise-level engagements depending on complexity, integrations, and scope. We offer a free discovery call to understand your needs and provide a transparent, customised quote — no hidden fees." },
              { q: "Do you provide support after delivery?", a: "Yes. Every project includes a support period post-launch. We also offer ongoing maintenance plans for monitoring, updates, and scaling as your business evolves." },
              { q: "Can you integrate with our existing software?", a: "Yes. We specialise in integrating with existing tools — CRMs, ERPs, spreadsheets, payment systems, marketing platforms, and custom databases. If it has an API, we can connect it." },
              { q: "How do we get started?", a: "Book a free 30-minute discovery call. We'll learn about your business, identify automation opportunities, and give you a clear roadmap — no commitment required." },
            ].map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="glass-card rounded-xl group">
                <summary className="flex items-center gap-3 p-5 cursor-pointer list-none font-semibold text-foreground hover:text-primary transition-colors">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />{faq.q}
                </summary>
                <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed ml-8">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-neon shadow-xl shadow-primary/20">
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-white">Ready to Automate Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative z-10">Let's talk about your project. A free 30-minute call could change how your business handles data forever.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-10 rounded-xl font-semibold shadow-md">
                <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
              </Button>
              <Button asChild size="lg" className="text-base px-10 rounded-xl bg-white/15 border border-white/50 text-white hover:bg-white/25 backdrop-blur-sm">
                <Link href="/contact">Send an Inquiry</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
