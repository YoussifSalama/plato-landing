import Testimonials from "@/page-components/Testimonials";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("testimonials", lang);
}

export default function TestimonialsPage() { return <Testimonials />; }
