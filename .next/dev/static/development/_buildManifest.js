self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/",
        "destination": "/en"
      },
      {
        "source": "/employers",
        "destination": "/en/employers"
      },
      {
        "source": "/job-seekers",
        "destination": "/en/job-seekers"
      },
      {
        "source": "/how-it-works",
        "destination": "/en/how-it-works"
      },
      {
        "source": "/blog",
        "destination": "/en/blog"
      },
      {
        "source": "/blog/:slug",
        "destination": "/en/blog/:slug"
      },
      {
        "source": "/faq",
        "destination": "/en/faq"
      },
      {
        "source": "/contact",
        "destination": "/en/contact"
      },
      {
        "source": "/security",
        "destination": "/en/security"
      },
      {
        "source": "/privacy",
        "destination": "/en/privacy"
      },
      {
        "source": "/terms",
        "destination": "/en/terms"
      },
      {
        "source": "/pricing",
        "destination": "/en/pricing"
      },
      {
        "source": "/login",
        "destination": "/en/login"
      },
      {
        "source": "/signup",
        "destination": "/en/signup"
      },
      {
        "source": "/testimonials",
        "destination": "/en/testimonials"
      },
      {
        "source": "/book-demo",
        "destination": "/en/book-demo"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/Blog",
    "/BlogPost",
    "/BookDemo",
    "/Contact",
    "/Employers",
    "/FAQ",
    "/Home",
    "/HowItWorks",
    "/JobSeekers",
    "/Login",
    "/Pricing",
    "/Privacy",
    "/Security",
    "/Signup",
    "/Terms",
    "/Testimonials",
    "/_app",
    "/_error",
    "/not-found"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()