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

import blogImg1 from "@/assets/blog/blog-1.jpg";
import blogImg2 from "@/assets/blog/blog-2.jpg";
import blogImg3 from "@/assets/blog/blog-3.jpg";
import blogImg4 from "@/assets/blog/blog-4.jpg";
import blogImg5 from "@/assets/blog/blog-5.jpg";
import blogImg6 from "@/assets/blog/blog-6.jpg";
import blogImg7 from "@/assets/blog/blog-7.jpg";

const enPosts: BlogPost[] = [
  {
    slug: "insights-for-smarter-hiring",
    title: "Insights for Smarter Hiring",
    date: "2025-12-01",
    summary: "Explore the latest trends in AI-powered recruitment, HR innovation, and talent strategy. The Plato Blog delivers expert insights, practical tips, and real-world perspectives to help you attract top talent, streamline hiring, and build stronger teams with confidence.",
    tags: ["Tech & Innovation"],
    category: "Tech & Innovation",
    author: "Raef Alwani",
    image: blogImg1,
    lang: "en",
    content: `Explore the latest trends in AI-powered recruitment, HR innovation, and talent strategy.

## The Evolution of Smart Hiring

The hiring landscape has changed dramatically over the past decade. Traditional methods of screening resumes and conducting interviews are being supplemented — and in some cases replaced — by intelligent systems that can process information faster, more consistently, and with less bias.

## Key Trends Shaping Recruitment

**AI-Powered Screening** — Modern AI tools can analyze thousands of resumes in minutes, identifying the most qualified candidates based on objective criteria rather than subjective impressions.

**Predictive Analytics** — By analyzing historical hiring data, organizations can predict which candidates are most likely to succeed in specific roles, reducing turnover and improving team performance.

**Automated Outreach** — Intelligent systems can engage candidates at the right time with personalized messages, improving response rates and candidate experience.

## What This Means for HR Teams

The role of HR is evolving from administrative gatekeeping to strategic talent advisory. With AI handling the repetitive tasks, HR professionals can focus on what they do best: building relationships, understanding team dynamics, and making nuanced decisions that require human judgment.

## Getting Started

The key to adopting smart hiring practices is to start small. Pick one part of your hiring process — screening, scheduling, or evaluation — and experiment with automation. Measure the results, iterate, and expand from there.

Plato is designed to support exactly this kind of incremental adoption. Our platform handles the heavy lifting so your team can focus on finding the right people.`,
  },
  {
    slug: "ai-powered-recruitment-talent-strategy",
    title: "AI-powered recruitment, HR innovation, and talent strategy",
    date: "2025-11-28",
    summary: "An exclusive guide to the most prestigious residential areas in Riyadh, featuring world-class amenities and architectural excellence.",
    tags: ["Market Insights"],
    category: "Market Insights",
    author: "Mohammed Al-Rashid",
    image: blogImg4,
    lang: "en",
    content: `The intersection of artificial intelligence and human resources is creating unprecedented opportunities for organizations of all sizes.

## The AI Revolution in HR

Artificial intelligence is no longer a futuristic concept in recruitment — it's a present reality. From resume parsing to candidate matching, AI is transforming every stage of the hiring process.

## Key Benefits

**Speed** — AI can process applications 10x faster than manual review, reducing time-to-hire significantly.

**Consistency** — Unlike human reviewers, AI applies the same criteria to every candidate, ensuring fair and consistent evaluation.

**Scale** — Whether you're hiring for one position or one hundred, AI scales effortlessly to handle any volume.

## Implementation Strategy

1. Start with resume screening automation
2. Add structured interview frameworks
3. Implement predictive hiring analytics
4. Build continuous feedback loops

The future of hiring is here, and it's powered by intelligent technology that augments human decision-making.`,
  },
  {
    slug: "ai-driven-candidate-experience",
    title: "From AI-driven hiring to improving candidate experience",
    date: "2025-11-22",
    summary: "A comprehensive guide to calculating and maximizing your return on investment in the Saudi Arabian property market.",
    tags: ["Investment"],
    category: "Investment",
    author: "Omar Hassan",
    image: blogImg2,
    lang: "en",
    content: `Candidate experience is becoming a critical differentiator in the talent market. Organizations that invest in creating positive hiring experiences attract better candidates and build stronger employer brands.

## Why Candidate Experience Matters

In today's competitive job market, top candidates have options. A poor hiring experience — slow responses, unclear processes, or impersonal communication — can drive the best talent to your competitors.

## Key Elements of Great Candidate Experience

**Transparency** — Keep candidates informed at every stage. Automated updates and clear timelines build trust and reduce anxiety.

**Speed** — Respect candidates' time by streamlining the process. AI-powered tools can reduce hiring cycles from weeks to days.

**Personalization** — Every candidate should feel valued. Use technology to personalize communication while maintaining efficiency.

## The ROI of Good Experience

Companies with strong candidate experience see:
- 38% higher offer acceptance rates
- 50% reduction in cost-per-hire
- Significant improvement in employer brand perception

Investing in candidate experience isn't just the right thing to do — it's a smart business decision.`,
  },
  {
    slug: "expert-content-modern-hr-teams",
    title: "Dive into expert content designed for modern HR teams.",
    date: "2025-11-28",
    summary: "An exclusive guide to the most prestigious residential areas in Riyadh, featuring world-class amenities and architectural excellence.",
    tags: ["HRM System"],
    category: "HRM System",
    author: "Mohammed Al-Rashid",
    image: blogImg3,
    lang: "en",
    content: `Modern HR teams face unprecedented challenges. From managing remote workforces to implementing DEI initiatives, the scope of HR has expanded dramatically.

## The Modern HR Technology Stack

Today's HR teams need more than spreadsheets and email. A modern technology stack includes:

**Applicant Tracking Systems** — Centralize candidate data and streamline the hiring pipeline.

**AI-Powered Screening** — Automate the initial review of applications to focus on the most promising candidates.

**Interview Management** — Schedule, conduct, and evaluate interviews consistently across the organization.

**Analytics Dashboard** — Track key metrics like time-to-hire, cost-per-hire, and quality of hire to continuously improve.

## Building an Effective HR Strategy

1. Audit your current processes and identify bottlenecks
2. Select technology that integrates with your existing systems
3. Train your team on new tools and methodologies
4. Measure outcomes and iterate

The most effective HR teams combine human expertise with technological capability to create hiring processes that are both efficient and equitable.`,
  },
  {
    slug: "practical-hiring-tips-industry-analysis",
    title: "From practical hiring tips to in-depth industry analysis",
    date: "2025-11-22",
    summary: "A comprehensive guide to calculating and maximizing your return on investment in the Saudi Arabian property market.",
    tags: ["Investment"],
    category: "Investment",
    author: "Omar Hassan",
    image: blogImg6,
    lang: "en",
    content: `The hiring industry is evolving rapidly, driven by technological innovation, changing workforce expectations, and global economic shifts.

## Industry Trends to Watch

**Remote-First Hiring** — The shift to remote work has expanded the talent pool globally, but it also requires new approaches to screening, interviewing, and onboarding.

**Skills-Based Hiring** — More organizations are moving away from degree requirements and focusing on demonstrated skills and competencies.

**Diversity and Inclusion** — Building diverse teams isn't just ethically important — it drives better business outcomes through varied perspectives and experiences.

## Practical Tips for Hiring Managers

1. Write inclusive job descriptions that attract diverse candidates
2. Use structured interviews to reduce unconscious bias
3. Implement blind resume screening where possible
4. Set clear evaluation criteria before reviewing any candidates
5. Provide timely feedback to all applicants

## The Data Behind Great Hiring

Organizations that adopt data-driven hiring practices see measurable improvements in quality of hire, employee retention, and team performance. The key is collecting the right data and using it to inform — not replace — human decision-making.`,
  },
  {
    slug: "future-of-hiring-starts-here",
    title: "The Future of Hiring Starts Here",
    date: "2025-11-28",
    summary: "An exclusive guide to the most prestigious residential areas in Riyadh, featuring world-class amenities and architectural excellence.",
    tags: ["Technology"],
    category: "Technology",
    author: "Mohammed Al-Rashid",
    image: blogImg7,
    lang: "en",
    content: `The future of hiring is being shaped by a convergence of technologies and methodologies that promise to make recruitment more efficient, equitable, and effective than ever before.

## Emerging Technologies

**Natural Language Processing** — Advanced NLP enables more nuanced understanding of candidate profiles, going beyond keyword matching to understand context and intent.

**Predictive Modeling** — Machine learning models can predict candidate success based on historical data, helping organizations make more informed hiring decisions.

**Conversational AI** — Chatbots and virtual assistants can handle initial candidate engagement, answer questions, and even conduct preliminary screening interviews.

## The Human Element

Despite technological advances, the human element remains central to great hiring. Technology should augment human judgment, not replace it. The best hiring outcomes come from combining AI-powered efficiency with human empathy and insight.

## Looking Ahead

The organizations that will win the talent war are those that embrace innovation while maintaining a human-centered approach to hiring. The future belongs to companies that can move fast, evaluate fairly, and create experiences that candidates value.`,
  },
  {
    slug: "hiring-intelligence-hr-innovation",
    title: "Hiring Intelligence & HR Innovation",
    date: "2025-11-22",
    summary: "A comprehensive guide to calculating and maximizing your return on investment in the Saudi Arabian property market.",
    tags: ["Tech & Innovation"],
    category: "Tech & Innovation",
    author: "Omar Hassan",
    image: blogImg5,
    lang: "en",
    content: `Hiring intelligence represents the next evolution in recruitment technology. By combining data analytics, machine learning, and behavioral science, organizations can make smarter hiring decisions at scale.

## What is Hiring Intelligence?

Hiring intelligence goes beyond traditional HR analytics. It encompasses:

**Talent Market Intelligence** — Understanding supply and demand dynamics in specific talent markets to inform sourcing strategies.

**Candidate Quality Scoring** — Using multi-dimensional analysis to evaluate candidates beyond basic qualifications.

**Process Optimization** — Identifying and eliminating bottlenecks in the hiring workflow to reduce time-to-hire without compromising quality.

## The Innovation Imperative

HR departments that fail to innovate risk:
- Losing top talent to more agile competitors
- Increasing costs through inefficient processes
- Missing out on diverse perspectives that drive innovation

## Getting Started with Hiring Intelligence

1. Audit your current hiring data — what are you collecting and what's missing?
2. Identify your biggest pain points — where do candidates drop off?
3. Start with one AI-powered tool and measure its impact
4. Scale what works and iterate on what doesn't

The journey to smarter hiring starts with a single step. Let Plato guide you there.`,
  },
];

