import Login from "@/page-components/Login";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("login", lang);
}

export default function LoginPage() { return <Login />; }
