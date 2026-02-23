import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Star, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";
import { config, getDemoLink } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

const TESTIMONIALS_EN: Testimonial[] = [
  {
    name: "Ahmed Khaled",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "What I love about Plato is their transparency and attention to detail. They helped me identify great candidates quickly and handled everything professionally.",
    avatar: "AK",
  },
  {
    name: "Fatima Al-Harbi",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "The platform is super easy to use and stress-free. Everything was clear, fast, and supported throughout the entire hiring process.",
    avatar: "FA",
  },
  {
    name: "Layla Al-Mutairi",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "Hiring my first team felt overwhelming until I found Plato. Their platform made it simple to compare candidates, and their team patiently answered all my questions.",
    avatar: "LA",
  },
  {
    name: "Omar Hassan",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "Plato's professionalism and market insights helped us reach serious candidates quickly. Their tech-driven approach is exactly what the recruiting industry needs.",
    avatar: "OH",
  },
  {
    name: "Khaled Nasser",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "As a partner agent, I've worked with several platforms, but Plato stands out for its user-friendly tools and reliable client support.",
    avatar: "KN",
  },
  {
    name: "Nour Abdullah",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "We needed qualified candidates with strong technical skills and Plato helped us find exactly that. Their filters saved us so much time.",
    avatar: "NA",
  },
  {
    name: "Reem Al-Otaibi",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "I found my ideal candidate on Plato in less than a week! The profiles were detailed, and the communication with applicants was very easy. I'll definitely use Plato again in the future.",
    avatar: "RA",
  },
  {
    name: "Mohammed Al-Salem",
    role: "HR Manager",
    company: "Sodic",
    rating: 5,
    text: "Plato helped me list and manage my open roles efficiently. Their customer service is top-notch and always available when I need assistance. Great experience overall!",
    avatar: "MA",
  },
];

