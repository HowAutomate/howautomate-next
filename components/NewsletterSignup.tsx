"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.srv1198552.hstgr.cloud/webhook/62816a0f-20e1-4933-9cb4-87c40199f9ef";

interface NewsletterSignupProps {
  variant?: "inline" | "compact" | "leadmagnet";
}

export default function NewsletterSignup({ variant = "inline" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const source = variant === "leadmagnet" ? "resource_pack" : variant === "compact" ? "footer" : "weekly_subscribe";
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      toast({ title: "You're in! 🎉", description: variant === "leadmagnet" ? "Check your email for the Resource Pack!" : "We'll send you the best automation tips every week." });
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
        <Input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-muted/50 border-border rounded-xl text-sm h-9" />
        <Button type="submit" size="sm" disabled={loading} className="bg-gradient-neon text-white rounded-xl hover:opacity-90 px-4 h-9">
          <Mail className="w-3.5 h-3.5" />
        </Button>
      </form>
    );
  }

  if (variant === "leadmagnet") {
    return (
      <section className="py-24 px-4 bg-accent/30 border-y border-border">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />Free Resource
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Free Automation <span className="gradient-text">Resource Pack</span></h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">10 real automation workflows that save 10+ hours/week — including API scripts, Power BI templates, and campaign bid automation.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="rounded-xl h-12 text-base" />
              <Button type="submit" size="lg" disabled={loading} className="bg-gradient-neon text-white rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 px-8 h-12">
                Download Free Pack <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-background border-y border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">Get 1 Automation Idea Every Week</h2>
          <p className="text-muted-foreground mb-8">Real scripts, workflows, and AI tips — straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="rounded-xl h-12 text-base" />
            <Button type="submit" size="lg" disabled={loading} className="bg-gradient-neon text-white rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 px-8 h-12">
              Subscribe <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
