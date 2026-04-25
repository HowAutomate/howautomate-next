'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, BarChart3, Bot, Cloud, Megaphone, Star,
  FileText, Heart, Clock, Sparkle, ExternalLink,
  Phone, Search, Rocket, Zap, Database, Cpu,
} from 'lucide-react'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'

/* ─── constants ─────────────────────────────────────────── */

const BG = '#07040f'

const GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
  backgroundSize: '52px 52px',
}

const CARD: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

/* ─── data ───────────────────────────────────────────────── */

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+',  label: 'Years Experience'   },
  { value: '3',   label: 'Countries Served'   },
  { value: '100%',label: 'Client Satisfaction'},
]

const services = [
  { icon: BarChart3, title: 'Data & Analytics',    color: '#818cf8', glow: 'rgba(129,140,248,0.15)', desc: 'ETL pipelines, Power BI dashboards, automated reports and Google Sheets automation.', link: '/services#data' },
  { icon: Bot,       title: 'AI & Automation',     color: '#fb923c', glow: 'rgba(251,146,60,0.15)',  desc: 'AI receptionists, marketing agents, workflow automation and custom API integrations.', link: '/services#ai' },
  { icon: Cloud,     title: 'Cloud & Engineering', color: '#60a5fa', glow: 'rgba(96,165,250,0.15)',  desc: 'Azure, AWS, SnapLogic, database design, web crawlers and full-stack applications.',  link: '/services#cloud' },
  { icon: Megaphone, title: 'Digital Marketing',   color: '#34d399', glow: 'rgba(52,211,153,0.15)',  desc: 'Amazon PPC, B2C SEO, e-commerce and quick commerce strategies that drive revenue.',   link: '/services#marketing' },
]

const outcomes = [
  { metric: '90%',  label: 'Report Time Saved',        desc: 'Replaced 3 hours of manual reporting with a fully automated Monday-morning pipeline.', tag: 'Financial Services' },
  { metric: '3.2×', label: 'Sales Growth via PPC',     desc: 'ACoS dropped from 42% to 18%, sales tripled in 4 months through Sponsored Products.', tag: 'D2C E-Commerce' },
  { metric: '80%',  label: 'Calls Handled by AI',      desc: 'AI voice receptionist handles 200+ inbound calls/day — booking, FAQ, CRM updates.',  tag: 'Healthcare Clinic' },
]

const testimonials = [
  { quote: 'From Power BI dashboards to end-to-end automation, HowAutomate delivered beyond expectations. They transformed how we track and act on our data.', name: 'Ecometra Marketing Team', role: 'Marketing · Ecometra360' },
  { quote: 'HowAutomate built our entire ETL pipeline from scratch — clean, reliable, and fully automated. Their team truly understands data operations at scale.', name: 'GredFlow Engineering', role: 'Engineering · GredFlow' },
]

const clients = [
  { src: '/assets/client-ecometra360.webp',   name: 'Ecometra360'         },
  { src: '/assets/client-sukhija-sales.webp', name: 'Sukhija Sales'       },
  { src: '/assets/client-shree-shyam.webp',   name: 'Shree Shyam'        },
  { src: '/assets/client-gredflow.webp',       name: 'GredFlow'            },
]

const tools = [
  { icon: FileText, title: 'File to PDF',          desc: 'Convert docs, images & spreadsheets to PDF instantly.',    color: '#818cf8' },
  { icon: Sparkle,  title: 'UGC Content Creator',  desc: 'Generate social media & ad content in seconds.',           color: '#34d399' },
  { icon: Heart,    title: 'BMI Calculator',        desc: 'Instant health insights from height & weight.',            color: '#f472b6' },
  { icon: Clock,    title: 'DateTime ↔ Epoch',     desc: 'Convert between human dates and Unix timestamps.',         color: '#fb923c' },
]

const process = [
  { icon: Phone,    step: '01', title: 'Discovery Call',    desc: 'Free 30-min call to learn your workflows and goals.' },
  { icon: Search,   step: '02', title: 'Workflow Audit',    desc: 'We map your processes and find highest-impact wins.'  },
  { icon: Rocket,   step: '03', title: 'Build & Deploy',    desc: 'Custom automations, pipelines and AI go live.'        },
  { icon: Zap,      step: '04', title: 'Scale & Save',      desc: 'Your team focuses on strategy — automation handles the rest 24/7.' },
]

/* ─── section wrappers ───────────────────────────────────── */

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section style={{ background: BG, ...GRID, ...style, position: 'relative' }}>
      {children}
    </section>
  )
}

