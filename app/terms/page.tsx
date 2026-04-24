import type { Metadata } from "next";
import TermsContent from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | HowAutomate",
  description: "HowAutomate's terms of service. Read our terms and conditions for using our services.",
  alternates: { canonical: "https://howautomate.com/terms" },
};

export default function TermsPage() {
  return <TermsContent />;
}
