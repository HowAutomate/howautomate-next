"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Bot, Cloud, Database, FileSpreadsheet, Globe, LineChart,
  Settings, Cpu, Server, Workflow, Mail, Phone, TrendingUp, Code,
  ArrowRight, CheckCircle, X, Zap, Shield, Clock, Star,
  ShoppingCart, Search, Megaphone, Truck, Layout,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

interface Outcome { icon: React.ElementType; label: string; value: string; }
interface Service {
  icon: React.ElementType; name: string; desc: string; image: string;
  longDesc: string; benefits: string[]; outcomes: Outcome[]; useCases: string[];
}
interface Pillar {
  id: string; badge: string; title: string; tagline: string;
  iconColor: string; pillarsImage: string; services: Service[];
}

const pillars: Pillar[] = [
  {
    id: "data", badge: "🔷", title: "Data & Analytics", tagline: "From raw data to real insights",
    iconColor: "text-primary", pillarsImage: "/assets/svc-data-analytics.webp",
    services: [
      { icon: BarChart3, name: "Data Analysis", image: "/assets/svc-data-analytics.webp", desc: "Deep-dive analysis to uncover trends, patterns, and actionable insights from your business data.", longDesc: "Our data analysts go beyond surface-level reporting. We dig deep into your raw business data using statistical modelling, trend analysis, and machine learning to surface the insights that actually move the needle. Whether it's understanding customer churn, identifying revenue opportunities, or optimising operational performance — we turn numbers into decisions.", benefits: ["Identify hidden revenue opportunities in your existing data", "Reduce costs by spotting inefficiencies and waste", "Make faster, evidence-based decisions at every level", "Predict future trends before your competitors do", "Custom dashboards tailored to your KPIs"], outcomes: [{ icon: TrendingUp, label: "Avg Revenue Lift", value: "+23%" }, { icon: Clock, label: "Time Saved", value: "15 hrs/wk" }, { icon: Star, label: "Client Satisfaction", value: "100%" }], useCases: ["E-commerce sales analysis", "Churn prediction", "Financial reporting", "Operational efficiency audits"] },
      { icon: Workflow, name: "ETL Pipelines", image: "/assets/svc-etl-pipeline.webp", desc: "Extract, transform, and load data from any source with automated, reliable pipelines.", longDesc: "We design and build production-grade ETL pipelines that pull data from any source — APIs, databases, spreadsheets, SaaS tools — clean and transform it, and load it exactly where it needs to be. Our pipelines are monitored, alertable, and built to recover from failures automatically. No more broken reports on Monday morning.", benefits: ["Fully automated data flows — zero manual effort", "Real-time and scheduled pipeline options", "Data quality validation at every stage", "Handles millions of rows without breaking a sweat", "End-to-end monitoring and alerting"], outcomes: [{ icon: Zap, label: "Pipeline Speed", value: "10x faster" }, { icon: Shield, label: "Data Accuracy", value: "99.9%" }, { icon: Clock, label: "Time Saved", value: "20 hrs/wk" }], useCases: ["Multi-source data consolidation", "Data warehouse loading", "Nightly reporting automation", "CRM sync pipelines"] },
      { icon: Globe, name: "Web Crawlers", image: "/assets/svc-web-crawlers.webp", desc: "Custom scrapers and crawlers to collect structured data from any website at scale.", longDesc: "Need competitor pricing, market data, product listings, or research data? We build robust, respectful web crawlers that collect exactly what you need at scale. Our crawlers handle pagination, JavaScript-heavy pages, authentication, and anti-bot measures — delivering clean, structured data directly into your database or spreadsheet.", benefits: ["Collect competitor prices and market data automatically", "Monitor product availability across thousands of URLs", "Structured JSON/CSV output ready to use immediately", "Handles dynamic JavaScript-rendered pages", "Scheduled to run daily, hourly, or on demand"], outcomes: [{ icon: Database, label: "Pages/Hour", value: "50,000+" }, { icon: Shield, label: "Data Accuracy", value: "98%" }, { icon: TrendingUp, label: "Cost vs Manual", value: "-90%" }], useCases: ["Price intelligence", "Lead list generation", "Market research", "Product catalogue aggregation"] },
      { icon: Database, name: "Database Design", image: "/assets/svc-data-analytics.webp", desc: "Optimised relational and NoSQL database architectures for fast, reliable data access.", longDesc: "A poorly designed database is a silent performance killer. We architect relational (PostgreSQL, MySQL) and NoSQL (MongoDB, DynamoDB) databases that are optimised from day one — with proper indexing, normalisation, and query patterns baked in. Whether you're starting fresh or migrating a legacy system, we'll build something you won't outgrow.", benefits: ["Query performance optimised for your specific access patterns", "Scalable schema that grows with your business", "Data integrity enforced at the database level", "Backup and disaster recovery built in", "Clear documentation and ERD diagrams provided"], outcomes: [{ icon: Zap, label: "Query Speed", value: "5x faster" }, { icon: Shield, label: "Data Integrity", value: "100%" }, { icon: TrendingUp, label: "Storage Efficiency", value: "+40%" }], useCases: ["SaaS application databases", "Data warehouse schemas", "Legacy database migrations", "Multi-tenant architectures"] },
      { icon: LineChart, name: "Power BI Dashboards", image: "/assets/svc-data-analytics.webp", desc: "Interactive, real-time dashboards that turn your data into clear visual stories.", longDesc: "We build Power BI dashboards that executives actually use. Clean layout, intuitive filtering, and live data connections mean your leadership team has the answers they need in seconds — not after waiting for someone to run a report. From sales pipelines to operational KPIs, we translate your data into visual stories.", benefits: ["Live data — dashboards refresh automatically", "Mobile-responsive for on-the-go decision making", "Role-based access so each team sees what they need", "Drill-through from high-level KPI to individual transaction", "Full training and handover included"], outcomes: [{ icon: Clock, label: "Report Build Time", value: "-95%" }, { icon: Star, label: "Exec Adoption", value: "100%" }, { icon: TrendingUp, label: "Decision Speed", value: "3x faster" }], useCases: ["Executive KPI dashboards", "Sales performance tracking", "Operations monitoring", "Financial P&L reporting"] },
      { icon: FileSpreadsheet, name: "Google Sheets Automation", image: "/assets/svc-etl-pipeline.webp", desc: "Automated Google Sheets pipelines and reporting so your team always has live data.", longDesc: "Most businesses run on spreadsheets. We make yours work for you — not against you. Using Apps Script, API integrations, and automation tools, we connect Google Sheets to any data source and build automated workflows that update, format, and email reports on schedule. Your sheets become living dashboards.", benefits: ["Auto-populated sheets from any data source", "Scheduled email reports with zero manual effort", "Data validation to prevent input errors", "Multi-sheet workflows and approval processes", "Works with your existing Google Workspace setup"], outcomes: [{ icon: Clock, label: "Manual Work Saved", value: "8 hrs/wk" }, { icon: Shield, label: "Error Reduction", value: "99%" }, { icon: Zap, label: "Report Delivery", value: "Automated" }], useCases: ["Weekly report automation", "Inventory tracking", "Project management sheets", "Finance reconciliation"] },
    ],
  },
  {
    id: "ai", badge: "🤖", title: "AI & Automation", tagline: "Intelligent systems that work 24/7",
    iconColor: "text-secondary", pillarsImage: "/assets/svc-ai-automation.webp",
    services: [
      { icon: Phone, name: "AI Receptionist", image: "/assets/svc-ai-automation.webp", desc: "Handles inbound calls, books appointments, answers FAQs, and updates your CRM — automatically.", longDesc: "Our AI Receptionist answers every call, 24 hours a day, 7 days a week — without missing a beat. It handles appointment bookings, answers your most common questions, qualifies leads, and updates your CRM in real time. Patients and clients get instant, professional responses. You stop losing business to voicemail.", benefits: ["Never miss an inbound call or lead again", "Books appointments directly into your calendar", "Answers FAQs with your exact business knowledge", "Updates CRM records automatically after every call", "Escalates to a human when needed, seamlessly"], outcomes: [{ icon: Phone, label: "Calls Handled by AI", value: "80%" }, { icon: Clock, label: "Available", value: "24/7/365" }, { icon: TrendingUp, label: "Avg ROI Month 1", value: "340%" }], useCases: ["Medical & dental clinics", "Law firms", "Real estate agencies", "Service businesses"] },
      { icon: TrendingUp, name: "Marketing AI Agent", image: "/assets/svc-marketing-ai.webp", desc: "AI-powered marketing automation: content creation, ad optimisation, and lead nurturing.", longDesc: "Our Marketing AI Agent runs your campaigns while you sleep. It generates on-brand content, tests ad creatives, optimises budgets in real time, and nurtures leads through personalised email sequences. Powered by the latest LLMs and integrated with your existing marketing stack — it's like having a full marketing team that never takes a day off.", benefits: ["AI-generated content tailored to your brand voice", "Automatic A/B testing and ad optimisation", "Personalised email nurture sequences at scale", "Lead scoring and prioritisation for your sales team", "Multi-channel: email, social, paid ads, SMS"], outcomes: [{ icon: TrendingUp, label: "Lead Quality", value: "+45%" }, { icon: Zap, label: "Content Output", value: "10x more" }, { icon: Star, label: "Avg ROAS Improvement", value: "+2.8x" }], useCases: ["E-commerce brands", "B2B lead generation", "SaaS companies", "Local service businesses"] },
      { icon: Workflow, name: "Workflow Automation", image: "/assets/svc-workflow-automation.webp", desc: "End-to-end automation of repetitive business processes using no-code and custom solutions.", longDesc: "Every repetitive manual task in your business is an opportunity for automation. We map your workflows, identify bottlenecks, and build custom automations using tools like Make.com, n8n, Zapier, or fully custom code — whatever's the best fit. The result: your team focuses on high-value work while the robots handle the rest.", benefits: ["Eliminate manual data entry and copy-pasting forever", "Cross-platform automations (CRM, email, Slack, sheets)", "Approval workflows with automatic escalation", "Error handling and retry logic built in", "Detailed activity logs for every automated action"], outcomes: [{ icon: Clock, label: "Time Saved Per Week", value: "25+ hrs" }, { icon: Shield, label: "Human Error Rate", value: "Near zero" }, { icon: TrendingUp, label: "Team Productivity", value: "+60%" }], useCases: ["Invoice processing", "Lead routing", "Onboarding workflows", "Inventory management"] },
      { icon: Code, name: "API Integration", image: "/assets/svc-workflow-automation.webp", desc: "Connect your tools, platforms, and data sources through robust API integrations.", longDesc: "Your business probably runs on 10+ different tools that don't talk to each other. We build the connections. Whether it's a two-way sync between your CRM and billing system, a webhook from your e-commerce store to your warehouse, or a custom middleware layer that ties everything together — we make your tech stack work as one.", benefits: ["Bi-directional data sync between any platforms", "Custom middleware for complex multi-system integrations", "OAuth, API key, and webhook authentication handled", "Rate limiting and error handling built in", "Full API documentation provided"], outcomes: [{ icon: Zap, label: "Integration Time", value: "Days not months" }, { icon: Shield, label: "Data Sync Accuracy", value: "99.9%" }, { icon: Clock, label: "Manual Sync Eliminated", value: "100%" }], useCases: ["CRM ↔ billing integration", "E-commerce ↔ ERP", "Payment gateway integration", "SSO implementation"] },
      { icon: Cpu, name: "Custom AI Solutions", image: "/assets/svc-ai-automation.webp", desc: "Bespoke AI models and agents tailored to your specific business use case and data.", longDesc: "Off-the-shelf AI tools are built for everyone — which means they're optimised for no one. We build custom AI solutions trained on your data, calibrated to your domain, and designed around your exact use case. From fine-tuned LLMs to custom document processing pipelines, computer vision systems, or multi-agent orchestration — we build it right.", benefits: ["Trained on your proprietary data for maximum accuracy", "Domain-specific knowledge baked in", "Private deployment — your data never leaves your environment", "Seamlessly integrated into your existing workflows", "Ongoing model improvement and retraining included"], outcomes: [{ icon: Star, label: "Accuracy vs Generic AI", value: "+35%" }, { icon: Shield, label: "Data Privacy", value: "100% private" }, { icon: TrendingUp, label: "Process Automation", value: "Up to 90%" }], useCases: ["Document intelligence", "Custom chatbots", "Image classification", "Predictive analytics"] },
      { icon: Mail, name: "Email & Comms Automation", image: "/assets/svc-marketing-ai.webp", desc: "Automated email sequences, notifications, and customer communication flows.", longDesc: "From welcome sequences to churn-prevention campaigns, transactional notifications to internal alerts — we build communication automations that feel human but run on autopilot. Triggered by real user behaviour, timed perfectly, and written in your brand voice. Your customers stay engaged. Your team stays focused.", benefits: ["Behaviour-triggered sequences based on real user actions", "Personalised at scale using dynamic content", "A/B testing built in from day one", "Deliverability optimised (DKIM, SPF, DMARC)", "Integrates with any ESP (HubSpot, Mailchimp, etc.)"], outcomes: [{ icon: TrendingUp, label: "Open Rate Improvement", value: "+28%" }, { icon: Star, label: "Customer Retention", value: "+18%" }, { icon: Zap, label: "Emails Sent Automatically", value: "Millions" }], useCases: ["SaaS onboarding sequences", "E-commerce abandoned cart", "B2B lead nurturing", "Internal team alerts"] },
    ],
  },
  {
    id: "cloud", badge: "☁️", title: "Cloud & Engineering", tagline: "Scalable infrastructure that grows with you",
    iconColor: "text-indigo-600", pillarsImage: "/assets/svc-cloud-engineering.webp",
    services: [
      { icon: Cloud, name: "Azure Solutions", image: "/assets/svc-cloud-engineering.webp", desc: "Full Microsoft Azure setup: data factory, blob storage, synapse, and more.", longDesc: "We design and implement complete Azure cloud environments — from initial architecture through to production deployment and ongoing management. Azure Data Factory for orchestration, Synapse Analytics for big data, Blob Storage for cost-effective data lakes, and Azure DevOps for CI/CD. We're Azure practitioners, not just resellers.", benefits: ["Architecture aligned with Azure Well-Architected Framework", "Cost-optimised from day one — no cloud bill shock", "Data Factory pipelines for enterprise-grade ETL", "Synapse Analytics for massive-scale data processing", "Azure Active Directory and security hardening included"], outcomes: [{ icon: TrendingUp, label: "Cloud Cost Reduction", value: "avg -35%" }, { icon: Shield, label: "Security Compliance", value: "Enterprise" }, { icon: Zap, label: "Data Processing Speed", value: "10x faster" }], useCases: ["Data lake migrations", "Enterprise analytics platforms", "Microsoft 365 integration", "Hybrid cloud setups"] },
      { icon: Server, name: "AWS Architecture", image: "/assets/svc-aws-azure.webp", desc: "Scalable AWS infrastructure design, deployment, and maintenance for your workloads.", longDesc: "From serverless Lambda functions to large-scale Redshift data warehouses, we design AWS architectures that scale automatically, fail gracefully, and cost only what you use. We handle IaC with Terraform or CDK, set up monitoring with CloudWatch, and implement least-privilege IAM policies — so your infrastructure is as secure as it is scalable.", benefits: ["Infrastructure as Code — version controlled and repeatable", "Auto-scaling to handle traffic spikes without over-provisioning", "Multi-region disaster recovery options", "Cost monitoring and optimisation included", "Full documentation and runbooks provided"], outcomes: [{ icon: Shield, label: "Uptime SLA", value: "99.99%" }, { icon: TrendingUp, label: "Infrastructure Cost", value: "-40%" }, { icon: Zap, label: "Deployment Speed", value: "10x faster" }], useCases: ["Serverless application backends", "Data lake on S3", "ML model hosting", "High-availability web apps"] },
      { icon: Settings, name: "SnapLogic Integration", image: "/assets/svc-workflow-automation.webp", desc: "Enterprise-grade data integration and iPaaS solutions using the SnapLogic platform.", longDesc: "For enterprises already invested in the SnapLogic ecosystem, we deliver expert implementation, pipeline development, and ongoing management. We connect ERP systems, CRMs, data warehouses, and APIs through SnapLogic's visual pipeline builder — with the governance, monitoring, and error handling that enterprise data demands.", benefits: ["Expert-level SnapLogic pipeline development", "ERP integration (SAP, Oracle, Dynamics) specialists", "Reusable snap patterns for accelerated delivery", "Full pipeline monitoring and alerting", "Training and knowledge transfer for your team"], outcomes: [{ icon: Zap, label: "Integration Delivery", value: "3x faster" }, { icon: Shield, label: "Enterprise Compliance", value: "Full" }, { icon: Clock, label: "Pipeline Uptime", value: "99.9%" }], useCases: ["ERP data synchronisation", "Multi-cloud data movement", "Legacy system modernisation", "B2B data exchange"] },
      { icon: Database, name: "Data Pipeline Engineering", image: "/assets/svc-etl-pipeline.webp", desc: "Robust, monitored pipelines that move and transform data at scale, reliably.", longDesc: "Data pipelines are the plumbing of your data platform — and bad plumbing causes leaks. We engineer pipelines using Apache Airflow, dbt, Spark, or bespoke Python — whichever tool is right for your scale and team. Every pipeline we build includes comprehensive logging, alerting, data quality checks, and clear operational runbooks.", benefits: ["End-to-end pipeline observability and alerting", "Data quality checks at source, transform, and destination", "Idempotent design — safe to rerun without duplicates", "Lineage tracking so you always know where data came from", "Horizontal scaling for petabyte-scale workloads"], outcomes: [{ icon: Shield, label: "Data Quality Score", value: "99.9%" }, { icon: Zap, label: "Pipeline Throughput", value: "Petabyte scale" }, { icon: Clock, label: "Mean Time to Recovery", value: "<5 min" }], useCases: ["Real-time streaming pipelines", "Data warehouse population", "ML feature engineering", "Regulatory data reporting"] },
      { icon: Globe, name: "Websites & Web Apps", image: "/assets/svc-web-apps.webp", desc: "Modern, fast, and responsive websites and web applications built to convert.", longDesc: "We build websites and web applications that look exceptional, load instantly, and are built to convert visitors into customers. From marketing sites to complex SaaS dashboards, our front-end team uses React, Next.js, and Tailwind CSS to deliver pixel-perfect, accessible interfaces — backed by scalable APIs and databases.", benefits: ["Sub-2 second load times — Core Web Vitals optimised", "Fully responsive across all devices and screen sizes", "SEO-optimised from the ground up", "Accessible and compliant with WCAG 2.1 AA standards", "Integrated with your CRM, analytics, and backend systems"], outcomes: [{ icon: TrendingUp, label: "Conversion Rate", value: "+35% avg" }, { icon: Zap, label: "Page Load Speed", value: "<1.5s" }, { icon: Star, label: "Google PageSpeed", value: "90+ score" }], useCases: ["SaaS products", "Corporate websites", "E-commerce platforms", "Internal tools and portals"] },
      { icon: Code, name: "Custom Software", image: "/assets/svc-web-apps.webp", desc: "Tailored tools and internal apps that solve your specific operational challenges.", longDesc: "When off-the-shelf software doesn't fit, we build exactly what you need. Internal operations tools, bespoke CRMs, custom reporting portals, workflow management systems — we scope, design, and develop software that fits your process perfectly, integrates with your existing tools, and your team actually enjoys using.", benefits: ["Built exactly for your workflow — zero unnecessary features", "Integrates natively with your existing tech stack", "Full source code ownership — no vendor lock-in", "Iterative delivery so you see progress from week one", "Ongoing support and feature development available"], outcomes: [{ icon: Clock, label: "Operational Efficiency", value: "+50%" }, { icon: Shield, label: "Tool Adoption Rate", value: "95%+" }, { icon: TrendingUp, label: "ROI vs Off-Shelf", value: "2.5x" }], useCases: ["Internal operations tools", "Custom CRM systems", "Client portals", "Reporting platforms"] },
    ],
  },
  {
    id: "marketing", badge: "📣", title: "Digital Marketing", tagline: "Grow your brand, dominate your market",
    iconColor: "text-emerald-600", pillarsImage: "/assets/svc-digital-marketing.webp",
    services: [
      { icon: ShoppingCart, name: "Amazon PPC Management", image: "/assets/svc-amazon-ppc.webp", desc: "Profitable Amazon advertising campaigns — Sponsored Products, Brands, and DSP.", longDesc: "We manage your entire Amazon advertising operation — from keyword research and campaign structure to daily bid optimisation and performance reporting. Our data-driven approach uses automated bid management, search term analysis, and custom dashboards to maximise your ROAS while minimising wasted ad spend across Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP.", benefits: ["Full-funnel Amazon ad strategy (awareness to conversion)", "Daily bid optimisation and search term harvesting", "Negative keyword management to eliminate wasted spend", "Product listing optimisation for higher conversion rates", "Custom performance dashboards with ACoS, TACoS, and ROAS tracking"], outcomes: [{ icon: TrendingUp, label: "Avg ROAS", value: "5.2x" }, { icon: Zap, label: "ACoS Reduction", value: "-35%" }, { icon: Star, label: "Revenue Growth", value: "+60%" }], useCases: ["Amazon FBA sellers", "D2C brands on Amazon", "Product launches", "Marketplace brand management"] },
      { icon: Search, name: "B2C SEO & Content", image: "/assets/svc-seo.webp", desc: "Organic traffic growth through technical SEO, content strategy, and link building.", longDesc: "We provide end-to-end SEO services for B2C businesses: technical audits, keyword research, content strategy, on-page optimisation, link building, and performance tracking. Our data-driven approach focuses on keywords with commercial intent — targeting the searches most likely to drive revenue, not just traffic. From local SEO to national campaigns, we build sustainable organic growth.", benefits: ["Comprehensive technical SEO audit and fixes", "Keyword-first content strategy targeting buyer intent", "On-page optimisation (titles, metas, schema, internal links)", "White-hat link building from authoritative domains", "Monthly reporting with rankings, traffic, and conversion data"], outcomes: [{ icon: TrendingUp, label: "Organic Traffic Growth", value: "+120%" }, { icon: Star, label: "Keywords in Top 10", value: "3x more" }, { icon: Shield, label: "Domain Authority Lift", value: "+25 pts" }], useCases: ["E-commerce SEO", "Local business SEO", "Content marketing", "Landing page optimisation"] },
      { icon: Megaphone, name: "E-Commerce Marketing", image: "/assets/svc-ecommerce.webp", desc: "Scale your online store with Google Shopping, retargeting, social commerce, and email.", longDesc: "We build complete e-commerce marketing systems: product feed automation, Google Shopping and Performance Max campaign management, retargeting setup across Meta and Google, abandoned cart recovery flows, email marketing automation, and social commerce integration. Our clients typically see 40–60% revenue growth within 6 months of engagement.", benefits: ["Google Shopping & Performance Max campaign management", "Dynamic retargeting across Facebook, Instagram, and Google", "Abandoned cart email and SMS recovery sequences", "Product feed optimisation for higher ad relevance", "Influencer marketing coordination and ROI tracking"], outcomes: [{ icon: TrendingUp, label: "Revenue Growth", value: "+55%" }, { icon: Zap, label: "Cart Recovery Rate", value: "12%" }, { icon: Star, label: "ROAS Improvement", value: "+3.2x" }], useCases: ["Shopify & WooCommerce stores", "D2C brands", "Multi-channel e-commerce", "Product catalogue marketing"] },
      { icon: Truck, name: "Quick Commerce Marketing", image: "/assets/svc-quick-commerce.webp", desc: "Hyperlocal marketing for Blinkit, Zepto, Swiggy Instamart, and instant delivery platforms.", longDesc: "We help brands and D2C businesses build their q-commerce marketing strategy: platform onboarding and optimisation on Blinkit, Zepto, and Swiggy Instamart, hyperlocal ad campaigns, product listing optimisation, performance dashboards with real-time data, and automated inventory-led marketing triggers.", benefits: ["Platform-specific ad management (Blinkit, Zepto, Swiggy)", "Hyperlocal geo-targeted social media campaigns", "Dark store inventory-led promotional triggers", "Product listing optimisation for mobile-first discovery", "Real-time performance dashboards and analytics"], outcomes: [{ icon: TrendingUp, label: "Platform Visibility", value: "+80%" }, { icon: Zap, label: "Order Volume", value: "+45%" }, { icon: Star, label: "Repeat Purchase Rate", value: "+30%" }], useCases: ["FMCG brands", "D2C quick commerce", "Hyperlocal food brands", "Dark store marketing"] },
      { icon: Layout, name: "Website & Landing Pages", image: "/assets/svc-landing-pages.webp", desc: "High-converting websites and landing pages designed to capture leads and drive sales.", longDesc: "We design, build, and optimise websites and landing pages specifically for marketing performance. Every page is crafted with conversion in mind — from headline copy and CTA placement to page speed and mobile responsiveness. Whether you need a full brand website, a product launch landing page, or a lead generation funnel, we deliver pages that look stunning and convert visitors into customers.", benefits: ["Conversion-optimised design with strategic CTA placement", "Mobile-first responsive layouts for all devices", "SEO-ready structure with proper meta tags and schema markup", "A/B testing and heatmap analysis for continuous improvement", "Fast page load speeds — under 2 seconds guaranteed"], outcomes: [{ icon: TrendingUp, label: "Avg Conversion Rate", value: "+45%" }, { icon: Zap, label: "Page Load Speed", value: "<1.5s" }, { icon: Star, label: "Lead Quality", value: "+60%" }], useCases: ["Lead generation funnels", "Product launch pages", "Brand websites", "Event & webinar landing pages"] },
    ],
  },
];

