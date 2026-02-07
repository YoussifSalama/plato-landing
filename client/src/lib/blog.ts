export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  author: string;
  content: string;
  lang: "en" | "ar";
}

const enPosts: BlogPost[] = [
  {
    slug: "plato-product-update",
    title: "Plato Product Update: What We're Building Next",
    date: "2025-01-15",
    summary: "A look at the features and improvements coming to Plato in the months ahead — from smarter screening to deeper integrations.",
    tags: ["Product", "Updates"],
    author: "Plato Team",
    lang: "en",
    content: `We've been busy building. Since our launch, Plato has helped dozens of teams streamline their hiring process — and we're just getting started.

## What's New

Over the past quarter, we've shipped several important updates:

**Improved Resume Parsing** — Our resume parser now handles a wider range of formats and extracts more structured data, including skills, certifications, and project experience.

**Faster Shortlisting** — We've optimized our ranking algorithm to deliver shortlists up to 3x faster, even for large candidate pools.

**Interview Scheduling** — Candidates can now self-schedule interviews from their notification emails, reducing back-and-forth with your team.

## What's Coming Next

We're focused on three big areas for the next quarter:

1. **ATS Integrations** — We're building connectors for popular applicant tracking systems so Plato fits seamlessly into your existing workflow.

2. **Team Collaboration** — Hiring managers will be able to leave feedback, compare candidates side-by-side, and make decisions together within Plato.

3. **Advanced Reporting** — Deeper analytics on your hiring pipeline, including time-to-hire, conversion rates, and diversity metrics.

## Our Philosophy

We believe hiring should be evidence-based, efficient, and fair. Every feature we build is guided by that principle. We're not trying to replace human judgment — we're trying to give hiring teams better tools to make informed decisions faster.

Stay tuned for more updates. If you'd like early access to any of these features, reach out to us at hello@platohiring.com.`,
  },
  {
    slug: "shortlist-candidates-faster",
    title: "How to Shortlist Candidates Faster Without Compromising Quality",
    date: "2025-01-08",
    summary: "Practical strategies for building a reliable shortlist quickly — without cutting corners on candidate evaluation.",
    tags: ["Hiring Tips", "Employers"],
    author: "Plato Team",
    lang: "en",
    content: `Every hiring manager knows the feeling: a flood of resumes hits your inbox, and you need to find the right people — fast. But rushing through applications means you might miss great candidates or advance the wrong ones.

Here's how to shortlist faster without sacrificing quality.

## 1. Define Clear Criteria Before You Start

Before reviewing a single resume, write down the 3-5 non-negotiable requirements for the role. These should be specific and measurable:

- Years of relevant experience
- Required technical skills or certifications
- Industry background
- Location or work authorization

Having clear criteria upfront prevents scope creep and keeps your evaluation consistent.

## 2. Use Structured Scoring

Instead of sorting resumes into "yes" and "no" piles, use a simple scoring rubric. Rate each candidate on your key criteria using a 1-5 scale. This makes comparisons objective and defensible.

## 3. Screen in Batches

Don't review resumes one at a time over several days. Block off dedicated time and review them in batches. This improves consistency because you're comparing candidates against each other, not against your memory of someone you reviewed last Tuesday.

## 4. Automate the First Pass

Tools like Plato can parse resumes, extract key information, and rank candidates against your criteria automatically. This doesn't replace human judgment — it gives you a head start so you can focus your time on the most promising candidates.

## 5. Involve the Right People Early

Don't wait until the interview stage to involve the hiring manager or team lead. Share your shortlist early and get alignment on who moves forward. This prevents wasted interviews and speeds up the overall process.

## The Bottom Line

Speed and quality aren't opposites. With the right process and tools, you can build a strong shortlist in hours instead of weeks — and feel confident that you're advancing the best candidates.`,
  },
  {
    slug: "resume-to-report",
    title: "From Resume to Report: A Better Hiring Workflow",
    date: "2024-12-20",
    summary: "How a structured end-to-end hiring workflow reduces bias, saves time, and produces better outcomes for employers and candidates alike.",
    tags: ["Workflow", "Best Practices"],
    author: "Plato Team",
    lang: "en",
    content: `Most hiring processes are a patchwork of tools, spreadsheets, and gut feelings. Resumes come in through one channel, interviews happen through another, and feedback lives in someone's head or scattered across email threads.

The result? Slow decisions, inconsistent evaluations, and candidates who fall through the cracks.

There's a better way.

## The End-to-End Hiring Workflow

A structured hiring workflow connects every step — from the moment a resume arrives to the final hiring decision. Here's what it looks like:

### Step 1: Resume Intake & Parsing

Instead of manually reading every resume, structured parsing extracts key information automatically: skills, experience, education, and contact details. This creates a standardized candidate profile that's easy to compare.

### Step 2: Automated Screening

Using predefined criteria, candidates are evaluated and ranked. This isn't about removing humans from the process — it's about helping humans focus on the candidates who are most likely to be a good fit.

### Step 3: Outreach & Scheduling

Shortlisted candidates receive automated outreach with clear next steps. They can self-schedule interviews, reducing the coordination burden on your team.

### Step 4: Structured Interviews

Every candidate answers the same set of questions, evaluated against the same rubric. This consistency reduces bias and makes it easier to compare candidates fairly.

### Step 5: Reporting & Decision

Instead of relying on vague impressions, hiring managers receive structured reports with scores, interview summaries, and fit assessments. Decisions are data-informed, not data-free.

## Why This Matters

A structured workflow doesn't just save time — it produces better outcomes:

- **Less bias**: Consistent criteria and standardized interviews reduce the impact of unconscious bias.
- **Faster decisions**: With all information in one place, hiring managers can make decisions in days, not weeks.
- **Better candidate experience**: Candidates know where they stand and what to expect at every step.
- **Audit trail**: Every decision is documented, making compliance and reporting straightforward.

## Getting Started

You don't need to overhaul your entire process overnight. Start with one role and map out the workflow from resume to decision. Identify the bottlenecks and see where automation and structure can help.

Plato is built to support exactly this kind of workflow. If you'd like to see it in action, book a demo with our team.`,
  },
];

