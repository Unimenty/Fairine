import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setDrawerOpen } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
      setSearchQuery('');
    }
  };

  // handleCartClick removed in favor of CartDrawer

  return (
    <header className="bg-card/80 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 gradient-warm rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Fairine Enterprise</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-warm rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <div className={`flex items-center transition-all duration-300 overflow-hidden ${isSearchOpen ? 'w-64' : 'w-0'}`}>
              <form onSubmit={handleSearch} className="w-full px-2">
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 rounded-full bg-muted/50 border-border/40 text-sm focus-visible:ring-primary/20"
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
              </form>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={`text-muted-foreground hover:text-primary rounded-full transition-colors ${isSearchOpen ? 'bg-muted/50 text-primary' : ''}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary rounded-full relative"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] font-bold px-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-foreground relative rounded-full w-9 h-9 flex items-center justify-center"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[8px] font-bold px-1 rounded-full border border-card">
                  {totalItems}
                </span>
              )}
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground rounded-full w-9 h-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-semibold transition-colors hover:text-primary px-2 py-1 ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-xl bg-muted/50 border-border/40 h-10 pl-10 pr-4"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </form>
                
                <Button 
                  className="justify-start w-full bg-primary/10 hover:bg-primary/20 text-primary border-0 rounded-xl px-4 py-6 h-auto"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setDrawerOpen(true);
                  }}
                >
                  <div className="relative mr-3">
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-card">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">View Your Cart</p>
                    <p className="text-[10px] opacity-70">
                      {totalItems === 0 
                        ? "Your cart is currently empty" 
                        : `${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`}
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
