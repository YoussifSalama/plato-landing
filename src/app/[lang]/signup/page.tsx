import Signup from "@/page-components/Signup";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("signup", lang);
}

export default function SignupPage() { return <Signup />; }
