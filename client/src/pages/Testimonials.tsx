import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Star, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";
import { config, getDemoLink } from "@/lib/config";
import { SiLinkedin, SiInstagram, SiTiktok } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

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
    role: "HR",
    company: "Accentia Gulf Middle East",
    rating: 5,
    text: "Plato impressed me with their transparency and attention to detail. Strong candidates came through quickly, and everything felt professional.",
    avatar: "AK",
  },
  {
    name: "Fatima Al-Harbi",
    role: "HR",
    company: "Implex",
    rating: 5,
    text: "The process was clear from day one. Plato kept things organised and made communication easy at every step.",
    avatar: "FA",
  },
  {
    name: "Layla Al-Mutairi",
    role: "HR",
    company: "AiCanSell",
    rating: 5,
    text: "The shortlist quality was high. Plato filtered properly, so I only reviewed candidates that made sense for the role.",
    avatar: "LA",
  },
  {
    name: "Omar Hassan",
    role: "HR",
    company: "SKILLCREDS",
    rating: 5,
    text: "Plato saved us a lot of time. Updates were fast, and the workflow felt structured and reliable.",
    avatar: "OH",
  },
  {
    name: "Khaled Nasser",
    role: "HR",
    company: "Neuro Espitalia",
    rating: 5,
    text: "They understood the position quickly and sent profiles that matched both the skills and the level we were aiming for.",
    avatar: "KN",
  },
  {
    name: "Nour Abdullah",
    role: "HR",
    company: "Polygon Pharma",
    rating: 5,
    text: "Speed was a major advantage. We moved from requirement to interviews much faster than our usual hiring timeline.",
    avatar: "NA",
  },
  {
    name: "Reem Al-Otaibi",
    role: "HR",
    company: "Grove",
    rating: 5,
    text: "What stood out is how tailored the recommendations were. It didn't feel generic — it felt built around our needs.",
    avatar: "RA",
  },
  {
    name: "Sara Al-Qahtani",
    role: "HR",
    company: "Melanite",
    rating: 5,
    text: "Plato made hiring feel more confident. Efficient delivery, clear process, and strong overall results.",
    avatar: "SA",
  },
  {
    name: "Abdullah Al-Fahad",
    role: "HR",
    company: "Benchmark Engineering",
    rating: 5,
    text: "Working with Plato was straightforward. They handled the heavy lifting and delivered a shortlist I could trust.",
    avatar: "AF",
  },
  {
    name: "Huda Al-Shammari",
    role: "HR",
    company: "Quanta",
    rating: 5,
    text: "The candidate profiles were well-presented and easy to compare, which made shortlisting faster on our side.",
    avatar: "HS",
  },
  {
    name: "Faisal Al-Dosari",
    role: "HR",
    company: "Ikon",
    rating: 5,
    text: "Plato's screening reduced back-and-forth. The interviews we scheduled were relevant and worth the time.",
    avatar: "FD",
  },
  {
    name: "Aisha Al-Johani",
    role: "HR",
    company: "Ceramica Venezia",
    rating: 5,
    text: "We liked the consistency. Plato kept momentum through the process without delays or confusion.",
    avatar: "AJ",
  },
  {
    name: "Bandar Al-Ghamdi",
    role: "HR",
    company: "Ceramic Stores",
    rating: 5,
    text: "The matching felt accurate. We received candidates that aligned with our expectations in experience and fit.",
    avatar: "BG",
  },
  {
    name: "Mona Al-Zahrani",
    role: "HR",
    company: "Mono Lets",
    rating: 5,
    text: "Plato improved our hiring efficiency. Fewer unsuitable CVs and more actionable options from the start.",
    avatar: "MZ",
  },
  {
    name: "Yara Al-Hussein",
    role: "HR",
    company: "LXT",
    rating: 5,
    text: "Overall, the service felt premium. Smooth coordination, strong candidates, and a hiring flow that stayed on track.",
    avatar: "YH",
  },
];

