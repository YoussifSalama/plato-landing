import HowItWorks from "@/page-components/HowItWorks";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("howItWorks", lang);
}

export default function HowItWorksPage() { return <HowItWorks />; }
