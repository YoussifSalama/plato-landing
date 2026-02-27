import Privacy from "@/page-components/Privacy";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("privacy", lang);
}

export default function PrivacyPage() { return <Privacy />; }
