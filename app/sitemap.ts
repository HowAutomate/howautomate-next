import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { portfolioCases } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://howautomate.com";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/ai-automation-agency-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/clinic-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/real-estate-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/coaching-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ca-firm-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ecommerce-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/whatsapp-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = Object.keys(posts).map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = Object.keys(portfolioCases).map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...portfolioPages];
}
