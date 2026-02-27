import BlogPost from "@/page-components/BlogPost";
import { buildBlogPostMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  return buildBlogPostMetadata(lang, slug);
}

export default function BlogPostPage() { return <BlogPost />; }
