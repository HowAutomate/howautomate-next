import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const SocialIcons = [
  {
    href: "https://www.linkedin.com/company/howautomate",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    href: "#",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    href: "#",
    svg: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
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
              {SocialIcons.map(({ href, svg }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-xl border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-accent transition-colors">
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
              <p className="text-sm text-muted-foreground mb-2">Weekly automation tips:</p>
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
