
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-warm rounded-xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-md"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Fairine
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Handcrafted home care and fine product formulations, made with care to bring comfort and quality to your every day.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold border border-emerald-500/20">
                ✓
              </span>
              <span className="text-[11px] font-bold text-foreground/80 tracking-wide uppercase">
                FDA Approved Products & Company
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-0 group-hover:mr-2 transition-all"></span>Shop Catalog</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-0 group-hover:mr-2 transition-all"></span>Our Story</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-0 group-hover:mr-2 transition-all"></span>Say Hello</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Home Care Essentials</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Personal Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-bold text-foreground mr-2">📍</span> Accra, Ghana
              </li>
              <li className="flex items-start">
                <span className="font-bold text-foreground mr-2">📧</span> 
                <a href="mailto:fairineenterprise@gmail.com" className="hover:text-primary transition-colors">fairineenterprise@gmail.com</a>
              </li>
              <li className="flex flex-col space-y-2 pt-2">
                <span className="text-foreground font-black text-[10px] uppercase tracking-tighter opacity-50">Direct Lines</span>
                <div className="flex flex-col space-y-1 text-sm">
                  <a href="tel:+233261233032" className="hover:text-primary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
                    +233 26 123 3032
                  </a>
                  <a href="tel:+233546865035" className="hover:text-primary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"></span>
                    +233 54 686 5035
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            © 2025 Fairine Enterprise. All rights reserved.
          </p>
          <p className="text-muted-foreground text-[10px] sm:text-xs italic bg-primary/5 px-3 py-1 rounded-full">
            Made with <span className="text-rose-500">❤️</span> for better living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
