
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, Leaf, Recycle, Award } from 'lucide-react';
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

  const testimonials = [
    {
      name: 'Sarah Martinez',
      location: 'Austin, TX',
      rating: 5,
      text: "The quality of these handcrafted products is amazing! My skin feels so much better since switching to their natural soaps. Highly recommend!"
    },
    {
      name: 'Mike Johnson',
      location: 'Denver, CO',
      rating: 5,
      text: "Love the floor cleaner - it works better than commercial brands and doesn't leave any harsh chemical smell. Great for our home with kids."
    },
    {
      name: 'Emily Chen',
      location: 'Portland, OR',
      rating: 5,
      text: "The custom chocolates for our wedding were incredible! Beautiful presentation and absolutely delicious. Our guests are still talking about them."
    }
  ];

  const categories = [
    {
      name: 'Handmade Soaps',
      description: 'Luxurious soaps crafted with natural oils and botanicals',
      productCount: 12,
      image: 'bg-gradient-to-br from-amber-100 to-orange-100'
    },
    {
      name: 'Home Cleaners',
      description: 'Effective, eco-friendly cleaners for every surface',
      productCount: 8,
      image: 'bg-gradient-to-br from-cyan-100 to-blue-100'
    },
    {
      name: 'Bath & Body',
      description: 'Nourishing shower gels and body care essentials',
      productCount: 15,
      image: 'bg-gradient-to-br from-emerald-100 to-teal-100'
    },
    {
      name: 'Artisan Chocolates',
      description: 'Premium handcrafted chocolates and confections',
      productCount: 6,
      image: 'bg-gradient-to-br from-rose-100 to-pink-100'
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Fairine Enterprise?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality natural products for your home and family
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of handcrafted products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className={`h-40 ${category.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
                    <Award className="w-10 h-10 text-slate-600" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-white text-slate-900">
                    {category.productCount} products
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Don't just take our word for it - here's what real customers have to say about our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-amber-400 fill-current" 
                      />
                    ))}
                  </div>
                  <p className="text-slate-100 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-300">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product announcements, and natural living tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Fairine Enterprise</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Handcrafted goodness for your home, made with love and natural ingredients.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className="text-slate-300 hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-slate-300">Handmade Soaps</span></li>
                <li><span className="text-slate-300">Home Cleaners</span></li>
                <li><span className="text-slate-300">Bath & Body</span></li>
                <li><span className="text-slate-300">Artisan Chocolates</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>123 Artisan Way</li>
                <li>Craft District, CD 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>hello@fairineenterprise.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Fairine Enterprise. All rights reserved. Made with ❤️ for natural living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
