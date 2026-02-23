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
            <div className="flex items-center gap-0 max-w-lg mx-auto mb-10">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder={p.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-e-none border-e-0 h-11 bg-card"
                  data-testid="input-blog-search"
                />
              </div>
              <Button
                className="rounded-s-none h-11 px-6"
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
                <div className="group rounded-2xl overflow-hidden bg-card border border-border cursor-pointer hover:border-blue-500/30 transition-colors" data-testid={`card-blog-featured-${featuredPost.slug}`}>
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
                    <div className="group rounded-2xl overflow-hidden bg-card border border-border cursor-pointer hover:border-blue-500/30 transition-colors h-full flex flex-col" data-testid={`card-blog-${post.slug}`}>
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
      <ScrollReveal animation="scale-up">
        <section className="relative overflow-hidden">
          <a href={config.employerAppUrl} data-testid="button-blog-start-trial" className="block">
            <img
              src="/images/cta-banner.png"
              alt="Ready to transform your hiring process? Start Free Trial or Request Demo"
              className="w-full h-auto"
              data-testid="img-blog-cta"
            />
          </a>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.product}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-changelog">{t.footerSection.changelog}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-customer-stories">{t.footerSection.customerStories}</span></li>
                  <li><a href={localePath("/security")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog-footer-security">{t.footerSection.security}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-chrome">{t.footerSection.chromeExtension} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-ios">{t.footerSection.iosApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-android">{t.footerSection.androidApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-zapier">{t.footerSection.zapier} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-integromat">{t.footerSection.integromat} ↗</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.company}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-about">{t.footerSection.about}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-careers">{t.footerSection.careers}</span></li>
                  <li><a href={localePath("/blog")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog-footer-blog">{t.footerSection.blog}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-startup-program">{t.footerSection.startupProgram}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.platoFor}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-startups">{t.footerSection.startups}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-agencies">{t.footerSection.agencies}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.support}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-help-center">{t.footerSection.helpCenter}</span></li>
                  <li><a href={localePath("/contact")} className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog-footer-support">{t.footerSection.talkToSupport}</a></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-api-docs">{t.footerSection.apiDocs} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog-footer-system-status">{t.footerSection.systemStatus} ↗</span></li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.readyToBuild}</h4>
                <div className="flex flex-col gap-3">
                  <a href={config.employerAppUrl} data-testid="link-blog-footer-start-free">
                    <Button className="w-full rounded-full" size="lg" data-testid="button-blog-footer-start-free">
                      {t.footerSection.startForFree}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="link-blog-footer-request-demo">
                    <Button variant="outline" className="w-full rounded-full" size="lg" data-testid="button-blog-footer-request-demo">
                      {t.footerSection.requestDemo}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70" data-testid="text-blog-copyright">
              {t.footerSection.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a href={localePath("/terms")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-blog-footer-terms">
                {t.footerSection.termsAndConditions}
              </a>
              <span className="text-muted-foreground/30">·</span>
              <a href={localePath("/privacy")} className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-blog-footer-privacy">
                {t.footerSection.privacyPolicy}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {config.linkedinUrl && (
                <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn" data-testid="link-blog-footer-linkedin">
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
              <a href="https://www.instagram.com/platohiring?igsh=M2puazltZDQxOXFu&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram" data-testid="link-blog-footer-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@platohiring?_r=1&_t=ZN-948glBbZIgA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok" data-testid="link-blog-footer-tiktok">
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
