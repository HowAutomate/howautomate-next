import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import BlogPostContent from "@/components/pages/BlogPostContent";

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | HowAutomate Blog`,
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
    image: `https://howautomate.com${post.image}`,
    datePublished: toISODate(post.date),
    dateModified: toISODate(post.date),
    author: { "@type": "Person", name: "Amit Singh", url: "https://howautomate.com/about", jobTitle: "Founder, HowAutomate" },
    publisher: { "@type": "Organization", name: "HowAutomate", logo: { "@type": "ImageObject", url: "https://howautomate.com/assets/logo-transparent.webp" } },
    url: `https://howautomate.com/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://howautomate.com/blog/${slug}` },
    keywords: post.category,
    wordCount: post.body.join(" ").split(/\s+/).length,
    inLanguage: "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPostContent post={post} slug={slug} />
    </>
  );
}
