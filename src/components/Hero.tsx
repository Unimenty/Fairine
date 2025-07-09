
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-sunset opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Handcrafted{' '}
            <span className="bg-gradient-to-r from-primary via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Goodness
            </span>{' '}
            for Your Home
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover our range of handmade soaps, fabric softeners, shower gels, floor cleaners, and custom chocolates. Each product is crafted with care and quality ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button 
                size="lg" 
                className="gradient-warm text-white font-semibold px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-0"
              >
                Shop Now
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
