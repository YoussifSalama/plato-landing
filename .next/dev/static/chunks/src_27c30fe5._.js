(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/queryClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest,
    "getQueryFn",
    ()=>getQueryFn,
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
async function throwIfResNotOk(res) {
    if (!res.ok) {
        const text = await res.text() || res.statusText;
        throw new Error(`${res.status}: ${text}`);
    }
}
async function apiRequest(method, url, data) {
    const res = await fetch(url, {
        method,
        headers: data ? {
            "Content-Type": "application/json"
        } : {},
        body: data ? JSON.stringify(data) : undefined,
        credentials: "include"
    });
    await throwIfResNotOk(res);
    return res;
}
const getQueryFn = ({ on401: unauthorizedBehavior })=>async ({ queryKey })=>{
        const res = await fetch(queryKey.join("/"), {
            credentials: "include"
        });
        if (unauthorizedBehavior === "returnNull" && res.status === 401) {
            return null;
        }
        await throwIfResNotOk(res);
        return await res.json();
    };
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            queryFn: getQueryFn({
                on401: "throw"
            }),
            refetchInterval: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        },
        mutations: {
            retry: false
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/translations/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    meta: {
        siteName: "Plato",
        siteTagline: "Hire Smarter. Faster. With AI.",
        pages: {
            home: {
                title: "",
                description: "PLATO is an AI-powered HRM platform that helps companies streamline hiring, analyze CVs in seconds, and conduct intelligent interviews."
            },
            employers: {
                title: "For Employers",
                description: "Automate your hiring pipeline. Screen resumes, reach out to candidates, conduct structured interviews, and get detailed reports."
            },
            jobSeekers: {
                title: "For Job Seekers",
                description: "Upload your resume once and get matched to relevant opportunities. Fair, transparent, structured interviews."
            },
            howItWorks: {
                title: "How It Works",
                description: "See how Plato connects employers with the best candidates through automated screening, outreach, and interviews."
            },
            blog: {
                title: "Plato Blogs",
                description: "Stay ahead in the world of modern hiring with insights, trends, and expert guidance from the Plato team."
            },
            faq: {
                title: "FAQ",
                description: "Frequently asked questions about Plato's hiring automation platform for employers and job seekers."
            },
            contact: {
                title: "Contact Us",
                description: "Get in touch with the Plato team. We'd love to hear from you."
            },
            security: {
                title: "Security & Privacy",
                description: "Learn how Plato protects your data with encryption, access controls, and data minimization practices."
            },
            privacy: {
                title: "Privacy Policy",
                description: "Plato's privacy policy — how we collect, use, and protect your information."
            },
            terms: {
                title: "Terms & Conditions",
                description: "Terms and conditions governing your access to and use of the Plato HRM platform."
            },
            pricing: {
                title: "Pricing",
                description: "Simple, transparent pricing for teams of all sizes. Book a demo to learn more."
            },
            bookDemo: {
                title: "Book a Demo",
                description: "Schedule a demo with Plato to see how AI-powered hiring can transform your recruitment process."
            },
            login: {
                title: "Login",
                description: "Log in to your Plato account — employers and job seekers."
            },
            signup: {
                title: "Create Account",
                description: "Create your Plato account — start your free trial as an employer or job seeker."
            }
        }
    },
    nav: {
        forEmployers: "For Employers",
        forJobSeekers: "For Job Seekers",
        howItWorks: "How it Works",
        blog: "Blogs",
        faq: "FAQ",
        contact: "Contact",
        login: "Login",
        bookDemo: "Book a Demo",
        langSwitch: "AR",
        pricing: "Pricing",
        about: "About",
        useCases: "Use Cases"
    },
    hero: {
        headline: "Hire Smarter. Faster. With AI.",
        subheadline: "PLATO is an AI-powered HRM platform that helps companies streamline hiring, analyze CVs in seconds, and conduct intelligent interviews — saving time, reducing costs, and improving hiring decisions.",
        hireTalent: "Hire Talent",
        findJobs: "Find Jobs",
        uploadResume: "Upload Resume"
    },
    trustedBy: {
        title: "TRUSTED BY"
    },
    statementSection: {
        line1: "Hiring the right talent shouldn't take weeks.",
        line2: "PLATO automates and optimizes the entire recruitment process",
        line3: "from posting jobs to selecting the best candidates",
        line4: "all in one powerful dashboard."
    },
    featuresSection: {
        smartJobManagement: "Smart Job Management",
        smartJobManagementDesc: "Create, manage, and publish job openings in minutes.",
        candidateFiltering: "Advanced Candidate Filtering",
        candidateFilteringDesc: "Quickly find the best applicants using smart filters, rankings, and automated shortlisting.",
        cvAnalysis: "AI CV Analysis in Seconds",
        cvAnalysisDesc: "PLATO scans and evaluates CVs instantly, highlighting top candidates based on skills, experience, and job fit.",
        hiringQuality: "Improve Hiring Quality",
        hiringQualityDesc: "Use AI insights to identify the most qualified candidates.",
        saveTime: "Save Time",
        saveTimeDesc: "Reduce manual screening and accelerate hiring cycles."
    },
    comparisonSection: {
        title: "Let Plato AI Analyze Candidates",
        subtitle: "PLATO reviews CVs and ranks applicants automatically.",
        timeTitle: "Hire the Best Talent / Time",
        withoutPlato: "without Plato AI",
        withPlato: "with Plato AI",
        timeBefore: "7 days",
        timeAfter: "2 mins",
        costTitle: "Cut Costs",
        costSubtitle: "Minimize recruitment expenses with automation and smarter decisions.",
        costCardTitle: "Recruitment Expenses Cost",
        costBefore: "5% Cost Save",
        costAfter: "90% Cost Save"
    },
    faqSection: {
        title: "Frequently Asked Questions (FAQ)",
        subtitle: "Have questions about Plato? We've got you covered. Here you'll find answers to the most common inquiries",
        items: [
            {
                q: "I'm An Agency, Do You Integrate With Another Systems?",
                a: "Yes, Plato integrates with popular ATS systems and HR platforms. Contact us to discuss your specific integration needs."
            },
            {
                q: "Why Do I Develop Job Using Plato?",
                a: "Plato automates the entire recruitment process from posting jobs to selecting candidates, saving you time and resources while improving hiring quality."
            },
            {
                q: "How Much Does It Cost?",
                a: "We offer flexible pricing plans for teams of all sizes. Book a demo to learn more about pricing that fits your needs."
            },
            {
                q: "Is There Any Extra Cost Involved?",
                a: "No hidden costs. All features are included in your plan. You only pay for what you use."
            },
            {
                q: "How Long Does It Take?",
                a: "Setup takes minutes. You can start posting jobs and screening candidates on the same day you sign up."
            },
            {
                q: "Do I Need A Developer To Make Future Updates On Plato?",
                a: "No. Plato is designed for HR teams and recruiters — no technical knowledge required."
            }
        ]
    },
    ctaSection: {
        title: "Ready to transform your",
        titleBold: "hiring process?",
        startTrial: "Start Free Trial",
        requestDemo: "Request Demo"
    },
    footerSection: {
        product: "Product",
        changelog: "Changelog",
        customerStories: "Testimonials",
        security: "Security",
        chromeExtension: "Chrome extension",
        iosApp: "iOS app",
        androidApp: "Android app",
        zapier: "Zapier",
        integromat: "Integromat",
        company: "Company",
        about: "About",
        careers: "Careers",
        blog: "Blog",
        startupProgram: "Startup program",
        platoFor: "Plato for",
        startups: "Startups",
        agencies: "Agencies",
        support: "Support",
        helpCenter: "Help center",
        talkToSupport: "Talk to support",
        apiDocs: "API docs",
        systemStatus: "System status",
        readyToBuild: "Ready to build?",
        startForFree: "Start Free Trial",
        requestDemo: "Request Demo",
        copyright: `© ${new Date().getFullYear()} Plato. All rights reserved.`,
        termsAndConditions: "Terms & Conditions",
        privacyPolicy: "Privacy Policy"
    },
    employerSection: {
        title: "For Employers",
        subtitle: "Streamline your hiring process from start to finish.",
        card1Title: "Faster shortlisting",
        card1Desc: "Go from resumes to a ranked shortlist in hours, not weeks.",
        card2Title: "Less HR effort",
        card2Desc: "Automate the busywork: screening, outreach, reminders, and interview scheduling.",
        card3Title: "Better matches",
        card3Desc: "Structured evaluation and explainable fit signals — not guesswork.",
        hireTalent: "Hire Talent",
        bookDemo: "Book a Demo"
    },
    jobSeekerSection: {
        title: "For Job Seekers",
        subtitle: "Your next opportunity is one upload away.",
        card1Title: "Upload once, apply smarter",
        card1Desc: "Submit your resume once and let Plato match you with relevant opportunities automatically.",
        card2Title: "Get matched to roles that fit",
        card2Desc: "Our matching engine connects you with positions that align with your skills and experience.",
        card3Title: "Stand out with structured interviews",
        card3Desc: "Showcase your strengths through a consistent and fair interview process.",
        uploadResume: "Upload Resume",
        findJobs: "Find Jobs"
    },
    howItWorksSection: {
        title: "How it Works",
        subtitle: "A streamlined pipeline from resume to report.",
        employerFlow: "Employer Flow",
        jobSeekerFlow: "Job Seeker Flow",
        employer: {
            step1: "Resume screening",
            step2: "Shortlist top candidates",
            step3: "Email / call outreach",
            step4: "Automated interview",
            step5: "Generate a structured report"
        },
        jobSeeker: {
            step1: "Upload resume",
            step2: "Create profile",
            step3: "Get matched",
            step4: "Interview",
            step5: "Get shortlisted"
        }
    },
    securitySection: {
        title: "Security & Privacy",
        subtitle: "We take the security of your data seriously.",
        point1: "We minimize data collection to what's needed to deliver the service.",
        point2: "Access controls and least-privilege practices.",
        point3: "Encryption in transit (HTTPS).",
        point4: "You can request data deletion.",
        readMore: "Read Security & Privacy"
    },
    blogPreview: {
        title: "Latest from the Blog",
        cta: "Read the Blog"
    },
    faqPreview: {
        title: "Common Questions",
        cta: "View All FAQs"
    },
    contactCta: {
        text: "Have questions or want to learn more?",
        cta: "Contact Us"
    },
    finalCta: {
        employerHeadline: "Ready to hire faster?",
        employerCta: "Book a Demo",
        seekerHeadline: "Ready to upload your resume?",
        seekerCta: "Upload Resume"
    },
    employersPage: {
        heroTitle: "About Plato",
        heroSubtitle: "PLATO is an AI-powered HRM platform that helps companies streamline hiring, analyze CVs in seconds, and conduct intelligent interviews — saving time, reducing costs, and improving hiring decisions.",
        inActionsTitle: "Plato in Actions",
        inActionsSubtitle: "PLATO reviews CVs and ranks applicants automatically.",
        feature1Title: "AI-led Innovation",
        feature1Desc: "Harness the power of intelligent automation to transform the way you hire. Plato uses advanced AI to screen CVs in seconds.",
        feature2Title: "Transparency",
        feature2Desc: "Plato creates a fully connected hiring ecosystem where HR teams, hiring managers, and stakeholders collaborate in real time.",
        feature3Title: "Connectivity",
        feature3Desc: "No more lost emails, unclear feedback, or disconnected workflows — just seamless collaboration and complete transparency.",
        feature4Title: "Time & Cost Efficiency",
        feature4Desc: "Hiring shouldn't drain your resources. Plato automates repetitive tasks, reduces time-to-hire, and minimizes recruitment costs by optimizing every step of the process.",
        hubTitle: "Unified Talent Intelligence Hub",
        hubDesc1: "Plato brings all your hiring data, insights, and workflows into one powerful intelligence hub — turning recruitment from a reactive process into a strategic, data-driven function.",
        hubDesc2: "Instead of juggling multiple tools, spreadsheets, and communication channels, Plato centralizes everything into a single source of truth. From job creation to candidate evaluation and hiring analytics, every action feeds into a unified system that helps you make smarter workforce decisions.",
        whyTitle: "Why Plato",
        whySubtitle: "Plato isn't just another HR tool — it's an intelligent hiring partner designed to help companies hire smarter, faster.",
        why1Title: "SMARTER HIRING AI",
        why1Desc: "Make decisions backed by data, not guesswork. Plato's AI analyzes CVs, evaluates candidate fit, and provides actionable insights so you can select the best talent with confidence.",
        why2Title: "COST-EFFICIENT RECRUITMENT",
        why2Desc: "Reduce unnecessary spending and optimize your HR resources. Plato minimizes manual effort and external recruitment costs while improving hiring outcomes.",
        why3Title: "ENHANCED CANDIDATE EXPERIENCE",
        why3Desc: "A smooth, professional hiring journey strengthens your employer brand. Plato ensures candidates experience a clear, timely, and engaging process — from application to final decision.",
        why4Title: "COMPLETE VISIBILITY & CONTROL",
        why4Desc: "Stay in control of your hiring pipeline with a centralized dashboard that keeps everyone aligned — from HR teams to hiring managers.",
        why5Title: "SCALABLE FOR GROWING TEAMS",
        why5Desc: "Whether you're a startup or an enterprise, Plato grows with your organization, supporting multiple roles, departments, and hiring needs.",
        why6Title: "FASTER TIME-TO-HIRE",
        why6Desc: "Speed matters in competitive markets. Plato automates repetitive tasks and streamlines workflows, helping you fill roles before top talent slips away.",
        ctaTitle: "Ready to transform your",
        ctaTitleBold: "hiring process?",
        ctaStartTrial: "Start Free Trial",
        ctaRequestDemo: "Request Demo"
    },
    jobSeekersPage: {
        heroTitle: "Find jobs that fit you.",
        heroSubtitle: "Upload your resume once, get matched to relevant opportunities, and stand out with structured interviews.",
        feature1Title: "One Resume, Many Opportunities",
        feature1Desc: "Upload your resume to Plato and get automatically matched to relevant open positions.",
        feature2Title: "Fair & Transparent Process",
        feature2Desc: "Every candidate goes through the same structured process — your skills and experience speak for themselves.",
        feature3Title: "Interview on Your Terms",
        feature3Desc: "Complete interviews at your own pace with a clear, structured format designed to showcase your strengths.",
        feature4Title: "Track Your Progress",
        feature4Desc: "Stay informed at every step. Know where you stand in the hiring process in real time.",
        ctaTitle: "Your next opportunity starts here",
        ctaSubtitle: "Upload your resume and get matched today."
    },
    howItWorksPage: {
        heroTitle: "How Plato Works",
        heroSubtitle: "A step-by-step look at how we connect employers with the best candidates.",
        forEmployers: "For Employers",
        forJobSeekers: "For Job Seekers",
        employerSteps: [
            {
                title: "Resume Screening",
                desc: "Upload candidate resumes. Plato parses and evaluates them against your job requirements automatically."
            },
            {
                title: "Shortlist Top Candidates",
                desc: "Receive a ranked shortlist of the best-fit candidates based on structured evaluation criteria."
            },
            {
                title: "Email / Call Outreach",
                desc: "Plato sends automated outreach to shortlisted candidates via email or phone to schedule next steps."
            },
            {
                title: "Automated Interview",
                desc: "Candidates complete structured interviews designed to evaluate key competencies consistently."
            },
            {
                title: "Generate a Structured Report",
                desc: "Receive detailed reports with fit scores, interview summaries, and hiring recommendations."
            }
        ],
        seekerSteps: [
            {
                title: "Upload Resume",
                desc: "Submit your resume to Plato. We parse your skills, experience, and preferences automatically."
            },
            {
                title: "Create Profile",
                desc: "Build a comprehensive profile that showcases your strengths and career goals."
            },
            {
                title: "Get Matched",
                desc: "Our matching engine connects you with opportunities that align with your background."
            },
            {
                title: "Interview",
                desc: "Complete structured interviews at your own pace, designed to highlight your abilities fairly."
            },
            {
                title: "Get Shortlisted",
                desc: "Stand out to employers with a strong profile and interview performance."
            }
        ]
    },
    faqPage: {
        title: "Plato FAQs",
        subtitle: "Have questions about Plato? We've got you covered. Here you'll find answers to the most common inquiries.",
        items: [
            {
                q: "Why is Plato important for my business?",
                a: "Plato allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
            },
            {
                q: "How can Plato help improve my website's visibility?",
                a: "Plato uses AI-powered candidate matching and automated screening to help your job listings reach the most qualified candidates faster, increasing your hiring efficiency and reducing time-to-fill."
            },
            {
                q: "How do you measure the success of Plato campaigns?",
                a: "We track key metrics including time-to-hire, candidate quality scores, screening accuracy, and offer acceptance rates. Our analytics dashboard provides real-time insights into your hiring performance."
            },
            {
                q: "How long does it take to see results from Plato efforts?",
                a: "Most clients see measurable improvements within the first week. Automated screening begins immediately, and you'll start receiving ranked candidate shortlists within hours of posting a job."
            },
            {
                q: "Can Plato help improve my website's visibility?",
                a: "Yes. Plato's employer branding tools help showcase your company culture and opportunities, making your careers page more attractive to top talent and improving your visibility among job seekers."
            },
            {
                q: "How do you measure the success of Plato campaigns?",
                a: "Success is measured through comprehensive analytics including application volume, candidate quality metrics, time-to-hire improvements, and cost-per-hire reductions. All metrics are available in your dashboard."
            },
            {
                q: "How do you measure the success of Plato campaigns?",
                a: "We provide detailed reporting on every stage of your hiring funnel — from job posting performance to final hire analytics — so you can continuously optimize your recruitment strategy."
            }
        ]
    },
    contactPage: {
        title: "Contact Us",
        subtitle: "Have questions about Plato or ready to transform your hiring process? Our team is here to help. Whether you're exploring features, need a personalized demo, or want to discuss how Plato can support your organization's growth, we'd love to hear from you.",
        infoCards: {
            email: "info@platohiring.com",
            location: "Dokki, Giza - Egypt",
            hours: "Sun-Thur: 9:00 AM - 6:00 PM",
            phone: "+201022330092"
        },
        mapCard: {
            title: "Head Office",
            address: "1 El Sad El Ali St. Kobri El Galaa Square, Dokki, Giza",
            phone: "Tel: +201022330092",
            email: "Email: info@platohiring.com"
        },
        formTitle: "Need help,",
        formTitleHighlight: "Contact Us",
        formSubtitle: "Reach out to us and take the first step toward smarter, faster, and more transparent hiring.",
        firstNameLabel: "First Name",
        firstNamePlaceholder: "Enter First Name",
        nameLabel: "Full Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "Enter your Email",
        phoneLabel: "Phone",
        phonePlaceholder: "Enter Phone Number",
        companyLabel: "Company",
        companyPlaceholder: "Your company name",
        roleLabel: "Role / Title",
        rolePlaceholder: "e.g. Head of HR",
        inquiryLabel: "Inquiry Type",
        inquiryPlaceholder: "Select Inquiry Type",
        inquiryOptions: [
            "General Inquiry",
            "Product Demo",
            "Pricing",
            "Partnership",
            "Technical Support",
            "Other"
        ],
        volumeLabel: "Hiring Volume",
        volumePlaceholder: "Select hiring volume",
        volumeOptions: [
            "1-5",
            "6-20",
            "21-50",
            "50+"
        ],
        messageLabel: "Message",
        messagePlaceholder: "Enter your Message here..",
        termsAgree: "I agree with",
        termsOfUse: "Terms of Use",
        andText: "and",
        privacyPolicy: "Privacy Policy",
        submit: "Send Your Message",
        successMessage: "Thank you! We'll be in touch soon.",
        fallbackMessage: "Form not configured yet — email us at",
        emailUs: "Email Us",
        faqTitle: "Frequently Asked\nQuestions (FAQ)",
        faqSubtitle: "Have questions about Plato? We've got you covered. Here you'll find answers to the most common inquiries",
        faqItems: [
            {
                q: "I'm An Agency, Do You Integrate With Another Systems?",
                a: "Yes, Plato integrates with popular ATS systems and HR platforms. Contact us to discuss your specific integration needs."
            },
            {
                q: "Why Do I Develop Job Using Plato?",
                a: "Plato automates the entire recruitment process from posting jobs to selecting candidates, saving you time and resources while improving hiring quality."
            },
            {
                q: "How Much Does It Cost?",
                a: "We offer flexible pricing plans for teams of all sizes. Book a demo to learn more about pricing that fits your needs."
            },
            {
                q: "Is There Any Extra Cost Involved?",
                a: "No hidden costs. All features are included in your plan. You only pay for what you use."
            },
            {
                q: "How Long Does It Take?",
                a: "Setup takes minutes. You can start posting jobs and screening candidates on the same day you sign up."
            },
            {
                q: "Do I Need A Developer To Make Future Updates On Plato?",
                a: "No. Plato is designed for HR teams and recruiters — no technical knowledge required."
            }
        ]
    },
    securityPage: {
        title: "Security & Privacy",
        subtitle: "How we protect your data and privacy.",
        intro: "At Plato, we take the security and privacy of your data seriously. Here is an overview of the practices we follow.",
        sections: [
            {
                title: "Data Minimization",
                desc: "We collect only the information necessary to deliver our service. We do not sell or share your personal data with third parties for marketing purposes."
            },
            {
                title: "Encryption",
                desc: "All data transmitted between your browser and our servers is encrypted using HTTPS (TLS). We use industry-standard practices to protect data in transit."
            },
            {
                title: "Access Controls",
                desc: "We follow least-privilege access principles. Only authorized team members have access to sensitive systems, and access is reviewed regularly."
            },
            {
                title: "Data Deletion",
                desc: "You can request deletion of your data at any time by contacting us. We will process your request promptly and confirm once your data has been removed."
            },
            {
                title: "Incident Response",
                desc: "We have processes in place to detect, respond to, and learn from security incidents. If a breach occurs that affects your data, we will notify you as required by applicable law."
            },
            {
                title: "Continuous Improvement",
                desc: "Security is an ongoing effort. We regularly review and update our practices to address new threats and improve our posture."
            }
        ]
    },
    privacyPage: {
        title: "Privacy Policy",
        subtitle: "This Privacy Policy explains how we collect, use, store, and protect personal data when you use the Plato HRM platform.",
        sections: [
            {
                title: "Information We Collect",
                items: [
                    "Name, email address, and contact details",
                    "Company name and business information",
                    "Job postings and hiring requirements",
                    "Interview notes and candidate evaluations"
                ]
            },
            {
                title: "Information Provided by Candidates",
                items: [
                    "Full name and contact details",
                    "Resume/CV and employment history",
                    "Education and skills",
                    "Portfolio links or attachments",
                    "Interview responses and assessments"
                ]
            },
            {
                title: "Automatically Collected Data",
                items: [
                    "IP address and browser type",
                    "Device information",
                    "Platform usage data and analytics",
                    "Cookies and tracking technologies"
                ]
            },
            {
                title: "AI Data Processing",
                items: [
                    "AI processing is automated and based on provided data.",
                    "Results are recommendations only.",
                    "We do not use candidate data to train external AI models without consent."
                ]
            },
            {
                title: "Data Sharing & Disclosure",
                items: [
                    "Companies using Plato for recruitment purposes",
                    "Authorized service providers (hosting, analytics, email delivery)",
                    "Legal authorities when required by law"
                ]
            },
            {
                title: "Data Storage & Security",
                items: [
                    "Data encryption",
                    "Secure servers and firewalls",
                    "Access controls and authentication",
                    "Regular security monitoring"
                ]
            },
            {
                title: "Data Retention",
                items: [
                    "Provide platform services",
                    "Comply with legal obligations",
                    "Resolve disputes and enforce agreements"
                ]
            }
        ]
    },
    termsPage: {
        title: "Terms & Conditions",
        subtitle: "Welcome to Plato. These Terms and Conditions govern your access to and use of the Plato HRM platform.",
        sections: [
            {
                title: "Definitions",
                items: [
                    '"Platform" refers to Plato HRM system and all related services.',
                    '"User" refers to HR managers, companies, recruiters, and candidates using the platform.',
                    '"Company" refers to the organization subscribing to Plato services.',
                    '"AI Tools" refer to automated CV analysis, candidate screening, and interview assistance features.'
                ]
            },
            {
                title: "Eligibility",
                items: [
                    "Be at least 18 years old.",
                    "Have authority to represent your company (for business accounts).",
                    "Provide accurate and complete registration information."
                ]
            },
            {
                title: "Platform Services",
                items: [
                    "Job posting and management",
                    "AI-powered CV screening and analysis",
                    "Candidate tracking and interview management",
                    "Hiring analytics and reporting",
                    "Dashboard with job filters and workflow automation"
                ]
            },
            {
                title: "User Responsibilities",
                items: [
                    "Provide accurate job and candidate information.",
                    "Use the platform only for lawful recruitment purposes.",
                    "Maintain confidentiality of login credentials.",
                    "Not misuse AI tools for discriminatory or unethical hiring practices."
                ]
            },
            {
                title: "AI & Automation Disclaimer",
                items: [
                    "AI results are advisory only.",
                    "Final hiring decisions remain the responsibility of the company.",
                    "Plato does not guarantee hiring outcomes or candidate suitability."
                ]
            },
            {
                title: "Data Privacy & Protection",
                items: [
                    "Candidate resumes and personal information",
                    "Company job postings and hiring data",
                    "Usage analytics to improve platform performance"
                ]
            },
            {
                title: "Subscription & Payments",
                items: [
                    "Some features may require a paid subscription.",
                    "Fees are billed according to the selected plan.",
                    "Failure to pay may result in suspension of services.",
                    "All fees are non-refundable unless otherwise stated."
                ]
            }
        ]
    },
    bookDemoPage: {
        title: "Book a Demo",
        brandName: "Plato",
        duration: "30 min",
        selectDate: "Select a Date",
        selectTime: "Select a Time Slot",
        nameLabel: "Name",
        namePlaceholder: "Enter full name",
        emailLabel: "Email",
        emailPlaceholder: "Enter email address",
        submitButton: "Book a Demo",
        timezone: "Time zone",
        successTitle: "Demo Booked!",
        successMessage: "We've received your booking. You'll receive a confirmation email shortly.",
        errorSlotTaken: "This time slot was just booked. Please select another.",
        errorGeneric: "Something went wrong. Please try again.",
        bookAnother: "Book Another Demo"
    },
    pricingPage: {
        title: "Plato Pricing",
        subtitle: "Plato Pricing Plans",
        popular: "MOST POPULAR",
        perMonth: "/month",
        monthly: "Monthly",
        yearly: "Yearly",
        choosePlan: "Choose plan",
        contactSales: "Contact Sales",
        startFreeTrial: "Start Free Trial",
        faqTitle: "Frequently Asked",
        faqTitleHighlight: "Questions",
        faqSubtitle: "Everything you need to know about our pricing and plans.",
        plans: {
            intro: {
                name: "Intro",
                monthlyPrice: "$20",
                yearlyPrice: "$16",
                description: "For most businesses that want to optimize web queries",
                features: [
                    "All limited links",
                    "Own analytics platform",
                    "Chat support",
                    "Optimize hashtags",
                    "Unlimited users"
                ]
            },
            base: {
                name: "Base",
                monthlyPrice: "$50",
                yearlyPrice: "$40",
                description: "For most businesses that want to optimize web queries",
                features: [
                    "All limited links",
                    "Own analytics platform",
                    "Chat support",
                    "Optimize hashtags",
                    "Unlimited users"
                ]
            },
            pro: {
                name: "Pro",
                monthlyPrice: "$100",
                yearlyPrice: "$80",
                description: "For most businesses that want to optimize web queries",
                features: [
                    "All limited links",
                    "Own analytics platform",
                    "Chat support",
                    "Optimize hashtags",
                    "Unlimited users"
                ]
            },
            enterprise: {
                name: "Enterprise",
                monthlyPrice: "Custom",
                yearlyPrice: "Custom",
                description: "For most businesses that want to optimize web queries",
                features: [
                    "All limited links",
                    "Own analytics platform",
                    "Chat support",
                    "Optimize hashtags",
                    "Unlimited users"
                ]
            }
        },
        faqs: [
            {
                q: "What are credits?",
                a: "Credits are used each time Plato processes a candidate — screening resumes, sending outreach, or conducting AI interviews. Different actions consume different amounts of credits."
            },
            {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes! You can switch plans at any time. When upgrading, you'll be prorated for the remaining billing period. Downgrades take effect at the next billing cycle."
            },
            {
                q: "Do unused credits roll over?",
                a: "Credits roll over for up to 3 months on Growth and Pro plans. Starter plan credits expire at the end of each billing period."
            },
            {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial with 50 credits so you can experience the full power of Plato before committing."
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and can arrange custom billing for Enterprise customers."
            }
        ]
    },
    loginPage: {
        title: "Choose Account Type",
        subtitle: "Select your account type and unlock the future of hiring.",
        employerTitle: "Employer",
        employerDesc: "Access your hiring dashboard, manage candidates, post jobs, and build your dream team.",
        employerCta: "Continue as Employer",
        seekerTitle: "Job Seeker",
        seekerDesc: "Browse opportunities, track applications, update your profile, and land your next role.",
        seekerCta: "Continue as Job Seeker",
        newToPlato: "New to Plato?",
        createAccount: "Create an account"
    },
    signupPage: {
        title: "Choose Account Type",
        subtitle: "Select your account type to start free trial.",
        employerTitle: "Employer",
        employerDesc: "Access your hiring dashboard, manage candidates, post jobs, and build your dream team.",
        employerCta: "Continue as Employer",
        seekerTitle: "Job Seeker",
        seekerDesc: "Browse opportunities, track applications, update your profile, and land your next role.",
        seekerCta: "Continue as Job Seeker",
        alreadyHaveAccount: "Already has an account?",
        login: "Login"
    },
    testimonialsPage: {
        metaTitle: "Testimonials - Plato",
        metaDescription: "Hear from those who've experienced clarity, trust, and innovation that define Plato.",
        title: "Plato Testimonials",
        subtitle: "Hear from those who've experienced clarity, trust, and innovation that define Plato. Their stories reflect our commitment to transparency, simplicity, and lasting relationships in every property journey."
    },
    blogPage: {
        title: "Plato Blogs",
        subtitle: "Stay ahead in the world of modern hiring with insights, trends, and expert guidance",
        searchPlaceholder: "Enter Keywords",
        searchButton: "Search",
        allTags: "All Posts",
        readMore: "Read More",
        readFullArticle: "Read Full Article",
        minRead: "min read",
        noPosts: "No articles found matching your search.",
        backToBlog: "Back to Blog",
        shareLink: "Copy link",
        linkCopied: "Link copied!",
        relatedTopics: "Related Topics:",
        relatedBlogs: "Related",
        relatedBlogsHighlight: "Blogs",
        relatedBlogsSubtitle: "Stay ahead in the world of modern hiring with insights, trends, and expert guidance",
        readyToTransform: "Ready to transform",
        yourHiringProcess: "your",
        hiringProcessBold: "hiring process?",
        startFreeTrial: "Start Free Trial"
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} Plato. All rights reserved.`,
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        security: "Security & Privacy",
        contact: "Contact",
        tagline: "PLATO is an AI-powered HRM platform that helps companies streamline hiring, analyze CVs in seconds, and conduct intelligent interviews.",
        companyTitle: "Company",
        contactsTitle: "Contacts",
        readyToGrow: "Ready to grow?",
        startForFree: "Start Free Trial",
        requestDemo: "Request Demo",
        termsAndConditions: "Terms & Conditions"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/translations/ar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ar",
    ()=>ar
]);
const ar = {
    meta: {
        siteName: "بلاتو",
        siteTagline: "وظّف بذكاء. أسرع. بالذكاء الاصطناعي.",
        pages: {
            home: {
                title: "",
                description: "بلاتو منصة موارد بشرية مدعومة بالذكاء الاصطناعي تساعد الشركات في تبسيط التوظيف وتحليل السير الذاتية في ثوانٍ وإجراء مقابلات ذكية."
            },
            employers: {
                title: "لأصحاب العمل",
                description: "أتمت خط التوظيف الخاص بك. افرز السير الذاتية، تواصل مع المرشحين، أجرِ مقابلات مهيكلة، واحصل على تقارير مفصّلة."
            },
            jobSeekers: {
                title: "للباحثين عن عمل",
                description: "ارفع سيرتك الذاتية مرة واحدة واحصل على تطابق مع الفرص المناسبة. مقابلات عادلة وشفافة ومهيكلة."
            },
            howItWorks: {
                title: "كيف يعمل",
                description: "شاهد كيف يربط بلاتو أصحاب العمل بأفضل المرشحين عبر الفرز والتواصل والمقابلات الآلية."
            },
            blog: {
                title: "مدونة بلاتو",
                description: "ابقَ في المقدمة في عالم التوظيف الحديث مع رؤى واتجاهات وإرشادات خبراء من فريق بلاتو."
            },
            faq: {
                title: "الأسئلة الشائعة",
                description: "الأسئلة الشائعة حول منصة أتمتة التوظيف بلاتو لأصحاب العمل والباحثين عن عمل."
            },
            contact: {
                title: "تواصل معنا",
                description: "تواصل مع فريق بلاتو. يسعدنا سماعك."
            },
            security: {
                title: "الأمان والخصوصية",
                description: "تعرّف على كيفية حماية بلاتو لبياناتك بالتشفير وضوابط الوصول وتقليل البيانات."
            },
            privacy: {
                title: "سياسة الخصوصية",
                description: "سياسة خصوصية بلاتو — كيف نجمع ونستخدم ونحمي معلوماتك."
            },
            terms: {
                title: "الشروط والأحكام",
                description: "الشروط والأحكام التي تحكم وصولك إلى منصة بلاتو لإدارة الموارد البشرية واستخدامها."
            },
            pricing: {
                title: "الأسعار",
                description: "أسعار بسيطة وشفافة لفرق بجميع الأحجام. احجز عرضاً تجريبياً لمعرفة المزيد."
            },
            bookDemo: {
                title: "احجز عرضاً تجريبياً",
                description: "حدد موعداً لعرض تجريبي مع بلاتو لترى كيف يمكن للتوظيف المدعوم بالذكاء الاصطناعي تحسين عملية التوظيف."
            },
            login: {
                title: "تسجيل الدخول",
                description: "سجّل الدخول إلى حسابك في بلاتو — أصحاب العمل والباحثين عن عمل."
            },
            signup: {
                title: "إنشاء حساب",
                description: "أنشئ حسابك في بلاتو — ابدأ تجربتك المجانية كصاحب عمل أو باحث عن عمل."
            }
        }
    },
    nav: {
        forEmployers: "لأصحاب العمل",
        forJobSeekers: "للباحثين عن عمل",
        howItWorks: "كيف يعمل",
        blog: "المدونة",
        faq: "الأسئلة الشائعة",
        contact: "تواصل معنا",
        login: "تسجيل الدخول",
        bookDemo: "احجز عرضاً تجريبياً",
        langSwitch: "EN",
        pricing: "الأسعار",
        about: "عن بلاتو",
        useCases: "حالات الاستخدام"
    },
    hero: {
        headline: "وظّف بذكاء. أسرع. بالذكاء الاصطناعي.",
        subheadline: "بلاتو منصة موارد بشرية مدعومة بالذكاء الاصطناعي تساعد الشركات في تبسيط التوظيف وتحليل السير الذاتية في ثوانٍ وإجراء مقابلات ذكية — مما يوفر الوقت ويقلل التكاليف ويحسّن قرارات التوظيف.",
        hireTalent: "وظّف كفاءات",
        findJobs: "ابحث عن وظائف",
        uploadResume: "ارفع سيرتك الذاتية"
    },
    trustedBy: {
        title: "موثوق من قبل"
    },
    statementSection: {
        line1: "توظيف الكفاءات المناسبة لا يجب أن يستغرق أسابيع.",
        line2: "بلاتو يؤتمت ويحسّن عملية التوظيف بالكامل",
        line3: "من نشر الوظائف إلى اختيار أفضل المرشحين",
        line4: "كل ذلك في لوحة تحكم واحدة قوية."
    },
    featuresSection: {
        smartJobManagement: "إدارة الوظائف الذكية",
        smartJobManagementDesc: "أنشئ وأدِر وانشر فرص العمل في دقائق.",
        candidateFiltering: "تصفية المرشحين المتقدمة",
        candidateFilteringDesc: "اعثر بسرعة على أفضل المتقدمين باستخدام الفلاتر الذكية والتصنيفات والقوائم المختصرة الآلية.",
        cvAnalysis: "تحليل السيرة الذاتية بالذكاء الاصطناعي في ثوانٍ",
        cvAnalysisDesc: "بلاتو يفحص ويقيّم السير الذاتية فوراً، مع تسليط الضوء على أفضل المرشحين بناءً على المهارات والخبرة والملاءمة الوظيفية.",
        hiringQuality: "تحسين جودة التوظيف",
        hiringQualityDesc: "استخدم رؤى الذكاء الاصطناعي لتحديد المرشحين الأكثر تأهيلاً.",
        saveTime: "وفّر الوقت",
        saveTimeDesc: "قلّل الفرز اليدوي وسرّع دورات التوظيف."
    },
    comparisonSection: {
        title: "دع بلاتو AI يحلل المرشحين",
        subtitle: "بلاتو يراجع السير الذاتية ويرتب المتقدمين تلقائياً.",
        timeTitle: "وظّف أفضل الكفاءات / الوقت",
        withoutPlato: "بدون بلاتو AI",
        withPlato: "مع بلاتو AI",
        timeBefore: "7 أيام",
        timeAfter: "دقيقتان",
        costTitle: "خفض التكاليف",
        costSubtitle: "قلّل نفقات التوظيف مع الأتمتة والقرارات الأذكى.",
        costCardTitle: "تكاليف نفقات التوظيف",
        costBefore: "5% توفير في التكلفة",
        costAfter: "90% توفير في التكلفة"
    },
    faqSection: {
        title: "الأسئلة الشائعة (FAQ)",
        subtitle: "لديك أسئلة حول بلاتو؟ نحن هنا للمساعدة. ستجد إجابات لأكثر الاستفسارات شيوعاً",
        items: [
            {
                q: "أنا وكالة، هل تتكاملون مع أنظمة أخرى؟",
                a: "نعم، بلاتو يتكامل مع أنظمة تتبع المتقدمين ومنصات الموارد البشرية الشائعة. تواصل معنا لمناقشة احتياجات التكامل الخاصة بك."
            },
            {
                q: "لماذا أنشر الوظائف عبر بلاتو؟",
                a: "بلاتو يؤتمت عملية التوظيف بالكامل من نشر الوظائف إلى اختيار المرشحين، مما يوفر لك الوقت والموارد مع تحسين جودة التوظيف."
            },
            {
                q: "كم تبلغ التكلفة؟",
                a: "نقدم خطط أسعار مرنة لفرق بجميع الأحجام. احجز عرضاً تجريبياً لمعرفة المزيد عن الأسعار المناسبة لاحتياجاتك."
            },
            {
                q: "هل هناك تكاليف إضافية؟",
                a: "لا توجد تكاليف مخفية. جميع الميزات مشمولة في خطتك. تدفع فقط مقابل ما تستخدمه."
            },
            {
                q: "كم من الوقت يستغرق؟",
                a: "الإعداد يستغرق دقائق. يمكنك البدء في نشر الوظائف وفرز المرشحين في نفس يوم تسجيلك."
            },
            {
                q: "هل أحتاج مطوراً لإجراء تحديثات مستقبلية على بلاتو؟",
                a: "لا. بلاتو مصمم لفرق الموارد البشرية والمجندين — لا يتطلب معرفة تقنية."
            }
        ]
    },
    ctaSection: {
        title: "هل أنت مستعد لتحويل",
        titleBold: "عملية التوظيف الخاصة بك؟",
        startTrial: "ابدأ تجربة مجانية",
        requestDemo: "اطلب عرضاً تجريبياً"
    },
    footerSection: {
        product: "المنتج",
        changelog: "سجل التغييرات",
        customerStories: "آراء العملاء",
        security: "الأمان",
        chromeExtension: "إضافة كروم",
        iosApp: "تطبيق iOS",
        androidApp: "تطبيق أندرويد",
        zapier: "Zapier",
        integromat: "Integromat",
        company: "الشركة",
        about: "عن بلاتو",
        careers: "الوظائف",
        blog: "المدونة",
        startupProgram: "برنامج الشركات الناشئة",
        platoFor: "بلاتو لـ",
        startups: "الشركات الناشئة",
        agencies: "الوكالات",
        support: "الدعم",
        helpCenter: "مركز المساعدة",
        talkToSupport: "تحدث مع الدعم",
        apiDocs: "وثائق API",
        systemStatus: "حالة النظام",
        readyToBuild: "مستعد للبدء؟",
        startForFree: "ابدأ التجربة المجانية",
        requestDemo: "اطلب عرضاً تجريبياً",
        copyright: `© ${new Date().getFullYear()} بلاتو. جميع الحقوق محفوظة.`,
        termsAndConditions: "الشروط والأحكام",
        privacyPolicy: "سياسة الخصوصية"
    },
    employerSection: {
        title: "لأصحاب العمل",
        subtitle: "بسّط عملية التوظيف من البداية إلى النهاية.",
        card1Title: "فرز أسرع",
        card1Desc: "انتقل من السير الذاتية إلى قائمة مرتبة في ساعات، وليس أسابيع.",
        card2Title: "جهد أقل للموارد البشرية",
        card2Desc: "أتمت المهام الروتينية: الفرز، التواصل، التذكيرات، وجدولة المقابلات.",
        card3Title: "تطابق أفضل",
        card3Desc: "تقييم مهيكل وإشارات توافق واضحة — بدون تخمين.",
        hireTalent: "وظّف كفاءات",
        bookDemo: "احجز عرضاً تجريبياً"
    },
    jobSeekerSection: {
        title: "للباحثين عن عمل",
        subtitle: "فرصتك القادمة على بعد رفع ملف واحد.",
        card1Title: "ارفع مرة واحدة، تقدّم بذكاء",
        card1Desc: "أرسل سيرتك الذاتية مرة واحدة ودع بلاتو يطابقك مع الفرص المناسبة تلقائياً.",
        card2Title: "تطابق مع الأدوار المناسبة",
        card2Desc: "محرك المطابقة لدينا يربطك بالوظائف التي تتوافق مع مهاراتك وخبرتك.",
        card3Title: "تميّز بمقابلات مهيكلة",
        card3Desc: "أبرز نقاط قوتك من خلال عملية مقابلة متسقة وعادلة.",
        uploadResume: "ارفع سيرتك الذاتية",
        findJobs: "ابحث عن وظائف"
    },
    howItWorksSection: {
        title: "كيف يعمل",
        subtitle: "خط أنابيب مبسّط من السيرة الذاتية إلى التقرير.",
        employerFlow: "مسار صاحب العمل",
        jobSeekerFlow: "مسار الباحث عن عمل",
        employer: {
            step1: "فرز السير الذاتية",
            step2: "اختيار أفضل المرشحين",
            step3: "التواصل عبر البريد / الهاتف",
            step4: "مقابلة آلية",
            step5: "إنشاء تقرير مهيكل"
        },
        jobSeeker: {
            step1: "رفع السيرة الذاتية",
            step2: "إنشاء ملف شخصي",
            step3: "الحصول على تطابق",
            step4: "المقابلة",
            step5: "الوصول للقائمة المختصرة"
        }
    },
    securitySection: {
        title: "الأمان والخصوصية",
        subtitle: "نأخذ أمان بياناتك على محمل الجد.",
        point1: "نقلّل جمع البيانات إلى ما هو ضروري لتقديم الخدمة.",
        point2: "ضوابط الوصول ومبدأ الصلاحيات الأدنى.",
        point3: "تشفير أثناء النقل (HTTPS).",
        point4: "يمكنك طلب حذف بياناتك.",
        readMore: "اقرأ عن الأمان والخصوصية"
    },
    blogPreview: {
        title: "آخر المقالات",
        cta: "اقرأ المدونة"
    },
    faqPreview: {
        title: "أسئلة شائعة",
        cta: "عرض جميع الأسئلة"
    },
    contactCta: {
        text: "لديك أسئلة أو تريد معرفة المزيد؟",
        cta: "تواصل معنا"
    },
    finalCta: {
        employerHeadline: "هل أنت مستعد للتوظيف بشكل أسرع؟",
        employerCta: "احجز عرضاً تجريبياً",
        seekerHeadline: "هل أنت مستعد لرفع سيرتك الذاتية؟",
        seekerCta: "ارفع سيرتك الذاتية"
    },
    employersPage: {
        heroTitle: "عن بلاتو",
        heroSubtitle: "بلاتو هي منصة إدارة موارد بشرية مدعومة بالذكاء الاصطناعي تساعد الشركات على تبسيط التوظيف وتحليل السير الذاتية في ثوانٍ وإجراء مقابلات ذكية — مما يوفر الوقت ويخفض التكاليف ويحسّن قرارات التوظيف.",
        inActionsTitle: "بلاتو في العمل",
        inActionsSubtitle: "بلاتو يراجع السير الذاتية ويرتب المتقدمين تلقائياً.",
        feature1Title: "ابتكار بالذكاء الاصطناعي",
        feature1Desc: "استثمر قوة الأتمتة الذكية لتحويل طريقة التوظيف. بلاتو يستخدم ذكاءً اصطناعياً متقدماً لفرز السير الذاتية في ثوانٍ.",
        feature2Title: "الشفافية",
        feature2Desc: "بلاتو ينشئ منظومة توظيف متكاملة حيث تتعاون فرق الموارد البشرية ومديرو التوظيف وأصحاب المصلحة في الوقت الفعلي.",
        feature3Title: "الاتصال",
        feature3Desc: "لا مزيد من الرسائل المفقودة أو الملاحظات غير الواضحة أو سير العمل المنفصلة — فقط تعاون سلس وشفافية كاملة.",
        feature4Title: "كفاءة الوقت والتكلفة",
        feature4Desc: "لا ينبغي أن يستنزف التوظيف مواردك. بلاتو يؤتمت المهام المتكررة ويقلل وقت التوظيف ويخفض تكاليف التوظيف من خلال تحسين كل خطوة.",
        hubTitle: "مركز ذكاء المواهب الموحد",
        hubDesc1: "بلاتو يجمع كل بيانات التوظيف والرؤى وسير العمل في مركز ذكاء واحد قوي — محولاً التوظيف من عملية تفاعلية إلى وظيفة استراتيجية مبنية على البيانات.",
        hubDesc2: "بدلاً من التنقل بين أدوات متعددة وجداول بيانات وقنوات اتصال، يركز بلاتو كل شيء في مصدر واحد للحقيقة. من إنشاء الوظائف إلى تقييم المرشحين وتحليلات التوظيف، كل إجراء يصب في نظام موحد يساعدك على اتخاذ قرارات أذكى.",
        whyTitle: "لماذا بلاتو",
        whySubtitle: "بلاتو ليس مجرد أداة موارد بشرية — إنه شريك توظيف ذكي مصمم لمساعدة الشركات على التوظيف بشكل أذكى وأسرع.",
        why1Title: "ذكاء اصطناعي أذكى للتوظيف",
        why1Desc: "اتخذ قرارات مدعومة بالبيانات وليس بالتخمين. ذكاء بلاتو الاصطناعي يحلل السير الذاتية ويقيّم ملاءمة المرشحين ويقدم رؤى قابلة للتنفيذ.",
        why2Title: "توظيف فعّال من حيث التكلفة",
        why2Desc: "قلل الإنفاق غير الضروري وحسّن موارد الموارد البشرية. بلاتو يقلل الجهد اليدوي وتكاليف التوظيف الخارجية مع تحسين النتائج.",
        why3Title: "تجربة مرشح محسّنة",
        why3Desc: "رحلة توظيف سلسة ومهنية تعزز علامتك التجارية. بلاتو يضمن تجربة واضحة وفي الوقت المناسب وجذابة للمرشحين.",
        why4Title: "رؤية كاملة وتحكم",
        why4Desc: "ابقَ متحكماً في خط أنابيب التوظيف مع لوحة معلومات مركزية تحافظ على توافق الجميع — من فرق الموارد البشرية إلى مديري التوظيف.",
        why5Title: "قابل للتوسع للفرق النامية",
        why5Desc: "سواء كنت شركة ناشئة أو مؤسسة كبيرة، بلاتو ينمو مع مؤسستك ويدعم أدواراً وأقساماً واحتياجات توظيف متعددة.",
        why6Title: "وقت توظيف أسرع",
        why6Desc: "السرعة مهمة في الأسواق التنافسية. بلاتو يؤتمت المهام المتكررة ويبسط سير العمل لمساعدتك على ملء الأدوار قبل أن يفلت أفضل المواهب.",
        ctaTitle: "هل أنت مستعد لتحويل",
        ctaTitleBold: "عملية التوظيف؟",
        ctaStartTrial: "ابدأ تجربة مجانية",
        ctaRequestDemo: "اطلب عرضاً"
    },
    jobSeekersPage: {
        heroTitle: "اعثر على الوظائف المناسبة لك.",
        heroSubtitle: "ارفع سيرتك الذاتية مرة واحدة، واحصل على تطابق مع الفرص المناسبة، وتميّز بمقابلات مهيكلة.",
        feature1Title: "سيرة ذاتية واحدة، فرص متعددة",
        feature1Desc: "ارفع سيرتك الذاتية إلى بلاتو واحصل على تطابق تلقائي مع الوظائف المفتوحة المناسبة.",
        feature2Title: "عملية عادلة وشفافة",
        feature2Desc: "كل مرشح يمر بنفس العملية المهيكلة — مهاراتك وخبرتك تتحدث عن نفسها.",
        feature3Title: "قابل بشروطك",
        feature3Desc: "أكمل المقابلات بالسرعة التي تناسبك بتنسيق واضح ومهيكل مصمم لإبراز نقاط قوتك.",
        feature4Title: "تتبّع تقدمك",
        feature4Desc: "ابقَ على اطلاع في كل خطوة. اعرف موقعك في عملية التوظيف في الوقت الفعلي.",
        ctaTitle: "فرصتك القادمة تبدأ هنا",
        ctaSubtitle: "ارفع سيرتك الذاتية واحصل على تطابق اليوم."
    },
    howItWorksPage: {
        heroTitle: "كيف يعمل بلاتو",
        heroSubtitle: "نظرة خطوة بخطوة على كيفية ربط أصحاب العمل بأفضل المرشحين.",
        forEmployers: "لأصحاب العمل",
        forJobSeekers: "للباحثين عن عمل",
        employerSteps: [
            {
                title: "فرز السير الذاتية",
                desc: "ارفع سير المرشحين الذاتية. بلاتو يحللها ويقيّمها مقابل متطلبات الوظيفة تلقائياً."
            },
            {
                title: "اختيار أفضل المرشحين",
                desc: "احصل على قائمة مرتبة بأفضل المرشحين بناءً على معايير تقييم مهيكلة."
            },
            {
                title: "التواصل عبر البريد / الهاتف",
                desc: "بلاتو يرسل تواصلاً آلياً للمرشحين المختارين عبر البريد أو الهاتف لجدولة الخطوات التالية."
            },
            {
                title: "مقابلة آلية",
                desc: "يكمل المرشحون مقابلات مهيكلة مصممة لتقييم الكفاءات الأساسية بشكل متسق."
            },
            {
                title: "إنشاء تقرير مهيكل",
                desc: "احصل على تقارير مفصّلة مع درجات التوافق وملخصات المقابلات وتوصيات التوظيف."
            }
        ],
        seekerSteps: [
            {
                title: "رفع السيرة الذاتية",
                desc: "أرسل سيرتك الذاتية إلى بلاتو. نحلل مهاراتك وخبرتك وتفضيلاتك تلقائياً."
            },
            {
                title: "إنشاء ملف شخصي",
                desc: "أنشئ ملفاً شخصياً شاملاً يبرز نقاط قوتك وأهدافك المهنية."
            },
            {
                title: "الحصول على تطابق",
                desc: "محرك المطابقة لدينا يربطك بالفرص التي تتوافق مع خلفيتك."
            },
            {
                title: "المقابلة",
                desc: "أكمل مقابلات مهيكلة بالسرعة التي تناسبك، مصممة لإبراز قدراتك بعدالة."
            },
            {
                title: "الوصول للقائمة المختصرة",
                desc: "تميّز أمام أصحاب العمل بملف شخصي قوي وأداء مقابلة متميز."
            }
        ]
    },
    faqPage: {
        title: "أسئلة بلاتو الشائعة",
        subtitle: "هل لديك أسئلة حول بلاتو؟ نحن هنا لمساعدتك. ستجد هنا إجابات على أكثر الاستفسارات شيوعاً.",
        items: [
            {
                q: "لماذا بلاتو مهم لعملي؟",
                a: "يتيح بلاتو للشركات الوصول والتفاعل مع جمهور أوسع، وتوليد العملاء المحتملين، وزيادة حركة المرور على الموقع، وتعزيز ظهور العلامة التجارية. يوفر نتائج قابلة للقياس، ويسمح بجهود تسويقية مستهدفة، ويمكّن الشركات من التكيف وتحسين استراتيجياتها بناءً على البيانات والرؤى."
            },
            {
                q: "كيف يمكن لبلاتو تحسين ظهور موقعي؟",
                a: "يستخدم بلاتو المطابقة الذكية للمرشحين والفرز الآلي لمساعدة إعلانات الوظائف في الوصول إلى المرشحين الأكثر تأهيلاً بشكل أسرع، مما يزيد كفاءة التوظيف ويقلل وقت التعيين."
            },
            {
                q: "كيف تقيسون نجاح حملات بلاتو؟",
                a: "نتتبع المقاييس الرئيسية بما في ذلك وقت التوظيف ودرجات جودة المرشحين ودقة الفرز ومعدلات قبول العروض. توفر لوحة التحليلات رؤى فورية حول أداء التوظيف."
            },
            {
                q: "كم من الوقت يستغرق رؤية النتائج من جهود بلاتو؟",
                a: "يرى معظم العملاء تحسينات قابلة للقياس خلال الأسبوع الأول. يبدأ الفرز الآلي فوراً، وستبدأ في تلقي قوائم المرشحين المرتبة في غضون ساعات من نشر الوظيفة."
            },
            {
                q: "هل يمكن لبلاتو تحسين ظهور موقعي؟",
                a: "نعم. تساعد أدوات العلامة التجارية لصاحب العمل في بلاتو على عرض ثقافة شركتك وفرصها، مما يجعل صفحة الوظائف أكثر جاذبية للمواهب المتميزة ويحسن ظهورك بين الباحثين عن عمل."
            },
            {
                q: "كيف تقيسون نجاح حملات بلاتو؟",
                a: "يتم قياس النجاح من خلال تحليلات شاملة تتضمن حجم الطلبات ومقاييس جودة المرشحين وتحسينات وقت التوظيف وخفض تكلفة التوظيف. جميع المقاييس متاحة في لوحة التحكم."
            },
            {
                q: "كيف تقيسون نجاح حملات بلاتو؟",
                a: "نقدم تقارير مفصلة عن كل مرحلة من مراحل التوظيف — من أداء نشر الوظائف إلى تحليلات التعيين النهائية — حتى تتمكن من تحسين استراتيجية التوظيف باستمرار."
            }
        ]
    },
    contactPage: {
        title: "تواصل معنا",
        subtitle: "هل لديك أسئلة حول بلاتو أو مستعد لتحويل عملية التوظيف الخاصة بك؟ فريقنا هنا للمساعدة. سواء كنت تستكشف الميزات أو تحتاج إلى عرض تجريبي مخصص أو تريد مناقشة كيف يمكن لبلاتو دعم نمو مؤسستك، يسعدنا سماعك.",
        infoCards: {
            email: "info@platohiring.com",
            location: "الدقي، الجيزة - مصر",
            hours: "الأحد-الخميس: 9:00 ص - 6:00 م",
            phone: "+201022330092"
        },
        mapCard: {
            title: "المقر الرئيسي",
            address: "١ شارع السد العالي، ميدان كوبري الجلاء، الدقي، الجيزة",
            phone: "هاتف: +201022330092",
            email: "بريد: info@platohiring.com"
        },
        formTitle: "تحتاج مساعدة،",
        formTitleHighlight: "تواصل معنا",
        formSubtitle: "تواصل معنا واتخذ الخطوة الأولى نحو توظيف أذكى وأسرع وأكثر شفافية.",
        firstNameLabel: "الاسم الأول",
        firstNamePlaceholder: "أدخل الاسم الأول",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اسمك الكامل",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phoneLabel: "الهاتف",
        phonePlaceholder: "أدخل رقم الهاتف",
        companyLabel: "الشركة",
        companyPlaceholder: "اسم شركتك",
        roleLabel: "المسمى الوظيفي",
        rolePlaceholder: "مثال: مدير الموارد البشرية",
        inquiryLabel: "نوع الاستفسار",
        inquiryPlaceholder: "اختر نوع الاستفسار",
        inquiryOptions: [
            "استفسار عام",
            "عرض تجريبي للمنتج",
            "الأسعار",
            "شراكة",
            "دعم فني",
            "أخرى"
        ],
        volumeLabel: "حجم التوظيف",
        volumePlaceholder: "اختر حجم التوظيف",
        volumeOptions: [
            "1-5",
            "6-20",
            "21-50",
            "+50"
        ],
        messageLabel: "الرسالة",
        messagePlaceholder: "أدخل رسالتك هنا..",
        termsAgree: "أوافق على",
        termsOfUse: "شروط الاستخدام",
        andText: "و",
        privacyPolicy: "سياسة الخصوصية",
        submit: "أرسل رسالتك",
        successMessage: "شكراً لك! سنتواصل معك قريباً.",
        fallbackMessage: "النموذج غير مُعدّ بعد — راسلنا على",
        emailUs: "راسلنا",
        faqTitle: "الأسئلة الشائعة\n(FAQ)",
        faqSubtitle: "هل لديك أسئلة حول بلاتو؟ لدينا الإجابات. ستجد هنا إجابات لأكثر الاستفسارات شيوعاً",
        faqItems: [
            {
                q: "أنا وكالة، هل تتكاملون مع أنظمة أخرى؟",
                a: "نعم، بلاتو يتكامل مع أنظمة تتبع المتقدمين ومنصات الموارد البشرية الشائعة. تواصل معنا لمناقشة احتياجات التكامل الخاصة بك."
            },
            {
                q: "لماذا أطور وظيفة باستخدام بلاتو؟",
                a: "بلاتو يؤتمت عملية التوظيف بالكامل من نشر الوظائف إلى اختيار المرشحين، مما يوفر لك الوقت والموارد مع تحسين جودة التوظيف."
            },
            {
                q: "كم التكلفة؟",
                a: "نقدم خطط أسعار مرنة لفرق بجميع الأحجام. احجز عرضاً تجريبياً لمعرفة المزيد عن الأسعار المناسبة لاحتياجاتك."
            },
            {
                q: "هل هناك تكاليف إضافية؟",
                a: "لا توجد تكاليف مخفية. جميع الميزات مشمولة في خطتك. أنت تدفع فقط مقابل ما تستخدمه."
            },
            {
                q: "كم من الوقت يستغرق؟",
                a: "الإعداد يستغرق دقائق. يمكنك البدء في نشر الوظائف وفرز المرشحين في نفس اليوم الذي تسجل فيه."
            },
            {
                q: "هل أحتاج مطوراً لإجراء تحديثات مستقبلية على بلاتو؟",
                a: "لا. بلاتو مصمم لفرق الموارد البشرية والمسؤولين عن التوظيف — لا حاجة لمعرفة تقنية."
            }
        ]
    },
    securityPage: {
        title: "الأمان والخصوصية",
        subtitle: "كيف نحمي بياناتك وخصوصيتك.",
        intro: "في بلاتو، نأخذ أمان وخصوصية بياناتك على محمل الجد. إليك نظرة عامة على الممارسات التي نتبعها.",
        sections: [
            {
                title: "تقليل البيانات",
                desc: "نجمع فقط المعلومات الضرورية لتقديم خدمتنا. لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة لأغراض تسويقية."
            },
            {
                title: "التشفير",
                desc: "جميع البيانات المنقولة بين متصفحك وخوادمنا مشفرة باستخدام HTTPS (TLS). نستخدم ممارسات معيارية لحماية البيانات أثناء النقل."
            },
            {
                title: "ضوابط الوصول",
                desc: "نتبع مبدأ الصلاحيات الأدنى. فقط أعضاء الفريق المصرح لهم يمكنهم الوصول إلى الأنظمة الحساسة، ويتم مراجعة الوصول بانتظام."
            },
            {
                title: "حذف البيانات",
                desc: "يمكنك طلب حذف بياناتك في أي وقت عن طريق التواصل معنا. سنعالج طلبك بسرعة ونؤكد بمجرد إزالة بياناتك."
            },
            {
                title: "الاستجابة للحوادث",
                desc: "لدينا إجراءات للكشف والاستجابة والتعلم من الحوادث الأمنية. في حال حدوث اختراق يؤثر على بياناتك، سنبلغك وفقاً للقانون المعمول به."
            },
            {
                title: "التحسين المستمر",
                desc: "الأمان جهد مستمر. نراجع ونحدّث ممارساتنا بانتظام لمواجهة التهديدات الجديدة وتحسين وضعنا الأمني."
            }
        ]
    },
    privacyPage: {
        title: "سياسة الخصوصية",
        subtitle: "توضح سياسة الخصوصية هذه كيفية جمع واستخدام وتخزين وحماية البيانات الشخصية عند استخدامك لمنصة بلاتو لإدارة الموارد البشرية.",
        sections: [
            {
                title: "المعلومات التي نجمعها",
                items: [
                    "الاسم وعنوان البريد الإلكتروني وبيانات الاتصال",
                    "اسم الشركة ومعلومات العمل",
                    "إعلانات الوظائف ومتطلبات التوظيف",
                    "ملاحظات المقابلات وتقييمات المرشحين"
                ]
            },
            {
                title: "المعلومات المقدمة من المرشحين",
                items: [
                    "الاسم الكامل وبيانات الاتصال",
                    "السيرة الذاتية وتاريخ التوظيف",
                    "التعليم والمهارات",
                    "روابط الأعمال أو المرفقات",
                    "ردود المقابلات والتقييمات"
                ]
            },
            {
                title: "البيانات المجمعة تلقائيًا",
                items: [
                    "عنوان IP ونوع المتصفح",
                    "معلومات الجهاز",
                    "بيانات استخدام المنصة والتحليلات",
                    "ملفات تعريف الارتباط وتقنيات التتبع"
                ]
            },
            {
                title: "معالجة بيانات الذكاء الاصطناعي",
                items: [
                    "معالجة الذكاء الاصطناعي آلية وتعتمد على البيانات المقدمة.",
                    "النتائج هي توصيات فقط.",
                    "لا نستخدم بيانات المرشحين لتدريب نماذج ذكاء اصطناعي خارجية بدون موافقة."
                ]
            },
            {
                title: "مشاركة البيانات والإفصاح",
                items: [
                    "الشركات التي تستخدم بلاتو لأغراض التوظيف",
                    "مقدمو الخدمات المعتمدون (الاستضافة، التحليلات، تسليم البريد الإلكتروني)",
                    "السلطات القانونية عند الطلب بموجب القانون"
                ]
            },
            {
                title: "تخزين البيانات والأمان",
                items: [
                    "تشفير البيانات",
                    "خوادم آمنة وجدران حماية",
                    "ضوابط الوصول والمصادقة",
                    "مراقبة أمنية منتظمة"
                ]
            },
            {
                title: "الاحتفاظ بالبيانات",
                items: [
                    "تقديم خدمات المنصة",
                    "الامتثال للالتزامات القانونية",
                    "حل النزاعات وتنفيذ الاتفاقيات"
                ]
            }
        ]
    },
    termsPage: {
        title: "الشروط والأحكام",
        subtitle: "مرحبًا بك في بلاتو. تحكم هذه الشروط والأحكام وصولك إلى منصة بلاتو لإدارة الموارد البشرية واستخدامها.",
        sections: [
            {
                title: "التعريفات",
                items: [
                    '"المنصة" تشير إلى نظام بلاتو لإدارة الموارد البشرية وجميع الخدمات ذات الصلة.',
                    '"المستخدم" يشير إلى مديري الموارد البشرية والشركات والمسؤولين عن التوظيف والمرشحين الذين يستخدمون المنصة.',
                    '"الشركة" تشير إلى المنظمة المشتركة في خدمات بلاتو.',
                    '"أدوات الذكاء الاصطناعي" تشير إلى تحليل السير الذاتية الآلي وفحص المرشحين وميزات المساعدة في المقابلات.'
                ]
            },
            {
                title: "الأهلية",
                items: [
                    "أن يكون عمرك 18 عامًا على الأقل.",
                    "أن تكون لديك صلاحية تمثيل شركتك (للحسابات التجارية).",
                    "تقديم معلومات تسجيل دقيقة وكاملة."
                ]
            },
            {
                title: "خدمات المنصة",
                items: [
                    "نشر الوظائف وإدارتها",
                    "فحص وتحليل السير الذاتية بالذكاء الاصطناعي",
                    "تتبع المرشحين وإدارة المقابلات",
                    "تحليلات التوظيف والتقارير",
                    "لوحة تحكم مع فلاتر الوظائف وأتمتة سير العمل"
                ]
            },
            {
                title: "مسؤوليات المستخدم",
                items: [
                    "تقديم معلومات دقيقة عن الوظائف والمرشحين.",
                    "استخدام المنصة فقط لأغراض التوظيف المشروعة.",
                    "الحفاظ على سرية بيانات تسجيل الدخول.",
                    "عدم إساءة استخدام أدوات الذكاء الاصطناعي لممارسات توظيف تمييزية أو غير أخلاقية."
                ]
            },
            {
                title: "إخلاء مسؤولية الذكاء الاصطناعي والأتمتة",
                items: [
                    "نتائج الذكاء الاصطناعي استشارية فقط.",
                    "تبقى قرارات التوظيف النهائية مسؤولية الشركة.",
                    "لا تضمن بلاتو نتائج التوظيف أو ملاءمة المرشحين."
                ]
            },
            {
                title: "خصوصية البيانات وحمايتها",
                items: [
                    "السير الذاتية والمعلومات الشخصية للمرشحين",
                    "إعلانات الوظائف وبيانات التوظيف للشركات",
                    "تحليلات الاستخدام لتحسين أداء المنصة"
                ]
            },
            {
                title: "الاشتراك والمدفوعات",
                items: [
                    "قد تتطلب بعض الميزات اشتراكًا مدفوعًا.",
                    "يتم إصدار الفواتير وفقًا للخطة المختارة.",
                    "قد يؤدي عدم الدفع إلى تعليق الخدمات.",
                    "جميع الرسوم غير قابلة للاسترداد ما لم يُنص على خلاف ذلك."
                ]
            }
        ]
    },
    bookDemoPage: {
        title: "احجز عرضاً تجريبياً",
        brandName: "بلاتو",
        duration: "30 دقيقة",
        selectDate: "اختر تاريخاً",
        selectTime: "اختر موعداً",
        nameLabel: "الاسم",
        namePlaceholder: "أدخل الاسم الكامل",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان البريد الإلكتروني",
        submitButton: "احجز عرضاً تجريبياً",
        timezone: "المنطقة الزمنية",
        successTitle: "تم الحجز!",
        successMessage: "لقد تلقينا حجزك. ستتلقى بريداً إلكترونياً للتأكيد قريباً.",
        errorSlotTaken: "تم حجز هذا الموعد للتو. يرجى اختيار موعد آخر.",
        errorGeneric: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        bookAnother: "احجز عرضاً آخر"
    },
    pricingPage: {
        title: "أسعار بلاتو",
        subtitle: "خطط أسعار بلاتو",
        popular: "الأكثر شعبية",
        perMonth: "/شهرياً",
        monthly: "شهري",
        yearly: "سنوي",
        choosePlan: "اختر الخطة",
        contactSales: "تواصل مع المبيعات",
        startFreeTrial: "ابدأ التجربة المجانية",
        faqTitle: "الأسئلة",
        faqTitleHighlight: "الشائعة",
        faqSubtitle: "كل ما تحتاج معرفته عن الأسعار والخطط.",
        plans: {
            intro: {
                name: "المبتدئ",
                monthlyPrice: "$20",
                yearlyPrice: "$16",
                description: "لمعظم الشركات التي ترغب في تحسين استعلامات الويب",
                features: [
                    "جميع الروابط المحدودة",
                    "منصة تحليلات خاصة",
                    "دعم عبر الدردشة",
                    "تحسين الهاشتاجات",
                    "مستخدمين غير محدودين"
                ]
            },
            base: {
                name: "الأساسي",
                monthlyPrice: "$50",
                yearlyPrice: "$40",
                description: "لمعظم الشركات التي ترغب في تحسين استعلامات الويب",
                features: [
                    "جميع الروابط المحدودة",
                    "منصة تحليلات خاصة",
                    "دعم عبر الدردشة",
                    "تحسين الهاشتاجات",
                    "مستخدمين غير محدودين"
                ]
            },
            pro: {
                name: "الاحترافي",
                monthlyPrice: "$100",
                yearlyPrice: "$80",
                description: "لمعظم الشركات التي ترغب في تحسين استعلامات الويب",
                features: [
                    "جميع الروابط المحدودة",
                    "منصة تحليلات خاصة",
                    "دعم عبر الدردشة",
                    "تحسين الهاشتاجات",
                    "مستخدمين غير محدودين"
                ]
            },
            enterprise: {
                name: "المؤسسات",
                monthlyPrice: "مخصص",
                yearlyPrice: "مخصص",
                description: "لمعظم الشركات التي ترغب في تحسين استعلامات الويب",
                features: [
                    "جميع الروابط المحدودة",
                    "منصة تحليلات خاصة",
                    "دعم عبر الدردشة",
                    "تحسين الهاشتاجات",
                    "مستخدمين غير محدودين"
                ]
            }
        },
        faqs: [
            {
                q: "ما هي الأرصدة؟",
                a: "تُستخدم الأرصدة في كل مرة يعالج فيها بلاتو مرشحاً — فحص السير الذاتية، إرسال رسائل التواصل، أو إجراء مقابلات بالذكاء الاصطناعي. تستهلك الإجراءات المختلفة كميات مختلفة من الأرصدة."
            },
            {
                q: "هل يمكنني الترقية أو التخفيض في أي وقت؟",
                a: "نعم! يمكنك تبديل الخطط في أي وقت. عند الترقية، سيتم احتساب المبلغ المتبقي من فترة الفوترة. تسري التخفيضات في دورة الفوترة التالية."
            },
            {
                q: "هل تُرحّل الأرصدة غير المستخدمة؟",
                a: "تُرحّل الأرصدة لمدة تصل إلى 3 أشهر في خطط النمو والاحترافي. تنتهي أرصدة خطة المبتدئ في نهاية كل فترة فوترة."
            },
            {
                q: "هل هناك تجربة مجانية؟",
                a: "نعم، نقدم تجربة مجانية لمدة 14 يوماً مع 50 رصيداً لتجربة القوة الكاملة لبلاتو قبل الالتزام."
            },
            {
                q: "ما طرق الدفع المقبولة؟",
                a: "نقبل جميع بطاقات الائتمان الرئيسية والتحويلات البنكية، ويمكننا ترتيب فوترة مخصصة لعملاء المؤسسات."
            }
        ]
    },
    loginPage: {
        title: "اختر نوع الحساب",
        subtitle: "اختر نوع حسابك وافتح مستقبل التوظيف.",
        employerTitle: "صاحب عمل",
        employerDesc: "الوصول إلى لوحة التوظيف، وإدارة المرشحين، ونشر الوظائف، وبناء فريق أحلامك.",
        employerCta: "المتابعة كصاحب عمل",
        seekerTitle: "باحث عن عمل",
        seekerDesc: "تصفح الفرص، وتتبع طلباتك، وحدّث ملفك الشخصي، واحصل على وظيفتك التالية.",
        seekerCta: "المتابعة كباحث عن عمل",
        newToPlato: "جديد على بلاتو؟",
        createAccount: "إنشاء حساب"
    },
    signupPage: {
        title: "اختر نوع الحساب",
        subtitle: "اختر نوع حسابك لبدء التجربة المجانية.",
        employerTitle: "صاحب عمل",
        employerDesc: "الوصول إلى لوحة التوظيف، وإدارة المرشحين، ونشر الوظائف، وبناء فريق أحلامك.",
        employerCta: "المتابعة كصاحب عمل",
        seekerTitle: "باحث عن عمل",
        seekerDesc: "تصفح الفرص، وتتبع طلباتك، وحدّث ملفك الشخصي، واحصل على وظيفتك التالية.",
        seekerCta: "المتابعة كباحث عن عمل",
        alreadyHaveAccount: "لديك حساب بالفعل؟",
        login: "تسجيل الدخول"
    },
    testimonialsPage: {
        metaTitle: "آراء العملاء - بلاتو",
        metaDescription: "اسمع من أولئك الذين عاشوا تجربة الوضوح والثقة والابتكار التي تحدد بلاتو.",
        title: "آراء عملاء بلاتو",
        subtitle: "اسمع من أولئك الذين عاشوا تجربة الوضوح والثقة والابتكار التي تحدد بلاتو. قصصهم تعكس التزامنا بالشفافية والبساطة والعلاقات الدائمة في كل رحلة عقارية."
    },
    blogPage: {
        title: "مدونة بلاتو",
        subtitle: "ابقَ في المقدمة في عالم التوظيف الحديث مع رؤى واتجاهات وإرشادات خبراء",
        searchPlaceholder: "أدخل كلمات البحث",
        searchButton: "بحث",
        allTags: "جميع المقالات",
        readMore: "اقرأ المزيد",
        readFullArticle: "اقرأ المقال كاملاً",
        minRead: "دقيقة قراءة",
        noPosts: "لم يتم العثور على مقالات مطابقة لبحثك.",
        backToBlog: "العودة للمدونة",
        shareLink: "نسخ الرابط",
        linkCopied: "تم نسخ الرابط!",
        relatedTopics: "مواضيع ذات صلة:",
        relatedBlogs: "مدونات",
        relatedBlogsHighlight: "ذات صلة",
        relatedBlogsSubtitle: "ابقَ في المقدمة في عالم التوظيف الحديث مع رؤى واتجاهات وإرشادات خبراء",
        readyToTransform: "هل أنت مستعد لتحويل",
        yourHiringProcess: "عملية",
        hiringProcessBold: "التوظيف الخاصة بك؟",
        startFreeTrial: "ابدأ تجربة مجانية"
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} بلاتو. جميع الحقوق محفوظة.`,
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        security: "الأمان والخصوصية",
        contact: "تواصل معنا",
        tagline: "بلاتو هي منصة إدارة موارد بشرية مدعومة بالذكاء الاصطناعي تساعد الشركات على تبسيط التوظيف وتحليل السير الذاتية في ثوانٍ وإجراء مقابلات ذكية.",
        companyTitle: "الشركة",
        contactsTitle: "التواصل",
        readyToGrow: "مستعد للنمو؟",
        startForFree: "ابدأ التجربة المجانية",
        requestDemo: "اطلب عرض تجريبي",
        termsAndConditions: "الشروط والأحكام"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "getLangFromPath",
    ()=>getLangFromPath,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translations/en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2f$ar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translations/ar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const translations = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2f$ar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ar"]
};
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lang: "en",
    dir: "ltr",
    t: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"],
    switchLang: ()=>{},
    localePath: (p)=>p
});
function useI18n() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
}
_s(useI18n, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function getLangFromPath(pathname) {
    return pathname.startsWith("/ar") ? "ar" : "en";
}
function I18nProvider({ children }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const lang = getLangFromPath(pathname);
    const dir = lang === "ar" ? "rtl" : "ltr";
    const t = translations[lang];
    const switchLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[switchLang]": ()=>{
            if (lang === "en") {
                const cleanPath = pathname.replace(/^\/en/, "") || "/";
                const arPath = "/ar" + (cleanPath === "/" ? "" : cleanPath);
                router.push(arPath);
            } else {
                const enPath = pathname.replace(/^\/ar/, "") || "/";
                router.push(enPath);
            }
        }
    }["I18nProvider.useCallback[switchLang]"], [
        lang,
        pathname,
        router
    ]);
    const localePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[localePath]": (path)=>{
            if (lang === "ar") {
                return "/ar" + (path === "/" ? "" : path);
            }
            return path;
        }
    }["I18nProvider.useCallback[localePath]"], [
        lang
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "I18nProvider.useMemo[value]": ()=>({
                lang,
                dir,
                t,
                switchLang,
                localePath
            })
    }["I18nProvider.useMemo[value]"], [
        lang,
        dir,
        t,
        switchLang,
        localePath
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/i18n.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
_s1(I18nProvider, "4Ugd3bILVcoX1FyYYBBM5GOjqMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = I18nProvider;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 85,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/theme.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useAppTheme",
    ()=>useAppTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "plato-theme";
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "dark",
    toggleTheme: ()=>{},
    isDark: true
});
const useAppTheme = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s(useAppTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ThemeProvider({ children }) {
    _s1();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === "light" || stored === "dark") {
                setThemeState(stored);
            }
            setMounted(true);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (!mounted) return;
            const root = document.documentElement;
            if (theme === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }["ThemeProvider.useEffect"], [
        theme,
        mounted
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[toggleTheme]": ()=>{
            const root = document.documentElement;
            root.classList.add("theme-transition");
            requestAnimationFrame({
                "ThemeProvider.useCallback[toggleTheme]": ()=>{
                    requestAnimationFrame({
                        "ThemeProvider.useCallback[toggleTheme]": ()=>{
                            setThemeState({
                                "ThemeProvider.useCallback[toggleTheme]": (prev)=>prev === "dark" ? "light" : "dark"
                            }["ThemeProvider.useCallback[toggleTheme]"]);
                            setTimeout({
                                "ThemeProvider.useCallback[toggleTheme]": ()=>{
                                    root.classList.remove("theme-transition");
                                }
                            }["ThemeProvider.useCallback[toggleTheme]"], 400);
                        }
                    }["ThemeProvider.useCallback[toggleTheme]"]);
                }
            }["ThemeProvider.useCallback[toggleTheme]"]);
        }
    }["ThemeProvider.useCallback[toggleTheme]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            isDark: theme === "dark"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/theme.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s1(ThemeProvider, "u8z/Zs4uk7MRFCA2fAmS9P2BxTY=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" + " hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: // Shows the background color of whatever card / sidebar / accent background it is inside of.
            // Inherits the current text color.
            " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            // Add a transparent border so that when someone toggles a border on later, it doesn't shift layout/size.
            ghost: "border border-transparent"
        },
        // Heights are set as "min" heights, because sometimes Ai will place large amount of content
        // inside buttons. With a min-height they will look appropriate with small amounts of content,
        // but will expand to fit large amounts of content.
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 53,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SmartHashLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartHashLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SmartHashLink({ hash, children, className, onClick, "data-testid": testId }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const homePath = lang === "ar" ? "/ar" : "/";
    const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";
    const scrollToHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SmartHashLink.useCallback[scrollToHash]": (targetHash)=>{
            const el = document.getElementById(targetHash);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["SmartHashLink.useCallback[scrollToHash]"], []);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SmartHashLink.useCallback[handleClick]": (e)=>{
            e.preventDefault();
            if (isHome) {
                scrollToHash(hash);
                window.history.pushState(null, "", `${homePath}#${hash}`);
                window.dispatchEvent(new HashChangeEvent("hashchange"));
            } else {
                window.location.href = `${homePath}#${hash}`;
            }
            onClick?.();
        }
    }["SmartHashLink.useCallback[handleClick]"], [
        hash,
        isHome,
        homePath,
        scrollToHash,
        onClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `${homePath}#${hash}`,
        onClick: handleClick,
        className: className,
        "data-testid": testId,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/SmartHashLink.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(SmartHashLink, "HcxorNkZfU758Pm57a3eSFZIt90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = SmartHashLink;
var _c;
__turbopack_context__.k.register(_c, "SmartHashLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SmartHashLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SmartHashLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { t, lang, dir, switchLang, localePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { isDark, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeHash, setActiveHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";
    const navItems = [
        {
            label: t.nav.about,
            path: "/employers",
            type: "route"
        },
        {
            label: t.nav.pricing,
            path: "/pricing",
            type: "route"
        },
        {
            label: t.nav.contact,
            path: "/contact",
            type: "route"
        },
        {
            label: t.nav.blog,
            path: "/blog",
            type: "route"
        }
    ];
    const isActive = (path)=>{
        const full = localePath(path);
        return pathname === full || pathname === `/en${path}`;
    };
    const updateActiveHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[updateActiveHash]": ()=>{
            setActiveHash(window.location.hash.slice(1));
        }
    }["Header.useCallback[updateActiveHash]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            updateActiveHash();
            window.addEventListener("hashchange", updateActiveHash);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("hashchange", updateActiveHash)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        updateActiveHash
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!isHome) {
                setActiveHash("");
            }
        }
    }["Header.useEffect"], [
        pathname,
        isHome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const hash = window.location.hash.slice(1);
            if (hash) {
                setTimeout({
                    "Header.useEffect": ()=>{
                        const el = document.getElementById(hash);
                        if (el) {
                            el.scrollIntoView({
                                behavior: "smooth"
                            });
                        }
                    }
                }["Header.useEffect"], 150);
            }
        }
    }["Header.useEffect"], [
        pathname
    ]);
    const isHashActive = (hash)=>{
        return isHome && activeHash === hash;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full backdrop-blur-md bg-white dark:bg-transparent border-b border-transparent",
        dir: dir,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-6 sm:px-8 lg:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center h-14 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: localePath("/"),
                                "data-testid": "link-home",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    style: {
                                        direction: "ltr"
                                    },
                                    "data-testid": "img-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 sm:h-9 overflow-hidden flex-shrink-0",
                                            style: {
                                                width: '28px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/plato-logo.png",
                                                alt: "Plato",
                                                className: "h-full w-auto max-w-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white",
                                            style: {
                                                fontFamily: "'Roc Grotesk', sans-serif"
                                            },
                                            children: "Plato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full px-1.5 py-1 border border-gray-200/60 dark:border-white/10 shadow-sm dark:shadow-none",
                            "aria-label": "Main navigation",
                            children: navItems.map((item)=>{
                                if (item.type === "hash") {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SmartHashLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        hash: item.hash,
                                        className: `px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors cursor-pointer ${isHashActive(item.hash) ? "text-foreground bg-gray-100 dark:bg-white/15" : "text-gray-600 dark:text-gray-300 hover:text-foreground"}`,
                                        "data-testid": `link-nav-${item.hash}`,
                                        children: item.label
                                    }, item.hash, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: localePath(item.path),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors cursor-pointer ${isActive(item.path) ? "text-foreground bg-gray-100 dark:bg-white/15" : "text-gray-600 dark:text-gray-300 hover:text-foreground"}`,
                                        "data-testid": `link-nav-${item.path.slice(1)}`,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                }, item.path, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 hidden lg:flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "p-2 rounded-md text-muted-foreground transition-colors",
                                    "aria-label": "Toggle theme",
                                    "data-testid": "button-theme-toggle",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 136,
                                        columnNumber: 55
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-[13px] text-muted-foreground hover:text-foreground border-transparent",
                                    onClick: switchLang,
                                    "data-testid": "button-lang-switch",
                                    style: {
                                        direction: "ltr"
                                    },
                                    children: t.nav.langSwitch
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "ghost",
                                    size: "sm",
                                    className: "rounded-full px-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: localePath("/login"),
                                        "data-testid": "button-login-header",
                                        children: t.nav.login
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "sm",
                                    className: "rounded-full px-5 shadow-md shadow-primary/20 dark:shadow-primary/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: localePath("/book-demo"),
                                        "data-testid": "button-book-demo-header",
                                        children: t.nav.bookDemo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 lg:hidden flex items-center justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "p-2 rounded-md text-muted-foreground transition-colors",
                                    "aria-label": "Toggle theme",
                                    "data-testid": "button-theme-toggle-mobile",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 167,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 167,
                                        columnNumber: 55
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 rounded-md text-foreground hover:bg-muted",
                                    onClick: ()=>setMobileOpen(!mobileOpen),
                                    "aria-label": "Toggle menu",
                                    "data-testid": "button-mobile-menu",
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 57
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl",
                dir: dir,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-1",
                    children: [
                        navItems.map((item)=>{
                            if (item.type === "hash") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SmartHashLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    hash: item.hash,
                                    onClick: ()=>setMobileOpen(false),
                                    className: `block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${isHashActive(item.hash) ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
                                    children: item.label
                                }, item.hash, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 187,
                                    columnNumber: 19
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: localePath(item.path),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    onClick: ()=>setMobileOpen(false),
                                    className: `block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${isActive(item.path) ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 203,
                                    columnNumber: 19
                                }, this)
                            }, item.path, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 border-t border-border flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        switchLang();
                                        setMobileOpen(false);
                                    },
                                    className: "px-3 py-2 text-sm font-medium border border-border rounded-md text-muted-foreground text-start",
                                    style: {
                                        direction: "ltr"
                                    },
                                    children: t.nav.langSwitch
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    variant: "outline",
                                    className: "w-full rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: localePath("/login"),
                                        onClick: ()=>setMobileOpen(false),
                                        "data-testid": "button-login-mobile",
                                        children: t.nav.login
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "w-full rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: localePath("/book-demo"),
                                        onClick: ()=>setMobileOpen(false),
                                        children: t.nav.bookDemo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Header, "ykRp9TeVIAKY3XCtho3cOWzEhMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "getApplicantLoginUrl",
    ()=>getApplicantLoginUrl,
    "getApplicantSignupUrl",
    ()=>getApplicantSignupUrl,
    "getDemoLink",
    ()=>getDemoLink,
    "getEmployerLoginUrl",
    ()=>getEmployerLoginUrl,
    "getEmployerSignupUrl",
    ()=>getEmployerSignupUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const config = {
    employerAppUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMPLOYER_APP_URL || "https://platohiring.com",
    applicantAppUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APPLICANT_APP_URL || "https://applicant.platohiring.com",
    demoBookingUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_BOOKING_URL || "",
    demoEmailFallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_EMAIL_FALLBACK || "hello@platohiring.com",
    linkedinUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LINKEDIN_URL || "",
    supabaseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || "",
    supabaseAnonKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
};
function getDemoLink() {
    return "/book-demo";
}
function getEmployerLoginUrl() {
    return "https://agency.platohiring.com/auth/login";
}
function getApplicantLoginUrl() {
    return "https://candidate.platohiring.com/auth/login";
}
function getEmployerSignupUrl() {
    return "https://agency.platohiring.com/auth/signup";
}
function getApplicantSignupUrl() {
    return "https://candidate.platohiring.com/auth/signup";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Footer() {
    _s();
    const { t, dir, localePath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";
    const isEmployers = pathname === "/employers" || pathname === "/ar/employers" || pathname === "/en/employers";
    const isContact = pathname === "/contact" || pathname === "/ar/contact" || pathname === "/en/contact";
    const isBlog = pathname === "/blog" || pathname === "/ar/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/ar/blog/") || pathname === "/en/blog" || pathname.startsWith("/en/blog/");
    const isTestimonials = pathname === "/testimonials" || pathname === "/ar/testimonials" || pathname === "/en/testimonials";
    const isPricing = pathname === "/pricing" || pathname === "/ar/pricing" || pathname === "/en/pricing";
    const isFaq = pathname === "/faq" || pathname === "/ar/faq" || pathname === "/en/faq";
    const isTerms = pathname === "/terms" || pathname === "/ar/terms" || pathname === "/en/terms";
    const isPrivacy = pathname === "/privacy" || pathname === "/ar/privacy" || pathname === "/en/privacy";
    if (isHome || isEmployers || isContact || isBlog || isTestimonials || isPricing || isFaq || isTerms || isPrivacy) return null;
    const companyLinks = [
        {
            label: t.footerSection.about,
            path: "/employers"
        },
        {
            label: "Pricing",
            path: "/pricing"
        },
        {
            label: t.footerSection.blog,
            path: "/blog"
        },
        {
            label: "FAQs",
            path: "/faq"
        },
        {
            label: t.footer.contact,
            path: "/contact"
        },
        {
            label: t.footerSection.customerStories,
            path: "/testimonials"
        }
    ];
    const demoLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDemoLink"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border",
        dir: dir,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    style: {
                                        direction: "ltr"
                                    },
                                    "data-testid": "img-footer-logo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 sm:h-9 overflow-hidden flex-shrink-0",
                                            style: {
                                                width: '28px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/plato-logo.png",
                                                alt: "Plato",
                                                className: "h-full w-auto max-w-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[20px] sm:text-[22px] font-bold tracking-tight text-gray-900 dark:text-white",
                                            style: {
                                                fontFamily: "'Roc Grotesk', sans-serif"
                                            },
                                            children: "Plato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-[260px]",
                                    children: t.footer.tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-foreground mb-4",
                                    "data-testid": "text-footer-company-title",
                                    children: t.footer.companyTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: companyLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: localePath(link.path),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                                                    "data-testid": `link-footer-${link.path.slice(1)}`,
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, link.path, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-foreground mb-4",
                                    "data-testid": "text-footer-contacts-title",
                                    children: t.footer.contactsTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:info@platohiring.com",
                                                className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors",
                                                dir: "ltr",
                                                "data-testid": "link-footer-email",
                                                children: "info@platohiring.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+201022330092",
                                                className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors",
                                                dir: "ltr",
                                                "data-testid": "link-footer-phone",
                                                children: "+201022330092"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-foreground mb-4",
                                    "data-testid": "text-footer-cta-title",
                                    children: t.footer.readyToGrow
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            className: "rounded-full w-full px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: localePath("/signup"),
                                                "data-testid": "button-footer-start-free",
                                                children: t.footer.startForFree
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            className: "rounded-full w-full px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: localePath("/book-demo"),
                                                "data-testid": "button-footer-request-demo",
                                                children: t.footer.requestDemo
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground/70",
                            "data-testid": "text-copyright",
                            children: t.footer.copyright
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: localePath("/terms"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer",
                                        "data-testid": "link-footer-terms-bottom",
                                        children: t.footer.termsAndConditions
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground/40",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: localePath("/privacy"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer",
                                        "data-testid": "link-footer-privacy-bottom",
                                        children: t.footer.privacy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 ltr:ml-4 rtl:mr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/company/aere-capital/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                            "aria-label": "LinkedIn",
                                            "data-testid": "link-footer-linkedin-main",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiLinkedin"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/platohiring",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                            "aria-label": "Instagram",
                                            "data-testid": "link-footer-instagram",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiInstagram"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.tiktok.com/@platohiring",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                            "aria-label": "TikTok",
                                            "data-testid": "link-footer-tiktok",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTiktok"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].linkedinUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].linkedinUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground/70 hover:text-foreground transition-colors",
                                            "aria-label": "LinkedIn",
                                            "data-testid": "link-footer-linkedin",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiLinkedin"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Footer, "WAOf4o0RcbPe2/By721KwM4yu+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/PageTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PageTransition({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-fade",
        children: children
    }, pathname, false, {
        fileName: "[project]/src/components/shared/PageTransition.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(PageTransition, "wVXOWZKWdId76kQQO0KX6Oz3JDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PageTransition;
var _c;
__turbopack_context__.k.register(_c, "PageTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ScrollManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollManager() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "/";
    const prevLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollManager.useEffect": ()=>{
            if (prevLocation.current !== pathname) {
                prevLocation.current = pathname;
                if (!window.location.hash) {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            }
        }
    }["ScrollManager.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollManager, "7d8wla99Et4R3BCaeHYlq5UIOeg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollManager;
var _c;
__turbopack_context__.k.register(_c, "ScrollManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PageTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScrollManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function LayoutInner({ children }) {
    _s();
    const { dir, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutInner.useEffect": ()=>{
            document.documentElement.setAttribute("dir", dir);
            document.documentElement.setAttribute("lang", lang);
        }
    }["LayoutInner.useEffect"], [
        dir,
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-background text-foreground",
        dir: dir,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScrollManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PageTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Layout.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(LayoutInner, "k2HOHaGO1+8bSEODjyT0Nt5/d5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = LayoutInner;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutInner, {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Layout.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Layout.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c1 = Layout;
var _c, _c1;
__turbopack_context__.k.register(_c, "LayoutInner");
__turbopack_context__.k.register(_c1, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ClientLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLayout",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/queryClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Layout.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$queryClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ClientLayout.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ClientLayout.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/ClientLayout.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/ClientLayout.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ClientLayout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_27c30fe5._.js.map