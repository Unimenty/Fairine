import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IkedaShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Decorative Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left side: Marketing Copy */}
            <div className="p-8 sm:p-16 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full w-fit mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Exclusive Partnership</span>
              </div>
              
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Luxury <span className="text-primary italic">Scents</span> by Ikeda
              </h2>
              
              <p className="text-slate-400 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                We've partnered with Ikeda to bring their premium, world-class fragrances to Ghana. From refreshing car scents to elegant home diffusers, experience the collection that everyone is talking about.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Price per unit</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">100.00</span>
                    <span className="text-sm font-black text-primary uppercase">GHS</span>
                  </div>
                </div>
                
                <Link to="/shop" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black px-10 py-7 rounded-2xl shadow-xl shadow-primary/20 text-base transition-all hover:scale-[1.05] active:scale-95">
                    Shop Ikeda Collection <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right side: Image Showcase */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 lg:from-transparent to-transparent z-10"></div>
              <img 
                src="/assets/ikeda-products.webp" 
                alt="Ikeda Premium Fragrance Collection" 
                className="w-full h-full object-cover lg:object-contain transform hover:scale-110 transition-transform duration-1000 p-8"
              />
              
              {/* Floating feature tags */}
              <div className="absolute top-10 right-10 z-20 hidden sm:flex flex-col gap-4">
                <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white px-4 py-2 rounded-xl font-bold uppercase tracking-widest text-[9px]">Long Lasting</Badge>
                <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white px-4 py-2 rounded-xl font-bold uppercase tracking-widest text-[9px]">Premium Oils</Badge>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default IkedaShowcase;
