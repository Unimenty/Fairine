import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems, setDrawerOpen } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <header 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out flex flex-col items-center",
          "w-full max-w-6xl rounded-[2rem] sm:rounded-[3rem] border border-border/40 shadow-2xl",
          "bg-card/80 backdrop-blur-xl",
          isScrolled ? "py-2 px-4 sm:px-8 translate-y-0" : "py-3 px-4 sm:px-10 translate-y-1 sm:translate-y-2"
        )}
      >
        <div className="flex items-center justify-between w-full h-12 sm:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/assets/logo-clean.png" alt="Fairine Enterprise Logo" className="h-8 sm:h-10 w-auto" />
            <span className="text-sm sm:text-lg font-black text-foreground tracking-tight hidden xs:block">Fairine Enterprise</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-muted/30 rounded-full px-2 py-1 border border-border/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full transition-all duration-300",
                  isActive(item.path) 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary rounded-full relative bg-muted/20 hover:bg-primary/10 transition-colors h-10 w-10"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] font-black px-1.5 py-0.5 rounded-full border-2 border-card">
                  {totalItems}
                </span>
              )}
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground relative rounded-full w-9 h-9 flex items-center justify-center bg-muted/20"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] font-black px-1.5 py-0.5 rounded-full border-2 border-card">
                  {totalItems}
                </span>
              )}
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground rounded-full w-9 h-9 bg-primary/10 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-[400px] opacity-100 mt-6 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-base font-black uppercase tracking-widest px-6 py-4 rounded-2xl transition-all",
                  isActive(item.path) 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border/40">
              <Button
                className="w-full bg-slate-900 dark:bg-primary text-white font-black uppercase tracking-widest py-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all"
                onClick={() => {
                  setIsMenuOpen(false);
                  setDrawerOpen(true);
                }}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                Checkout ({totalItems})
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