const TESTIMONIALS_AR: Testimonial[] = [
  {
    name: "أحمد خالد",
    role: "موارد بشرية",
    company: "أكسنتيا الخليج",
    rating: 5,
    text: "بلاتو أبهرني بشفافيتهم واهتمامهم بالتفاصيل. المرشحون الأقوياء وصلوا بسرعة، وكل شيء كان احترافياً.",
    avatar: "أخ",
  },
  {
    name: "فاطمة الحربي",
    role: "موارد بشرية",
    company: "إمبلكس",
    rating: 5,
    text: "العملية كانت واضحة من اليوم الأول. بلاتو حافظوا على التنظيم وسهّلوا التواصل في كل خطوة.",
    avatar: "فح",
  },
  {
    name: "ليلى المطيري",
    role: "موارد بشرية",
    company: "AiCanSell",
    rating: 5,
    text: "جودة القائمة المختصرة كانت عالية. بلاتو فلتروا بشكل صحيح، فراجعت فقط المرشحين المناسبين للوظيفة.",
    avatar: "لم",
  },
  {
    name: "عمر حسن",
    role: "موارد بشرية",
    company: "SKILLCREDS",
    rating: 5,
    text: "بلاتو وفّر علينا الكثير من الوقت. التحديثات كانت سريعة، وسير العمل كان منظماً وموثوقاً.",
    avatar: "عح",
  },
  {
    name: "خالد ناصر",
    role: "موارد بشرية",
    company: "نيورو إسبيتاليا",
    rating: 5,
    text: "فهموا الوظيفة بسرعة وأرسلوا ملفات تطابق المهارات والمستوى الذي كنا نستهدفه.",
    avatar: "خن",
  },
  {
    name: "نور عبدالله",
    role: "موارد بشرية",
    company: "بوليجون فارما",
    rating: 5,
    text: "السرعة كانت ميزة كبيرة. انتقلنا من المتطلبات إلى المقابلات أسرع بكثير من جدولنا المعتاد.",
    avatar: "نع",
  },
  {
    name: "ريم العتيبي",
    role: "موارد بشرية",
    company: "جروف",
    rating: 5,
    text: "ما لفت انتباهي هو مدى تخصيص التوصيات. لم تكن عامة — بل مبنية حول احتياجاتنا.",
    avatar: "رع",
  },
  {
    name: "سارة القحطاني",
    role: "موارد بشرية",
    company: "ميلانيت",
    rating: 5,
    text: "بلاتو جعل التوظيف أكثر ثقة. تسليم فعّال، عملية واضحة، ونتائج قوية بشكل عام.",
    avatar: "سق",
  },
  {
    name: "عبدالله الفهد",
    role: "موارد بشرية",
    company: "بنشمارك للهندسة",
    rating: 5,
    text: "العمل مع بلاتو كان مباشراً. تولوا العمل الشاق وقدموا قائمة مختصرة يمكنني الوثوق بها.",
    avatar: "عف",
  },
  {
    name: "هدى الشمري",
    role: "موارد بشرية",
    company: "كوانتا",
    rating: 5,
    text: "ملفات المرشحين كانت منظمة وسهلة المقارنة، مما جعل الاختيار أسرع من جانبنا.",
    avatar: "هش",
  },
  {
    name: "فيصل الدوسري",
    role: "موارد بشرية",
    company: "أيكون",
    rating: 5,
    text: "فحص بلاتو قلّل التراسل. المقابلات التي حددناها كانت ذات صلة وتستحق الوقت.",
    avatar: "فد",
  },
  {
    name: "عائشة الجهني",
    role: "موارد بشرية",
    company: "سيراميكا فينيزيا",
    rating: 5,
    text: "أعجبنا الاتساق. بلاتو حافظوا على الزخم طوال العملية بدون تأخير أو ارتباك.",
    avatar: "عج",
  },
  {
    name: "بندر الغامدي",
    role: "موارد بشرية",
    company: "متاجر السيراميك",
    rating: 5,
    text: "المطابقة كانت دقيقة. تلقينا مرشحين يتوافقون مع توقعاتنا في الخبرة والملاءمة.",
    avatar: "بغ",
  },
  {
    name: "منى الزهراني",
    role: "موارد بشرية",
    company: "مونو ليتس",
    rating: 5,
    text: "بلاتو حسّن كفاءة التوظيف لدينا. سير ذاتية غير مناسبة أقل وخيارات قابلة للتنفيذ أكثر من البداية.",
    avatar: "مز",
  },
  {
    name: "يارا الحسين",
    role: "موارد بشرية",
    company: "LXT",
    rating: 5,
    text: "بشكل عام، الخدمة كانت متميزة. تنسيق سلس، مرشحون أقوياء، وعملية توظيف بقيت على المسار.",
    avatar: "يح",
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" data-testid="text-testimonials-cta-title">
                  {t.blogPage.readyToTransform} {t.blogPage.yourHiringProcess}{" "}
                  <span className="font-extrabold">{t.blogPage.hiringProcessBold}</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={localePath("/signup")} data-testid="button-testimonials-start-trial">
                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-white no-default-hover-elevate">
                      {t.blogPage.startFreeTrial}
                    </Button>
                  </Link>
                  <a href={getDemoLink()} data-testid="button-testimonials-request-demo">
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
                <Link href={localePath("/signup")}>
                  <Button className="rounded-full w-full px-6">{t.footer.startForFree}</Button>
                </Link>
                <Link href={localePath("/book-demo")}>
                  <Button variant="outline" className="rounded-full w-full px-6">{t.footer.requestDemo}</Button>
                </Link>
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
