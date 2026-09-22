import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";

const NotFound = lazy(() => import("@/pages/not-found"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const YourOffer = lazy(() => import("@/pages/your-offer"));
const WebsiteAnalysis = lazy(() => import("@/pages/website-analysis"));
const WebsiteAnalysisResult = lazy(
  () => import("@/pages/website-analysis-result"),
);

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center text-muted-foreground">
          Loading…
        </div>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/your-offer" component={YourOffer} />
        <Route
          path="/website-analysis/:auditId"
          component={WebsiteAnalysisResult}
        />
        <Route path="/website-analysis" component={WebsiteAnalysis} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
