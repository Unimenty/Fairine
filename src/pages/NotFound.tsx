import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home, Search, ShoppingBag } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="404 - Page Not Found | Fairine" noindex={true} />
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] -z-0"></div>
        
        <div className="max-w-2xl w-full text-center relative z-10">
          <div className="relative mb-12 inline-block">
            <h1 className="text-[10rem] sm:text-[15rem] font-black text-primary/5 select-none leading-none tracking-tighter">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-background border-2 border-primary/20 rounded-[2.5rem] shadow-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                <Search className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-pulse" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Lost in the <span className="text-primary italic">Suds?</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg sm:text-xl font-medium max-w-lg mx-auto leading-relaxed">
            The page you're looking for seems to have washed away. Don't worry, we can help you find your way back to the main aisle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:px-10 h-14 gap-2 font-black rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95 text-base">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/shop" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:px-10 h-14 gap-2 font-black rounded-2xl border-2 hover:bg-muted/50 transition-all text-base">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Browse Shop
              </Button>
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-border/20">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
              Need immediate help? <Link to="/contact" className="text-primary hover:underline underline-offset-4">Contact our team</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
