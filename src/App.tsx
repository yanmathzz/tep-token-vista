
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TokensPage from "./pages/TokensPage";
import TokenDetail from "./pages/TokenDetail";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetail from "./pages/CompanyDetail";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/token/:id" element={<TokenDetail />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
