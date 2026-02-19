import { useState } from "react";
import { Link, useParams } from "wouter";
import { useI18n } from "@/lib/i18n";
import { getPostBySlug, estimateReadTime } from "@/lib/blog";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/shared/Section";
import { ArrowLeft, Calendar, Clock, Copy, Check, User } from "lucide-react";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-disc ps-5 space-y-1 my-3">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal ps-5 space-y-1 my-3">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-2">
          {renderInline(line)}
        </p>
      );
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
      <Section className="pt-20 sm:pt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">Post not found.</p>
          <Link href={localePath("/blog")}>
            <Button variant="outline" className="mt-4">
              {p.backToBlog}
            </Button>
          </Link>
        </div>
      </Section>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section className="pt-16 sm:pt-24 lg:pt-28">
      <div className="max-w-3xl mx-auto">
        <Link href={localePath("/blog")}>
          <Button variant="ghost" size="sm" className="mb-6" data-testid="button-back-blog">
            <ArrowLeft className="w-4 h-4" />
            {p.backToBlog}
          </Button>
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4" data-testid="text-blog-post-title">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {estimateReadTime(post.content)} {p.minRead}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors ms-auto"
            data-testid="button-copy-link"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? p.linkCopied : p.shareLink}
          </button>
        </div>

        <article className="max-w-none">{renderMarkdown(post.content)}</article>
      </div>
    </Section>
  );
}
