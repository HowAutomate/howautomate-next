import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const SocialIcons = [
  {
    href: "https://www.linkedin.com/company/howautomate",
    label: "LinkedIn",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    href: "https://www.instagram.com/howautomate",
    label: "Instagram",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: "https://www.youtube.com/@HowAutomate",
    label: "YouTube",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/assets/logo-transparent.webp" alt="HowAutomate Logo" width={200} height={80} loading="lazy" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Helping businesses automate smarter. We build data pipelines, AI agents, and cloud infrastructure that let your team focus on what matters.
            </p>
            <div className="flex gap-3">
              {SocialIcons.map(({ href, svg, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-xl border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent transition-colors">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Data & Analytics", hash: "data" },
                { label: "AI & Automation", hash: "ai" },
                { label: "Cloud & Engineering", hash: "cloud" },
                { label: "Digital Marketing", hash: "marketing" },
              ].map((item) => (
                <li key={item.hash}>
                  <Link href={`/services#${item.hash}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {[
                { label: "Clinics", href: "/services/clinic-automation" },
                { label: "Real Estate", href: "/services/real-estate-automation" },
                { label: "Coaching", href: "/services/coaching-automation" },
                { label: "CA Firms", href: "/services/ca-firm-automation" },
                { label: "E-commerce", href: "/services/ecommerce-automation" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@howautomate.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />hello@howautomate.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919602094213" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />+91 96020 94213
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />Remote — Serving Globally
                </span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-sm text-muted-foreground mb-1">Get 10 free automation resources</p>
              <p className="text-xs text-muted-foreground/70 mb-2">Templates, scripts & AI prompts — straight to your inbox.</p>
              <NewsletterSignup variant="compact" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} HowAutomate. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
          </div>
          <p className="text-sm text-muted-foreground">GSTIN: 08CCZPD0661F1ZG</p>
        </div>
      </div>
    </footer>
  );
}
