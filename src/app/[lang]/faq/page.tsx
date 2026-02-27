import FAQ from "@/page-components/FAQ";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("faq", lang);
}

export default function FAQPage() { return <FAQ />; }
