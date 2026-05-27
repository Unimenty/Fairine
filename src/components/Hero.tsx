
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.webp"
          alt="Fairine Enterprise Premium Home Care Products Ghana"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
        {/* Deep Bottom Gradient for Contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
            Premium Liquid Soaps & Detergents
          </h1>

          <p className="text-base sm:text-xl text-white/95 mb-8 max-w-xl font-medium tracking-wide drop-shadow-lg">
            Formulated in Accra for households, offices, and wholesale partners across Ghana. Powerful cleaning action at prices you can trust.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
            <Link to="/shop" className="flex-1 sm:flex-none">
              <Button
                size="lg"
                className="w-full sm:w-40 h-12 gradient-warm text-white font-bold rounded-xl shadow-lg border-0 text-[14px] uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Shop Products
              </Button>
            </Link>

            <Link to="/about" className="flex-1 sm:flex-none">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-48 h-12 bg-white/10 border border-white/40 text-white hover:bg-white hover:text-black font-bold rounded-xl transition-all duration-300 text-[14px] uppercase tracking-wider"
              >
                Our Story
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
