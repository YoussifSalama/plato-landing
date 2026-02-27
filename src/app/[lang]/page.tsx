import Home from "@/page-components/Home";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("home", lang);
}

export default function HomePage() { return <Home />; }
