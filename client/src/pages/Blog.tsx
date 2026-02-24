import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts, getAllCategories, estimateReadTime } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { config, getDemoLink } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Blog() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.blog.title, description: t.meta.pages.blog.description });
  const p = t.blogPage;
  const allPosts = getAllPosts(lang);
  const allCategories = getAllCategories(lang);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, search, activeCategory]);

  const featuredPost = filtered[0];
  const gridPosts = filtered.slice(1);

  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <div className="absolute left-0 right-0 hidden dark:block pointer-events-none z-0" aria-hidden="true" style={{ top: "-60px", height: "700px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[130%] h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.45),rgba(30,160,226,0.15)_40%,transparent_70%)]" style={{ top: "0px" }} />
        <div className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[480px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.3),transparent_60%)]" style={{ top: "0px" }} />
      </div>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 z-[1]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" data-testid="text-blog-title">
                {p.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{p.subtitle}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={2}>
            <div className="flex items-center max-w-lg mx-auto mb-10 bg-card border border-border rounded-full px-2 py-1.5">
              <Input
                type="search"
                placeholder={p.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-0 bg-transparent shadow-none focus-visible:ring-0 h-9 flex-1"
                data-testid="input-blog-search"
              />
              <Button
                className="rounded-full h-9 px-6"
                onClick={() => {}}
                data-testid="button-blog-search"
              >
                {p.searchButton}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={3}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory("")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  !activeCategory
                    ? "bg-blue-600 text-white"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
                data-testid="badge-blog-all"
              >
                {p.allTags}
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? "" : cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                  data-testid={`badge-blog-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative z-[1] pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <ScrollReveal animation="fade-up">
              <Link href={localePath(`/blog/${featuredPost.slug}`)}>
                <div className="group rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors" data-testid={`card-blog-featured-${featuredPost.slug}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[260px] lg:h-[380px] overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 ltr:left-4 rtl:right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {featuredPost.author}
                        </span>
                        <span className="text-muted-foreground/40">&#8226;</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(featuredPost.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-muted-foreground/40">&#8226;</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {estimateReadTime(featuredPost.content)} {p.minRead}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-4 text-foreground">
                        {featuredPost.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                        {featuredPost.summary}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-blue-500 text-sm font-medium group-hover:gap-2.5 transition-all">
                        {p.readFullArticle} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {gridPosts.length > 0 && (
        <section className="relative z-[1] pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridPosts.map((post, i) => (
                <ScrollReveal key={post.slug} animation="fade-up" delay={i % 4}>
                  <Link href={localePath(`/blog/${post.slug}`)}>
                    <div className="group rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors h-full flex flex-col" data-testid={`card-blog-${post.slug}`}>
                      <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 ltr:left-4 rtl:right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="text-muted-foreground/40">&#8226;</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {estimateReadTime(post.content)} {p.minRead}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug mb-2 text-foreground">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.summary}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:gap-2 transition-all">
                            {p.readMore} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Posts */}
      {filtered.length === 0 && (
        <section className="relative z-[1] pb-16">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="text-center text-muted-foreground py-12" data-testid="text-blog-no-posts">
              {p.noPosts}
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
        <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#0a3d6b] via-[#0b4d85] to-[#0d5a9e] overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <svg className="absolute right-0 top-0 w-[60%] h-full" viewBox="0 0 600 400" fill="none">
              <circle cx="450" cy="200" r="150" stroke="white" strokeWidth="1" opacity="0.3" />
              <circle cx="450" cy="200" r="100" stroke="white" strokeWidth="1" opacity="0.2" />
              <circle cx="450" cy="200" r="50" stroke="white" strokeWidth="1" opacity="0.15" />
              <path d="M350 50 L550 250 L350 350" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none" />
              <path d="M400 100 L500 200 L400 300" stroke="white" strokeWidth="1" opacity="0.15" fill="none" />
              <rect x="480" y="80" width="80" height="80" rx="8" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
              <polygon points="520,130 540,170 500,170" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
            </svg>
          </div>
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-blog-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={config.employerAppUrl} data-testid="button-blog-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {t.blogPage.startFreeTrial}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="button-blog-request-demo">
                    <Button variant="outline" size="lg" className="rounded-full text-white border-white/40 hover:bg-white/10 no-default-hover-elevate">
                      {t.footerSection.requestDemo}
                    </Button>
                  </a>
                </div>
              </div>
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
