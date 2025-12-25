import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Leaf, Recycle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Only the finest quality products in every product'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Family Safe',
      description: 'Gentle formulations safe for your entire family and pets'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Affordable Delivery',
      description: 'Reliable and affordable delivery on all orders within Greater Accra'
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: 'Sustainable',
      description: 'Sustainable packaging and environmentally responsible practices'
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose Fairine Enterprise?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              We're committed to providing the highest quality products designed for your home and family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group flex flex-col items-center p-4 rounded-2xl hover:bg-muted/30 transition-colors duration-300">
                <div className="w-14 h-14 gradient-cool rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-500 shadow-md rotate-3 group-hover:rotate-0">
                  <div className="-rotate-3 group-hover:rotate-0 transition-transform duration-500 scale-90">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] sm:max-w-none">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />


    </div>
  );
};

export default Index;
