import Blog from "@/page-components/Blog";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("blog", lang);
}

export default function BlogPage() { return <Blog />; }
