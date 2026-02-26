export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  category: string;
  author: string;
  image: string;
  content: string;
  lang: "en" | "ar";
}

const blogImg1 = "/images/blog/blog-1.jpg";
const blogImg2 = "/images/blog/blog-2.jpg";
const blogImg3 = "/images/blog/blog-3.jpg";
const blogImg4 = "/images/blog/blog-4.jpg";
const blogImg5 = "/images/blog/blog-5.jpg";
const blogImg6 = "/images/blog/blog-6.jpg";
const blogImg7 = "/images/blog/blog-7.jpg";

const enPosts: BlogPost[] = [
  {
    slug: "cvs-are-not-truth-skills-signals-beat-experience",
    title: "CVs Are Not Truth: Why Skills Signals Beat \"Experience\"",
    date: "2026-02-03",
    summary: "CVs are claims, not proof. Skills signals like work samples and structured interviews help you hire faster with less regret.",
    tags: ["Skills-Based Hiring", "Recruiting", "Hiring"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "only-interview-structure-you-need-45-minutes",
    title: "The Only Interview Structure You Need (45 Minutes, No Fluff)",
    date: "2026-02-06",
    summary: "Most interviews are random conversations. Use this 45-minute structure and a rubric to make hiring decisions consistent and defensible.",
    tags: ["Structured Interviews", "Scorecards", "Hiring"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "candidate-scoring-without-the-black-box",
    title: "Candidate Scoring Without the Black Box: What Employers Should Demand",
    date: "2026-02-09",
    summary: "If a scoring system can't explain itself, it's risky. Here's what \"good scoring\" looks like: evidence, transparency, and job relevance.",
    tags: ["AI Hiring", "Candidate Scoring", "Trust"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "reduce-time-to-hire-without-lowering-standards",
    title: "Reduce Time-to-Hire Without Lowering Standards",
    date: "2026-02-12",
    summary: "Hiring slow isn't hiring careful—it's usually hiring messy. Here's how to speed up decisions without sacrificing quality.",
    tags: ["Time-to-Hire", "Hiring Process", "Operations"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "high-volume-hiring-screen-500-candidates",
    title: "High-Volume Hiring: How to Screen 500 Candidates Without Losing Your Mind",
    date: "2026-02-15",
    summary: "When volume hits, most teams panic and filter randomly. Here's a clean screening system that keeps quality high.",
    tags: ["High Volume", "Screening", "Shortlisting"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "candidate-experience-is-removing-friction",
    title: "Candidate Experience Isn't \"Being Nice.\" It's Removing Friction.",
    date: "2026-02-18",
    summary: "Top candidates drop when the process feels slow, repetitive, or disrespectful. These fixes increase completion and acceptance.",
    tags: ["Candidate Journey", "Employer Brand", "Conversion"],
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

**Book a demo to see Plato in action.**`,
  },
  {
    slug: "hiring-in-mena-has-its-own-rules",
    title: "Hiring in MENA Has Its Own Rules: Ignore Them and You'll Keep Missing",
    date: "2026-02-21",
    summary: "MENA hiring isn't Silicon Valley. Different constraints, different signals, different expectations. Here's how smart employers adapt.",
    tags: ["MENA Hiring", "Market Reality", "Talent"],
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

**Book a demo to see Plato in action.**`,
  },
];

const arPosts: BlogPost[] = [
  {
    slug: "cvs-are-not-truth-skills-signals-beat-experience",
    title: "السير الذاتية ليست حقيقة: لماذا تتفوق إشارات المهارات على \"الخبرة\"",
    date: "2026-02-03",
    summary: "السير الذاتية ادعاءات وليست أدلة. إشارات المهارات مثل نماذج العمل والمقابلات المنظمة تساعدك على التوظيف بشكل أسرع وبندم أقل.",
    tags: ["التوظيف القائم على المهارات", "الاستقطاب", "التوظيف"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "only-interview-structure-you-need-45-minutes",
    title: "هيكل المقابلة الوحيد الذي تحتاجه (45 دقيقة، بدون حشو)",
    date: "2026-02-06",
    summary: "معظم المقابلات محادثات عشوائية. استخدم هذا الهيكل من 45 دقيقة ومعايير التقييم لجعل قرارات التوظيف متسقة وقابلة للدفاع عنها.",
    tags: ["المقابلات المنظمة", "بطاقات التقييم", "التوظيف"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "candidate-scoring-without-the-black-box",
    title: "تقييم المرشحين بدون الصندوق الأسود: ما يجب أن يطالب به أصحاب العمل",
    date: "2026-02-09",
    summary: "إذا لم يستطع نظام التقييم شرح نفسه، فهو محفوف بالمخاطر. إليك ما يبدو عليه \"التقييم الجيد\": أدلة وشفافية وصلة بالوظيفة.",
    tags: ["التوظيف بالذكاء الاصطناعي", "تقييم المرشحين", "الثقة"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "reduce-time-to-hire-without-lowering-standards",
    title: "قلّل وقت التوظيف دون خفض المعايير",
    date: "2026-02-12",
    summary: "التوظيف البطيء ليس توظيفاً حذراً — عادةً ما يكون توظيفاً فوضوياً. إليك كيف تُسرّع القرارات دون التضحية بالجودة.",
    tags: ["وقت التوظيف", "عملية التوظيف", "العمليات"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "high-volume-hiring-screen-500-candidates",
    title: "التوظيف بالحجم الكبير: كيف تفرز 500 مرشح دون أن تفقد عقلك",
    date: "2026-02-15",
    summary: "عندما يرتفع الحجم، تصاب معظم الفرق بالذعر وتفرز عشوائياً. إليك نظام فرز نظيف يحافظ على جودة عالية.",
    tags: ["حجم كبير", "الفرز", "القائمة المختصرة"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "candidate-experience-is-removing-friction",
    title: "تجربة المرشح ليست \"أن تكون لطيفاً.\" إنها إزالة الاحتكاك.",
    date: "2026-02-18",
    summary: "أفضل المرشحين يغادرون عندما تبدو العملية بطيئة أو متكررة أو غير محترمة. هذه الإصلاحات تزيد الإكمال والقبول.",
    tags: ["رحلة المرشح", "العلامة التجارية لصاحب العمل", "التحويل"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
  },
  {
    slug: "hiring-in-mena-has-its-own-rules",
    title: "التوظيف في منطقة الشرق الأوسط وشمال أفريقيا له قواعده الخاصة: تجاهلها وستستمر في الفشل",
    date: "2026-02-21",
    summary: "التوظيف في المنطقة ليس وادي السيليكون. قيود مختلفة، إشارات مختلفة، توقعات مختلفة. إليك كيف يتكيف أصحاب العمل الأذكياء.",
    tags: ["توظيف المنطقة", "واقع السوق", "المواهب"],
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

**احجز عرضاً توضيحياً لرؤية بلاتو في العمل.**`,
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

export function getAllCategories(lang: "en" | "ar"): string[] {
  const posts = lang === "ar" ? arPosts : enPosts;
  const cats = new Set<string>();
  posts.forEach((p) => cats.add(p.category));
  return Array.from(cats);
}

export function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
