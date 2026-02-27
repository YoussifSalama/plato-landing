import Security from "@/page-components/Security";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("security", lang);
}

export default function SecurityPage() { return <Security />; }