function ServiceModal({ service, pillar, onClose }: { service: Service; pillar: Pillar; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 backdrop-blur-sm overflow-y-auto py-8 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 overflow-hidden">
            <img src={service.image} alt={service.name} width={800} height={256} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-md">
              <X className="w-4 h-4 text-foreground" />
            </button>
            <div className="absolute bottom-6 left-6">
              <span className={`text-xs font-semibold uppercase tracking-widest ${pillar.iconColor} bg-white/90 px-3 py-1 rounded-full`}>{pillar.title}</span>
              <h2 className="text-3xl font-bold text-white mt-2">{service.name}</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-muted-foreground leading-relaxed text-base mb-8">{service.longDesc}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {service.outcomes.map((o) => (
                <div key={o.label} className="bg-accent/40 rounded-2xl p-4 text-center">
                  <o.icon className={`w-5 h-5 mx-auto mb-2 ${pillar.iconColor}`} />
                  <div className="text-xl font-bold text-foreground">{o.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{o.label}</div>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg text-foreground mb-4">What You Get</h3>
            <ul className="space-y-3 mb-8">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pillar.iconColor}`} />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-lg text-foreground mb-4">Common Use Cases</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.useCases.map((uc) => (
                <span key={uc} className="px-3 py-1.5 bg-accent border border-border rounded-full text-xs font-medium text-foreground">{uc}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-neon text-white rounded-xl flex-1 shadow-lg shadow-primary/20">
                <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Free Call <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl flex-1">
                <Link href="/contact" onClick={onClose}>Send an Inquiry</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ServiceCard({ svc, pillar, index, onSelect }: { svc: Service; pillar: Pillar; index: number; onSelect: () => void }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
      whileHover={{ y: -6 }} onClick={onSelect} onMouseMove={glowHandler}
      className="group glass-card glow-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={svc.image} alt={svc.name} width={400} height={176} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow">
          <svc.icon className={`w-4 h-4 ${pillar.iconColor}`} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base mb-1.5 text-foreground">{svc.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{svc.desc}</p>
        <div className={`flex items-center gap-1.5 text-xs font-semibold ${pillar.iconColor} group-hover:gap-2.5 transition-all`}>
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </div>
        {/* Full service content — in DOM for search engine indexing, hidden visually */}
        <div className="sr-only">
          <p>{svc.longDesc}</p>
          <ul>{svc.benefits.map(b => <li key={b}>{b}</li>)}</ul>
          <ul>{svc.useCases.map(uc => <li key={uc}>{uc}</li>)}</ul>
        </div>
      </div>
    </motion.div>
  );
}

const industryLinks = [
  { icon: Phone, title: "Clinics & Healthcare", desc: "AI receptionists, patient follow-ups & scheduling automation.", to: "/services/clinic-automation" },
  { icon: Globe, title: "Real Estate", desc: "Lead capture, follow-ups & listing management on autopilot.", to: "/services/real-estate-automation" },
  { icon: Star, title: "Coaching Institutes", desc: "Enrolment funnels, batch management & student engagement.", to: "/services/coaching-automation" },
  { icon: FileSpreadsheet, title: "CA & Accounting Firms", desc: "Client onboarding, compliance tracking & report automation.", to: "/services/ca-firm-automation" },
  { icon: ShoppingCart, title: "E-commerce & Retail", desc: "Inventory sync, order workflows & marketing automation.", to: "/services/ecommerce-automation" },
];

export default function ServicesContent() {
  const [selectedService, setSelectedService] = useState<{ svc: Service; pillar: Pillar } | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {selectedService && (
        <ServiceModal service={selectedService.svc} pillar={selectedService.pillar} onClose={() => setSelectedService(null)} />
      )}

      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">Data, AI & Automation <span className="gradient-text">Services</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Four core pillars. Twenty-two specialised services. Click any service to explore details, benefits, and outcomes.</p>
          </motion.div>
        </div>
      </section>

      {pillars.map((pillar, pi) => (
        <section key={pillar.id} id={pillar.id} className={`py-20 px-4 ${pi % 2 === 1 ? "bg-accent/20 border-y border-border" : "bg-card"}`}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{pillar.badge}</span>
                  <span className={`text-sm font-semibold uppercase tracking-widest ${pillar.iconColor}`}>{pillar.tagline}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{pillar.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">Click on any service card below to explore full details, key benefits, outcomes, and use cases.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-80 w-full rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <img src={pillar.pillarsImage} alt={pillar.title} width={320} height={208} loading="lazy" className="w-full h-52 object-cover" />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.services.map((svc, i) => (
                <ServiceCard key={svc.name} svc={svc} pillar={pillar} index={i} onSelect={() => setSelectedService({ svc, pillar })} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Industry Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored automation packages designed for your specific industry challenges.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industryLinks.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={item.to} onMouseMove={glowHandler} className="group glow-card block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all h-full">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary gap-1">Learn more <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Not Sure Which Service You Need?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Book a free discovery call and we'll map out exactly what your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-neon text-white rounded-xl shadow-lg shadow-primary/20">
                <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link href="/contact">Send an Inquiry</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
