import Employers from "@/page-components/Employers";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("employers", lang);
}

export default function EmployersPage() { return <Employers />; }
