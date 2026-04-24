"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, FileText, Clock, Phone, Users, Database, ShoppingCart, TrendingUp, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = { FileText, Clock, Phone, Users, Database, ShoppingCart, TrendingUp };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

interface PainPoint { icon: string; title: string; desc: string; }
interface Solution { title: string; desc: string; }

interface IndustryLandingProps {
  industry: string;
  headline: string;
  subheadline: string;
  painPoints: PainPoint[];
  solutions: Solution[];
  outcomes: { metric: string; label: string }[];
  ctaText?: string;
}

export default function IndustryLanding({ industry, headline, subheadline, painPoints, solutions, outcomes, ctaText = "Book a Free Discovery Call" }: IndustryLandingProps) {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 px-4 bg-grid">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" /> Built for {industry}
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">{headline}</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">{subheadline}</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-neon text-white shadow-lg shadow-primary/20 hover:opacity-90 rounded-xl px-8">
              <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">{ctaText}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
              <Link href="/contact">Send an Inquiry <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-destructive text-sm font-semibold uppercase tracking-widest">Common Challenges</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Sound Familiar?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  {(() => { const Icon = iconMap[p.icon]; return Icon ? <Icon className="w-5 h-5 text-destructive" /> : null; })()}
                </div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">How We Solve It</h2>
          </motion.div>
          <div className="space-y-6">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="flex gap-4 items-start glass-card rounded-xl p-6">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/20 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Expected Outcomes</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <motion.div key={o.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="glass-card rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{o.metric}</div>
                <p className="text-sm text-muted-foreground">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl p-12 text-center bg-gradient-neon shadow-xl shadow-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Automate Your {industry}?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Book a free 30-minute discovery call and we'll show you exactly where automation saves you the most time.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold shadow-md px-10">
                <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">{ctaText}</a>
              </Button>
              <Button asChild size="lg" className="bg-white/15 border border-white/50 text-white hover:bg-white/25 rounded-xl px-10">
                <Link href="/contact">Send an Inquiry</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
