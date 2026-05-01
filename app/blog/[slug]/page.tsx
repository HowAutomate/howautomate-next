import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { postFaqs } from "@/lib/post-faqs";
import BlogPostContent from "@/components/pages/BlogPostContent";

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | HowAutomate`,
    description: post.excerpt,
    alternates: { canonical: `https://howautomate.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://howautomate.com/blog/${slug}`,
      images: [{ url: post.image }],
      type: "article",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

function toISODate(humanDate: string): string {
  const d = new Date(humanDate);
  return isNaN(d.getTime()) ? humanDate : d.toISOString().split("T")[0];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: { "@type": "ImageObject", url: `https://howautomate.com${post.image}`, width: 1200, height: 630 },
    datePublished: toISODate(post.date),
    dateModified: toISODate(post.date),
    author: {
      "@type": "Person",
      name: "Amit Singh",
      url: "https://howautomate.com/about",
      sameAs: "https://www.linkedin.com/in/amit-singh-howautomate",
      jobTitle: "Founder, HowAutomate",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://howautomate.com/#organization",
      name: "HowAutomate",
      url: "https://howautomate.com",
      logo: { "@type": "ImageObject", url: "https://howautomate.com/favicon.png", width: 512, height: 512 },
    },
    url: `https://howautomate.com/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://howautomate.com/blog/${slug}` },
    keywords: [post.category],
    wordCount: post.body.join(" ").split(/\s+/).length,
    inLanguage: "en",
    isAccessibleForFree: true,
    articleSection: post.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://howautomate.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://howautomate.com/blog/${slug}` },
    ],
  };

  const faqs = postFaqs[slug];
  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <BlogPostContent post={post} slug={slug} />
    </>
  );
}