const TESTIMONIALS_AR: Testimonial[] = [
  {
    name: "أحمد خالد",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "ما يعجبني في بلاتو هو الشفافية والاهتمام بالتفاصيل. ساعدوني في تحديد مرشحين رائعين بسرعة وتعاملوا مع كل شيء باحترافية.",
    avatar: "أخ",
  },
  {
    name: "فاطمة الحربي",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "المنصة سهلة الاستخدام وخالية من التوتر. كل شيء كان واضحاً وسريعاً ومدعوماً طوال عملية التوظيف بأكملها.",
    avatar: "فح",
  },
  {
    name: "ليلى المطيري",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "تعيين فريقي الأول كان مرهقاً حتى وجدت بلاتو. منصتهم جعلت المقارنة بين المرشحين بسيطة، وفريقهم أجاب على جميع أسئلتي بصبر.",
    avatar: "لم",
  },
  {
    name: "عمر حسن",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "احترافية بلاتو ورؤاهم السوقية ساعدتنا في الوصول إلى مرشحين جادين بسرعة. نهجهم التقني هو بالضبط ما تحتاجه صناعة التوظيف.",
    avatar: "عح",
  },
  {
    name: "خالد ناصر",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "كشريك توظيف، عملت مع عدة منصات، لكن بلاتو تتميز بأدواتها سهلة الاستخدام ودعم العملاء الموثوق.",
    avatar: "خن",
  },
  {
    name: "نور عبدالله",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "أردنا مرشحين مؤهلين ذوي خبرة قوية وبلاتو ساعدنا في العثور على ذلك بالضبط. فلاترهم وفرت لنا الكثير من الوقت.",
    avatar: "نع",
  },
  {
    name: "ريم العتيبي",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "وجدت المرشح المثالي على بلاتو في أقل من أسبوع! الملفات كانت مفصلة، والتواصل مع المرشحين كان سهلاً جداً. سأستخدم بلاتو مرة أخرى بالتأكيد.",
    avatar: "رع",
  },
  {
    name: "محمد السالم",
    role: "مدير موارد بشرية",
    company: "سوديك",
    rating: 5,
    text: "بلاتو ساعدني في نشر وإدارة وظائفي الشاغرة بكفاءة. خدمة العملاء لديهم ممتازة ومتاحة دائماً عند الحاجة. تجربة رائعة بشكل عام!",
    avatar: "مس",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" data-testid="stars-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <ScrollReveal animation="fade-up" delay={index % 3}>
      <div
        className="relative rounded-2xl border border-blue-500/20 bg-card p-6 flex flex-col gap-4 h-full"
        style={{
          boxShadow: "0 0 30px 0 rgba(14, 100, 210, 0.08), 0 0 60px 0 rgba(14, 100, 210, 0.04)",
        }}
        data-testid={`card-testimonial-${index}`}
      >
        <div className="flex items-center justify-between">
          <StarRating rating={testimonial.rating} />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>
              {testimonial.name}
            </p>
            <p className="text-xs text-blue-500">
              {testimonial.role} @ {testimonial.company}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1" data-testid={`text-testimonial-text-${index}`}>
          {testimonial.text}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  const { t, lang, dir, localePath } = useI18n();
  const p = t.testimonialsPage;

  useSEO({
    title: p.metaTitle,
    description: p.metaDescription,
  });

  const testimonials = lang === "ar" ? TESTIMONIALS_AR : TESTIMONIALS_EN;

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 5);
  const row3 = testimonials.slice(5, 8);

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" data-testid="text-testimonials-title">
              {p.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={1}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto" data-testid="text-testimonials-subtitle">
              {p.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          {/* Row 1 – 3 cards, offset left */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:-mx-8">
            {row1.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>

          {/* Row 2 – 2 cards, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl md:mx-auto">
            {row2.map((t, i) => (
              <TestimonialCard key={i + 3} testimonial={t} index={i + 3} />
            ))}
          </div>

          {/* Row 3 – 3 cards, offset right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:-mx-8">
            {row3.map((t, i) => (
              <TestimonialCard key={i + 5} testimonial={t} index={i + 5} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal animation="scale-up">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#0d2847] py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8" data-testid="text-testimonials-cta-title">
                {t.blogPage.readyToTransform}<br />
                {t.blogPage.yourHiringProcess} <span className="text-white">{t.blogPage.hiringProcessBold}</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href={config.employerAppUrl} data-testid="link-testimonials-cta-start-trial">
                  <Button size="lg" variant="outline" className="rounded-full" data-testid="button-testimonials-cta-start-trial">
                    {t.blogPage.startFreeTrial}
                  </Button>
                </a>
                <a href={getDemoLink()} data-testid="link-testimonials-cta-request-demo">
                  <Button size="lg" className="rounded-full" data-testid="button-testimonials-cta-request-demo">
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
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.product}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-changelog">{t.footerSection.changelog}</span></li>
                  <li><Link href={localePath("/testimonials")}><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-customer-stories">{t.footerSection.customerStories}</span></Link></li>
                  <li><Link href={localePath("/security")}><span className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonials-footer-security">{t.footerSection.security}</span></Link></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-chrome">{t.footerSection.chromeExtension} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-ios">{t.footerSection.iosApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-android">{t.footerSection.androidApp} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-zapier">{t.footerSection.zapier} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-integromat">{t.footerSection.integromat} ↗</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.company}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-about">{t.footerSection.about}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-careers">{t.footerSection.careers}</span></li>
                  <li><Link href={localePath("/blog")}><span className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonials-footer-blog">{t.footerSection.blog}</span></Link></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-startup-program">{t.footerSection.startupProgram}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.platoFor}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-startups">{t.footerSection.startups}</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-agencies">{t.footerSection.agencies}</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.support}</h4>
                <ul className="space-y-2.5">
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-help-center">{t.footerSection.helpCenter}</span></li>
                  <li><Link href={localePath("/contact")}><span className="text-xs text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonials-footer-support">{t.footerSection.talkToSupport}</span></Link></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-api-docs">{t.footerSection.apiDocs} ↗</span></li>
                  <li><span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-testimonials-footer-system-status">{t.footerSection.systemStatus} ↗</span></li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-sm font-semibold mb-4 text-foreground">{t.footerSection.readyToBuild}</h4>
                <div className="flex flex-col gap-3">
                  <a href={config.employerAppUrl} data-testid="link-testimonials-footer-start-free">
                    <Button className="w-full rounded-full" size="lg" data-testid="button-testimonials-footer-start-free">
                      {t.footerSection.startForFree}
                    </Button>
                  </a>
                  <a href={getDemoLink()} data-testid="link-testimonials-footer-request-demo">
                    <Button variant="outline" className="w-full rounded-full" size="lg" data-testid="button-testimonials-footer-request-demo">
                      {t.footerSection.requestDemo}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70" data-testid="text-testimonials-copyright">
              {t.footerSection.copyright}
            </p>
            <div className="flex items-center gap-4">
              <Link href={localePath("/terms")}>
                <span className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-testimonials-footer-terms">
                  {t.footerSection.termsAndConditions}
                </span>
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link href={localePath("/privacy")}>
                <span className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors" data-testid="link-testimonials-footer-privacy">
                  {t.footerSection.privacyPolicy}
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {config.linkedinUrl && (
                <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn" data-testid="link-testimonials-footer-linkedin">
                  <SiLinkedin className="w-4 h-4" />
                </a>
              )}
              <a href="https://www.instagram.com/platohiring?igsh=M2puazltZDQxOXFu&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram" data-testid="link-testimonials-footer-instagram">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@platohiring?_r=1&_t=ZN-948glBbZIgA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok" data-testid="link-testimonials-footer-tiktok">
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