function SectionLabel({ color = '#a78bfa', children }: { color?: string; children: React.ReactNode }) {
  return (
    <span style={{ color, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
      {children}
    </span>
  )
}

/* ─── hero ───────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section style={{ background: BG, ...GRID, position: 'relative', overflow: 'hidden', paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

      {/* gradient glows */}
      <div style={{ position:'absolute', top:'-15%', left:'25%', width:700, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'0%', right:'5%', width:450, height:450, borderRadius:'50%', background:'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%)', pointerEvents:'none' }} />

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'72px 32px', width:'100%' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* left — copy */}
          <div className="flex-1 z-10">

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              <span style={{ background:'rgba(124,58,237,0.15)', border:'1px solid rgba(124,58,237,0.35)', color:'#c4b5fd', borderRadius:999, padding:'6px 18px', fontSize:13, fontWeight:600, display:'inline-flex', alignItems:'center', gap:8, marginBottom:28 }}>
                ✦ AI-First Automation Agency
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }} style={{ fontSize:'clamp(2.2rem,5vw,3.6rem)', fontWeight:900, color:'#fff', lineHeight:1.12, letterSpacing:'-0.03em', margin:'0 0 20px' }}>
              The Answer to<br />
              <span style={{ background:'linear-gradient(135deg,#a78bfa 0%,#60a5fa 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                "How Do I Automate This?"
              </span>
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }} style={{ fontSize:16, color:'rgba(255,255,255,0.48)', lineHeight:1.75, margin:'0 0 36px', maxWidth:460 }}>
              End-to-end data pipelines, AI automation, and cloud engineering — so your business runs smarter, faster, and at scale.
            </motion.p>

            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }} style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a
                href="https://calendly.com/hello-howautomate/30min"
                target="_blank" rel="noopener noreferrer"
                style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', color:'#fff', padding:'13px 28px', borderRadius:12, fontWeight:700, fontSize:15, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, boxShadow:'0 8px 32px rgba(124,58,237,0.4)', whiteSpace:'nowrap' }}
              >
                Book a Free Call <ArrowRight size={16} />
              </a>
              <Link
                href="/portfolio"
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff', padding:'13px 28px', borderRadius:12, fontWeight:600, fontSize:15, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, whiteSpace:'nowrap' }}
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }} style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:28 }}>
              {['Marketers','Analysts','Founders','Developers'].map(a => (
                <span key={a} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.4)', padding:'4px 14px', borderRadius:999, fontSize:12, fontWeight:500 }}>
                  ✔ {a}
                </span>
              ))}
            </motion.div>
          </div>

          {/* right — 3D scene */}
          <motion.div
            initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.25 }}
            className="flex-1 w-full hidden lg:block"
          >
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:24, height:500, overflow:'hidden', position:'relative' }}>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:80, background:`linear-gradient(to top, ${BG}, transparent)`, pointerEvents:'none' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ─── stats ──────────────────────────────────────────────── */

