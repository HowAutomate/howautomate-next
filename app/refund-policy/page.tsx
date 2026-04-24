import type { Metadata } from "next";
import RefundContent from "@/components/pages/RefundContent";

export const metadata: Metadata = {
  title: "Refund Policy | HowAutomate",
  description: "HowAutomate's refund policy. Understand our refund process and terms.",
  alternates: { canonical: "https://howautomate.com/refund-policy" },
};

export default function RefundPolicyPage() {
  return <RefundContent />;
}
