"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { casesList } from "@/lib/portfolio";
import type { PortfolioCase } from "@/lib/portfolio";

const catColor: Record<string, string> = {
  AI:        "text-orange-600 bg-orange-50 border-orange-200",
  Data:      "text-primary bg-accent border-primary/20",
  Cloud:     "text-indigo-600 bg-indigo-50 border-indigo-200",
  Marketing: "text-emerald-600 bg-emerald-50 border-emerald-200",
};

export default function PortfolioPostContent({ project }: { project: PortfolioCase }) {
  const related = casesList
    .filter((c) => c.slug !== project.slug && c.category === project.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#EEF3FE 0%,#F8F8F4 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(37,99,235,0.10)' }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(14,165,233,0.10)' }} />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${catColor[project.category] ?? 'bg-muted text-muted-foreground border-border'}`}>
              {project.category}
            </span>
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground border border-border">{t}</span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">{project.excerpt}</p>

          {/* metrics strip */}
          <div className="flex flex-wrap gap-6">
            {project.outcomes.map((o) => (
              <div key={o.label} style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(37,99,235,0.14)', borderRadius: 14, padding: '16px 24px', boxShadow: '0 2px 10px rgba(37,99,235,0.05)' }}>
                <div className="text-2xl font-extrabold" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {o.metric}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: 480 }}>
        <img
          src={project.image}
          alt={project.title}
          width={1200}
          height={480}
          className="w-full object-cover"
          style={{ maxHeight: 480 }}
        />
      </div>

      {/* ── BODY ── */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* problem */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>

            {/* solution */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">What We Built</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            {/* body paragraphs */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">How It Works</h2>
              <div className="space-y-4">
                {project.body.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </section>

          </div>

          {/* sidebar */}
          <aside className="space-y-6">

            {/* outcomes */}
            <div style={{ background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.16)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-bold text-foreground mb-4">Results at a Glance</h3>
              <ul className="space-y-3">
                {project.outcomes.map((o) => (
                  <li key={o.label} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-foreground text-sm">{o.metric}</div>
                      <div className="text-xs text-muted-foreground">{o.label}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* tech stack */}
            <div style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.08)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-bold text-foreground mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1.5 rounded-lg bg-muted text-muted-foreground border border-border font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.10),rgba(14,165,233,0.06))', border: '1px solid rgba(37,99,235,0.18)', borderRadius: 16, padding: 24 }}>
              <h3 className="font-bold text-foreground mb-2">Want similar results?</h3>
              <p className="text-sm text-muted-foreground mb-4">Book a free 30-minute discovery call and we'll scope your project.</p>
              <Button asChild className="w-full bg-gradient-neon text-white hover:opacity-90 rounded-xl">
                <Link href="/contact">Request Similar Work</Link>
              </Button>
            </div>

          </aside>
        </div>

        {/* ── RELATED CASE STUDIES ── */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">More {project.category} Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/portfolio/${r.slug}`}
                  className="glass-card glow-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 block"
                  onMouseMove={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    const x = e.clientX, y = e.clientY;
                    requestAnimationFrame(() => {
                      const rect = el.getBoundingClientRect();
                      el.style.setProperty("--x", `${x - rect.left}px`);
                      el.style.setProperty("--y", `${y - rect.top}px`);
                    });
                  }}
                >
                  <div className="h-36 overflow-hidden">
                    <img src={r.image} alt={r.title} width={400} height={144} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm text-foreground mb-2 leading-snug">{r.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {r.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

    </main>
  );
}
