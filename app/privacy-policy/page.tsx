import type { Metadata } from "next";
import PrivacyContent from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | HowAutomate",
  description: "HowAutomate's privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://howautomate.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
