
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { lazy, Suspense } from "react";

// Direct imports for more reliable production deployment
import Index   from "./pages/Index";
import Shop    from "./pages/Shop";
import About   from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

// Minimal page skeleton shown while lazy chunk is fetching
const PageSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse" aria-hidden="true" />
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider defaultTheme="light" storageKey="fairine-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Layout>
                <Suspense fallback={<PageSkeleton />}>
                  <Routes>
                    <Route path="/"                      element={<Index />} />
                    <Route path="/shop"                  element={<Shop />} />
                    <Route path="/shop/:categorySlug"    element={<Shop />} />
                    <Route path="/product/:productSlug"  element={<Shop />} />
                    <Route path="/about"                 element={<About />} />
                    <Route path="/contact"               element={<Contact />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*"                      element={<NotFound />} />
                  </Routes>
                </Suspense>
              </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