function StatsSection() {
  return (
    <section style={{ background:'rgba(255,255,255,0.025)', borderTop:'1px solid rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'40px 32px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade} className="text-center">
              <div style={{ fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:900, background:'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1.1, marginBottom:6 }}>{s.value}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', fontWeight:500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── services ───────────────────────────────────────────── */

function ServicesSection() {
  return (
    <Section style={{ padding:'80px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:48 }}>
          <SectionLabel>What We Do</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'#fff', margin:'0 0 14px', letterSpacing:'-0.025em' }}>Four Pillars of Excellence</h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>Data strategy to AI deployment to digital growth — we cover the full spectrum.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade}
              whileHover={{ y:-6, borderColor:'rgba(255,255,255,0.14)' }}
              style={{ ...CARD, padding:28, display:'flex', flexDirection:'column', gap:16, transition:'all 0.25s', cursor:'pointer' }}
            >
              <div style={{ width:48, height:48, borderRadius:14, background:svc.glow, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svc.icon style={{ width:22, height:22, color:svc.color }} />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:16, color:'#fff', marginBottom:8 }}>{svc.title}</div>
                <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65 }}>{svc.desc}</div>
              </div>
              <Link href={svc.link} style={{ color:svc.color, fontSize:13, fontWeight:600, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginTop:'auto' }}>
                Learn more <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─── outcomes ───────────────────────────────────────────── */

function OutcomesSection() {
  return (
    <section style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'80px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:48 }}>
          <SectionLabel color="#60a5fa">Proven Results</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'#fff', margin:0, letterSpacing:'-0.025em' }}>Client Outcomes</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {outcomes.map((o, i) => (
            <motion.div key={o.label} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade} style={{ ...CARD, padding:32, textAlign:'center' }}>
              <div style={{ fontSize:'clamp(2.5rem,5vw,3.2rem)', fontWeight:900, background:'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:8 }}>{o.metric}</div>
              <div style={{ fontWeight:700, color:'#fff', fontSize:15, marginBottom:12 }}>{o.label}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.65, marginBottom:16 }}>{o.desc}</div>
              <span style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.4)', padding:'3px 12px', borderRadius:999, fontSize:11, fontWeight:600 }}>{o.tag}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginTop:36 }}>
          <Link href="/portfolio" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', padding:'11px 24px', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            View All Case Studies <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── social proof ───────────────────────────────────────── */

function SocialProofSection() {
  return (
    <Section style={{ padding:'80px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:48 }}>
          <SectionLabel color="#f472b6">Testimonials</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'#fff', margin:0, letterSpacing:'-0.025em' }}>What Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom:56 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade} style={{ ...CARD, padding:32 }}>
              <div style={{ display:'flex', gap:3, marginBottom:16 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color:'#fbbf24', fill:'#fbbf24' }} />)}
              </div>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.6)', lineHeight:1.75, marginBottom:20, fontStyle:'italic' }}>"{t.quote}"</p>
              <div style={{ fontWeight:700, color:'#fff', fontSize:13 }}>{t.name}</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)', marginTop:2 }}>{t.role}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:24 }}>
          <div style={{ fontSize:12, color:'rgba(255,255,255,0.3)', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:24 }}>Trusted By</div>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {clients.map((c, i) => (
              <motion.div key={c.name} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'12px 20px', display:'flex', alignItems:'center', justifyContent:'center', minWidth:120, height:56 }}>
                <img src={c.src} alt={c.name} width={100} height={36} loading="lazy" style={{ maxHeight:36, width:'auto', objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.55 }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

/* ─── tools ──────────────────────────────────────────────── */

function ToolsSection() {
  return (
    <section style={{ background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.06)', borderBottom:'1px solid rgba(255,255,255,0.06)', padding:'80px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:48 }}>
          <SectionLabel color="#34d399">Free Resources</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'#fff', margin:'0 0 12px', letterSpacing:'-0.025em' }}>Free Online Tools</h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', margin:0 }}>Powerful browser tools — no signup, no limits, no cost.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom:32 }}>
          {tools.map((t, i) => (
            <motion.a
              key={t.title}
              href="https://tools.howautomate.com"
              target="_blank" rel="noopener noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade}
              whileHover={{ y:-5 }}
              style={{ ...CARD, padding:24, textDecoration:'none', display:'block', transition:'all 0.2s' }}
            >
              <div style={{ width:44, height:44, borderRadius:12, background:`${t.color}18`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
                <t.icon style={{ width:20, height:20, color:t.color }} />
              </div>
              <div style={{ fontWeight:700, color:'#fff', fontSize:15, marginBottom:6, display:'flex', alignItems:'center', gap:6 }}>
                {t.title} <ExternalLink size={12} style={{ color:'rgba(255,255,255,0.25)' }} />
              </div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.38)', lineHeight:1.6 }}>{t.desc}</div>
            </motion.a>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center">
          <a href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', padding:'11px 24px', borderRadius:10, fontWeight:600, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            View All Tools <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── process ────────────────────────────────────────────── */

function ProcessSection() {
  return (
    <Section style={{ padding:'80px 0' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade} className="text-center" style={{ marginBottom:56 }}>
          <SectionLabel color="#fb923c">Simple Process</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'#fff', margin:'0 0 12px', letterSpacing:'-0.025em' }}>How It Works</h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', margin:0 }}>From first call to full automation — here's what to expect.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once:true }} custom={i} variants={fade} className="text-center" style={{ position:'relative' }}>
              {i < process.length - 1 && (
                <div className="hidden lg:block" style={{ position:'absolute', top:32, left:'60%', width:'80%', height:1, background:'rgba(255,255,255,0.06)', zIndex:0 }} />
              )}
              <div style={{ width:64, height:64, borderRadius:18, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', position:'relative', zIndex:1 }}>
                <p.icon style={{ width:26, height:26, color:'rgba(255,255,255,0.5)' }} />
                <span style={{ position:'absolute', top:-8, right:-8, width:22, height:22, borderRadius:'50%', background:'linear-gradient(135deg,#7c3aed,#2563eb)', color:'#fff', fontSize:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>{p.step}</span>
              </div>
              <div style={{ fontWeight:700, color:'#fff', fontSize:15, marginBottom:8 }}>{p.title}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.38)', lineHeight:1.65 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ─── cta ────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section style={{ background:BG, padding:'80px 32px' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fade}
          style={{ background:'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(37,99,235,0.20) 100%)', border:'1px solid rgba(124,58,237,0.3)', borderRadius:24, padding:'56px 40px', textAlign:'center', position:'relative', overflow:'hidden' }}
        >
          <div style={{ position:'absolute', top:'-30%', left:'50%', transform:'translateX(-50%)', width:500, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, color:'#fff', margin:'0 0 16px', letterSpacing:'-0.025em' }}>Ready to Automate Your Business?</h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.5)', maxWidth:420, margin:'0 auto 36px', lineHeight:1.75 }}>
              A free 30-minute call could change how your business handles data forever. No commitment required.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer" style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', color:'#fff', padding:'13px 32px', borderRadius:12, fontWeight:700, fontSize:15, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, boxShadow:'0 8px 32px rgba(124,58,237,0.4)' }}>
                Book a Free Call <ArrowRight size={16} />
              </a>
              <Link href="/contact" style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff', padding:'13px 32px', borderRadius:12, fontWeight:600, fontSize:15, textDecoration:'none' }}>
                Send an Inquiry
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── export ─────────────────────────────────────────────── */

export default function HomeContent() {
  return (
    <main style={{ background: BG }}>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <OutcomesSection />
      <SocialProofSection />
      <ToolsSection />
      <ProcessSection />
      <CTASection />
    </main>
  )
}
