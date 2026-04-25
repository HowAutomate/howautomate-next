"use client";
import { motion } from "framer-motion";
import { Award, Target, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

function glowHandler(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const techStack = [
  { name: "Power BI", emoji: "📊" }, { name: "Azure", emoji: "☁️" }, { name: "AWS", emoji: "🟠" },
  { name: "Python", emoji: "🐍" }, { name: "SnapLogic", emoji: "⚙️" }, { name: "SQL", emoji: "🗄️" },
  { name: "PostgreSQL", emoji: "🐘" }, { name: "Google Cloud", emoji: "🌩️" }, { name: "Spark", emoji: "⚡" },
  { name: "Docker", emoji: "🐳" }, { name: "React", emoji: "⚛️" }, { name: "GPT / AI", emoji: "🤖" },
];

const values = [
  { icon: Target, title: "Results First", desc: "Every decision we make is tied to measurable business outcomes for our clients." },
  { icon: Award, title: "Craft & Quality", desc: "We take pride in clean, well-documented, production-grade solutions." },
  { icon: Heart, title: "Long-term Partnership", desc: "We don't disappear after delivery — we grow with our clients over time." },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">About <span className="gradient-text">HowAutomate</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A lean, expert team on a mission to make automation accessible for every business we touch.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">HowAutomate was born out of a simple frustration: most businesses were sitting on mountains of data but had no way to actually use it. Reports were manual, processes were broken, and teams were drowning in spreadsheets instead of making decisions.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">We started as two brothers — one with a background in data analysis, the other in data engineering — combining forces to answer the one question every business owner asks: "How do I automate this?" We brought in marketing specialists to complete the picture, and HowAutomate became a full-service data and AI consultancy.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Today we serve clients across multiple countries, helping them automate workflows, build intelligent data pipelines, deploy AI agents, and migrate to the cloud — all with a personal, hands-on approach you won't get from a large agency.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/20 border-y border-border">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} onMouseMove={glowHandler} className="glass-card glow-card rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4"><v.icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/20 border-t border-border">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground">Our Tech Stack</h2>
            <p className="text-muted-foreground mt-2">Tools and platforms we work with every day</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} whileHover={{ scale: 1.05 }} onMouseMove={glowHandler} className="glass-card glow-card rounded-xl px-5 py-3 flex items-center gap-2">
                <span className="text-xl">{tech.emoji}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Built by a <span className="gradient-text">Data + Automation Expert</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Working hands-on with APIs, SQL, Power BI, cloud platforms, and AI workflows every day — building real automation that actually works for real businesses.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["APIs", "SQL", "Power BI", "Python", "AI Workflows", "Cloud Infrastructure", "ETL Pipelines"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium bg-accent border border-border text-foreground">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Want to Work With Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">We're selective about the projects we take on — which means you'll always get our best.</p>
            <Button asChild size="lg" className="bg-gradient-neon text-white rounded-xl shadow-lg shadow-primary/20 hover:opacity-90">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