const arPosts: BlogPost[] = [
  {
    slug: "insights-for-smarter-hiring-ar",
    title: "رؤى لتوظيف أذكى",
    date: "2025-12-01",
    summary: "اكتشف أحدث الاتجاهات في التوظيف المدعوم بالذكاء الاصطناعي وابتكارات الموارد البشرية واستراتيجية المواهب.",
    tags: ["التقنية والابتكار"],
    category: "التقنية والابتكار",
    author: "رائف العلواني",
    image: blogImg1,
    lang: "ar",
    content: `اكتشف أحدث الاتجاهات في التوظيف المدعوم بالذكاء الاصطناعي وابتكارات الموارد البشرية واستراتيجية المواهب.

## تطور التوظيف الذكي

تغير مشهد التوظيف بشكل كبير خلال العقد الماضي. يتم استكمال الأساليب التقليدية لفحص السير الذاتية وإجراء المقابلات بأنظمة ذكية يمكنها معالجة المعلومات بشكل أسرع وأكثر اتساقاً وبتحيز أقل.

## الاتجاهات الرئيسية التي تشكل التوظيف

**الفحص المدعوم بالذكاء الاصطناعي** — يمكن لأدوات الذكاء الاصطناعي الحديثة تحليل آلاف السير الذاتية في دقائق.

**التحليلات التنبؤية** — من خلال تحليل بيانات التوظيف التاريخية، يمكن للمؤسسات التنبؤ بالمرشحين الأكثر احتمالاً للنجاح.

**التواصل الآلي** — يمكن للأنظمة الذكية التواصل مع المرشحين في الوقت المناسب برسائل مخصصة.

## ماذا يعني هذا لفرق الموارد البشرية

يتطور دور الموارد البشرية من حراسة إدارية إلى استشارات مواهب استراتيجية. مع تعامل الذكاء الاصطناعي مع المهام المتكررة، يمكن لمتخصصي الموارد البشرية التركيز على ما يجيدونه.`,
  },
  {
    slug: "ai-powered-recruitment-ar",
    title: "التوظيف المدعوم بالذكاء الاصطناعي وابتكار الموارد البشرية واستراتيجية المواهب",
    date: "2025-11-28",
    summary: "دليل حصري لأهم المناطق السكنية المرموقة في الرياض، يتضمن مرافق عالمية المستوى وتميز معماري.",
    tags: ["رؤى السوق"],
    category: "رؤى السوق",
    author: "محمد الراشد",
    image: blogImg4,
    lang: "ar",
    content: `يخلق تقاطع الذكاء الاصطناعي والموارد البشرية فرصاً غير مسبوقة للمؤسسات من جميع الأحجام.

## ثورة الذكاء الاصطناعي في الموارد البشرية

لم يعد الذكاء الاصطناعي مفهوماً مستقبلياً في التوظيف — إنه واقع حالي. من تحليل السير الذاتية إلى مطابقة المرشحين.

## الفوائد الرئيسية

**السرعة** — يمكن للذكاء الاصطناعي معالجة الطلبات أسرع 10 مرات من المراجعة اليدوية.

**الاتساق** — على عكس المراجعين البشريين، يطبق الذكاء الاصطناعي نفس المعايير على كل مرشح.

**القدرة على التوسع** — سواء كنت توظف لوظيفة واحدة أو مائة، يتوسع الذكاء الاصطناعي بسلاسة.`,
  },
  {
    slug: "ai-driven-candidate-experience-ar",
    title: "من التوظيف المدعوم بالذكاء الاصطناعي إلى تحسين تجربة المرشح",
    date: "2025-11-22",
    summary: "دليل شامل لحساب وتعظيم عائد الاستثمار في سوق العقارات السعودي.",
    tags: ["استثمار"],
    category: "استثمار",
    author: "عمر حسن",
    image: blogImg2,
    lang: "ar",
    content: `أصبحت تجربة المرشح عاملاً حاسماً للتميز في سوق المواهب.

## لماذا تهم تجربة المرشح

في سوق العمل التنافسي اليوم، لدى أفضل المرشحين خيارات. تجربة توظيف سيئة يمكن أن تدفع أفضل المواهب إلى منافسيك.

## عناصر أساسية لتجربة مرشح رائعة

**الشفافية** — أبقِ المرشحين على اطلاع في كل مرحلة.

**السرعة** — احترم وقت المرشحين بتبسيط العملية.

**التخصيص** — يجب أن يشعر كل مرشح بالتقدير.`,
  },
  {
    slug: "expert-content-modern-hr-ar",
    title: "محتوى خبراء مصمم لفرق الموارد البشرية الحديثة",
    date: "2025-11-28",
    summary: "دليل حصري لأهم المناطق السكنية المرموقة في الرياض، يتضمن مرافق عالمية المستوى.",
    tags: ["نظام إدارة الموارد البشرية"],
    category: "نظام إدارة الموارد البشرية",
    author: "محمد الراشد",
    image: blogImg3,
    lang: "ar",
    content: `تواجه فرق الموارد البشرية الحديثة تحديات غير مسبوقة. من إدارة القوى العاملة عن بعد إلى تنفيذ مبادرات التنوع والشمول.

## حزمة تكنولوجيا الموارد البشرية الحديثة

تحتاج فرق الموارد البشرية اليوم إلى أكثر من جداول البيانات والبريد الإلكتروني.

**أنظمة تتبع المتقدمين** — مركزية بيانات المرشحين وتبسيط خط التوظيف.

**الفحص المدعوم بالذكاء الاصطناعي** — أتمتة المراجعة الأولية للطلبات.

**إدارة المقابلات** — جدولة وإجراء وتقييم المقابلات بشكل متسق.`,
  },
  {
    slug: "practical-hiring-tips-ar",
    title: "من نصائح التوظيف العملية إلى تحليل الصناعة المتعمق",
    date: "2025-11-22",
    summary: "دليل شامل لحساب وتعظيم عائد الاستثمار في سوق العقارات السعودي.",
    tags: ["استثمار"],
    category: "استثمار",
    author: "عمر حسن",
    image: blogImg6,
    lang: "ar",
    content: `تتطور صناعة التوظيف بسرعة، مدفوعة بالابتكار التكنولوجي وتغير توقعات القوى العاملة.

## اتجاهات الصناعة التي يجب مراقبتها

**التوظيف عن بعد أولاً** — أدى التحول إلى العمل عن بعد إلى توسيع مجموعة المواهب عالمياً.

**التوظيف القائم على المهارات** — تتحول المزيد من المؤسسات بعيداً عن متطلبات الشهادات.

**التنوع والشمول** — بناء فرق متنوعة ليس مهماً أخلاقياً فحسب بل يدفع نتائج أعمال أفضل.`,
  },
  {
    slug: "future-of-hiring-ar",
    title: "مستقبل التوظيف يبدأ من هنا",
    date: "2025-11-28",
    summary: "دليل حصري لأهم المناطق السكنية المرموقة في الرياض.",
    tags: ["التقنية"],
    category: "التقنية",
    author: "محمد الراشد",
    image: blogImg7,
    lang: "ar",
    content: `يتشكل مستقبل التوظيف من خلال تقارب التقنيات والمنهجيات التي تعد بجعل التوظيف أكثر كفاءة وإنصافاً وفعالية.

## التقنيات الناشئة

**معالجة اللغة الطبيعية** — يمكّن NLP المتقدم من فهم أدق لملفات المرشحين.

**النمذجة التنبؤية** — يمكن لنماذج التعلم الآلي التنبؤ بنجاح المرشح بناءً على البيانات التاريخية.

**الذكاء الاصطناعي التحادثي** — يمكن لروبوتات الدردشة التعامل مع التواصل الأولي مع المرشحين.`,
  },
  {
    slug: "hiring-intelligence-ar",
    title: "ذكاء التوظيف وابتكار الموارد البشرية",
    date: "2025-11-22",
    summary: "دليل شامل لحساب وتعظيم عائد الاستثمار.",
    tags: ["التقنية والابتكار"],
    category: "التقنية والابتكار",
    author: "عمر حسن",
    image: blogImg5,
    lang: "ar",
    content: `يمثل ذكاء التوظيف التطور التالي في تكنولوجيا التوظيف.

## ما هو ذكاء التوظيف؟

يتجاوز ذكاء التوظيف تحليلات الموارد البشرية التقليدية:

**ذكاء سوق المواهب** — فهم ديناميكيات العرض والطلب في أسواق مواهب محددة.

**تسجيل جودة المرشح** — استخدام التحليل متعدد الأبعاد لتقييم المرشحين.

**تحسين العملية** — تحديد والقضاء على الاختناقات في سير عمل التوظيف.`,
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
