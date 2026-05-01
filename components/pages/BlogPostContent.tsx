"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import { type Post, posts } from "@/lib/posts";
import { postFaqs } from "@/lib/post-faqs";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const categoryStyle: Record<string, string> = {
  Data: "text-primary bg-accent border-primary/20",
  AI: "text-orange-400 bg-orange-950/40 border-orange-800/40",
  Cloud: "text-indigo-400 bg-indigo-950/40 border-indigo-800/40",
  Automation: "text-amber-400 bg-amber-950/40 border-amber-800/40",
  Marketing: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
};

function renderInline(text: string, keyPrefix: string) {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) result.push(text.slice(lastIndex, match.index));
    result.push(
      <a key={`${keyPrefix}-link-${match.index}`} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">{match[1]}</a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) result.push(text.slice(lastIndex));
  return result;
}

export default function BlogPostContent({ post, slug }: { post: Post; slug: string }) {
  const otherSlugs = Object.keys(posts).filter((s) => s !== slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} width={800} height={400} loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 max-w-3xl -mt-16 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryStyle[post.category]}`}>
            <Tag className="w-3 h-3 inline mr-1" />{post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />{post.readTime}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <span className="text-xs text-muted-foreground">• By <strong className="text-foreground">Amit Singh</strong></span>
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          {post.title}
        </motion.h1>

        <motion.p initial="hidden" animate="visible" custom={3} variants={fadeUp} className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary/30 pl-4 italic">
          {post.excerpt}
        </motion.p>

        <div className="space-y-8">
          {post.body.map((para, i) => {
            const headingMatch = para.match(/^\*\*([^*]+?)[\.\:\?]?\*\*\s*([\s\S]*)$/);
            if (headingMatch) {
              const heading = headingMatch[1].replace(/[\.\:\?]$/, "");
              const rest = headingMatch[2];
              const restParts = rest.split(/\*\*(.*?)\*\*/g);
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mt-4">{renderInline(heading, `h-${i}`)}</h2>
                  {rest.trim() && (
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed md:leading-loose">
                      {restParts.map((part, j) =>
                        j % 2 === 1
                          ? <strong key={j} className="text-foreground font-semibold">{renderInline(part, `${i}-${j}`)}</strong>
                          : <span key={j}>{renderInline(part, `${i}-${j}`)}</span>
                      )}
                    </p>
                  )}
                </motion.div>
              );
            }
            const parts = para.split(/\*\*(.*?)\*\*/g);
            return (
              <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-base md:text-lg text-foreground/80 leading-relaxed md:leading-loose">
                {parts.map((part, j) =>
                  j % 2 === 1
                    ? <strong key={j} className="text-foreground font-semibold">{renderInline(part, `${i}-${j}`)}</strong>
                    : <span key={j}>{renderInline(part, `${i}-${j}`)}</span>
                )}
              </motion.p>
            );
          })}
        </div>

        {postFaqs[slug] && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {postFaqs[slug].map((faq, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="rounded-xl border border-border bg-accent/30 p-5"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-14 rounded-2xl border border-border p-6 flex gap-5 items-start">
          <img src="/assets/amit-singh-howautomate.webp" alt="Amit Singh" width={64} height={64} loading="lazy" className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-primary/20" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          <div>
            <p className="text-sm font-semibold text-foreground">Amit Singh</p>
            <p className="text-xs text-muted-foreground mb-2">Founder, HowAutomate &mdash; Data Engineering, AI Automation &amp; Cloud Infrastructure</p>
            <p className="text-sm text-foreground/70 leading-relaxed">Amit has 6+ years of experience building data pipelines, AI agents, and automation systems for businesses across India and globally. He founded HowAutomate to make enterprise-grade automation accessible to growing businesses.</p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-8 rounded-2xl bg-accent/50 border border-border p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Get Weekly Automation Tips</h3>
          <p className="text-muted-foreground mb-4 text-sm">Real scripts, workflows, and AI tips — straight to your inbox.</p>
          <div className="flex justify-center">
            <NewsletterSignup variant="compact" />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-8 rounded-2xl bg-gradient-neon p-8 text-center shadow-lg shadow-primary/20">
          <h3 className="text-2xl font-bold text-white mb-3">Want us to implement this for you?</h3>
          <p className="text-white/80 mb-6">Book a free 30-minute discovery call and we'll map out exactly how to apply this to your business.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold">
              <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
            </Button>
            <Button asChild size="lg" className="bg-white/15 border border-white/50 text-white hover:bg-white/25 rounded-xl">
              <Link href="/contact">Send an Inquiry</Link>
            </Button>
          </div>
        </motion.div>

        {otherSlugs.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">More Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherSlugs.map((s) => {
                const related = posts[s];
                return (
                  <Link key={s} href={`/blog/${s}`} className="group glass-card glow-card rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300" onMouseMove={(e) => { const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect(); el.style.setProperty('--x', `${e.clientX - r.left}px`); el.style.setProperty('--y', `${e.clientY - r.top}px`) }}>
                    <img src={related.image} alt={related.title} width={400} height={128} loading="lazy" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryStyle[related.category]}`}>{related.category}</span>
                      <p className="text-sm font-semibold text-foreground mt-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">{related.title}</p>
                      <span className="text-xs text-primary font-medium mt-2 inline-flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
