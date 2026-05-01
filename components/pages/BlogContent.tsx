"use client";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { postsList } from "@/lib/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const categories = ["All", "Data", "AI", "Cloud", "Automation", "Marketing"];

const categoryStyle: Record<string, string> = {
  Data: "text-primary bg-accent border-primary/20",
  AI: "text-orange-400 bg-orange-950/40 border-orange-800/40",
  Cloud: "text-indigo-400 bg-indigo-950/40 border-indigo-800/40",
  Automation: "text-amber-400 bg-amber-950/40 border-amber-800/40",
  Marketing: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
};

function glowHandler(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? postsList : postsList.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <section className="relative py-20 px-4 text-center bg-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Automation Guides</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-foreground">AI & Automation <span className="gradient-text">Blog</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Practical guides on workflow automation, AI agents, ETL pipelines, and digital marketing — written by our team for founders, analysts, and developers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-4 bg-card border-b border-border">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                onMouseMove={glowHandler}
                className="glass-card glow-card rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} width={400} height={192} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryStyle[post.category] || "text-muted-foreground bg-muted/90 border-border"}`}>
                    <Tag className="w-3 h-3 inline mr-1" />{post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-2 leading-tight text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-3xl p-10 border border-primary/15">
            <h2 className="text-3xl font-bold mb-3 text-foreground">Get Automation Insights in Your Inbox</h2>
            <p className="text-muted-foreground mb-6">New articles, case studies, and practical guides — delivered monthly.</p>
            <Button asChild size="lg" className="bg-gradient-neon text-white rounded-xl shadow-md shadow-primary/20 hover:opacity-90">
              <Link href="/contact">Subscribe via Contact Form</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
