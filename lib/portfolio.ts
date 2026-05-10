export interface PortfolioCase {
  slug: string;
  title: string;
  category: string;
  image: string;
  tech: string[];
  excerpt: string;
  problem: string;
  solution: string;
  outcomes: { metric: string; label: string }[];
  body: string[];
}

const cases: Record<string, PortfolioCase> = {
  "ai-crm-lead-engine": {
    slug: "ai-crm-lead-engine",
    title: "AI CRM Lead Engine: Google Maps → Sheets → Auto-Email",
    category: "AI",
    image: "/assets/portfolio-crm-lead-gen.webp",
    tech: ["n8n", "Google Maps API", "OpenAI", "Google Sheets", "Gmail API"],
    excerpt: "Built a fully automated B2B lead engine: scraped Google Maps + websites + Instagram, enriched each lead with AI-written hooks, stored in Google Sheets CRM, and sent personalised emails with 3-step follow-ups. Generated 2,400 fresh leads & 47 booked demos in the first 30 days.",
    problem: "The client — a B2B SaaS company — was spending 40+ hours per week manually searching Google Maps, copying contact details into spreadsheets, and sending generic cold emails. Their sales team was burning time on data entry instead of closing deals, and their response rates were under 1%.",
    solution: "We built an end-to-end automated lead engine using n8n. The workflow scrapes Google Maps for targeted business categories in specific cities, extracts websites and Instagram profiles, enriches each lead with OpenAI-generated personalised hooks based on their business profile, pushes structured data into a Google Sheets CRM, and triggers a 3-step personalised email sequence via Gmail API — automatically.",
    outcomes: [
      { metric: "2,400", label: "Leads generated (30 days)" },
      { metric: "47", label: "Demos booked" },
      { metric: "40 hrs/wk", label: "Manual work eliminated" },
      { metric: "3.2%", label: "Email reply rate" },
    ],
    body: [
      "The client's sales team was stuck in a painful loop: spend hours finding leads on Google Maps, manually copy contact info, write personalised emails one by one, then follow up manually days later. At best, this generated 200–300 leads a month — not nearly enough to fill the pipeline.",
      "We redesigned the entire process as an n8n workflow. It starts by querying the Google Maps API for businesses matching specific criteria — industry type, location, minimum rating, and review count as a proxy for legitimacy. For each business, it extracts the website URL and Instagram handle from the Maps listing and then scrapes the site to pull a one-line business description.",
      "This data feeds into OpenAI GPT-4, which writes a personalised first-line hook for each lead — referencing something specific about their business. The enriched data (company name, contact, personalised hook, website, Instagram) lands in a structured Google Sheets CRM where the sales team has full visibility.",
      "The Gmail API then triggers the email sequence: personalised email Day 1, value-add follow-up Day 3, light bump Day 7. Every reply automatically pauses the sequence for that lead. The result: 2,400 leads scraped, enriched, and emailed in the first 30 days — 47 of which booked discovery calls.",
    ],
  },

  "ai-telegram-bot": {
    slug: "ai-telegram-bot",
    title: "AI Telegram Bot for 24/7 Customer Support",
    category: "AI",
    image: "/assets/portfolio-telegram-bot.webp",
    tech: ["Telegram Bot API", "n8n", "OpenAI GPT-4", "Supabase", "Webhooks"],
    excerpt: "Built an AI-powered Telegram bot handling 1,500+ customer queries/day — auto-replies with GPT-4, escalates complex issues to human agents, captures leads into CRM, and sends order updates. Cut support response time from 4 hours to under 10 seconds and reduced support costs by 65%.",
    problem: "An e-commerce brand receiving 1,500+ daily support messages on Telegram had a 3–4 hour average response time. Their two-person support team was overwhelmed with repetitive queries about order status, return policies, and shipping timelines — leaving no time for complex issues that actually needed human attention.",
    solution: "We built a GPT-4 powered Telegram bot using n8n and the Telegram Bot API. The bot handles the full support lifecycle: answering FAQ queries from a trained knowledge base, checking order status via API, capturing new leads into Supabase, routing complex or upset customers to a live agent, and sending proactive order update notifications. Human escalation is triggered by sentiment detection.",
    outcomes: [
      { metric: "1,500+", label: "Queries handled per day" },
      { metric: "10 sec", label: "Response time (was 4 hours)" },
      { metric: "65%", label: "Support cost reduction" },
      { metric: "92%", label: "Queries resolved by AI" },
    ],
    body: [
      "The brand was losing customers to slow response times. Telegram analytics showed most customers who didn't get a reply within an hour abandoned their purchase or left a negative review. The support team spent 80% of their time answering the same 20 questions repeatedly.",
      "We built the bot in layers. Layer one is the FAQ engine: a GPT-4 model with a retrieval-augmented knowledge base covering the brand's 200+ most common questions — returns, refunds, sizing, shipping, payment issues. The model is prompted to match the brand's friendly, casual tone.",
      "Layer two handles order lookups. Customers type their order number and the bot calls the e-commerce platform's API, retrieving real-time order status and shipping tracking data — delivered back in plain language within 3 seconds.",
      "Layer three is smart escalation. The bot uses sentiment analysis on each message. If a customer appears frustrated or explicitly requests a human, the conversation is immediately handed off to a Telegram group where a human agent picks it up — with full context already available. Escalations account for under 8% of conversations.",
      "Since launch, the bot resolves 92% of queries autonomously. The support team now handles only complex disputes and edge cases, reducing headcount costs by 65% while customer satisfaction scores improved.",
    ],
  },

  "retail-sales-dashboard": {
    slug: "retail-sales-dashboard",
    title: "Retail Sales Analytics Dashboard",
    category: "Data",
    image: "/assets/portfolio-retail-dashboard.webp",
    tech: ["Power BI", "SQL", "Azure"],
    excerpt: "Built a real-time Power BI dashboard tracking 2M+ sales records across 50 retail locations, reducing report generation time by 90%.",
    problem: "A multi-location retail chain with 50 stores was running on manually compiled weekly Excel reports. Each report took 3 hours to build, was always 5–7 days behind, and the format differed by analyst. Leadership had no real-time view into which stores were performing, which SKUs were moving, or where inventory gaps were appearing.",
    solution: "We built a Power BI reporting stack on Azure. SQL pipelines pull sales, inventory, and staff data from each store's POS system hourly into Azure SQL Database. Power BI connects live to the database, rendering dashboards that refresh every 60 minutes. Regional managers get store-level drill-through; executives get the P&L summary. All in a standardised, branded format.",
    outcomes: [
      { metric: "2M+", label: "Sales records tracked" },
      { metric: "50", label: "Locations in one dashboard" },
      { metric: "90%", label: "Report build time saved" },
      { metric: "Real-time", label: "Data refresh (hourly)" },
    ],
    body: [
      "Before the project, the regional managers' Monday morning ritual was waiting for a spreadsheet that arrived — if they were lucky — by noon. The spreadsheet covered last week's data, mixed different data formats from each store, and required manual interpretation. Strategic decisions were being made on stale, inconsistent data.",
      "We started by standardising the data layer. Each store's POS system exports sales data in slightly different formats; we built SQL transformation pipelines that normalise all 50 feeds into a single Azure SQL schema — covering transactions, returns, SKU movement, and staff hours.",
      "Power BI connects directly to Azure SQL with live DirectQuery, meaning the dashboards always reflect the latest data load. We built three views: an executive summary with overall revenue, margin, and top/bottom-performing stores; a store manager view with their own location's hourly sales, top-selling products, and inventory alerts; and a SKU-level analysis for the buying team.",
      "The result is that Monday morning reports are now live by 8am automatically — no human involvement. Regional managers check dashboards on their phones throughout the week, and the board has removed the manual reporting role from three analyst positions, redeploying those hours to actual analysis.",
    ],
  },

  "ai-receptionist-clinic": {
    slug: "ai-receptionist-clinic",
    title: "AI Receptionist for Medical Clinic",
    category: "AI",
    image: "/assets/portfolio-ai-receptionist.webp",
    tech: ["Voice AI", "Twilio", "Python", "REST API"],
    excerpt: "Deployed an AI voice receptionist handling 200+ calls/day for appointment booking, rescheduling, and patient FAQs — running 24/7 without missing a call.",
    problem: "A busy multi-doctor dental clinic was missing 60–80 calls per day during peak hours because the front desk couldn't handle the volume. Missed calls meant missed bookings — estimated at ₹4–5 lakh per month in lost revenue. After-hours calls went to voicemail and were rarely returned promptly.",
    solution: "We deployed an AI voice receptionist powered by Twilio and a custom Python backend. The AI handles the full booking conversation: greets callers, identifies the type of appointment needed, checks real-time availability via the clinic management system API, books or reschedules appointments, sends confirmation SMS, and answers common patient questions. It escalates to a human only when clinically necessary.",
    outcomes: [
      { metric: "200+", label: "Calls handled per day" },
      { metric: "24/7", label: "Availability" },
      { metric: "0", label: "Missed calls" },
      { metric: "82%", label: "Calls resolved without human" },
    ],
    body: [
      "The clinic's front desk team was talented but undersized for the call volume. During morning rush hours (9–11am), the phone would ring continuously. Patients who couldn't get through called competitors. The clinic estimated they were losing 15–20 bookings per day to missed calls alone.",
      "We integrated Twilio's programmable voice with a Python-based conversation engine. When a patient calls, the AI answers within one ring. It identifies the patient's intent — new appointment, reschedule, cancellation, or FAQ — and navigates the appropriate flow.",
      "For bookings, the system calls the clinic's management software API in real time, pulls available slots, and offers them to the patient conversationally. Once a slot is chosen, it creates the booking in the system and sends a confirmation SMS — all within the same phone call.",
      "Patient FAQs (insurance accepted, clinic hours, parking, what to bring for first appointments) are handled from a knowledge base without any API call. The AI escalates to a human only for clinical questions or upset patients — roughly 18% of calls.",
      "Since deployment, zero calls are missed. The front desk team now focuses entirely on in-clinic patient care. The clinic reports the system paid for itself within the first month through recovered bookings.",
    ],
  },

  "ecommerce-etl-pipeline": {
    slug: "ecommerce-etl-pipeline",
    title: "E-Commerce ETL Pipeline",
    category: "Data",
    image: "/assets/portfolio-etl-pipeline.webp",
    tech: ["Python", "SnapLogic", "AWS S3", "PostgreSQL"],
    excerpt: "End-to-end ETL pipeline pulling data from 5 e-commerce platforms into a centralised data warehouse for unified reporting and inventory management.",
    problem: "A D2C brand selling across Amazon, Flipkart, Meesho, their own Shopify store, and a B2B wholesale portal had no unified view of their business. Each platform had its own reporting interface, export format, and update frequency. Reconciling inventory and revenue across all five took a full day each week.",
    solution: "We built Python-based ETL pipelines for each platform's API, orchestrated by SnapLogic. Data from all five platforms lands in AWS S3 in normalised Parquet format, then loads into PostgreSQL nightly. A single unified schema covers orders, inventory, returns, and revenue — with platform as a dimension. Power BI connects on top for cross-platform reporting.",
    outcomes: [
      { metric: "5", label: "Platforms unified" },
      { metric: "1 day → 0", label: "Manual reconciliation eliminated" },
      { metric: "99.9%", label: "Data accuracy" },
      { metric: "Nightly", label: "Automated refresh" },
    ],
    body: [
      "The client's ops team spent every Monday doing a painful reconciliation: download CSVs from five portals, align columns, deal with different date formats, manually flag discrepancies, and build a master spreadsheet. By the time the report was ready, another week of data had already started accumulating.",
      "We began with API integrations for each platform. Amazon SP-API, Flipkart Seller API, Meesho Supplier API, Shopify Admin API, and a custom database connector for the B2B portal — each with its own authentication flow, rate limiting, and response schema.",
      "Python extraction scripts normalise each platform's data into a standard schema: order_id, platform, product_sku, quantity, revenue, order_date, fulfillment_status, return_flag. All data lands in AWS S3 as Parquet files, partitioned by platform and date.",
      "SnapLogic orchestrates the nightly load into PostgreSQL, handling deduplication (some orders appear across platforms with slightly different identifiers), currency normalisation, and data quality checks. If any pipeline fails, alerts fire to Slack before the team starts their day.",
      "The result is a single PostgreSQL database the team can query directly, or explore through Power BI. Cross-platform inventory reconciliation — previously a day-long task — now runs automatically overnight.",
    ],
  },

  "azure-cloud-migration": {
    slug: "azure-cloud-migration",
    title: "Cloud Migration to Azure",
    category: "Cloud",
    image: "/assets/portfolio-cloud-azure.webp",
    tech: ["Azure", "Data Factory", "Synapse Analytics", "SQL"],
    excerpt: "Migrated a legacy on-premise data warehouse to Azure, reducing infrastructure costs by 60% and improving query performance 3× — with zero data loss.",
    problem: "A mid-size logistics company was running an on-premise SQL Server data warehouse on hardware that was 7 years old and approaching end-of-life. Maintenance costs were high, query performance had degraded, and the IT team spent 30% of their time managing infrastructure rather than building value.",
    solution: "We designed and executed a full lift-and-migrate to Azure: SQL Server migrated to Azure SQL Managed Instance, ETL jobs moved to Azure Data Factory pipelines, and the reporting layer rebuilt on Azure Synapse Analytics for OLAP workloads. The migration was phased over 6 weeks with a parallel-run period to validate data integrity before cutover.",
    outcomes: [
      { metric: "60%", label: "Infrastructure cost reduction" },
      { metric: "3×", label: "Query performance improvement" },
      { metric: "Zero", label: "Data loss during migration" },
      { metric: "30%", label: "IT time freed from maintenance" },
    ],
    body: [
      "The company's on-premise warehouse had served them well for years, but they were paying for hardware refresh, DBA time, cooling, and power — for infrastructure that sat at 30% utilisation on average. A cloud migration was clearly the right move; the question was how to do it without disrupting daily operations.",
      "We started with a four-week assessment: schema analysis, ETL job inventory, dependency mapping, and workload characterisation. This let us choose the right Azure targets — Azure SQL MI for OLTP workloads, Synapse Analytics for the heavy aggregation queries, and Blob Storage for archive data.",
      "The migration itself ran in parallel. We set up the Azure environment, replicated the on-premise database using Azure Database Migration Service with continuous sync, and let both run in parallel for two weeks. During this time, the team ran queries against both systems and compared results row-by-row on a nightly basis.",
      "Data Factory replaced the legacy SSIS packages for ETL. We rewrote 14 ETL pipelines in Data Factory with proper monitoring, retry logic, and Slack alerting — something the old SSIS setup lacked entirely.",
      "Cutover weekend was smooth: final sync, DNS flip, validation. The team was on the Azure environment by Monday morning. Query times dropped immediately — Synapse's distributed query engine handles the analytical workloads the old SQL Server struggled with. The client now pays 60% less for infrastructure and has autoscaling for peak periods.",
    ],
  },

  "marketing-ai-agent": {
    slug: "marketing-ai-agent",
    title: "Marketing AI Agent",
    category: "AI",
    image: "/assets/portfolio-marketing-ai.webp",
    tech: ["GPT-4o", "n8n", "Meta Ads API", "Google Ads API"],
    excerpt: "Developed an AI marketing agent that auto-generates ad copy, monitors campaign performance, and optimises budgets daily — reducing campaign management time by 70%.",
    problem: "A performance marketing agency managing 15+ client ad accounts was spending 3–4 hours daily per account on ad copy refreshes, budget reallocation, and performance reporting. Scaling the agency meant hiring more people — an expensive and slow solution.",
    solution: "We built a multi-agent marketing system using GPT-4o and n8n. Agent 1 monitors campaign metrics via Meta and Google Ads APIs daily, flags underperforming ad sets, and proposes budget reallocation. Agent 2 generates new ad copy variants based on performance data and brand guidelines. Agent 3 compiles a daily performance briefing sent to the account manager via WhatsApp. Approved changes are applied via the Ads APIs automatically.",
    outcomes: [
      { metric: "70%", label: "Campaign management time saved" },
      { metric: "2.8×", label: "Average ROAS improvement" },
      { metric: "15+", label: "Accounts managed per analyst" },
      { metric: "Daily", label: "Automated performance reports" },
    ],
    body: [
      "The agency's analysts were talented strategists trapped in a cycle of manual work. Checking metrics across 15 accounts, writing ad copy, reallocating budgets, and building client reports consumed 6–8 hours of their day — leaving no time for the strategic thinking that actually drives results.",
      "The AI agent system runs on a daily cycle. At 6am, Agent 1 pulls the last 24 hours of performance data from Meta and Google Ads APIs for all accounts. It calculates performance deltas, identifies ad sets where CPC has risen more than 15% or ROAS has dropped below target, and generates a prioritised action list.",
      "Agent 2 takes the flagged ad sets and uses brand guidelines plus historical top-performing copy patterns to generate 3–5 new ad copy variants for each. It writes headlines, primary text, and descriptions — formatted correctly for each platform's character limits.",
      "The account manager receives a WhatsApp summary each morning: which accounts need attention, what actions are recommended, and the new copy ready for review. One-tap approval triggers the actual API calls — budget reallocation and new ad set creation happen automatically.",
      "Client reporting, previously a 2-hour weekly task, is now automated: a Google Slides deck with performance charts and commentary is generated every Monday and emailed to clients without analyst involvement.",
    ],
  },

  "web-price-intelligence": {
    slug: "web-price-intelligence",
    title: "Web Crawler & Price Intelligence",
    category: "Data",
    image: "/assets/portfolio-price-crawler.webp",
    tech: ["Python", "Scrapy", "PostgreSQL", "Google Sheets"],
    excerpt: "Built a competitor price monitoring crawler tracking 50,000+ SKUs daily across 12 e-commerce platforms, delivering live pricing intelligence directly to the sales team.",
    problem: "A consumer electronics distributor was losing deals to competitors who had faster access to market pricing. Their sales team was manually checking competitor prices on 3–4 sites for key SKUs — a process that took hours and was always incomplete. They had no systematic way to know when a competitor dropped prices or ran a promotion.",
    solution: "We built a Scrapy-based crawler covering 12 competitor and marketplace websites. The crawler runs twice daily, extracting prices, availability, and promotional badges for 50,000+ tracked SKUs. Data lands in PostgreSQL with full price history. A Google Sheets dashboard — auto-refreshed via Apps Script — shows each SKU's current price, 7-day trend, and a price alert flag when a competitor drops below a threshold.",
    outcomes: [
      { metric: "50,000+", label: "SKUs tracked daily" },
      { metric: "12", label: "Platforms monitored" },
      { metric: "2×/day", label: "Crawl frequency" },
      { metric: "Real-time", label: "Price alert notifications" },
    ],
    body: [
      "In commoditised electronics distribution, price is often the deciding factor in a deal. The client's sales team was essentially flying blind — quoting based on gut feel about where competitors were pricing, occasionally losing deals by a margin of 0.5–1% that they could have matched if they'd known.",
      "The crawler architecture uses Scrapy with rotating proxies and realistic browser fingerprints to reliably extract data from 12 different site structures. Each site has a custom spider that handles pagination, dynamic JavaScript rendering where needed, and product variant matching.",
      "The hardest part of the project was SKU matching across platforms. The same product might be listed as 'Samsung Galaxy S24 128GB Phantom Black' on one site and 'Samsung S24 (128 GB, Black)' on another. We built a fuzzy-matching pipeline using model number extraction and embedding similarity to reliably link SKUs across platforms.",
      "Price data loads into PostgreSQL with full history — every price point, timestamped, for every SKU. The sales team's Google Sheet connects via Apps Script to a view that shows: current competitor low price, HowAutomate client's current price, price gap (positive or negative), and a 7-day sparkline.",
      "Alert rows highlight in red when a competitor is more than 2% below the client's price on a high-volume SKU. The sales team can then take action — adjust pricing, call the customer proactively, or flag to procurement — before losing the deal.",
    ],
  },

  "aws-data-lake": {
    slug: "aws-data-lake",
    title: "AWS Data Lake Architecture",
    category: "Cloud",
    image: "/assets/portfolio-aws-datalake.webp",
    tech: ["AWS Glue", "Athena", "S3", "Lambda", "CloudWatch"],
    excerpt: "Designed and deployed a serverless data lake on AWS processing 500GB of raw data daily with automated schema cataloguing and pay-per-query analytics.",
    problem: "A logistics SaaS company was generating 500GB of raw operational data daily — GPS telemetry, delivery events, vehicle sensor data — but had no way to query it cost-effectively. Storing it in RDS was prohibitively expensive at that volume; querying raw files on S3 was technically painful. Analytics were months out of date.",
    solution: "We designed a serverless data lake using AWS native services. Raw data lands in S3 via Lambda ingest functions. AWS Glue crawlers automatically catalogue new data and update the schema registry. Athena provides SQL-on-S3 querying with no infrastructure to manage. A lightweight transformation layer (Glue Jobs) builds curated summary tables for the most common query patterns. CloudWatch monitors pipeline health.",
    outcomes: [
      { metric: "500GB", label: "Raw data processed daily" },
      { metric: "80%", label: "Storage cost vs RDS" },
      { metric: "Serverless", label: "Zero infrastructure to manage" },
      { metric: "Auto", label: "Schema cataloguing" },
    ],
    body: [
      "The company's data team had a real problem: they were sitting on a goldmine of operational data but couldn't query it without enormous cost or complexity. RDS couldn't handle the volume economically; spinning up and managing a Redshift cluster felt like overkill for their team size.",
      "The architecture we designed is fully serverless. Raw data arrives via API and is ingested by Lambda functions that partition it by date, event type, and region before writing to S3 in Parquet format. This partitioning is what makes Athena queries fast — filters on partition keys skip irrelevant data entirely.",
      "AWS Glue Crawlers run every hour, scanning new S3 partitions and updating the Glue Data Catalog. This means new event types or schema changes are automatically catalogued — the data team never manually defines table structures.",
      "For the most common query patterns (daily delivery completion rates, vehicle utilisation by region, SLA breach analysis), we run nightly Glue Jobs that produce summarised tables. These pre-aggregated tables make the dashboards instant — no full table scans at query time.",
      "The cost model was transformative. S3 storage costs a fraction of RDS at this volume. Athena charges per query scanned — with proper partitioning and Parquet compression, the average query scans 95% less data than it would on raw files. The entire data lake runs for roughly $800/month vs an estimated $6,000+ for equivalent RDS capacity.",
    ],
  },

  "snaplogic-erp-integration": {
    slug: "snaplogic-erp-integration",
    title: "SnapLogic ERP Integration",
    category: "Cloud",
    image: "/assets/portfolio-snaplogic-erp.webp",
    tech: ["SnapLogic", "SAP", "REST API", "SQL Server"],
    excerpt: "Connected a client's SAP ERP to 8 downstream systems via SnapLogic, eliminating manual data entry and syncing 15,000 records per hour with full error handling.",
    problem: "A manufacturing company with SAP as their ERP was manually re-entering data into 8 separate systems: their WMS, CRM, e-commerce platform, supplier portal, finance tool, logistics platform, BI tool, and HR system. Each system update required a dedicated person and took hours. Data was consistently out of sync and errors were frequent.",
    solution: "We designed and implemented a SnapLogic integration hub connecting SAP to all 8 downstream systems. Master data changes in SAP (customers, products, pricing, orders) trigger real-time Snap pipelines that validate, transform, and push the data to the appropriate downstream systems. Error handling, retry logic, and a monitoring dashboard provide full visibility.",
    outcomes: [
      { metric: "8", label: "Systems integrated" },
      { metric: "15k/hr", label: "Records synced" },
      { metric: "Zero", label: "Manual data re-entry" },
      { metric: "99.9%", label: "Sync accuracy" },
    ],
    body: [
      "The client's operations manager described the situation as 'playing telephone across 8 systems'. A price change in SAP took 2–3 days to reach the e-commerce platform. Customer records were duplicated across the CRM and WMS with different spellings. Orders processed in the logistics platform weren't always reflected in the finance tool until the end-of-week reconciliation.",
      "We started with an integration architecture design: mapping every data flow, identifying the master record for each entity type, and documenting the transformation logic needed between each system's data model. SAP was designated the master for customers, products, and orders.",
      "SnapLogic pipelines were built for each integration point. SAP-to-CRM syncs customer master data on any change. SAP-to-WMS passes order data within seconds of creation. SAP-to-ecommerce updates product availability and pricing. Each pipeline is a directed graph of Snap nodes handling extraction, transformation, validation, and loading.",
      "Error handling was a particular focus. Every failed record is logged with the full error context, routed to a dead-letter queue, and triggers a Slack alert. Retry logic handles transient failures (API timeouts, brief system unavailability) automatically. Human intervention is only needed for genuine data issues.",
      "Since deployment, the integration hub processes 15,000 record syncs per hour during peak periods. The team of three people previously doing manual data entry has been redeployed to higher-value work, and cross-system data accuracy is measured at 99.9% on the client's own audit.",
    ],
  },

  "automated-financial-reporting": {
    slug: "automated-financial-reporting",
    title: "Automated Financial Reporting",
    category: "Data",
    image: "/assets/portfolio-financial-reporting.webp",
    tech: ["Python", "Power BI", "Excel", "SharePoint"],
    excerpt: "Replaced a 3-hour manual weekly financial report with a fully automated pipeline delivering board-ready financials to the exec team every Monday at 8am.",
    problem: "A private equity-backed company's finance team spent every Sunday evening and Monday morning building the weekly board report — pulling data from 6 sources, consolidating in Excel, formatting charts, writing commentary, and emailing a 40-slide deck. The process was error-prone, stressful, and consumed hours that should have been spent on analysis.",
    solution: "We built a Python-based data pipeline that extracts financial data from all 6 sources on Sunday night, consolidates into a master model in Excel format, and triggers a Power BI refresh. A Python script then generates the executive commentary by comparing this week's actuals vs budget vs prior week. The final PDF is automatically emailed to the board distribution list at 8am Monday via SharePoint automation.",
    outcomes: [
      { metric: "3 hrs → 0", label: "Manual report time" },
      { metric: "8am Monday", label: "Automatic delivery" },
      { metric: "6", label: "Data sources consolidated" },
      { metric: "100%", label: "On-time delivery (was ~70%)" },
    ],
    body: [
      "The finance team's Sunday ritual had become a running joke — and a genuine burnout risk. The CFO described spending 3–4 hours every Sunday evening pulling data, only to repeat the process Monday morning when the ERP had fresher numbers. The board expected the report by 9am Monday; on a bad week it arrived at 11.",
      "We mapped every data source: the main ERP (for actuals), the budgeting tool (for variances), two bank feeds (for cash), the HR system (for headcount), and a CRM export (for pipeline). Each had a different export format, schedule, and level of automation.",
      "Python scripts run at 5am Monday via a scheduled task on the client's server. They pull data from each source via API or SFTP, validate row counts and key metric ranges, transform to a standardised schema, and load into the master Excel model — which is locked to prevent accidental edits.",
      "Power BI connects to the master model via SharePoint and refreshes automatically. The Python commentary generator calculates week-on-week and vs-budget variances for the 12 key KPIs and writes templated commentary ('Revenue of £2.1M is 4% above budget, driven by...'), which a human can edit before distribution.",
      "The report now arrives in the board distribution list at 8:00am every Monday without any human involvement. The finance team uses Monday mornings — previously their most stressful time — for actual analysis. On-time delivery went from 70% to 100%.",
    ],
  },

  "amazon-ppc-campaign": {
    slug: "amazon-ppc-campaign",
    title: "Amazon PPC Campaign for D2C Brand",
    category: "Marketing",
    image: "/assets/portfolio-amazon-ppc.webp",
    tech: ["Amazon Ads", "Sponsored Products", "Keyword Research", "Amazon DSP"],
    excerpt: "Managed Sponsored Products & Brands campaigns for a D2C seller, reducing ACoS from 42% to 18% and increasing sales 3.2× in 4 months.",
    problem: "A D2C home goods brand selling on Amazon had been running ads themselves for 18 months with poor results: ACoS of 42% (they were spending ₹42 on ads for every ₹100 of revenue), low-quality traffic from broad keywords, and no structure to their campaigns. They were profitable on some products and heavily subsidising sales on others.",
    solution: "We restructured the entire ad account from scratch. New campaign architecture: separated branded, category, and competitor keyword campaigns. Built a search term harvest process (running auto campaigns to find converting search terms, then adding to exact match manual campaigns). Implemented negative keyword hygiene. Added Sponsored Brands for top-of-funnel. Optimised bids weekly based on ACoS targets per product.",
    outcomes: [
      { metric: "42% → 18%", label: "ACoS reduction" },
      { metric: "3.2×", label: "Sales increase (4 months)" },
      { metric: "5.6×", label: "ROAS achieved" },
      { metric: "60%", label: "Wasted ad spend eliminated" },
    ],
    body: [
      "The client's ad account was a single 'catch-all' auto campaign running on a ₹2,000/day budget. No negative keywords, no bid strategy, no campaign structure. Auto campaigns are great for discovery, but running the entire account on auto campaigns is one of the most expensive mistakes Amazon sellers make.",
      "We audited two years of search term reports to understand which queries were converting and at what cost. The data revealed that 30% of ad spend was going to irrelevant searches that had never produced a single order. Adding those as negatives was the first quick win — immediate improvement in ACoS within the first two weeks.",
      "Campaign restructuring took three weeks. We built separate campaigns for: exact match branded keywords (protecting brand searches at low bids), exact match category terms (high-intent buyer searches), broad match for discovery, competitor brand terms (to capture comparison shoppers), and Sponsored Brands for category-level visibility.",
      "Weekly bid management is disciplined: if a keyword's ACoS is below target, we increase bids to capture more impression share. If above target for 3 consecutive weeks, we decrease bids or pause. This iterative process is what drove ACoS from 42% to 18% over four months.",
      "Total sales tripled — both from better-converting traffic and from increased visibility driven by better campaign relevance scores. The client is now profitably reinvesting ad revenue into new product launches, using the same campaign architecture we built.",
    ],
  },

  "b2c-seo-strategy": {
    slug: "b2c-seo-strategy",
    title: "B2C SEO & Content Strategy",
    category: "Marketing",
    image: "/assets/portfolio-seo-campaign.webp",
    tech: ["Technical SEO", "Content Strategy", "Schema Markup", "Link Building"],
    excerpt: "Executed end-to-end SEO strategy for an online retailer — grew organic traffic by 280% and first-page rankings from 12 to 85 keywords in 6 months.",
    problem: "An online retailer in the fitness equipment space was almost entirely dependent on paid ads for traffic. Organic accounted for less than 10% of visits, and most of that was branded. 73% of their 1,200-product catalogue had no metadata, duplicate title tags, and thin product descriptions copied from manufacturer spec sheets.",
    solution: "We executed a 6-month SEO overhaul: technical audit and fix (crawlability, site speed, duplicate content, schema), category page content expansion, product description rewrites for top-200 SKUs, a content hub with 40+ buying guides and comparison articles targeting mid-funnel searches, and a link-building campaign targeting fitness media and affiliate sites.",
    outcomes: [
      { metric: "280%", label: "Organic traffic growth" },
      { metric: "12 → 85", label: "First-page rankings" },
      { metric: "40+", label: "Content pieces published" },
      { metric: "6 months", label: "To results" },
    ],
    body: [
      "The retailer was paying ₹8–10 lakh per month in Google Ads to drive traffic that should have been arriving organically. A competitor analysis showed their top 5 rivals ranking for thousands of keywords on content and category pages the client had never prioritised.",
      "Technical SEO came first. A crawl audit revealed 340 duplicate title tags, 89 pages with no meta descriptions, 1,200+ product pages with thin content (under 150 words), and 3 JavaScript rendering issues preventing Googlebot from indexing key product content. We resolved all of these over the first 6 weeks.",
      "Category pages were the highest-leverage content investment. Each major category (treadmills, dumbbells, resistance bands, etc.) received a 600–800 word expert introduction, FAQ schema, buying guide content, and internal links to relevant product pages. Category pages now rank for broad category terms that previously sent traffic to paid ads.",
      "The content hub — a structured set of buying guides, comparison articles, and exercise how-tos — targets the mid-funnel queries buyers use before searching product-specific terms. Articles like 'Home vs Commercial Treadmill: Which Should You Buy?' now rank on page 1 and drive hundreds of qualified visitors monthly.",
      "Link building focused on fitness publications, YouTube fitness creators, and affiliate review sites. 34 editorial backlinks from domain authority 40+ sites in the first 6 months contributed to the domain authority improvement that lifted the entire site's ranking potential.",
    ],
  },

  "ecommerce-multichannel-marketing": {
    slug: "ecommerce-multichannel-marketing",
    title: "E-Commerce Multi-Channel Marketing",
    category: "Marketing",
    image: "/assets/portfolio-ecommerce-marketing.webp",
    tech: ["Google Shopping", "Meta Ads", "Klaviyo", "Retargeting"],
    excerpt: "Built a full-funnel marketing system for a Shopify store — Google Shopping, Meta retargeting, and Klaviyo abandoned cart flows driving 4.5× ROAS and 55% revenue growth.",
    problem: "A Shopify fashion brand was running disconnected marketing: a Meta ads account with no retargeting, a Google Ads account with only search (no Shopping), and no email marketing beyond a basic welcome flow. Customer acquisition cost was high and repeat purchase rate was below 15% — well under the fashion industry average of 25–30%.",
    solution: "We built an integrated full-funnel system. Google Shopping: product feed optimisation + Performance Max campaigns. Meta: prospecting with dynamic product ads + retargeting sequences for site visitors, cart abandoners, and past purchasers. Klaviyo: 7 automated email flows covering welcome, abandoned cart, post-purchase, win-back, and VIP. Attribution model aligning all three channels.",
    outcomes: [
      { metric: "4.5×", label: "Blended ROAS" },
      { metric: "55%", label: "Revenue growth (5 months)" },
      { metric: "28%", label: "Repeat purchase rate" },
      { metric: "12%", label: "Cart recovery rate" },
    ],
    body: [
      "The brand had a great product and loyal customers but was leaving significant revenue on the table. Their existing customers weren't being nurtured into repeat buyers. New customers were expensive to acquire and not being retained. Each marketing channel was operating independently with no shared data.",
      "Google Shopping was the first channel we rebuilt. Their product feed had 40% missing attributes (colour, size, material), causing Google to show ads for the wrong search queries. We fixed the feed, set up Performance Max campaigns with proper asset groups by category, and bid targets aligned to margin rather than revenue.",
      "On Meta, we ran a full-funnel structure: broad prospecting campaigns using Advantage+ Creative, a mid-funnel retargeting campaign for 7-day site visitors who didn't purchase, a high-intent retargeting campaign for cart abandoners (with a 10% discount), and a loyalty campaign for past purchasers showing complementary products.",
      "Klaviyo email flows were built for every stage of the customer lifecycle. The abandoned cart flow — 3 emails over 48 hours, the second with a 10% discount code — alone recovers 12% of abandoned carts. The post-purchase flow asks for a review at day 14 and recommends complementary products at day 30. Win-back targets lapsed customers at 90 and 180 days.",
      "After 5 months, blended ROAS sits at 4.5× and repeat purchase rate has risen from 15% to 28% — closing the gap with the industry average. Revenue is up 55% on the same period the previous year, with acquisition cost down 22% from better targeting and channel mix.",
    ],
  },

  "quick-commerce-launch": {
    slug: "quick-commerce-launch",
    title: "Quick Commerce Brand Launch",
    category: "Marketing",
    image: "/assets/portfolio-quick-commerce.webp",
    tech: ["Blinkit Ads", "Zepto", "Hyperlocal Meta Ads", "Swiggy Instamart"],
    excerpt: "Launched an FMCG brand across Blinkit, Zepto & Swiggy Instamart with hyperlocal ad campaigns, achieving 12,000+ orders in the first 60 days.",
    problem: "An FMCG startup with a premium snack brand wanted to enter the quick commerce channel — Blinkit, Zepto, and Swiggy Instamart — with no prior platform experience, no existing reviews, and limited marketing budget. The founders had underestimated how different q-commerce marketing is from traditional retail or D2C e-commerce.",
    solution: "We managed the end-to-end launch strategy: platform onboarding and catalogue optimisation for all three platforms, in-platform ad campaigns (Blinkit Ads, Zepto Ads, Instamart Ads) focused on dark store areas with good inventory coverage, hyperlocal Meta campaigns targeting pin codes around high-inventory dark stores, and a review generation strategy for the first 30 days.",
    outcomes: [
      { metric: "12,000+", label: "Orders in first 60 days" },
      { metric: "3", label: "Platforms launched simultaneously" },
      { metric: "4.2×", label: "In-platform ad ROAS" },
      { metric: "4.7/5", label: "Average platform rating" },
    ],
    body: [
      "Quick commerce is not like Amazon or a D2C store. Discovery is hyper-localised — your ads only make sense in areas where a dark store actually has your product in stock. Running ads to customers 15km from the nearest stocked dark store wastes budget and generates cancellations. This is the fundamental mistake most FMCG brands make when entering q-commerce.",
      "We started with onboarding: ensuring catalogue images met each platform's spec, writing keyword-optimised product titles and descriptions for each platform's search algorithm, and setting up proper variant listings for different pack sizes. A poorly set-up catalogue limits search visibility from day one.",
      "In-platform campaigns were structured around inventory coverage. We pulled dark store inventory data weekly and only ran ads in pin codes where stock was confirmed above reorder threshold. As inventory expanded to more dark stores, we expanded the ad coverage geo-targeting simultaneously.",
      "Parallel to in-platform ads, we ran hyperlocal Meta campaigns targeting users within 3km of each dark store with good inventory. The creative highlighted the 10-minute delivery proposition. Meta's location-based targeting is more flexible than what the platforms themselves offer, giving us an advantage in driving first-trial orders.",
      "Review generation was systematic: customers who rated 4+ on platform were sent a personalised follow-up requesting a written review with a small incentive (10% off next order). Within 30 days, each product had 50+ reviews averaging 4.7/5 — which significantly boosted organic search placement and conversion rate.",
    ],
  },
};

export const casesList: PortfolioCase[] = Object.values(cases);

export const portfolioCases = cases;
