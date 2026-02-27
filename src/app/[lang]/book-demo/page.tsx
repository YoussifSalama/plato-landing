import BookDemo from "@/page-components/BookDemo";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("bookDemo", lang);
}

export default function BookDemoPage() { return <BookDemo />; }
