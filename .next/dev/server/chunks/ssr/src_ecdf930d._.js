module.exports = [
"[project]/src/hooks/useSEO.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSEO",
    ()=>useSEO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
const DEFAULT_OG_IMAGE = "/images/og-default.png";
const SITE_URL = "https://platohiring.com";
function setMetaTag(attr, key, content) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (el) {
        el.setAttribute("content", content);
    } else {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        el.content = content;
        document.head.appendChild(el);
    }
}
function setLinkTag(rel, href) {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (el) {
        el.href = href;
    } else {
        el = document.createElement("link");
        el.rel = rel;
        el.href = href;
        document.head.appendChild(el);
    }
}
function useSEO({ title, description, image } = {}) {
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const siteName = t.meta.siteName;
        const pageTitle = title ? `${title} | ${siteName}` : `${siteName} — ${t.meta.siteTagline}`;
        document.title = pageTitle;
        const desc = description || t.meta.siteTagline;
        const ogImage = image || DEFAULT_OG_IMAGE;
        const pagePath = pathname.replace(/^\/en/, "") || "/";
        const canonicalUrl = `${SITE_URL}${pagePath}`;
        const pageUrl = `${SITE_URL}${pagePath}`;
        setMetaTag("name", "description", desc);
        setMetaTag("property", "og:title", pageTitle);
        setMetaTag("property", "og:description", desc);
        setMetaTag("property", "og:image", ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`);
        setMetaTag("property", "og:url", pageUrl);
        setMetaTag("property", "og:type", "website");
        setMetaTag("property", "og:site_name", siteName);
        setMetaTag("name", "twitter:card", "summary_large_image");
        setMetaTag("name", "twitter:title", pageTitle);
        setMetaTag("name", "twitter:description", desc);
        setMetaTag("name", "twitter:image", ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`);
        setLinkTag("canonical", canonicalUrl);
    }, [
        title,
        description,
        image,
        t,
        lang,
        pathname
    ]);
}
}),
"[project]/src/lib/blog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateReadTime",
    ()=>estimateReadTime,
    "getAllCategories",
    ()=>getAllCategories,
    "getAllPosts",
    ()=>getAllPosts,
    "getAllTags",
    ()=>getAllTags,
    "getPostBySlug",
    ()=>getPostBySlug
]);
const blogImg1 = "/images/blog/blog-1.jpg";
const blogImg2 = "/images/blog/blog-2.jpg";
const blogImg3 = "/images/blog/blog-3.jpg";
const blogImg4 = "/images/blog/blog-4.jpg";
const blogImg5 = "/images/blog/blog-5.jpg";
const blogImg6 = "/images/blog/blog-6.jpg";
const blogImg7 = "/images/blog/blog-7.jpg";
const enPosts = [
    {
        slug: "cvs-are-not-truth-skills-signals-beat-experience",
        title: "CVs Are Not Truth: Why Skills Signals Beat \"Experience\"",
        date: "2026-02-03",
        summary: "CVs are claims, not proof. Skills signals like work samples and structured interviews help you hire faster with less regret.",
        tags: [
            "Skills-Based Hiring",
            "Recruiting",
            "Hiring"
        ],
        category: "Hiring Strategy",
        author: "Plato Team",
        image: blogImg1,
        lang: "en",
        content: `CV-first hiring is the reason most companies make the same mistake repeatedly: they hire on claims instead of evidence.

A CV is a marketing document. It can be polished, exaggerated, or written in a way that makes average work look impressive. Meanwhile, the job doesn't care about formatting—it cares about whether someone can actually execute.

## Why CV-first hiring breaks

**Titles are inconsistent** — "Senior" means different things in different companies.

**Years don't equal skill** — two people can have "3 years experience" and one is miles ahead.

**Confidence gets rewarded** — strong talkers often sound competent even when results don't exist.

**Pedigree bias creeps in** — school and brand names start replacing real evaluation.

## What you should hire on instead: skills signals

A skills signal is anything that proves capability with real substance, not vibes. Examples:

- A short role-relevant work sample
- Structured interview answers scored with a rubric
- Clear examples of impact (with numbers or outcomes)
- Consistency across multiple questions and stages

The goal isn't to "test harder." The goal is to collect proof.

## Final takeaway

A CV is a starting point, not a verdict. If you want fewer regret hires, build your process around skills signals—not storytelling.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "only-interview-structure-you-need-45-minutes",
        title: "The Only Interview Structure You Need (45 Minutes, No Fluff)",
        date: "2026-02-06",
        summary: "Most interviews are random conversations. Use this 45-minute structure and a rubric to make hiring decisions consistent and defensible.",
        tags: [
            "Structured Interviews",
            "Scorecards",
            "Hiring"
        ],
        category: "Interviewing",
        author: "Plato Team",
        image: blogImg2,
        lang: "en",
        content: `Most interviews are not interviews. They're conversations with a decision at the end. That's why hiring feels random—and why "different interviewers" lead to different outcomes.

If you want a hiring process you can trust, you need structure.

## The 45-minute interview format

**0–5 minutes: Set expectations**
Tell the candidate what will happen, so the interview stays focused.

**5–25 minutes: Proof questions (3 questions)**
Pick questions that force real detail:

- "What result did you personally own? What changed because of you?"
- "Hardest problem you solved recently—how did you think through it?"
- "Tell me about a failure. What did you do after?"

**25–40 minutes: One realistic scenario**
Give a job-related situation and ask what they'd do in week one. This exposes reasoning and priorities.

**40–45 minutes: Candidate questions**
Strong candidates ask about success metrics, priorities, constraints—not only salary.

## How to score without bias

Use 4–6 criteria max and score 1–5:

- Clarity of thinking
- Ownership
- Role competence
- Execution evidence
- Communication

Rule: if you can't justify the score with evidence, the score doesn't count.

## Final takeaway

Unstructured interviews produce unstructured hiring. Structure makes decisions faster, fairer, and easier to defend.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "candidate-scoring-without-the-black-box",
        title: "Candidate Scoring Without the Black Box: What Employers Should Demand",
        date: "2026-02-09",
        summary: "If a scoring system can't explain itself, it's risky. Here's what \"good scoring\" looks like: evidence, transparency, and job relevance.",
        tags: [
            "AI Hiring",
            "Candidate Scoring",
            "Trust"
        ],
        category: "AI & Evaluation",
        author: "Plato Team",
        image: blogImg3,
        lang: "en",
        content: `Candidate scoring sounds great until someone asks: "Why did this person get 82 and that person get 61?"

If you can't answer clearly, your score is a liability.

## What any scoring system must provide

**Explainability (why the score exists)**
The score must show:

- Top contributing signals
- Strengths and weaknesses
- Evidence from answers and behavior

**Job relevance**
No generic "smart person" scoring. The score must match the role.

**Consistency**
Similar evidence should produce similar scores. If results swing wildly, the scoring is unstable.

**Human control**
AI supports decisions. Humans own the final call.

**Auditability**
Over time, high scores should correlate with performance. If not, the process needs adjustment.

## Final takeaway

AI in hiring is only useful when it makes decisions more consistent and defensible—not more mysterious.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "reduce-time-to-hire-without-lowering-standards",
        title: "Reduce Time-to-Hire Without Lowering Standards",
        date: "2026-02-12",
        summary: "Hiring slow isn't hiring careful—it's usually hiring messy. Here's how to speed up decisions without sacrificing quality.",
        tags: [
            "Time-to-Hire",
            "Hiring Process",
            "Operations"
        ],
        category: "Hiring Ops",
        author: "Plato Team",
        image: blogImg4,
        lang: "en",
        content: `Hiring slow doesn't mean hiring carefully. Most of the time it means:

- Unclear criteria
- Too many steps
- Repetitive interviews
- Delayed decisions
- No clear process owner

## The 3 levers that reduce time-to-hire

**Define criteria before you start**
Write the 5 things that matter most. If you can't, you're not ready to hire.

**Use a hard quality gate**
Filter out obvious mismatches quickly so interview time goes to real contenders.

**Collect structured evidence**
Instead of endless interviews, use:

- Structured screen
- Structured interview
- Final validation

Fast decisions come from trustworthy evidence.

## Final takeaway

The bottleneck is rarely candidate supply. It's decision confidence. Fix the evidence and speed follows.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "high-volume-hiring-screen-500-candidates",
        title: "High-Volume Hiring: How to Screen 500 Candidates Without Losing Your Mind",
        date: "2026-02-15",
        summary: "When volume hits, most teams panic and filter randomly. Here's a clean screening system that keeps quality high.",
        tags: [
            "High Volume",
            "Screening",
            "Shortlisting"
        ],
        category: "Screening",
        author: "Plato Team",
        image: blogImg5,
        lang: "en",
        content: `High-volume hiring breaks teams because they try to do deep evaluation on everyone. That doesn't scale.

The solution is not "work harder." It's build a funnel.

## Step 1: Decide the minimum bar

Create three lists:

- Must-haves
- Nice-to-haves
- Disqualifiers

## Step 2: Ask a few signal questions

Use 5–7 questions that force clarity:

- "What's a project you owned end-to-end?"
- "What metric improved because of you?"
- "What tool/process do you use daily and why?"

## Step 3: Shortlist based on evidence

You don't need perfection. You need strong signal.

## Final takeaway

Volume doesn't destroy quality. Lack of structure does.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "candidate-experience-is-removing-friction",
        title: "Candidate Experience Isn't \"Being Nice.\" It's Removing Friction.",
        date: "2026-02-18",
        summary: "Top candidates drop when the process feels slow, repetitive, or disrespectful. These fixes increase completion and acceptance.",
        tags: [
            "Candidate Journey",
            "Employer Brand",
            "Conversion"
        ],
        category: "Candidate Experience",
        author: "Plato Team",
        image: blogImg6,
        lang: "en",
        content: `Candidate experience is not a "soft" topic. It's a conversion funnel.

When strong candidates drop off, it's usually because the process feels:

- Unclear
- Slow
- Repetitive
- Disrespectful of time

## 7 fixes that work immediately

1. Show the steps + timeline
2. Make it mobile-friendly
3. Remove unnecessary forms
4. Stop repeating questions
5. Give status updates
6. Keep stages short and focused
7. Close the loop (don't ghost)

## Final takeaway

Candidate experience is how you signal your company quality before the candidate even joins.

**Book a demo to see Plato in action.**`
    },
    {
        slug: "hiring-in-mena-has-its-own-rules",
        title: "Hiring in MENA Has Its Own Rules: Ignore Them and You'll Keep Missing",
        date: "2026-02-21",
        summary: "MENA hiring isn't Silicon Valley. Different constraints, different signals, different expectations. Here's how smart employers adapt.",
        tags: [
            "MENA Hiring",
            "Market Reality",
            "Talent"
        ],
        category: "MENA Insights",
        author: "Plato Team",
        image: blogImg7,
        lang: "en",
        content: `A lot of hiring advice online assumes Silicon Valley reality. MENA has different constraints and habits, and ignoring them leads to constant hiring misses.

## Real MENA realities

- Notice periods can be longer
- Titles vary wildly across companies
- Language requirements matter more than people admit
- Referrals dominate, so you need structured evidence to compete fairly
- Candidate trust can be fragile unless the process feels consistent

## What wins in MENA

- Clear criteria
- Structured evaluation
- Faster cycles
- Transparent communication

This reduces randomness and builds trust for both sides.

## Final takeaway

In MENA, structure isn't "extra." It's how you prove fairness and hire the best talent consistently.

**Book a demo to see Plato in action.**`
    }
];
const arPosts = [
    {
        slug: "cvs-are-not-truth-skills-signals-beat-experience",
        title: "السير الذاتية ليست حقيقة: لماذا تتفوق إشارات المهارات على \"الخبرة\"",
        date: "2026-02-03",
        summary: "السير الذاتية ادعاءات وليست أدلة. إشارات المهارات مثل نماذج العمل والمقابلات المنظمة تساعدك على التوظيف بشكل أسرع وبندم أقل.",
        tags: [
            "التوظيف القائم على المهارات",
            "الاستقطاب",
            "التوظيف"
        ],
        category: "استراتيجية التوظيف",
        author: "فريق بلاتو",
        image: blogImg1,
        lang: "ar",
        content: `التوظيف القائم على السيرة الذاتية هو السبب في أن معظم الشركات تكرر نفس الخطأ: يوظفون بناءً على ادعاءات بدلاً من أدلة.

السيرة الذاتية وثيقة تسويقية. يمكن صقلها أو المبالغة فيها أو كتابتها بطريقة تجعل العمل العادي يبدو مبهراً. في المقابل، لا تهتم الوظيفة بالتنسيق — بل تهتم بما إذا كان الشخص يستطيع التنفيذ فعلاً.

## لماذا يفشل التوظيف القائم على السيرة الذاتية

**المسميات الوظيفية غير متسقة** — "أول" تعني أشياء مختلفة في شركات مختلفة.

**السنوات لا تساوي المهارة** — شخصان لديهما "3 سنوات خبرة" وأحدهما يتقدم بمراحل.

**الثقة بالنفس تُكافأ** — المتحدثون الأقوياء غالباً ما يبدون أكفاء حتى عندما لا توجد نتائج.

**تحيز النسب يتسلل** — أسماء الجامعات والعلامات التجارية تبدأ في استبدال التقييم الحقيقي.

## ما يجب التوظيف بناءً عليه بدلاً من ذلك: إشارات المهارات

إشارة المهارة هي أي شيء يثبت القدرة بجوهر حقيقي، وليس انطباعات. أمثلة:

- نموذج عمل قصير ذو صلة بالدور
- إجابات مقابلات منظمة مُقيّمة بمعايير
- أمثلة واضحة على التأثير (بأرقام أو نتائج)
- الاتساق عبر أسئلة ومراحل متعددة

الهدف ليس "اختبار أصعب". الهدف هو جمع الأدلة.

## الخلاصة

السيرة الذاتية نقطة بداية، وليست حكماً نهائياً. إذا أردت توظيفات أقل ندماً، ابنِ عمليتك حول إشارات المهارات — وليس سرد القصص.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "only-interview-structure-you-need-45-minutes",
        title: "هيكل المقابلة الوحيد الذي تحتاجه (45 دقيقة، بدون حشو)",
        date: "2026-02-06",
        summary: "معظم المقابلات محادثات عشوائية. استخدم هذا الهيكل من 45 دقيقة ومعايير التقييم لجعل قرارات التوظيف متسقة وقابلة للدفاع عنها.",
        tags: [
            "المقابلات المنظمة",
            "بطاقات التقييم",
            "التوظيف"
        ],
        category: "المقابلات",
        author: "فريق بلاتو",
        image: blogImg2,
        lang: "ar",
        content: `معظم المقابلات ليست مقابلات. إنها محادثات مع قرار في النهاية. لهذا يبدو التوظيف عشوائياً — ولهذا "مقابلون مختلفون" يؤدون إلى نتائج مختلفة.

إذا أردت عملية توظيف يمكنك الوثوق بها، تحتاج إلى هيكل.

## صيغة المقابلة من 45 دقيقة

**0–5 دقائق: تحديد التوقعات**
أخبر المرشح بما سيحدث، ليبقى التركيز على المقابلة.

**5–25 دقيقة: أسئلة الإثبات (3 أسئلة)**
اختر أسئلة تفرض التفاصيل الحقيقية:

- "ما النتيجة التي كنت مسؤولاً عنها شخصياً؟ ما الذي تغير بسببك؟"
- "أصعب مشكلة حللتها مؤخراً — كيف فكرت فيها؟"
- "أخبرني عن فشل. ماذا فعلت بعده؟"

**25–40 دقيقة: سيناريو واقعي واحد**
أعطِ موقفاً متعلقاً بالوظيفة واسأل ماذا سيفعل في الأسبوع الأول. هذا يكشف طريقة التفكير والأولويات.

**40–45 دقيقة: أسئلة المرشح**
المرشحون الأقوياء يسألون عن مقاييس النجاح والأولويات والقيود — وليس الراتب فقط.

## كيف تُقيّم بدون تحيز

استخدم 4–6 معايير كحد أقصى وقيّم من 1–5:

- وضوح التفكير
- الملكية
- كفاءة الدور
- أدلة التنفيذ
- التواصل

القاعدة: إذا لم تستطع تبرير الدرجة بدليل، فالدرجة لا تُحتسب.

## الخلاصة

المقابلات غير المنظمة تُنتج توظيفاً غير منظم. الهيكل يجعل القرارات أسرع وأعدل وأسهل في الدفاع عنها.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "candidate-scoring-without-the-black-box",
        title: "تقييم المرشحين بدون الصندوق الأسود: ما يجب أن يطالب به أصحاب العمل",
        date: "2026-02-09",
        summary: "إذا لم يستطع نظام التقييم شرح نفسه، فهو محفوف بالمخاطر. إليك ما يبدو عليه \"التقييم الجيد\": أدلة وشفافية وصلة بالوظيفة.",
        tags: [
            "التوظيف بالذكاء الاصطناعي",
            "تقييم المرشحين",
            "الثقة"
        ],
        category: "الذكاء الاصطناعي والتقييم",
        author: "فريق بلاتو",
        image: blogImg3,
        lang: "ar",
        content: `تقييم المرشحين يبدو رائعاً حتى يسأل أحدهم: "لماذا حصل هذا الشخص على 82 وذاك على 61؟"

إذا لم تستطع الإجابة بوضوح، فدرجتك مسؤولية.

## ما يجب أن يوفره أي نظام تقييم

**قابلية التفسير (لماذا توجد الدرجة)**
يجب أن تُظهر الدرجة:

- أهم الإشارات المساهمة
- نقاط القوة والضعف
- أدلة من الإجابات والسلوك

**الصلة بالوظيفة**
لا تقييم عام لـ"الشخص الذكي". يجب أن تتطابق الدرجة مع الدور.

**الاتساق**
أدلة مشابهة يجب أن تُنتج درجات مشابهة. إذا تأرجحت النتائج بشكل كبير، فالتقييم غير مستقر.

**التحكم البشري**
الذكاء الاصطناعي يدعم القرارات. البشر يملكون القرار النهائي.

**قابلية التدقيق**
مع الوقت، يجب أن ترتبط الدرجات العالية بالأداء. إذا لم يحدث ذلك، فالعملية تحتاج تعديلاً.

## الخلاصة

الذكاء الاصطناعي في التوظيف مفيد فقط عندما يجعل القرارات أكثر اتساقاً وقابلية للدفاع — وليس أكثر غموضاً.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "reduce-time-to-hire-without-lowering-standards",
        title: "قلّل وقت التوظيف دون خفض المعايير",
        date: "2026-02-12",
        summary: "التوظيف البطيء ليس توظيفاً حذراً — عادةً ما يكون توظيفاً فوضوياً. إليك كيف تُسرّع القرارات دون التضحية بالجودة.",
        tags: [
            "وقت التوظيف",
            "عملية التوظيف",
            "العمليات"
        ],
        category: "عمليات التوظيف",
        author: "فريق بلاتو",
        image: blogImg4,
        lang: "ar",
        content: `التوظيف البطيء لا يعني التوظيف بعناية. في معظم الأحيان يعني:

- معايير غير واضحة
- خطوات كثيرة جداً
- مقابلات متكررة
- قرارات متأخرة
- عدم وجود مسؤول واضح عن العملية

## الروافع الثلاث التي تقلّل وقت التوظيف

**حدّد المعايير قبل البدء**
اكتب الأشياء الخمسة الأكثر أهمية. إذا لم تستطع، فلست مستعداً للتوظيف.

**استخدم بوابة جودة صارمة**
افرز عدم التطابق الواضح بسرعة حتى يذهب وقت المقابلة للمتنافسين الحقيقيين.

**اجمع أدلة منظمة**
بدلاً من المقابلات اللانهائية، استخدم:

- فحص منظم
- مقابلة منظمة
- تحقق نهائي

القرارات السريعة تأتي من أدلة جديرة بالثقة.

## الخلاصة

العائق نادراً ما يكون عرض المرشحين. إنه الثقة في القرار. أصلح الأدلة وستتبع السرعة.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "high-volume-hiring-screen-500-candidates",
        title: "التوظيف بالحجم الكبير: كيف تفرز 500 مرشح دون أن تفقد عقلك",
        date: "2026-02-15",
        summary: "عندما يرتفع الحجم، تصاب معظم الفرق بالذعر وتفرز عشوائياً. إليك نظام فرز نظيف يحافظ على جودة عالية.",
        tags: [
            "حجم كبير",
            "الفرز",
            "القائمة المختصرة"
        ],
        category: "الفرز",
        author: "فريق بلاتو",
        image: blogImg5,
        lang: "ar",
        content: `التوظيف بالحجم الكبير يُحطم الفرق لأنهم يحاولون إجراء تقييم عميق للجميع. هذا لا يتوسع.

الحل ليس "اعمل بجهد أكبر". إنه ابنِ قمعاً.

## الخطوة 1: حدّد الحد الأدنى

أنشئ ثلاث قوائم:

- لا بد منها
- من الجيد وجودها
- أسباب الاستبعاد

## الخطوة 2: اطرح بضعة أسئلة إشارة

استخدم 5–7 أسئلة تفرض الوضوح:

- "ما مشروع امتلكته من البداية للنهاية؟"
- "ما المقياس الذي تحسّن بسببك؟"
- "ما الأداة/العملية التي تستخدمها يومياً ولماذا؟"

## الخطوة 3: اختصر القائمة بناءً على الأدلة

لا تحتاج للكمال. تحتاج لإشارة قوية.

## الخلاصة

الحجم لا يدمر الجودة. غياب الهيكل هو ما يفعل.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "candidate-experience-is-removing-friction",
        title: "تجربة المرشح ليست \"أن تكون لطيفاً.\" إنها إزالة الاحتكاك.",
        date: "2026-02-18",
        summary: "أفضل المرشحين يغادرون عندما تبدو العملية بطيئة أو متكررة أو غير محترمة. هذه الإصلاحات تزيد الإكمال والقبول.",
        tags: [
            "رحلة المرشح",
            "العلامة التجارية لصاحب العمل",
            "التحويل"
        ],
        category: "تجربة المرشح",
        author: "فريق بلاتو",
        image: blogImg6,
        lang: "ar",
        content: `تجربة المرشح ليست موضوعاً "ناعماً". إنها قمع تحويل.

عندما يغادر المرشحون الأقوياء، عادةً لأن العملية تبدو:

- غير واضحة
- بطيئة
- متكررة
- غير محترمة للوقت

## 7 إصلاحات تعمل فوراً

1. أظهر الخطوات + الجدول الزمني
2. اجعلها متوافقة مع الهاتف
3. أزل النماذج غير الضرورية
4. توقف عن تكرار الأسئلة
5. أعطِ تحديثات الحالة
6. اجعل المراحل قصيرة ومركزة
7. أغلق الحلقة (لا تتجاهل)

## الخلاصة

تجربة المرشح هي كيف تُشير لجودة شركتك قبل أن ينضم المرشح حتى.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    },
    {
        slug: "hiring-in-mena-has-its-own-rules",
        title: "التوظيف في منطقة الشرق الأوسط وشمال أفريقيا له قواعده الخاصة: تجاهلها وستستمر في الفشل",
        date: "2026-02-21",
        summary: "التوظيف في المنطقة ليس وادي السيليكون. قيود مختلفة، إشارات مختلفة، توقعات مختلفة. إليك كيف يتكيف أصحاب العمل الأذكياء.",
        tags: [
            "توظيف المنطقة",
            "واقع السوق",
            "المواهب"
        ],
        category: "رؤى المنطقة",
        author: "فريق بلاتو",
        image: blogImg7,
        lang: "ar",
        content: `كثير من نصائح التوظيف على الإنترنت تفترض واقع وادي السيليكون. منطقة الشرق الأوسط وشمال أفريقيا لديها قيود وعادات مختلفة، وتجاهلها يؤدي إلى أخطاء توظيف مستمرة.

## واقع المنطقة الحقيقي

- فترات الإشعار يمكن أن تكون أطول
- المسميات الوظيفية تتفاوت بشكل كبير بين الشركات
- متطلبات اللغة أهم مما يعترف به الناس
- الإحالات تهيمن، لذا تحتاج أدلة منظمة للمنافسة بعدالة
- ثقة المرشح يمكن أن تكون هشة ما لم تبدو العملية متسقة

## ما ينجح في المنطقة

- معايير واضحة
- تقييم منظم
- دورات أسرع
- تواصل شفاف

هذا يقلل العشوائية ويبني الثقة لكلا الطرفين.

## الخلاصة

في منطقة الشرق الأوسط وشمال أفريقيا، الهيكل ليس "إضافياً". إنه كيف تثبت العدالة وتوظف أفضل المواهب باستمرار.

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`
    }
];
function getAllPosts(lang) {
    const posts = lang === "ar" ? arPosts : enPosts;
    return [
        ...posts
    ].sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
}
function getPostBySlug(slug, lang) {
    const posts = lang === "ar" ? arPosts : enPosts;
    return posts.find((p)=>p.slug === slug);
}
function getAllTags(lang) {
    const posts = lang === "ar" ? arPosts : enPosts;
    const tags = new Set();
    posts.forEach((p)=>p.tags.forEach((t)=>tags.add(t)));
    return Array.from(tags);
}
function getAllCategories(lang) {
    const posts = lang === "ar" ? arPosts : enPosts;
    const cats = new Set();
    posts.forEach((p)=>cats.add(p.category));
    return Array.from(cats);
}
function estimateReadTime(content) {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    // h-9 to match icon buttons and default buttons.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useScrollAnimation(options = {}) {
    const { threshold = 0.1, rootMargin = "0px 0px -60px 0px" } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setIsVisible(true);
            return;
        }
        const observer = new IntersectionObserver(([entry])=>{
            setIsVisible(entry.isIntersecting);
        }, {
            threshold,
            rootMargin
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        threshold,
        rootMargin
    ]);
    return {
        ref,
        isVisible
    };
}
}),
"[project]/src/components/shared/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollReveal({ children, animation = "fade-up", delay = 0, className = "" }) {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const delayStyle = delay > 0 ? {
        transitionDelay: `${delay * 80}ms`
    } : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `scroll-reveal scroll-${animation} ${isVisible ? "scroll-visible" : ""} ${className}`,
        style: delayStyle,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ScrollReveal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/page-components/Blog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSEO.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScrollReveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Blog() {
    const { t, lang, localePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSEO$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSEO"])({
        title: t.meta.pages.blog.title,
        description: t.meta.pages.blog.description
    });
    const p = t.blogPage;
    const allPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])(lang);
    const allCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCategories"])(lang);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return allPosts.filter((post)=>{
            const matchesSearch = !search || post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = !activeCategory || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [
        allPosts,
        search,
        activeCategory
    ]);
    const featuredPost = filtered[0];
    const gridPosts = filtered.slice(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        style: {
            overflowX: "clip"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 hidden dark:block pointer-events-none z-0",
                "aria-hidden": "true",
                style: {
                    top: "-60px",
                    height: "700px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-[#071b2e] via-[#0a1628] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 w-[130%] h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(9,102,168,0.45),rgba(30,160,226,0.15)_40%,transparent_70%)]",
                        style: {
                            top: "0px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 w-[90%] h-[480px] bg-[radial-gradient(ellipse_60%_40%_at_50%_5%,rgba(14,80,140,0.3),transparent_60%)]",
                        style: {
                            top: "0px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 z-[1]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            animation: "fade-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
                                        "data-testid": "text-blog-title",
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto",
                                        children: p.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            animation: "fade-in",
                            delay: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center max-w-lg mx-auto mb-10 bg-card border border-border rounded-full px-2 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        type: "search",
                                        placeholder: p.searchPlaceholder,
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "border-0 bg-transparent shadow-none focus-visible:ring-0 h-9 flex-1",
                                        "data-testid": "input-blog-search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "rounded-full h-9 px-6",
                                        onClick: ()=>{},
                                        "data-testid": "button-blog-search",
                                        children: p.searchButton
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            animation: "fade-in",
                            delay: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-2 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(""),
                                        className: `px-5 py-2 rounded-full text-sm font-medium transition-colors ${!activeCategory ? "bg-blue-600 text-white" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`,
                                        "data-testid": "badge-blog-all",
                                        children: p.allTags
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    allCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(activeCategory === cat ? "" : cat),
                                            className: `px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? "bg-blue-600 text-white" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`,
                                            "data-testid": `badge-blog-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            featuredPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-[1] pb-12 sm:pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 sm:px-8 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        animation: "fade-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: localePath(`/blog/${featuredPost.slug}`),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors",
                                "data-testid": `card-blog-featured-${featuredPost.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[260px] lg:h-[380px] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: featuredPost.image,
                                                    alt: featuredPost.title,
                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-4 ltr:left-4 rtl:right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full",
                                                    children: featuredPost.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 sm:p-8 lg:p-10 flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 27
                                                                }, this),
                                                                featuredPost.author
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground/40",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 27
                                                                }, this),
                                                                new Date(featuredPost.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                    day: "numeric"
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground/40",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 27
                                                                }, this),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateReadTime"])(featuredPost.content),
                                                                " ",
                                                                p.minRead
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-4 text-foreground",
                                                    children: featuredPost.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4",
                                                    children: featuredPost.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 text-blue-500 text-sm font-medium group-hover:gap-2.5 transition-all",
                                                    children: [
                                                        p.readFullArticle,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 117,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            gridPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-[1] pb-16 sm:pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 sm:px-8 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: gridPosts.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                animation: "fade-up",
                                delay: i % 4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: localePath(`/blog/${post.slug}`),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors h-full flex flex-col",
                                        "data-testid": `card-blog-${post.slug}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-[200px] sm:h-[220px] overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: post.image,
                                                        alt: post.title,
                                                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-4 ltr:left-4 rtl:right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full",
                                                        children: post.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                lineNumber: 176,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 sm:p-6 flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                                                                        year: "numeric",
                                                                        month: "short",
                                                                        day: "numeric"
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground/40",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateReadTime"])(post.content),
                                                                    " ",
                                                                    p.minRead
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base sm:text-lg font-bold tracking-tight leading-snug mb-2 text-foreground",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1",
                                                        children: post.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    post.author
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:gap-2 transition-all",
                                                                children: [
                                                                    p.readMore,
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                lineNumber: 186,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 175,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 174,
                                    columnNumber: 19
                                }, this)
                            }, post.slug, false, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 173,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-[1] pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 sm:px-8 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-muted-foreground py-12",
                        "data-testid": "text-blog-no-posts",
                        children: p.noPosts
                    }, void 0, false, {
                        fileName: "[project]/src/page-components/Blog.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 230,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                animation: "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#0a3d6b] via-[#0b4d85] to-[#0d5a9e] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-10",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute right-0 top-0 w-[60%] h-full",
                                viewBox: "0 0 600 400",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "450",
                                        cy: "200",
                                        r: "150",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "450",
                                        cy: "200",
                                        r: "100",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "450",
                                        cy: "200",
                                        r: "50",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M350 50 L550 250 L350 350",
                                        stroke: "white",
                                        strokeWidth: "1.5",
                                        opacity: "0.2",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M400 100 L500 200 L400 300",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.15",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "480",
                                        y: "80",
                                        width: "80",
                                        height: "80",
                                        rx: "8",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.2",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "520,130 540,170 500,170",
                                        stroke: "white",
                                        strokeWidth: "1",
                                        opacity: "0.2",
                                        fill: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/page-components/Blog.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-[1]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-4xl font-bold text-white leading-tight",
                                            "data-testid": "text-blog-cta-title",
                                            children: [
                                                t.blogPage.readyToTransform,
                                                " ",
                                                t.blogPage.yourHiringProcess,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold",
                                                    children: t.blogPage.hiringProcessBold
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-wrap gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    size: "lg",
                                                    className: "rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/signup"),
                                                        "data-testid": "button-blog-start-trial",
                                                        children: t.blogPage.startFreeTrial
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    size: "lg",
                                                    className: "rounded-full text-white border-white/40 hover:bg-white/10 no-default-hover-elevate",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDemoLink"])(),
                                                        "data-testid": "button-blog-request-demo",
                                                        children: t.footerSection.requestDemo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/page-components/Blog.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-border pt-14 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            style: {
                                                direction: "ltr"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8 sm:h-9 overflow-hidden flex-shrink-0",
                                                    style: {
                                                        width: '28px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/plato-logo.png",
                                                        alt: "Plato",
                                                        className: "h-full w-auto max-w-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white",
                                                    style: {
                                                        fontFamily: "'Roc Grotesk', sans-serif"
                                                    },
                                                    children: "Plato"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-[260px]",
                                            children: t.footer.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-foreground mb-4",
                                            children: t.footer.companyTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/employers"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: t.footerSection.about
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 59
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/pricing"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: "Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/blog"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: t.footerSection.blog
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 54
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/faq"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: "FAQs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/contact"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: t.footer.contact
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 57
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/testimonials"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                            children: t.footerSection.customerStories
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/page-components/Blog.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 62
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-foreground mb-4",
                                            children: t.footer.contactsTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:info@platohiring.com",
                                                        className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors",
                                                        dir: "ltr",
                                                        children: "info@platohiring.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+201022330092",
                                                        className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors",
                                                        dir: "ltr",
                                                        children: "+201022330092"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-foreground mb-4",
                                            children: t.footer.readyToGrow
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    className: "rounded-full w-full px-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/signup"),
                                                        children: t.footer.startForFree
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 70
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "outline",
                                                    className: "rounded-full w-full px-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: localePath("/book-demo"),
                                                        children: t.footer.requestDemo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 88
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground/70",
                                    children: t.footer.copyright
                                }, void 0, false, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: localePath("/terms"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer",
                                                children: t.footer.termsAndConditions
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                lineNumber: 326,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground/40",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: localePath("/privacy"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer",
                                                children: t.footer.privacy
                                            }, void 0, false, {
                                                fileName: "[project]/src/page-components/Blog.tsx",
                                                lineNumber: 328,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 ltr:ml-4 rtl:mr-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/company/aere-capital/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                                    "aria-label": "LinkedIn",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiLinkedin"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 215
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/platohiring",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                                    "aria-label": "Instagram",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiInstagram"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 207
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.tiktok.com/@platohiring",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                                    "aria-label": "TikTok",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiTiktok"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 202
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].linkedinUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].linkedinUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                                    "aria-label": "LinkedIn",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiLinkedin"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/page-components/Blog.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 189
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/page-components/Blog.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/page-components/Blog.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/page-components/Blog.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/page-components/Blog.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/page-components/Blog.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/page-components/Blog.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-components/Blog.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_ecdf930d._.js.map