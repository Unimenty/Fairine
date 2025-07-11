
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Liquid Soap (1L) - 1000ml',
      price: 'GH₵ 20.00',
      originalPrice: 'GH₵ 25.00',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 124,
      category: 'Home Care',
      colors: ['bg-amber-100', 'bg-rose-100', 'bg-emerald-100']
    },
    {
      id: 2,
      name: 'Floor Cleaner (1L) - 1000ml',
      price: 'GH₵ 20.00',
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 89,
      category: 'Home Care',
      colors: ['bg-cyan-100', 'bg-blue-100']
    },
    {
      id: 3,
      name: 'Shower Gel (500ml)',
      price: 'GH₵ 25.00',
      originalPrice: 'GH₵ 28.00',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 156,
      category: 'Personal Care',
      colors: ['bg-orange-100', 'bg-yellow-100']
    },
    {
      id: 4,
      name: 'Fabric Softener (500ml)',
      price: 'GH₵ 15.00',
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 203,
      category: 'Laundry Care',
      colors: ['bg-slate-100', 'bg-gray-100']
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular handcrafted products, made with love and natural ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 bg-card border border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center relative">
                  <div className="w-24 h-24 bg-muted-foreground/20 rounded-lg shadow-sm"></div>
                  
                  {/* Color variants */}
                  <div className="absolute bottom-3 left-3 flex space-x-1">
                    {product.colors.map((color, index) => (
                      <div key={index} className={`w-3 h-3 rounded-full ${color} border border-card shadow-sm`}></div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-card shadow-sm border-border">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-card shadow-sm border-border">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Sale badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-md font-semibold">
                      Sale
                    </div>
                  )}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-card-foreground">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="gradient-warm text-white px-4 py-2 rounded-md border-0"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
