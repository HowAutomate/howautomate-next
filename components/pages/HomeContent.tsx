'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, BarChart3, Bot, Cloud, Megaphone, Star,
  FileText, Heart, Clock, Sparkle, ExternalLink,
  Phone, Search, Rocket, Zap, Database, Cpu,
} from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'

/* ─── constants ─────────────────────────────────────────── */

const BG = '#07040f'

const GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
  backgroundSize: '52px 52px',
}

/* ─── data ───────────────────────────────────────────────── */

const stats = [
  { value: '50+',  label: 'Projects Delivered'  },
  { value: '5+',   label: 'Years Experience'     },
  { value: '3',    label: 'Countries Served'     },
  { value: '100%', label: 'Client Satisfaction'  },
]

const services = [
  { icon: BarChart3, title: 'Data & Analytics',    color: '#818cf8', glow: 'rgba(129,140,248,0.14)', desc: 'ETL pipelines, Power BI dashboards, automated reports and Google Sheets automation.',    link: '/services#data'      },
  { icon: Bot,       title: 'AI & Automation',     color: '#fb923c', glow: 'rgba(251,146,60,0.14)',  desc: 'AI receptionists, marketing agents, workflow automation and custom API integrations.',  link: '/services#ai'        },
  { icon: Cloud,     title: 'Cloud & Engineering', color: '#60a5fa', glow: 'rgba(96,165,250,0.14)',  desc: 'Azure, AWS, SnapLogic, database design, web crawlers and full-stack applications.',    link: '/services#cloud'     },
  { icon: Megaphone, title: 'Digital Marketing',   color: '#34d399', glow: 'rgba(52,211,153,0.14)',  desc: 'Amazon PPC, B2C SEO, e-commerce and quick commerce strategies that drive real revenue.', link: '/services#marketing' },
]

const outcomes = [
  { metric: '90%',  label: 'Report Time Saved',   desc: 'Replaced 3-hour manual reporting with a fully automated Monday pipeline.', tag: 'Financial Services' },
  { metric: '3.2×', label: 'Sales via Amazon PPC', desc: 'ACoS from 42% → 18%, sales tripled in 4 months through Sponsored Products.', tag: 'D2C E-Commerce' },
  { metric: '80%',  label: 'Calls Handled by AI', desc: 'AI receptionist handles 200+ inbound calls/day — booking, FAQ, CRM auto-updated.', tag: 'Healthcare' },
]

const testimonials = [
  { quote: 'From Power BI dashboards to end-to-end automation, HowAutomate delivered beyond expectations. They transformed how we track and act on our data.', name: 'Ecometra Marketing Team', role: 'Marketing · Ecometra360' },
  { quote: 'HowAutomate built our entire ETL pipeline from scratch — clean, reliable, fully automated. Their team truly understands data operations at scale.', name: 'GredFlow Engineering', role: 'Engineering Team · GredFlow' },
]

const clients = [
  { src: '/assets/client-ecometra360.webp',   name: 'Ecometra360'    },
  { src: '/assets/client-sukhija-sales.webp', name: 'Sukhija Sales'  },
  { src: '/assets/client-shree-shyam.webp',   name: 'Shree Shyam'   },
  { src: '/assets/client-gredflow.webp',       name: 'GredFlow'       },
]

const tools = [
  { icon: FileText, title: 'File to PDF',         desc: 'Convert docs, images & spreadsheets instantly.',  color: '#818cf8' },
  { icon: Sparkle,  title: 'UGC Content Creator', desc: 'Generate social media & ad content in seconds.',  color: '#34d399' },
  { icon: Heart,    title: 'BMI Calculator',       desc: 'Instant health insights from height & weight.',   color: '#f472b6' },
  { icon: Clock,    title: 'DateTime ↔ Epoch',    desc: 'Convert between human dates and timestamps.',     color: '#fb923c' },
]

const steps = [
  { icon: Phone,  step: '01', title: 'Discovery Call',   desc: 'Free 30-min call to learn your workflows and goals.'  },
  { icon: Search, step: '02', title: 'Workflow Audit',   desc: 'We map your processes and find highest-impact wins.'   },
  { icon: Rocket, step: '03', title: 'Build & Deploy',   desc: 'Custom automations, pipelines and AI go live.'         },
  { icon: Zap,    step: '04', title: 'Scale & Save',     desc: 'Your team focuses on strategy — automation runs 24/7.' },
]

const orbDefs = [
  { x: '12%',  y: '18%', size: 420, color: 'rgba(124,58,237,0.18)',  depth: 0.10 },
  { x: '72%',  y: '12%', size: 300, color: 'rgba(37,99,235,0.14)',   depth: 0.16 },
  { x: '58%',  y: '62%', size: 340, color: 'rgba(124,58,237,0.12)',  depth: 0.12 },
  { x: '8%',   y: '68%', size: 260, color: 'rgba(96,165,250,0.10)',  depth: 0.20 },
  { x: '82%',  y: '52%', size: 220, color: 'rgba(167,139,250,0.10)', depth: 0.14 },
]

