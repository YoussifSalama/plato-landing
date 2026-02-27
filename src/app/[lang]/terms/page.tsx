import Terms from "@/page-components/Terms";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("terms", lang);
}

export default function TermsPage() { return <Terms />; }
