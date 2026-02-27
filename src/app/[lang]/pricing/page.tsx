import Pricing from "@/page-components/Pricing";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("pricing", lang);
}

export default function PricingPage() { return <Pricing />; }
