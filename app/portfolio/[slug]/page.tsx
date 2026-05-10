import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioCases, casesList } from "@/lib/portfolio";
import PortfolioPostContent from "@/components/pages/PortfolioPostContent";

export async function generateStaticParams() {
  return casesList.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = portfolioCases[slug];
  if (!c) return {};
  return {
    title: `${c.title} — Case Study | HowAutomate`,
    description: c.excerpt.slice(0, 160),
    alternates: { canonical: `https://howautomate.com/portfolio/${slug}` },
    openGraph: {
      title: c.title,
      description: c.excerpt.slice(0, 160),
      url: `https://howautomate.com/portfolio/${slug}`,
      images: [{ url: c.image, width: 1200, height: 630 }],
      type: "article",
    },
  };
}

export default async function PortfolioPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = portfolioCases[slug];
  if (!c) notFound();

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.excerpt,
    image: { "@type": "ImageObject", url: `https://howautomate.com${c.image}`, width: 1200, height: 630 },
    author: {
      "@type": "Person",
      name: "Amit Singh",
      url: "https://howautomate.com/about",
      sameAs: "https://www.linkedin.com/in/amit-singh-howautomate",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://howautomate.com/#organization",
      name: "HowAutomate",
      url: "https://howautomate.com",
      logo: { "@type": "ImageObject", url: "https://howautomate.com/favicon.png", width: 512, height: 512 },
    },
    url: `https://howautomate.com/portfolio/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://howautomate.com/portfolio/${slug}` },
    articleSection: c.category,
    keywords: [...c.tech, c.category, "HowAutomate", "case study"],
    inLanguage: "en",
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://howautomate.com/portfolio" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://howautomate.com/portfolio/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortfolioPostContent project={c} />
    </>
  );
}
