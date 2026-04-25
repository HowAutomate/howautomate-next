'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, FileText, Sparkle, Heart, Clock, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo-transparent.webp'

const tools = [
  { icon: FileText, label: 'File to PDF Converter' },
  { icon: Sparkle,  label: 'UGC Content Creation'  },
  { icon: Heart,    label: 'BMI Calculator'         },
  { icon: Clock,    label: 'DateTime ↔ Epoch'       },
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

  const headerStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'rgba(7,4,15,0.92)' : 'rgba(7,4,15,0.7)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    transition: 'background 0.3s ease',
  }

  const linkBase: React.CSSProperties = {
    padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
    textDecoration: 'none', transition: 'all 0.15s',
    color: 'rgba(255,255,255,0.55)',
  }

  const linkActive: React.CSSProperties = {
    ...linkBase,
    color: '#a78bfa',
    background: 'rgba(167,139,250,0.1)',
  }

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', opacity: 1, transition: 'opacity 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <img src={logo.src} alt="HowAutomate" style={{ height: 60, width: 'auto', display: 'block' }} />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link =>
            link.external ? (
              <div key={link.href} className="relative group">
                <a
                  href={link.href} target="_blank" rel="noopener noreferrer"
                  style={linkBase}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent' }}
                  className="inline-flex items-center gap-1"
                >
                  {link.label} <ExternalLink size={12} />
                </a>
                {/* dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div style={{ background: 'rgba(15,10,30,0.96)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 10, width: 240, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px 8px' }}>Free Tools</p>
                    {tools.map(t => (
                      <a key={t.label} href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.15s' }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <t.icon size={15} style={{ color: '#a78bfa' }} />
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href} href={link.href}
                style={pathname === link.href ? linkActive : linkBase}
                onMouseEnter={e => { if (pathname !== link.href) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' } }}
                onMouseLeave={e => { if (pathname !== link.href) { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent' } }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)', color: '#fff', padding: '9px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 16px rgba(124,58,237,0.35)', transition: 'opacity 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Send Enquiry
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'rgba(255,255,255,0.6)', background: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div style={{ margin: '0 16px 16px', background: 'rgba(15,10,30,0.98)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 12 }}>
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
            <Link
              href="/contact"
              style={{ display: 'block', background: 'linear-gradient(135deg,#7c3aed,#2563eb)', color: '#fff', padding: '11px 14px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginTop: 8, textAlign: 'center' }}
            >
              Send Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