const iconDefs = [
  { x: '18%', y: '28%', Icon: Database, depth: 0.14, delay: 0,   color: '#818cf8' },
  { x: '76%', y: '22%', Icon: Cpu,      depth: 0.18, delay: 0.5, color: '#60a5fa' },
  { x: '10%', y: '58%', Icon: Zap,      depth: 0.12, delay: 1,   color: '#fb923c' },
  { x: '80%', y: '65%', Icon: Bot,      depth: 0.16, delay: 1.5, color: '#34d399' },
  { x: '50%', y: '78%', Icon: Cloud,    depth: 0.10, delay: 0.8, color: '#f472b6' },
  { x: '38%', y: '12%', Icon: BarChart3,depth: 0.22, delay: 0.3, color: '#a78bfa' },
]

/* ─── helpers ────────────────────────────────────────────── */

function glowHandler(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
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

/* ─── parallax orb ───────────────────────────────────────── */

function ParallaxOrb({ orb, smoothX, smoothY }: { orb: typeof orbDefs[number]; smoothX: MotionValue<number>; smoothY: MotionValue<number> }) {
  const ox = useTransform(smoothX, v => v * orb.depth)
  const oy = useTransform(smoothY, v => v * orb.depth)
  return (
    <motion.div style={{ position: 'absolute', left: orb.x, top: orb.y, width: orb.size, height: orb.size, borderRadius: '50%', background: orb.color, filter: 'blur(70px)', translateX: ox, translateY: oy, pointerEvents: 'none' }} />
  )
}

/* ─── floating icon ──────────────────────────────────────── */

function FloatingIcon({ item, index, smoothX, smoothY }: { item: typeof iconDefs[number]; index: number; smoothX: MotionValue<number>; smoothY: MotionValue<number> }) {
  const ix = useTransform(smoothX, v => v * item.depth)
  const iy = useTransform(smoothY, v => v * item.depth)
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: item.delay + 0.6, duration: 0.5 }} style={{ position: 'absolute', left: item.x, top: item.y, translateX: ix, translateY: iy, pointerEvents: 'none' }}>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}
      >
        <item.Icon size={20} style={{ color: item.color, opacity: 0.85 }} />
      </motion.div>
    </motion.div>
  )
}

/* ─── hero ───────────────────────────────────────────────── */

function HeroSection() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const smoothX = useSpring(rawX, { stiffness: 55, damping: 20 })
  const smoothY = useSpring(rawY, { stiffness: 55, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX - window.innerWidth / 2)
      rawY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  return (
    <section className="items-start md:items-center md:min-h-screen" style={{ background: BG, ...GRID, position: 'relative', display: 'flex', overflow: 'hidden', paddingTop: 100, paddingBottom: 72 }}>

      {orbDefs.map((orb, i) => <ParallaxOrb key={i} orb={orb} smoothX={smoothX} smoothY={smoothY} />)}

      <div className="hidden md:block">
        {iconDefs.map((item, i) => <FloatingIcon key={i} item={item} index={i} smoothX={smoothX} smoothY={smoothY} />)}
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 10 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)', color: '#c4b5fd', borderRadius: 999, padding: '6px 18px', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            ✦ AI-First Automation Agency
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.4rem,5.5vw,4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 20px' }}
        >
          The Answer to{' '}
          <span style={{ background: 'linear-gradient(135deg,#a78bfa 0%,#60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            "How Do I Automate This?"
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 17, color: 'rgba(255,255,255,0.46)', lineHeight: 1.75, margin: '0 0 36px' }}
        >
          End-to-end data pipelines, AI automation, and cloud engineering —<br className="hidden sm:block" />
          so your business runs smarter, faster, and at scale.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', color: '#fff', padding: '13px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 32px rgba(124,58,237,0.4)', transition: 'opacity 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Book a Free Call <ArrowRight size={16} />
          </a>
          <Link href="/portfolio"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '13px 28px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}
        >
          {['Marketers', 'Analysts', 'Founders', 'Developers'].map(a => (
            <span key={a} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.38)', padding: '4px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>
              ✔ {a}
            </span>
          ))}
        </motion.div>
      </div>

      {/* scroll hint — desktop only */}
      <motion.div className="hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 22, height: 36, borderRadius: 11, border: '2px solid rgba(167,139,250,0.3)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6 }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(167,139,250,0.5)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── stats ──────────────────────────────────────────────── */

