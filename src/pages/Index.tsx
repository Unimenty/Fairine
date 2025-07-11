import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Leaf, Recycle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      description: 'Affordable delivery on orders over GH₵ 50 within the continental US'
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: 'Sustainable',
      description: 'Sustainable packaging and environmentally responsible practices'
    }
  ];

  const categories = [
    {
      name: "Home Care",
      description: "Cleaning and household essentials",
      productCount: 12,
      image: "bg-gradient-to-br from-blue-200 to-blue-400",
    },
    {
      name: "Laundry Care",
      description: "Laundry detergents and softeners",
      productCount: 1,
      image: "bg-gradient-to-br from-teal-200 to-teal-400",
    },
    {
      name: "Personal Care",
      description: "Bath, body, and personal hygiene",
      productCount: 2,
      image: "bg-gradient-to-br from-pink-200 to-pink-400",
    },
    {
      name: "Edibles",
      description: "Chocolates and edible treats",
      productCount: 6,
      image: "bg-gradient-to-br from-orange-200 to-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Fairine Enterprise?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality natural products for your home and family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-cool rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections of products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border border-border">
                <div className={`h-40 ${category.image} flex items-center justify-center relative`}>
                  <div className="w-20 h-20 bg-card rounded-full shadow-md flex items-center justify-center">
                    <Award className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-card text-card-foreground border border-border">
                    {category.productCount} products
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button size="lg" className="gradient-warm text-white px-8 py-3 rounded-lg border-0">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border text-card-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-warm rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Fairine Enterprise</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
              Reliable home care and treats, crafted with care to bring comfort and joy
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-muted-foreground">Home Care</span></li>
                <li><span className="text-muted-foreground">Laundry Care</span></li>
                <li><span className="text-muted-foreground">Personal Care</span></li>
                <li><span className="text-muted-foreground">Edibles</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Accra, Ghana</li>
                <li>+233 26 123 3032</li>
                <li>+233 54 686 5035</li>
                <li>fairineenterprise@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Fairine Enterprise. All rights reserved. Made with ❤️ for comfort living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
