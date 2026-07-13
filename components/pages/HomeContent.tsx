'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight, BarChart3, Bot, Workflow, Cloud, Star,
  FileText, Sparkles, HeartPulse, Clock, ExternalLink,
  Phone, Search, Rocket, Zap, Calculator, Building2,
  ShoppingCart, GraduationCap, Truck, TrendingUp,
} from 'lucide-react'
import { postsList } from '@/lib/posts'

/* ─── data ─── */
const services = [
  { icon: BarChart3, title: 'Data & Reporting', desc: 'Stop pulling reports by hand. We build pipelines that collect, clean and visualise your data automatically.', tags: ['ETL pipelines', 'Power BI', 'Sheets automation'], link: '/services#data' },
  { icon: Bot, title: 'AI Agents', desc: 'AI receptionists, lead-qualifiers and support agents that work 24/7 and plug straight into your stack.', tags: ['GPT agents', 'CRM-wired', 'Voice & chat'], link: '/services#ai' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'n8n and Make builds that connect every tool you use — so leads, invoices and follow-ups run themselves.', tags: ['n8n', 'Make.com', 'API integration'], link: '/services#automation' },
  { icon: Cloud, title: 'Cloud & Apps', desc: 'Azure/AWS infrastructure, database design, web crawlers and full-stack apps built to scale with you.', tags: ['Azure / AWS', 'Databases', 'Full-stack'], link: '/services#cloud' },
]

const steps = [
  { icon: Phone, num: '01', title: 'Discovery Call', desc: 'A free 30-min call to learn your workflows and goals.' },
  { icon: Search, num: '02', title: 'Workflow Audit', desc: 'We map your processes and find the highest-impact wins.' },
  { icon: Rocket, num: '03', title: 'Build & Deploy', desc: 'Custom automations, pipelines and AI go live — fast.' },
  { icon: Zap, num: '04', title: 'Scale & Save', desc: 'Your team focuses on strategy — automation runs 24/7.' },
]

const outcomes = [
  { metric: '90%', label: 'Report time saved', desc: 'Replaced a 3-hour manual reporting routine with a fully automated Monday-morning pipeline.', tag: 'Financial Services' },
  { metric: '3.2×', label: 'Sales via Amazon PPC', desc: 'ACoS cut 42% → 18% and sales tripled in four months through structured Sponsored Products.', tag: 'D2C E-Commerce' },
  { metric: '200+', label: 'Calls handled daily by AI', desc: 'An AI receptionist books appointments, answers FAQs and updates the CRM — zero hold time.', tag: 'Healthcare' },
]

const industries = [
  { icon: HeartPulse, name: 'Clinics & Healthcare', sub: 'Bookings, reminders, AI reception' },
  { icon: Calculator, name: 'CA & Accounting', sub: 'GST, invoicing, report automation' },
  { icon: Building2, name: 'Real Estate', sub: 'Lead capture & follow-up flows' },
  { icon: ShoppingCart, name: 'E-commerce / D2C', sub: 'Amazon PPC, catalog, order ops' },
  { icon: GraduationCap, name: 'Coaching & EdTech', sub: 'Enrolment & nurture automation' },
  { icon: Truck, name: 'Logistics & Ops', sub: 'Tracking, alerts, data sync' },
]

const clients = [
  { src: '/assets/client-ecometra360.webp', name: 'Ecometra360' },
  { src: '/assets/client-sukhija-sales.webp', name: 'Sukhija Sales' },
  { src: '/assets/client-shree-shyam.webp', name: 'Shree Shyam' },
  { src: '/assets/client-gredflow.webp', name: 'GredFlow' },
  { src: '/assets/client-apna-dental.webp', name: 'Apna Dental' },
  { src: '/assets/client-utsavify.webp', name: 'Utsavify' },
]

const tools = [
  { icon: FileText, title: 'File to PDF', desc: 'Convert docs, images & spreadsheets instantly.' },
  { icon: Sparkles, title: 'UGC Creator', desc: 'Generate social & ad content in seconds.' },
  { icon: HeartPulse, title: 'BMI Calculator', desc: 'Instant health insight from height & weight.' },
  { icon: Clock, title: 'DateTime ↔ Epoch', desc: 'Convert human dates and timestamps.' },
]

const testimonials = [
  { quote: 'From Power BI dashboards to end-to-end automation, HowAutomate delivered beyond expectations. They transformed how we track and act on our data.', name: 'Rahul Sharma', role: 'Marketing Lead · Ecometra360' },
  { quote: 'They built our entire ETL pipeline from scratch — clean, reliable, fully automated. The team truly understands data operations at scale.', name: 'Priya Nair', role: 'Engineering · GredFlow' },
]

const featuredSlugs = ['google-merchant-center-suspension-recovery', 'performance-max-small-business-india', 'ai-social-media-automation-n8n']

const CAL = 'https://calendly.com/hello-howautomate/30min'

