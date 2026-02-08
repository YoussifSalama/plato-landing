import { useState, useMemo } from "react";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts, getAllTags, estimateReadTime } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import { Search, Calendar, Clock } from "lucide-react";

export default function Blog() {
  const { t, lang, localePath } = useI18n();
  useSEO({ title: t.meta.pages.blog.title, description: t.meta.pages.blog.description });
  const p = t.blogPage;
  const allPosts = getAllPosts(lang);
  const allTags = getAllTags(lang);

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.summary.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [allPosts, search, activeTag]);

  return (
    <Section className="pt-20 sm:pt-28 lg:pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-blog-title">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{p.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={p.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ps-9"
              data-testid="input-blog-search"
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge
              variant={!activeTag ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setActiveTag("")}
              data-testid="badge-blog-all"
            >
              {p.allTags}
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
                data-testid={`badge-blog-tag-${tag}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12" data-testid="text-blog-no-posts">
            {p.noPosts}
          </p>
        ) : (
          <div className="space-y-6">
            {filtered.map((post) => (
              <Link key={post.slug} href={localePath(`/blog/${post.slug}`)}>
                <Card className="hover-elevate overflow-visible cursor-pointer" data-testid={`card-blog-${post.slug}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {estimateReadTime(post.content)} {p.minRead}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
