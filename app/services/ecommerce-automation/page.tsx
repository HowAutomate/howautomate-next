import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "E-Commerce Automation — Inventory, Ads & Operations | HowAutomate",
  description: "Automate inventory management, PPC campaigns, order processing, and customer retention for D2C and e-commerce brands.",
  alternates: { canonical: "https://howautomate.com/services/ecommerce-automation" },
  openGraph: { type: "website", title: "E-Commerce Automation | HowAutomate", url: "https://howautomate.com/services/ecommerce-automation", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://howautomate.com/services/ecommerce-automation#service",
  name: "E-Commerce Automation — Inventory, Ads & Operations",
  description: "Automate inventory management, PPC campaigns, order processing, and customer retention for D2C and e-commerce brands in India.",
  url: "https://howautomate.com/services/ecommerce-automation",
  serviceType: "Business Process Automation",
  provider: { "@type": "Organization", "@id": "https://howautomate.com/#organization", name: "HowAutomate", url: "https://howautomate.com" },
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which marketplaces do you support for inventory sync?", acceptedAnswer: { "@type": "Answer", text: "We support Amazon India, Flipkart, Meesho, Myntra, Nykaa, and your own Shopify or WooCommerce store. Custom marketplace integrations are available on request." } },
    { "@type": "Question", name: "How does PPC automation work?", acceptedAnswer: { "@type": "Answer", text: "We build rules-based and AI-driven bidding logic for Amazon Sponsored Products/Brands and Google Shopping. Bids adjust automatically based on ACOS targets, conversion data, and inventory levels — so your budget always works hardest." } },
    { "@type": "Question", name: "Can you automate post-purchase customer flows?", acceptedAnswer: { "@type": "Answer", text: "Yes. We build post-purchase email and WhatsApp sequences for review requests, feedback collection, loyalty rewards, and win-back campaigns — fully automated based on order status and customer history." } },
    { "@type": "Question", name: "Do you work with Shopify specifically?", acceptedAnswer: { "@type": "Answer", text: "Yes. We have deep experience with Shopify automation including order management, inventory sync, discount automation, and integration with Indian payment gateways and logistics providers like Shiprocket and Delhivery." } },
    { "@type": "Question", name: "What size brand do you work with?", acceptedAnswer: { "@type": "Answer", text: "We work with brands doing ₹5L/month GMV and above. The automation approach and pricing scale with your needs — whether you're a single-SKU D2C brand or a multi-category marketplace seller." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://howautomate.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://howautomate.com/services" },
    { "@type": "ListItem", position: 3, name: "E-Commerce Automation", item: "https://howautomate.com/services/ecommerce-automation" },
  ],
};

export default function EcommerceAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryLanding
      industry="E-Commerce Brands"
      headline="Scale Your E-Commerce Brand with Data-Driven Automation"
      subheadline="From inventory sync to ad optimisation to customer retention — we automate the operations that eat your margins."
      description="Indian D2C and e-commerce brands are operating in an increasingly competitive environment. Selling on Amazon, Flipkart, Meesho, and your own website simultaneously creates operational complexity that manual processes simply cannot keep up with. Inventory errors, delayed order processing, and poor ad performance directly erode margins that are already under pressure.

HowAutomate works with e-commerce brands at every stage — from ₹10L/month GMV to ₹10Cr+ — to build automation that protects margins and enables scale. We sync inventory across all channels in real time, automate PPC campaign management to maximise ROAS, and build fulfilment workflows that cut order processing time dramatically.

Our data pipelines bring together sales, inventory, advertising, and customer data into unified dashboards, so founders and operations teams can make decisions based on real information. If you've hit a growth ceiling because your operations can't scale with your marketing, automation is the lever that breaks through."
      painPoints={[
        { icon: "ShoppingCart", title: "Inventory Sync Issues", desc: "Selling across Amazon, Flipkart, and your website means constant stock mismatches and overselling." },
        { icon: "TrendingUp", title: "Ad Spend Without Clarity", desc: "Running PPC campaigns but no clear view of ROAS, ACoS, or which SKUs are profitable." },
        { icon: "Database", title: "Order Processing Bottlenecks", desc: "Manual order routing, label printing, and tracking updates slow down fulfilment." },
      ]}
      solutions={[
        { title: "Multi-Channel Inventory Sync", desc: "Real-time inventory sync across all marketplaces and your website. Zero overselling, zero stockouts." },
        { title: "PPC Campaign Automation", desc: "AI-optimised bidding, keyword harvesting, and budget allocation across Amazon Sponsored Ads and Google Ads." },
        { title: "Order & Fulfilment Automation", desc: "Auto-route orders to the nearest warehouse, generate shipping labels, and send tracking updates." },
        { title: "Customer Retention Flows", desc: "Automated post-purchase emails, review requests, loyalty rewards, and win-back campaigns." },
      ]}
      outcomes={[
        { metric: "3.2×", label: "Sales growth via PPC" },
        { metric: "-60%", label: "Order processing time" },
        { metric: "+28%", label: "Customer repeat rate" },
      ]}
      faqs={[
        { q: "Which marketplaces do you support for inventory sync?", a: "We support Amazon India, Flipkart, Meesho, Myntra, Nykaa, and your own Shopify or WooCommerce store. Custom marketplace integrations are available on request." },
        { q: "How does PPC automation work?", a: "We build rules-based and AI-driven bidding logic for Amazon Sponsored Products/Brands and Google Shopping. Bids adjust automatically based on ACOS targets, conversion data, and inventory levels — so your budget always works hardest." },
        { q: "Can you automate post-purchase customer flows?", a: "Yes. We build post-purchase email and WhatsApp sequences for review requests, feedback collection, loyalty rewards, and win-back campaigns — fully automated based on order status and customer history." },
        { q: "Do you work with Shopify specifically?", a: "Yes. We have deep experience with Shopify automation including order management, inventory sync, discount automation, and integration with Indian payment gateways and logistics providers like Shiprocket and Delhivery." },
        { q: "What size brand do you work with?", a: "We work with brands doing ₹5L/month GMV and above. The automation approach and pricing scale with your needs — whether you're a single-SKU D2C brand or a multi-category marketplace seller." },
      ]}
    />
    </>
  );
}
