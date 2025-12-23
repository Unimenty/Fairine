
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductDetailsDialog from './ProductDetailsDialog';

const FeaturedProducts = () => {
  const { addToCart, setDrawerOpen } = useCart();
  const products = [
    {
      id: 1,
      name: 'Fairine Liquid Soap',
      category: 'Home Care',
      description: 'High-quality multi-purpose liquid soap with a refreshing fragrance. Effective for washing dishes, hands, and various surfaces.',
      variants: [
        { volume: '1L', price: 14, bulkPackSize: 8, image: '/assets/liquid-soap-1l.png' },
        { volume: '4L', price: 50, bulkPackSize: 4, image: '/assets/liquid-soap-4l.png' }
      ],
      inStock: true,
      featured: true,
      rating: 4.8,
      reviews: 124,
      image: '/assets/liquid-soap-1l.png'
    },
    {
      id: 2,
      name: 'Fairine Floor Cleaner',
      category: 'Home Care',
      description: 'Powerful disinfectant floor cleaner that removes tough stains and leaves a long-lasting fresh scent. Safe for all floor types.',
      variants: [
        { volume: '1L', price: 16, bulkPackSize: 8, image: '/assets/floor-cleaner-1l.png' },
        { volume: '5L', price: 65, bulkPackSize: 4, image: '/assets/floor-cleaner-5l.png' }
      ],
      inStock: true,
      featured: true,
      rating: 4.9,
      reviews: 89,
      image: '/assets/floor-cleaner-1l.png'
    },
    {
      id: 3,
      name: 'Fairine Afterwash',
      category: 'Home Care',
      description: 'Fabric companion that keeps your clothes smelling fresh and feeling soft after every wash. Protects fibers and reduces static.',
      variants: [
        { volume: '500ml', price: 13, bulkPackSize: 12, image: '/assets/afterwash-500ml.png' },
        { volume: '1L', price: 30, bulkPackSize: 10, image: '/assets/afterwash-1l.png' }
      ],
      inStock: true,
      featured: true,
      rating: 4.8,
      reviews: 203,
      image: '/assets/afterwash-500ml.png'
    },
    {
      id: 4,
      name: 'Fairine Shower Gel',
      category: 'Personal Care',
      description: 'Gentle and moisturizing shower gel formulated for daily use. Leaves skin feeling clean, smooth, and beautifully scented.',
      variants: [
        { volume: '500ml', price: 20, bulkPackSize: 12, image: '/assets/shower-gel-500ml.png' },
        { volume: '750ml', price: 27, bulkPackSize: 10, image: '/assets/shower-gel-750ml.png' }
      ],
      inStock: true,
      featured: true,
      rating: 4.7,
      reviews: 156,
      image: '/assets/shower-gel-500ml.png'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our most popular quality products, made with love and quality ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => {
            const [isDetailsOpen, setIsDetailsOpen] = useState(false);
            
            return (
              <div key={product.id}>
              <Card 
                className="group hover:shadow-2xl transition-all duration-500 bg-card border border-border/40 shadow-lg rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div 
                  className="relative overflow-hidden aspect-square sm:aspect-[5/4] cursor-pointer"
                  onClick={() => setIsDetailsOpen(true)}
                >
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Action buttons - hidden on mobile, compact on desktop */}
                  <div className="absolute top-2 right-2 flex flex-col space-y-2 hidden sm:flex sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="bg-card/90 backdrop-blur-sm shadow-md rounded-xl border-0 h-8 w-8">
                      <Heart className="w-4 h-4 text-rose-500" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-card/90 backdrop-blur-sm shadow-md rounded-xl border-0 h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                </div>
              </div>

              <CardContent className="p-3 sm:p-4 flex flex-col flex-grow">
                <div className="mb-1 sm:mb-2">
                  <span className="text-[7px] sm:text-[9px] font-bold text-primary uppercase tracking-[0.15em] bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h3 
                  className="text-sm sm:text-lg font-bold text-card-foreground mb-1 sm:mb-3 group-hover:text-primary transition-colors leading-tight min-h-[2.5rem] sm:min-h-0 cursor-pointer"
                  onClick={() => setIsDetailsOpen(true)}
                >
                  {product.name}
                </h3>

                <div className="flex items-center mb-2 sm:mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground ml-2 hidden sm:inline">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mt-auto pt-3 sm:pt-4 border-t border-border/30 flex flex-col space-y-2 sm:space-y-3">
                  <div className="flex items-baseline space-x-1 sm:space-x-2">
                    <span className="text-base sm:text-xl font-black text-foreground">
                      {product.variants[0].price}
                      <span className="text-[8px] sm:text-[10px] font-bold ml-1 text-muted-foreground uppercase">GHS</span>
                    </span>
                  </div>
                  <Button 
                    onClick={() => {
                      const defaultVariant = product.variants[0];
                      addToCart({
                        id: product.id.toString(),
                        name: product.name,
                        image: defaultVariant.image || product.image,
                        price: defaultVariant.price,
                        quantity: 1,
                        variant: {
                          volume: defaultVariant.volume,
                          packSize: 1
                        }
                      });
                      toast.success("Added to cart! 🛍️", {
                        description: `1x ${product.name} (${defaultVariant.volume})`,
                      });
                      setDrawerOpen(true);
                    }}
                    className="w-full h-9 sm:h-11 gradient-warm text-white font-bold rounded-lg sm:rounded-xl border-0 shadow-md hover:scale-[1.02] transition-all text-[11px] sm:text-sm px-1"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
              </Card>
              
              <ProductDetailsDialog 
                product={product as any} 
                open={isDetailsOpen} 
                onOpenChange={setIsDetailsOpen} 
              />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <Link to="/shop">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black py-6 px-12 rounded-xl transition-all duration-300 text-lg"
            >
              Explore Full Catalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
