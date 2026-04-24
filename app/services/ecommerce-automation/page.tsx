import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "E-Commerce Automation — Inventory, Ads & Operations | HowAutomate",
  description: "Automate inventory management, PPC campaigns, order processing, and customer retention for D2C and e-commerce brands.",
  alternates: { canonical: "https://howautomate.com/services/ecommerce-automation" },
  openGraph: { type: "website", title: "E-Commerce Automation | HowAutomate", url: "https://howautomate.com/services/ecommerce-automation" },
};

export default function EcommerceAutomationPage() {
  return (
    <IndustryLanding
      industry="E-Commerce Brands"
      headline="Scale Your E-Commerce Brand with Data-Driven Automation"
      subheadline="From inventory sync to ad optimisation to customer retention — we automate the operations that eat your margins."
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
    />
  );
}
