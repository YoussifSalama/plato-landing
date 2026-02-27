import JobSeekers from "@/page-components/JobSeekers";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildPageMetadata("jobSeekers", lang);
}

export default function JobSeekersPage() { return <JobSeekers />; }
