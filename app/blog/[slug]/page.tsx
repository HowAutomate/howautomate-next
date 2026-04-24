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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  return <BlogPostContent post={post} slug={slug} />;
}