const arPosts: BlogPost[] = [
  {
    slug: "plato-product-update-ar",
    title: "تحديثات منتج Plato: ما الذي نبنيه بعد ذلك",
    date: "2025-01-15",
    summary: "نظرة على الميزات والتحسينات القادمة إلى بلاتو في الأشهر المقبلة — من فرز أذكى إلى تكاملات أعمق.",
    tags: ["المنتج", "تحديثات"],
    author: "فريق بلاتو",
    lang: "ar",
    content: `كنا مشغولين بالبناء. منذ إطلاقنا، ساعد بلاتو عشرات الفرق في تبسيط عملية التوظيف — ونحن في البداية فقط.

## ما الجديد

خلال الربع الماضي، أطلقنا عدة تحديثات مهمة:

**تحسين تحليل السير الذاتية** — محلل السير الذاتية لدينا يتعامل الآن مع مجموعة أوسع من التنسيقات ويستخرج بيانات أكثر هيكلة، بما في ذلك المهارات والشهادات وخبرة المشاريع.

**فرز أسرع** — حسّنا خوارزمية الترتيب لتقديم القوائم المختصرة بسرعة أكبر بثلاث مرات، حتى لمجموعات المرشحين الكبيرة.

**جدولة المقابلات** — يمكن للمرشحين الآن جدولة مقابلاتهم ذاتياً من رسائل الإشعار عبر البريد الإلكتروني، مما يقلل التنسيق مع فريقك.

## ما القادم

نركز على ثلاثة مجالات رئيسية للربع القادم:

1. **تكامل مع أنظمة تتبع المتقدمين** — نبني موصلات لأنظمة تتبع المتقدمين الشائعة حتى يندمج بلاتو بسلاسة في سير عملك الحالي.

2. **التعاون الجماعي** — سيتمكن مديرو التوظيف من ترك ملاحظات ومقارنة المرشحين واتخاذ القرارات معاً داخل بلاتو.

3. **تقارير متقدمة** — تحليلات أعمق لخط التوظيف، بما في ذلك وقت التوظيف ومعدلات التحويل ومقاييس التنوع.

## فلسفتنا

نؤمن بأن التوظيف يجب أن يكون مبنياً على الأدلة وفعالاً وعادلاً. كل ميزة نبنيها تسترشد بهذا المبدأ. لا نحاول استبدال الحكم البشري — بل نحاول إعطاء فرق التوظيف أدوات أفضل لاتخاذ قرارات مستنيرة بشكل أسرع.

ترقبوا المزيد من التحديثات. إذا كنت ترغب في الوصول المبكر لأي من هذه الميزات، تواصل معنا على hello@platohiring.com.`,
  },
  {
    slug: "shortlist-candidates-faster-ar",
    title: "كيف تُنشئ قائمة مختصرة للمرشحين بسرعة دون التضحية بالجودة",
    date: "2025-01-08",
    summary: "استراتيجيات عملية لبناء قائمة مختصرة موثوقة بسرعة — دون التفريط في تقييم المرشحين.",
    tags: ["نصائح التوظيف", "أصحاب العمل"],
    author: "فريق بلاتو",
    lang: "ar",
    content: `كل مدير توظيف يعرف هذا الشعور: سيل من السير الذاتية يصل إلى بريدك، وتحتاج للعثور على الأشخاص المناسبين — بسرعة. لكن التسرع في مراجعة الطلبات يعني أنك قد تفوّت مرشحين رائعين أو تتقدم بالمرشحين الخطأ.

إليك كيف تُنشئ قائمة مختصرة أسرع دون التضحية بالجودة.

## 1. حدد معايير واضحة قبل البدء

قبل مراجعة أي سيرة ذاتية، اكتب 3-5 متطلبات أساسية للوظيفة. يجب أن تكون محددة وقابلة للقياس:

- سنوات الخبرة ذات الصلة
- المهارات التقنية أو الشهادات المطلوبة
- خلفية الصناعة
- الموقع أو تصريح العمل

وجود معايير واضحة مسبقاً يمنع التوسع ويحافظ على اتساق تقييمك.

## 2. استخدم التقييم المهيكل

بدلاً من فرز السير الذاتية إلى "نعم" و"لا"، استخدم نظام تقييم بسيط. قيّم كل مرشح على معاييرك الرئيسية بمقياس من 1 إلى 5. هذا يجعل المقارنات موضوعية وقابلة للدفاع عنها.

## 3. افرز على دفعات

لا تراجع السير الذاتية واحدة تلو الأخرى على مدار عدة أيام. خصص وقتاً محدداً وراجعها على دفعات. هذا يحسن الاتساق لأنك تقارن المرشحين ببعضهم البعض.

## 4. أتمت المرحلة الأولى

أدوات مثل بلاتو يمكنها تحليل السير الذاتية واستخراج المعلومات الأساسية وترتيب المرشحين مقابل معاييرك تلقائياً. هذا لا يستبدل الحكم البشري — بل يمنحك بداية سريعة حتى تركز وقتك على المرشحين الأكثر وعداً.

## 5. أشرك الأشخاص المناسبين مبكراً

لا تنتظر حتى مرحلة المقابلة لإشراك مدير التوظيف أو قائد الفريق. شارك قائمتك المختصرة مبكراً واحصل على توافق حول من يتقدم. هذا يمنع المقابلات الضائعة ويسرّع العملية الإجمالية.

## الخلاصة

السرعة والجودة ليسا متناقضين. مع العملية والأدوات المناسبة، يمكنك بناء قائمة مختصرة قوية في ساعات بدلاً من أسابيع — وتشعر بالثقة أنك تتقدم بأفضل المرشحين.`,
  },
];

export function getAllPosts(lang: "en" | "ar"): BlogPost[] {
  const posts = lang === "ar" ? arPosts : enPosts;
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, lang: "en" | "ar"): BlogPost | undefined {
  const posts = lang === "ar" ? arPosts : enPosts;
  return posts.find((p) => p.slug === slug);
}

export function getAllTags(lang: "en" | "ar"): string[] {
  const posts = lang === "ar" ? arPosts : enPosts;
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

export function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