function StatsSection() {
  return (
    <section style={{ background: 'rgba(255,255,255,0.018)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 32px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade} className="text-center">
              <div style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{s.label}</div>
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
    <section style={{ background: BG, ...GRID, padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginBottom: 48 }}>
          <span style={{ color: '#a78bfa', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>What We Do</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.025em' }}>Four Pillars of Excellence</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>Data strategy to AI deployment — we cover the full spectrum.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="glow-card" onMouseMove={glowHandler}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.14)' } as any}
              style={{ ...CARD, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, transition: 'all 0.25s', cursor: 'default' }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: svc.glow, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svc.icon size={22} style={{ color: svc.color }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{svc.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, flexGrow: 1 }}>{svc.desc}</div>
              <Link href={svc.link} style={{ color: svc.color, fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                onMouseEnter={e => (e.currentTarget.style.gap = '8px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '5px')}
              >
                Learn more <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── outcomes ───────────────────────────────────────────── */

function OutcomesSection() {
  return (
    <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginBottom: 48 }}>
          <span style={{ color: '#60a5fa', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Proven Results</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Client Outcomes</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {outcomes.map((o, i) => (
            <motion.div key={o.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="glow-card" onMouseMove={glowHandler}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.14)' } as any}
              style={{ ...CARD, padding: 32, textAlign: 'center' }}
            >
              <div style={{ fontSize: 'clamp(2.5rem,5vw,3.2rem)', fontWeight: 900, background: 'linear-gradient(135deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}>{o.metric}</div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 12 }}>{o.label}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65, marginBottom: 16 }}>{o.desc}</div>
              <span style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.38)', padding: '3px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{o.tag}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginTop: 36 }}>
          <Link href="/portfolio"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '11px 24px', borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.09)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
          >
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
    <section style={{ background: BG, ...GRID, padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginBottom: 48 }}>
          <span style={{ color: '#f472b6', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Testimonials</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>What Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: 56 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="glow-card" onMouseMove={glowHandler}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.14)' } as any}
              style={{ ...CARD, padding: 32 }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#fbbf24', fill: '#fbbf24' }} />)}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.quote}"</p>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 13 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', marginTop: 2 }}>{t.role}</div>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 24 }}>Trusted By</div>
          <div className="flex flex-wrap justify-center gap-4 items-stretch">
            {clients.map((c, i) => (
              <motion.div key={c.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
                whileHover={{ borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.09)' } as any}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, minWidth: 130, transition: 'all 0.2s' }}
              >
                <img src={c.src} alt={c.name} width={100} height={48} loading="lazy" style={{ maxHeight: 48, maxWidth: 100, width: 'auto', objectFit: 'contain', display: 'block' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{c.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── tools ──────────────────────────────────────────────── */

function ToolsSection() {
  return (
    <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginBottom: 48 }}>
          <span style={{ color: '#34d399', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Free Resources</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Free Online Tools</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', margin: 0 }}>Powerful browser tools — no signup, no cost.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: 32 }}>
          {tools.map((t, i) => (
            <motion.a key={t.title} href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="glow-card" onMouseMove={glowHandler}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.14)' } as any}
              style={{ ...CARD, padding: 24, textDecoration: 'none', display: 'block', transition: 'all 0.2s' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${t.color}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <t.icon size={20} style={{ color: t.color }} />
              </div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                {t.title} <ExternalLink size={11} style={{ color: 'rgba(255,255,255,0.22)' }} />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.36)', lineHeight: 1.6 }}>{t.desc}</div>
            </motion.a>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center">
          <a href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '11px 24px', borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.09)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
          >
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
    <section style={{ background: BG, ...GRID, padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center" style={{ marginBottom: 56 }}>
          <span style={{ color: '#fb923c', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Simple Process</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.025em' }}>How It Works</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', margin: 0 }}>From first call to full automation.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((p, i) => (
            <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="glow-card" onMouseMove={glowHandler}
              style={{ ...CARD, padding: 28, textAlign: 'center', transition: 'border-color 0.2s' }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.14)' } as any}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', position: 'relative' }}>
                <p.icon size={24} style={{ color: 'rgba(255,255,255,0.45)' }} />
                <span style={{ position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#2563eb)', color: '#fff', fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.step}</span>
              </div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.36)', lineHeight: 1.65 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── cta ────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section style={{ background: BG, padding: '80px 32px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          style={{ background: 'linear-gradient(135deg,rgba(124,58,237,0.22) 0%,rgba(37,99,235,0.18) 100%)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 24, padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,58,237,0.28) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.025em' }}>Ready to Automate Your Business?</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.46)', maxWidth: 420, margin: '0 auto 36px', lineHeight: 1.75 }}>
              A free 30-minute call could change how your business handles data forever.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', color: '#fff', padding: '13px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 32px rgba(124,58,237,0.4)', transition: 'opacity 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Book a Free Call <ArrowRight size={16} />
              </a>
              <Link href="/contact"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '13px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
              >
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
