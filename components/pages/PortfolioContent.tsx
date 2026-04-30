"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const categories = ["All", "Data", "AI", "Cloud", "Marketing"];

const projects = [
  { title: "AI CRM Lead Engine: Google Maps → Sheets → Auto-Email", category: "AI", tech: ["n8n", "Google Maps API", "OpenAI", "Google Sheets", "Gmail API"], description: "Built a fully automated B2B lead engine: scraped Google Maps + websites + Instagram, enriched each lead with AI-written hooks, stored in Google Sheets CRM, and sent personalised emails with 3-step follow-ups. Generated 2,400 fresh leads & 47 booked demos in the first 30 days.", image: "/assets/portfolio-crm-lead-gen.webp" },
  { title: "AI Telegram Bot for 24/7 Customer Support", category: "AI", tech: ["Telegram Bot API", "n8n", "OpenAI GPT-4", "Supabase", "Webhooks"], description: "Built an AI-powered Telegram bot handling 1,500+ customer queries/day — auto-replies with GPT-4, escalates complex issues to human agents, captures leads into CRM, and sends order updates. Cut support response time from 4 hours to under 10 seconds and reduced support costs by 65%.", image: "/assets/portfolio-telegram-bot.webp" },
  { title: "Retail Sales Analytics Dashboard", category: "Data", tech: ["Power BI", "SQL", "Azure"], description: "Built a real-time Power BI dashboard tracking 2M+ sales records across 50 retail locations, reducing report generation time by 90%.", image: "/assets/portfolio-retail-dashboard.webp" },
  { title: "AI Receptionist for Medical Clinic", category: "AI", tech: ["AI", "Twilio", "Python", "API"], description: "Deployed an AI voice receptionist handling 200+ calls/day for appointment booking, rescheduling, and patient FAQs.", image: "/assets/portfolio-ai-receptionist.webp" },
  { title: "E-Commerce ETL Pipeline", category: "Data", tech: ["Python", "SnapLogic", "AWS S3", "PostgreSQL"], description: "End-to-end ETL pipeline pulling data from 5 e-commerce platforms into a centralised data warehouse for unified reporting.", image: "/assets/portfolio-etl-pipeline.webp" },
  { title: "Cloud Migration to Azure", category: "Cloud", tech: ["Azure", "Data Factory", "Synapse", "SQL"], description: "Migrated a legacy on-premise data warehouse to Azure, reducing infrastructure costs by 60% and improving query performance 3x.", image: "/assets/portfolio-cloud-azure.webp" },
  { title: "Marketing AI Agent", category: "AI", tech: ["AI", "GPT", "Zapier", "Meta Ads"], description: "Developed an AI marketing agent that auto-generates ad copy, monitors campaign performance, and optimises budgets daily.", image: "/assets/portfolio-marketing-ai.webp" },
  { title: "Web Crawler & Price Intelligence", category: "Data", tech: ["Python", "Scrapy", "PostgreSQL", "Google Sheets"], description: "Built a competitor price monitoring crawler tracking 50,000+ SKUs daily, feeding live data into Google Sheets for the sales team.", image: "/assets/portfolio-price-crawler.webp" },
  { title: "AWS Data Lake Architecture", category: "Cloud", tech: ["AWS", "Glue", "Athena", "S3", "Lambda"], description: "Designed and deployed a serverless data lake on AWS processing 500GB of raw data daily with automated cataloguing.", image: "/assets/portfolio-aws-datalake.webp" },
  { title: "SnapLogic ERP Integration", category: "Cloud", tech: ["SnapLogic", "SAP", "REST API", "SQL"], description: "Connected a client's SAP ERP to 8 downstream systems via SnapLogic, eliminating manual data entry and syncing 15k records/hour.", image: "/assets/portfolio-snaplogic-erp.webp" },
  { title: "Automated Financial Reporting", category: "Data", tech: ["Python", "Power BI", "Excel", "SharePoint"], description: "Replaced a 3-hour manual weekly report with a fully automated pipeline delivering board-ready financials every Monday at 8am.", image: "/assets/portfolio-financial-reporting.webp" },
  { title: "Amazon PPC Campaign for D2C Brand", category: "Marketing", tech: ["Amazon Ads", "ACoS", "Keyword Research", "DSP"], description: "Managed Sponsored Products & Brands campaigns for a D2C seller, reducing ACoS from 42% to 18% and increasing sales by 3.2× in 4 months.", image: "/assets/portfolio-amazon-ppc.webp" },
  { title: "B2C SEO & Content Strategy", category: "Marketing", tech: ["SEO", "Content Marketing", "Schema", "Analytics"], description: "Executed end-to-end SEO strategy for an online retailer — grew organic traffic by 280% and first-page rankings from 12 to 85 keywords in 6 months.", image: "/assets/portfolio-seo-campaign.webp" },
  { title: "E-Commerce Multi-Channel Marketing", category: "Marketing", tech: ["Google Shopping", "Meta Ads", "Klaviyo", "Retargeting"], description: "Built a full-funnel marketing system for a Shopify store — Google Shopping, retargeting, and abandoned cart flows driving 4.5× ROAS and 55% revenue growth.", image: "/assets/portfolio-ecommerce-marketing.webp" },
  { title: "Quick Commerce Brand Launch", category: "Marketing", tech: ["Blinkit", "Zepto", "Hyperlocal Ads", "Swiggy Instamart"], description: "Launched an FMCG brand across Blinkit, Zepto & Swiggy Instamart with hyperlocal ad campaigns, achieving 12,000+ orders in the first 60 days.", image: "/assets/portfolio-quick-commerce.webp" },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">Case <span className="gradient-text">Studies</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real projects. Real results. Browse our work across Data, AI, Cloud & Marketing.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4 bg-card border-b border-border">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-neon text-white shadow-md shadow-primary/20"
                  : "bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                onMouseMove={glowHandler}
                className="glass-card glow-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} width={400} height={192} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-border text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground border border-border">{t}</span>
                    ))}
                  </div>
                  <Button asChild size="sm" className="w-full bg-gradient-neon text-white hover:opacity-90 rounded-xl">
                    <Link href="/contact">Request Similar Work <ExternalLink className="ml-2 w-3 h-3" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
