import Contact from "@/page-components/Contact";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("contact", lang);
}

export default function ContactPage() { return <Contact />; }
