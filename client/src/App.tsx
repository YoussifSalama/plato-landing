import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Employers from "@/pages/Employers";
import JobSeekers from "@/pages/JobSeekers";
import HowItWorks from "@/pages/HowItWorks";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Security from "@/pages/Security";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Pricing from "@/pages/Pricing";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/employers" component={Employers} />
      <Route path="/job-seekers" component={JobSeekers} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/security" component={Security} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/login" component={Login} />

      <Route path="/ar" component={Home} />
      <Route path="/ar/employers" component={Employers} />
      <Route path="/ar/job-seekers" component={JobSeekers} />
      <Route path="/ar/how-it-works" component={HowItWorks} />
      <Route path="/ar/blog" component={Blog} />
      <Route path="/ar/blog/:slug" component={BlogPost} />
      <Route path="/ar/faq" component={FAQ} />
      <Route path="/ar/contact" component={Contact} />
      <Route path="/ar/security" component={Security} />
      <Route path="/ar/privacy" component={Privacy} />
      <Route path="/ar/terms" component={Terms} />
      <Route path="/ar/pricing" component={Pricing} />
      <Route path="/ar/login" component={Login} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <I18nProvider>
          <Layout>
            <Router />
          </Layout>
        </I18nProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
