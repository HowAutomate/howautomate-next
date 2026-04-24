"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Sparkle, Heart, Clock, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tools = [
  { icon: FileText, label: "File to PDF Converter", color: "text-primary" },
  { icon: Sparkle, label: "UGC Content Creation", color: "text-emerald-600" },
  { icon: Heart, label: "BMI Calculator", color: "text-pink-500" },
  { icon: Clock, label: "DateTime ↔ Epoch Converter", color: "text-secondary" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Tools", href: "https://tools.howautomate.com", external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-2 md:py-3"
          : "py-3 md:py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between min-h-[64px] md:min-h-[88px]">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img src="/assets/logo-transparent.webp" alt="HowAutomate Logo" width={200} height={80} loading="eager" className={cn("w-auto max-w-none object-contain transition-all duration-300", isScrolled ? "h-11 md:h-16" : "h-14 md:h-24")} />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <div key={link.href} className="relative group">
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-1">
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-card rounded-xl border border-border shadow-lg p-3 w-64">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Available Tools</p>
                    {tools.map((tool) => (
                      <a key={tool.label} href="https://tools.howautomate.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-muted transition-colors">
                        <tool.icon className={cn("w-4 h-4", tool.color)} />
                        <span className="text-sm text-foreground font-medium">{tool.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-primary bg-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="bg-gradient-neon text-white hover:opacity-90 shadow-md shadow-primary/20 transition-all rounded-xl">
            <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
        </div>

        <button className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 mx-4 bg-card rounded-2xl p-4 border border-border shadow-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-xl text-sm font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted">
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    pathname === link.href
                      ? "text-primary bg-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-2 mt-2">
              <ThemeToggle />
              <Button asChild className="flex-1 bg-gradient-neon text-white rounded-xl">
                <a href="https://calendly.com/hello-howautomate/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
