'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, FileText, Sparkle, Heart, Clock, ExternalLink, Braces } from 'lucide-react'
import logo from '@/assets/logo-transparent.webp'

const tools = [
  { icon: FileText, label: 'File to PDF Converter',       href: 'https://tools.howautomate.com' },
  { icon: Sparkle,  label: 'UGC Content Creation',        href: 'https://tools.howautomate.com' },
  { icon: Heart,    label: 'BMI Calculator',              href: 'https://tools.howautomate.com' },
  { icon: Clock,    label: 'DateTime ↔ Epoch',            href: 'https://tools.howautomate.com' },
  { icon: Braces,   label: 'JSON → TypeScript & Zod',     href: 'https://tools.howautomate.com/json-to-typescript-zod' },
]

const navLinks = [
  { label: 'Home',      href: '/'          },
  { label: 'Services',  href: '/services'  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog',      href: '/blog'      },
  { label: 'About',     href: '/about'     },
  { label: 'Contact',   href: '/contact'   },
  { label: 'Tools',     href: 'https://tools.howautomate.com', external: true },
]

const ACCENT = '#2563eb'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // light theme site-wide
  const idleColor  = 'rgba(22,24,16,0.6)'
  const hoverColor = '#181A12'
  const hoverBg    = 'rgba(22,24,16,0.05)'
  const panelBg    = 'rgba(255,255,255,0.98)'
  const panelBorder= '1px solid rgba(22,24,16,0.1)'

  const headerStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'rgba(249,248,244,0.95)' : 'rgba(249,248,244,0.82)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderBottom: '1px solid rgba(22,24,16,0.08)',
    transition: 'background 0.3s ease',
  }

  const linkBase: React.CSSProperties = {
    padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
    textDecoration: 'none', transition: 'all 0.15s', color: idleColor,
  }
  const linkActive: React.CSSProperties = {
    ...linkBase, color: ACCENT, background: 'rgba(37,99,235,0.1)',
  }
  const ctaStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', color: '#fff',
    padding: '9px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14,
    textDecoration: 'none', display: 'inline-block',
    boxShadow: '0 4px 16px rgba(37,99,235,0.35)', transition: 'opacity 0.15s',
  }

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', transition: 'opacity 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <img src={logo.src} alt="HowAutomate" fetchPriority="high" width={logo.width} height={logo.height} style={{ height: 60, width: 'auto', display: 'block' }} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link =>
            link.external ? (
              <div key={link.href} className="relative group">
                <a
                  href={link.href} target="_blank" rel="noopener noreferrer"
                  style={linkBase}
                  onMouseEnter={e => { e.currentTarget.style.color = hoverColor; e.currentTarget.style.background = hoverBg }}
                  onMouseLeave={e => { e.currentTarget.style.color = idleColor; e.currentTarget.style.background = 'transparent' }}
                  className="inline-flex items-center gap-1"
                >
                  {link.label} <ExternalLink size={12} />
                </a>
                {/* dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div style={{ background: panelBg, border: panelBorder, borderRadius: 14, padding: 10, width: 240, boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: idleColor, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px 8px' }}>Free Tools</p>
                    {tools.map(t => (
                      <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <t.icon size={15} style={{ color: ACCENT }} />
                        <span style={{ fontSize: 13, color: 'rgba(22,24,16,0.75)', fontWeight: 500 }}>{t.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href} href={link.href}
                style={pathname === link.href ? linkActive : linkBase}
                onMouseEnter={e => { if (pathname !== link.href) { e.currentTarget.style.color = hoverColor; e.currentTarget.style.background = hoverBg } }}
                onMouseLeave={e => { if (pathname !== link.href) { e.currentTarget.style.color = idleColor; e.currentTarget.style.background = 'transparent' } }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" style={ctaStyle}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Send Enquiry
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: idleColor, background: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div style={{ margin: '0 16px 16px', background: panelBg, border: panelBorder, borderRadius: 16, padding: 12 }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map(link =>
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ ...linkBase, display: 'block', padding: '10px 14px' }}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href}
                  style={pathname === link.href ? { ...linkActive, display: 'block', padding: '10px 14px' } : { ...linkBase, display: 'block', padding: '10px 14px' }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" style={{ ...ctaStyle, display: 'block', padding: '11px 14px', marginTop: 8, textAlign: 'center' }}>
              Send Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