export default function HomeContent() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.ha-home .rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const featured = featuredSlugs
    .map((slug) => postsList.find((p) => p.slug === slug))
    .filter(Boolean) as typeof postsList

  return (
    <main className="ha-home">
      {/* HERO */}
      <div className="w">
        <div className="hero">
          <div>
            <div className="htag rv"><span className="pdot" /><span className="eyebrow">Automation Studio · Jaipur, India</span></div>
            <h1 className="rv">Your business,<br />running <em>on autopilot.</em></h1>
            <p className="hsub rv">We wire your tools together so leads, reports, invoices and follow-ups handle themselves — data pipelines, AI agents and workflow automation for Indian SMBs.</p>
            <div className="hcta rv">
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free 30-min call <ArrowRight size={16} /></a>
              <Link href="/portfolio" className="btn btn-ghost">See our work</Link>
            </div>
            <div className="htrust rv">
              <span className="chip"><b>50+</b> automations shipped</span>
              <span className="chip"><b>2–6 wks</b> delivery</span>
              <span className="chip"><b>3</b> countries</span>
            </div>
          </div>
          <div className="rv">
            <svg className="stage" viewBox="0 0 480 430" role="img" aria-label="Live automation workflow: a new lead arrives in Gmail, an AI agent qualifies and replies, the lead is logged to a Google Sheet CRM, and an automatic WhatsApp reply reaches the customer in 30 seconds">
              <defs><radialGradient id="haGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" style={{ stopColor: 'rgba(var(--accent-rgb),.3)' }} /><stop offset="100%" style={{ stopColor: 'rgba(var(--accent-rgb),0)' }} /></radialGradient></defs>
              <ellipse cx="300" cy="120" rx="140" ry="110" fill="url(#haGlow)" />
              <path id="hc1" className="conn" d="M168,96 C220,86 250,80 300,86" />
              <path id="hc2" className="conn" d="M404,118 C428,160 428,188 404,232" />
              <path id="hc3" className="conn" d="M300,262 C238,286 214,300 178,330" />
              <path id="hc4" className="conn" d="M96,322 C70,300 66,210 96,150" />
              <circle className="dot" r="3.6"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#hc1" /></animateMotion></circle>
              <circle className="dot" r="3.6"><animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"><mpath href="#hc1" /></animateMotion></circle>
              <circle className="dot" r="3.6"><animateMotion dur="2.6s" begin="0.4s" repeatCount="indefinite"><mpath href="#hc2" /></animateMotion></circle>
              <circle className="dot2" r="3.6"><animateMotion dur="2.8s" begin="0.9s" repeatCount="indefinite"><mpath href="#hc3" /></animateMotion></circle>
              <circle className="dot2" r="3.2"><animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite"><mpath href="#hc4" /></animateMotion></circle>
              <g className="node n1 flo"><rect x="34" y="64" width="134" height="62" rx="14" /><g transform="translate(50,82)" strokeWidth="1.8" fill="none"><rect x="0" y="0" width="22" height="16" rx="3" /><path d="M0,2 L11,10 L22,2" /></g><text className="lbl" x="82" y="90">New lead</text><text className="sub" x="82" y="108">GMAIL · INBOX</text></g>
              <g className="node n2 ai flo b"><rect x="300" y="56" width="146" height="66" rx="15" /><g transform="translate(317,76)" strokeWidth="1.8" fill="none"><rect x="2" y="3" width="20" height="18" rx="4" /><path d="M12 0v3M8 12h.5M16 12h.5" /></g><text className="lbl" x="350" y="84">AI Agent</text><text className="sub" x="350" y="102">QUALIFY · REPLY</text></g>
              <g className="node n3 flo c"><rect x="300" y="232" width="146" height="62" rx="14" /><g transform="translate(316,250)" strokeWidth="1.8" fill="none"><rect x="0" y="0" width="22" height="18" rx="3" /><path d="M0,7 H22 M7,0 V18" /></g><text className="lbl" x="350" y="258">Logged to CRM</text><text className="sub" x="350" y="276">GOOGLE SHEET</text></g>
              <g className="node n4 flo d"><rect x="30" y="298" width="148" height="62" rx="14" /><g transform="translate(46,316)" strokeWidth="1.8" fill="none"><path d="M3,0 h13 a3,3 0 0 1 3,3 v8 a3,3 0 0 1 -3,3 h-8 l-5,4 v-4 h0 a3,3 0 0 1 -3,-3 v-8 a3,3 0 0 1 3,-3z" /><path d="M6,4.5 c0.5,3.5 3,6 6.5,6.5" /></g><text className="lbl" x="78" y="324">Reply sent</text><text className="sub" x="78" y="342">WHATSAPP · 30 SEC</text></g>
            </svg>
          </div>
        </div>
      </div>

      {/* BENTO */}
      <section><div className="w"><div className="bento">
        <div className="tile t-dash rv">
          <div className="dwin"><span className="tl"><i /><i /><i /></span> ops.howautomate.com</div>
          <div style={{ marginTop: 16 }}><div className="tlabel">Weekly throughput</div></div>
          <div className="dbar">
            {[40, 62, 48, 78, 66, 92, 84].map((h, i) => <span key={i} style={{ height: `${h}%`, animationDelay: `${0.05 + i * 0.07}s` }} />)}
          </div>
          <div className="dup"><TrendingUp size={13} /> 32% more tasks cleared, zero extra headcount</div>
        </div>
        <div className="tile rv"><div className="tlabel">Report time</div><div className="metric">90<span className="u">%</span></div><p>saved vs. manual</p></div>
        <div className="tile rv"><div className="tlabel">Amazon PPC</div><div className="metric">3.2<span className="u">×</span></div><p>sales in 4 months</p></div>
        <div className="tile t-quote rv"><div className="qtx">“They changed how we track and act on our data — dashboards to end-to-end automation.”</div><div className="qby">RAHUL · MARKETING LEAD, ECOMETRA360</div></div>
      </div></div></section>

      {/* SERVICES */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">What we build</span><h2>Four services, done properly.</h2><p>No buzzwords — these are the systems we ship for clients every week, end to end.</p></div>
        <div className="svc">
          {services.map((s) => (
            <div className="svcard rv" key={s.title}>
              <div className="svicon"><s.icon size={22} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svtags">{s.tags.map((t) => <span className="svtag" key={t}>{t}</span>)}</div>
              <Link href={s.link} className="svlink">Learn more <ArrowRight size={14} /></Link>
            </div>
          ))}
        </div>
      </div></section>

      {/* PROCESS */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">How it works</span><h2>From first call to full automation.</h2></div>
        <div className="proc">
          {steps.map((p) => (
            <div className="pcard rv" key={p.num}>
              <div className="pnum">{p.num}</div>
              <div className="picon"><p.icon size={22} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* OUTCOMES */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">Proven results</span><h2>What changed for clients.</h2></div>
        <div className="g3">
          {outcomes.map((o) => (
            <div className="ocard rv" key={o.label}>
              <div className="ometric">{o.metric}</div>
              <h3>{o.label}</h3>
              <p>{o.desc}</p>
              <span className="tag">{o.tag}</span>
            </div>
          ))}
        </div>
      </div></section>

      {/* INDUSTRIES */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">Who we work with</span><h2>Built for Indian SMBs.</h2></div>
        <div className="inds rv">
          {industries.map((it) => (
            <div className="ind" key={it.name}><it.icon className="ico" size={22} /><b>{it.name}<span>{it.sub}</span></b></div>
          ))}
        </div>
      </div></section>

      {/* TRUSTED BY */}
      <section className="divln"><div className="w">
        <div className="shead rv" style={{ textAlign: 'center', margin: '0 auto 30px' }}><span className="eyebrow">Trusted by</span></div>
        <div className="logos rv">
          {clients.map((c) => (
            <div className="lcard" key={c.name}><img src={c.src} alt={c.name} width={118} height={46} loading="lazy" /></div>
          ))}
        </div>
      </div></section>

      {/* FEATURED POSTS */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">Latest insights</span><h2>From the blog.</h2><p>Practical guides on automation, AI and data engineering.</p></div>
        <div className="posts">
          {featured.map((post) => (
            <Link href={`/blog/${post.slug}`} className="post rv" key={post.slug}>
              <div className="pimg"><img src={post.image} alt={post.title} width={400} height={170} loading="lazy" /><span className="pcat">{post.category}</span></div>
              <div className="pbody"><h3>{post.title}</h3><p>{post.excerpt}</p></div>
            </Link>
          ))}
        </div>
      </div></section>

      {/* TOOLS */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">Free resources</span><h2>Free online tools.</h2><p>Powerful browser tools — no signup, no cost.</p></div>
        <div className="tools rv">
          {tools.map((t) => (
            <a className="tool" href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer" key={t.title}>
              <div className="ti"><t.icon size={20} /></div>
              <h3>{t.title} <ExternalLink size={11} /></h3>
              <p>{t.desc}</p>
            </a>
          ))}
        </div>
      </div></section>

      {/* TESTIMONIALS */}
      <section className="divln"><div className="w">
        <div className="shead rv"><span className="eyebrow">Testimonials</span><h2>What clients say.</h2></div>
        <div className="tst">
          {testimonials.map((t) => (
            <div className="tcard rv" key={t.name}>
              <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <p>“{t.quote}”</p>
              <div className="tname">{t.name}</div>
              <div className="trole">{t.role}</div>
            </div>
          ))}
        </div>
      </div></section>

      {/* CTA */}
      <section><div className="w"><div className="cta rv">
        <h2>See what an afternoon of automation could save you.</h2>
        <p>A free 30-minute call. We map one workflow live and show you the highest-impact win — no pitch.</p>
        <div className="hcta">
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free call <ArrowRight size={16} /></a>
          <Link href="/contact" className="btn btn-ghost">Send an inquiry</Link>
        </div>
      </div></div></section>
    </main>
  )
}
