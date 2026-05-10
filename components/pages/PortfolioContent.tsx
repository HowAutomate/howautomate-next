"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

function glowHandler(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const x = e.clientX, y = e.clientY
  requestAnimationFrame(() => {
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${x - rect.left}px`)
    el.style.setProperty('--y', `${y - rect.top}px`)
  })
}

const categories = ["All", "Data", "AI", "Cloud", "Marketing"];

import { casesList } from "@/lib/portfolio";

const projects = casesList.map((c) => ({
  slug: c.slug,
  title: c.title,
  category: c.category,
  tech: c.tech,
  description: c.excerpt,
  image: c.image,
}));

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">Case <span className="gradient-text">Studies</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real projects. Real results. Browse our work across Data, AI, Cloud & Marketing.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4 bg-card border-b border-border">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-3">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-neon text-white shadow-md shadow-primary/20"
                  : "bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                onMouseMove={glowHandler}
                className="glass-card glow-card rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} width={400} height={192} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-border text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground border border-border">{t}</span>
                    ))}
                  </div>
                  <Button asChild size="sm" className="w-full bg-gradient-neon text-white hover:opacity-90 rounded-xl">
                    <Link href={`/portfolio/${project.slug}`}>View Case Study <ExternalLink className="ml-2 w-3 h-3" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
