
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
      title: 'Natural Ingredients',
      description: 'Only the finest natural and organic ingredients in every product'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Family Safe',
      description: 'Gentle formulations safe for your entire family and pets'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50 within the continental US'
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and environmentally responsible practices'
    }
  ];

  const categories = [
    {
      name: 'Handmade Soaps',
      description: 'Luxurious soaps crafted with natural oils and botanicals',
      productCount: 12,
      bgColor: 'bg-amber-50'
    },
    {
      name: 'Home Cleaners',
      description: 'Effective, eco-friendly cleaners for every surface',
      productCount: 8,
      bgColor: 'bg-cyan-50'
    },
    {
      name: 'Bath & Body',
      description: 'Nourishing shower gels and body care essentials',
      productCount: 15,
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Artisan Chocolates',
      description: 'Premium handcrafted chocolates and confections',
      productCount: 6,
      bgColor: 'bg-rose-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fairine Enterprise?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality natural products for your home and family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:bg-emerald-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of handcrafted products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200">
                <div className={`h-40 ${category.bgColor} flex items-center justify-center relative`}>
                  <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                    <Award className="w-10 h-10 text-gray-600" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-white text-gray-900 border border-gray-200">
                    {category.productCount} products
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product announcements, and natural living tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Fairine Enterprise</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Handcrafted goodness for your home, made with love and natural ingredients.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-300">Handmade Soaps</span></li>
                <li><span className="text-gray-300">Home Cleaners</span></li>
                <li><span className="text-gray-300">Bath & Body</span></li>
                <li><span className="text-gray-300">Artisan Chocolates</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>123 Artisan Way</li>
                <li>Craft District, CD 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@fairineenterprise.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Fairine Enterprise. All rights reserved. Made with ❤️ for natural living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
