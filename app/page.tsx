import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "HowAutomate — Data, AI & Automation for Modern Businesses",
  description: "HowAutomate helps businesses automate workflows, build data pipelines, deploy AI agents, and migrate to the cloud. Book a free call today.",
  openGraph: {
    title: "HowAutomate — Data, AI & Automation for Modern Businesses",
    description: "HowAutomate helps businesses automate workflows, build data pipelines, deploy AI agents, and migrate to the cloud. Book a free call today.",
    url: "https://howautomate.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
