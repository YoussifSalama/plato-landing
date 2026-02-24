import { useState } from "react";
import { Link, useParams } from "wouter";
import { useI18n } from "@/lib/i18n";
import { getPostBySlug, getAllPosts, estimateReadTime } from "@/lib/blog";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { ArrowLeft, Calendar, Clock, ArrowRight, Bookmark, Share2, User } from "lucide-react";
import { config, getDemoLink } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let isFirstParagraph = true;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-foreground tracking-tight">
          {renderInline(line.slice(3))}
        </h2>
      );
      isFirstParagraph = false;
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-foreground">
          {renderInline(line.slice(4))}
        </h3>
      );
      isFirstParagraph = false;
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-disc ps-6 space-y-2 my-4">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      isFirstParagraph = false;
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal ps-6 space-y-2 my-4">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      isFirstParagraph = false;
      continue;
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-3" />);
    } else {
      if (isFirstParagraph) {
        elements.push(
          <p key={i} className="text-foreground font-semibold text-lg leading-relaxed my-3">
            {renderInline(line)}
          </p>
        );
        isFirstParagraph = false;
      } else {
        elements.push(
          <p key={i} className="text-muted-foreground leading-[1.8] my-3">
            {renderInline(line)}
          </p>
        );
      }
    }
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, localePath } = useI18n();
  const p = t.blogPage;
  const post = getPostBySlug(slug || "", lang);
  const [copied, setCopied] = useState(false);
  useSEO({
    title: post ? post.title : "Post Not Found",
    description: post ? post.summary : undefined,
  });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Post not found.</p>
          <Link href={localePath("/blog")}>
            <Button variant="outline" data-testid="button-back-blog-404">
              {p.backToBlog}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const allPosts = getAllPosts(lang);
  const relatedPosts = allPosts.filter((rp) => rp.slug !== post.slug).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          data-testid="img-blogpost-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 -mt-32 sm:-mt-40">
        <Link href={localePath("/blog")}>
          <Button variant="ghost" size="sm" className="mb-6" data-testid="button-back-blog">
            <ArrowLeft className="w-4 h-4" />
            {p.backToBlog}
          </Button>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full" data-testid="badge-blogpost-category">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-muted-foreground/40">&#8226;</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {estimateReadTime(post.content)} {p.minRead}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] mb-8" data-testid="text-blog-post-title">
          {post.title}
        </h1>

        <div className="flex items-center justify-between mb-10 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              <User className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground" data-testid="text-blogpost-author">{post.author}</p>
              <p className="text-xs text-muted-foreground">Plato</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Bookmark"
              data-testid="button-blogpost-bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleShare}
              aria-label={copied ? p.linkCopied : p.shareLink}
              data-testid="button-blogpost-share"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-none" data-testid="article-blogpost-content">
          {renderMarkdown(post.content)}
        </article>

        {/* Related Topics */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-4" data-testid="text-related-topics">{p.relatedTopics}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                data-testid={`badge-topic-${tag.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedPosts.length > 0 && (
        <section className="mt-20 pb-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" data-testid="text-related-blogs-title">
                {p.relatedBlogs} <span className="text-blue-500">{p.relatedBlogsHighlight}</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8">{p.relatedBlogsSubtitle}</p>
            </ScrollReveal>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {relatedPosts.map((rp, i) => (
                <ScrollReveal key={rp.slug} animation="fade-up" delay={i % 4}>
                  <Link href={localePath(`/blog/${rp.slug}`)}>
                    <div
                      className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start group cursor-pointer"
                      data-testid={`card-related-${rp.slug}`}
                    >
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 ltr:left-3 rtl:right-3 bg-blue-600 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                          {rp.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(rp.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-muted-foreground/40">&#8226;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {estimateReadTime(rp.content)} {p.minRead}
                        </span>
                      </div>
                      <h3 className="text-base font-bold tracking-tight leading-snug mb-2 text-foreground line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                        {rp.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <User className="w-3 h-3" />
                          {rp.author}
                        </span>
                        <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:gap-2 transition-all" data-testid={`link-related-readmore-${rp.slug}`}>
                          {p.readMore} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <ScrollReveal animation="scale-up">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#0d2847] py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8" data-testid="text-blogpost-cta-title">
                {p.readyToTransform}<br />
                {p.yourHiringProcess} <span className="text-white">{p.hiringProcessBold}</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href={config.employerAppUrl} data-testid="link-blogpost-cta-start-trial">
                  <Button size="lg" variant="outline" className="rounded-full" data-testid="button-blogpost-cta-start-trial">
                    {p.startFreeTrial}
                  </Button>
                </a>
                <a href={getDemoLink()} data-testid="link-blogpost-cta-request-demo">
                  <Button size="lg" className="rounded-full" data-testid="button-blogpost-cta-request-demo">
                    {t.footerSection.requestDemo}
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center opacity-30">
              <svg viewBox="0 0 200 200" className="w-48 h-48 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="100" r="60" strokeDasharray="8 8" />
                <circle cx="100" cy="100" r="40" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="20" />
                <circle cx="160" cy="60" r="6" fill="currentColor" />
                <circle cx="150" cy="150" r="4" fill="currentColor" />
                <circle cx="50" cy="140" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="border-t border-border pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            <div>
              <div className="flex items-center gap-1" style={{ direction: "ltr" }}>
                <div className="h-8 sm:h-9 overflow-hidden flex-shrink-0" style={{ width: '28px' }}>
                  <img src="/images/plato-logo.png" alt="" className="h-full w-auto max-w-none" />
                </div>
                <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Roc Grotesk', sans-serif" }}>Plato</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.companyTitle}</h4>
              <ul className="space-y-2.5">
                <li><Link href={localePath("/employers")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.about}</span></Link></li>
                <li><Link href={localePath("/pricing")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Pricing</span></Link></li>
                <li><Link href={localePath("/blog")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.blog}</span></Link></li>
                <li><Link href={localePath("/faq")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">FAQs</span></Link></li>
                <li><Link href={localePath("/contact")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footer.contact}</span></Link></li>
                <li><Link href={localePath("/testimonials")}><span className="text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{t.footerSection.customerStories}</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.contactsTitle}</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:info@plato.com" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">info@Plato.com</a></li>
                <li><a href="tel:+20101245567" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors" dir="ltr">+20101245567</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.readyToGrow}</h4>
              <div className="flex flex-col gap-3">
                <a href={config.employerAppUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full w-full px-6">{t.footer.startForFree}</Button>
                </a>
                <a href={getDemoLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full w-full px-6">{t.footer.requestDemo}</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <Link href={localePath("/terms")}><span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">{t.footer.termsAndConditions}</span></Link>
              <span className="text-xs text-muted-foreground/40">·</span>
              <Link href={localePath("/privacy")}><span className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer">{t.footer.privacy}</span></Link>
              <div className="flex items-center gap-3 ltr:ml-4 rtl:mr-4">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="X"><FaXTwitter className="w-3.5 h-3.5" /></a>
                <a href="https://www.instagram.com/platohiring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="Instagram"><SiInstagram className="w-3.5 h-3.5" /></a>
                <a href="https://www.tiktok.com/@platohiring" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="TikTok"><SiTiktok className="w-3.5 h-3.5" /></a>
                {config.linkedinUrl && (
                  <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 hover:text-foreground transition-colors" aria-label="LinkedIn"><SiLinkedin className="w-3.5 h-3.5" /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
