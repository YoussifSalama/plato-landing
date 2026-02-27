import type { Metadata } from "next";
import { en } from "@/lib/translations/en";
import { ar } from "@/lib/translations/ar";
import { getPostBySlug } from "@/lib/blog";

type Lang = "en" | "ar";

const SITE_URL = "https://platohiring.com";
const SITE_NAME = "Plato";
const OG_IMAGE = "/images/og-default.png";

type SeoPageKey =
  | "home"
  | "employers"
  | "jobSeekers"
  | "howItWorks"
  | "blog"
  | "faq"
  | "contact"
  | "security"
  | "privacy"
  | "terms"
  | "pricing"
  | "bookDemo"
  | "login"
  | "signup"
  | "testimonials";

const PATH_BY_PAGE: Record<SeoPageKey, string> = {
  home: "/",
  employers: "/employers",
  jobSeekers: "/job-seekers",
  howItWorks: "/how-it-works",
  blog: "/blog",
  faq: "/faq",
  contact: "/contact",
  security: "/security",
  privacy: "/privacy",
  terms: "/terms",
  pricing: "/pricing",
  bookDemo: "/book-demo",
  login: "/login",
  signup: "/signup",
  testimonials: "/testimonials",
};

const KEYWORDS: Record<Lang, Record<SeoPageKey, string[]>> = {
  en: {
    home: ["AI hiring platform", "hiring automation software", "candidate screening"],
    employers: ["recruitment automation for employers", "resume screening software", "structured interviews"],
    jobSeekers: ["AI job matching", "job seeker platform", "resume and interview preparation"],
    howItWorks: ["how AI hiring works", "automated recruitment workflow", "candidate evaluation process"],
    blog: ["hiring blog", "recruitment insights", "HR trends"],
    faq: ["hiring platform FAQ", "Plato FAQ", "recruitment software questions"],
    contact: ["contact Plato", "book hiring consultation", "recruitment platform support"],
    security: ["hiring data security", "HR data protection", "recruitment platform security"],
    privacy: ["Plato privacy policy", "candidate data privacy", "GDPR hiring software"],
    terms: ["Plato terms and conditions", "hiring platform terms", "recruitment SaaS terms"],
    pricing: ["hiring software pricing", "recruitment platform plans", "AI hiring pricing"],
    bookDemo: ["book hiring software demo", "request Plato demo", "AI recruitment demo"],
    login: ["Plato login", "employer login", "job seeker login"],
    signup: ["create Plato account", "start hiring software trial", "recruitment platform signup"],
    testimonials: ["hiring software testimonials", "Plato customer stories", "recruitment case studies"],
  },
  ar: {
    home: ["منصة توظيف بالذكاء الاصطناعي", "أتمتة التوظيف", "فرز المرشحين"],
    employers: ["أتمتة التوظيف للشركات", "فرز السير الذاتية", "مقابلات مهيكلة"],
    jobSeekers: ["منصة للباحثين عن عمل", "مطابقة الوظائف بالذكاء الاصطناعي", "تحسين السيرة الذاتية"],
    howItWorks: ["كيف يعمل التوظيف الذكي", "خطوات أتمتة التوظيف", "تقييم المرشحين"],
    blog: ["مدونة التوظيف", "رؤى الموارد البشرية", "اتجاهات التوظيف"],
    faq: ["الأسئلة الشائعة عن بلاتو", "أسئلة منصة التوظيف", "دعم التوظيف"],
    contact: ["تواصل مع بلاتو", "دعم منصة التوظيف", "استشارة توظيف"],
    security: ["أمان بيانات التوظيف", "حماية بيانات الموارد البشرية", "تشفير البيانات"],
    privacy: ["سياسة الخصوصية بلاتو", "خصوصية بيانات المرشحين", "حماية البيانات"],
    terms: ["الشروط والأحكام بلاتو", "شروط منصة التوظيف", "اتفاقية استخدام"],
    pricing: ["أسعار منصة التوظيف", "باقات بلاتو", "تكلفة التوظيف بالذكاء الاصطناعي"],
    bookDemo: ["احجز عرضاً تجريبياً", "طلب ديمو بلاتو", "ديمو أتمتة التوظيف"],
    login: ["تسجيل الدخول بلاتو", "دخول أصحاب العمل", "دخول الباحثين عن عمل"],
    signup: ["إنشاء حساب بلاتو", "ابدأ تجربة مجانية", "التسجيل في منصة التوظيف"],
    testimonials: ["آراء العملاء", "قصص نجاح التوظيف", "تجارب استخدام بلاتو"],
  },
};

function getLang(lang: string): Lang {
  return lang === "ar" ? "ar" : "en";
}

function getTranslations(lang: Lang) {
  return lang === "ar" ? ar : en;
}

function localizedPath(lang: Lang, path: string): string {
  if (lang === "ar") {
    return `/ar${path === "/" ? "" : path}`;
  }
  return path;
}

function toAbsolute(path: string): string {
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata(pageKey: SeoPageKey, langInput: string): Metadata {
  const lang = getLang(langInput);
  const t = getTranslations(lang);
  const pageMeta = t.meta.pages[pageKey];
  const path = PATH_BY_PAGE[pageKey];
  const currentPath = localizedPath(lang, path);
  const canonical = toAbsolute(currentPath);
  const enPath = toAbsolute(path);
  const arPath = toAbsolute(localizedPath("ar", path));
  const title = pageMeta.title ? `${pageMeta.title} | ${SITE_NAME}` : `${SITE_NAME} | ${t.meta.siteTagline}`;
  const image = toAbsolute(OG_IMAGE);

  return {
    title,
    description: pageMeta.description,
    keywords: KEYWORDS[lang][pageKey],
    alternates: {
      canonical,
      languages: {
        en: enPath,
        ar: arPath,
        "x-default": enPath,
      },
    },
    openGraph: {
      title,
      description: pageMeta.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_EG"],
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: pageMeta.description,
      images: [image],
    },
  };
}

export async function buildBlogPostMetadata(langInput: string, slug: string): Promise<Metadata> {
  const lang = getLang(langInput);
  const post = getPostBySlug(slug, lang);
  const base = buildPageMetadata("blog", lang);

  if (!post) {
    return base;
  }

  const path = localizedPath(lang, `/blog/${post.slug}`);
  const canonical = toAbsolute(path);
  const title = `${post.title} | ${SITE_NAME} Blog`;
  const image = post.image.startsWith("http") ? post.image : toAbsolute(post.image);

  return {
    ...base,
    title,
    description: post.summary,
    keywords: [...post.tags, post.category, "Plato blog"],
    alternates: {
      canonical,
      languages: {
        en: toAbsolute(`/blog/${post.slug}`),
        ar: toAbsolute(`/ar/blog/${post.slug}`),
        "x-default": toAbsolute(`/blog/${post.slug}`),
      },
    },
    openGraph: {
      title,
      description: post.summary,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_EG"],
      publishedTime: post.date,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.summary,
      images: [image],
    },
  };
}
