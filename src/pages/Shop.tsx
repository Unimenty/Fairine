
import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, Heart, Eye, Grid3X3, List } from 'lucide-react';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Products', 'Soaps', 'Cleaners', 'Bath & Body', 'Chocolates', 'Fabric Care'];
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const products = [
    {
      id: 1,
      name: 'Lavender Artisan Soap',
      price: 12.99,
      originalPrice: 15.99,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 124,
      category: 'Soaps',
      description: 'Handcrafted with organic lavender oil and shea butter for a luxurious cleansing experience.',
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'Natural Floor Cleaner - Citrus',
      price: 18.99,
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 89,
      category: 'Cleaners',
      description: 'Eco-friendly floor cleaner with natural citrus extracts. Safe for all floor types.',
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: 'Eucalyptus Shower Gel',
      price: 22.99,
      originalPrice: 26.99,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 156,
      category: 'Bath & Body',
      description: 'Refreshing eucalyptus shower gel with moisturizing properties and natural ingredients.',
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: 'Multi-Surface Cleaner',
      price: 16.99,
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 203,
      category: 'Cleaners',
      description: 'Versatile cleaner suitable for kitchen, bathroom, and general household cleaning.',
      inStock: false,
      featured: false
    },
    {
      id: 5,
      name: 'Dark Chocolate Truffles',
      price: 24.99,
      originalPrice: null,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 67,
      category: 'Chocolates',
      description: 'Handmade dark chocolate truffles with premium cocoa and natural flavors.',
      inStock: true,
      featured: true
    },
    {
      id: 6,
      name: 'Organic Fabric Softener',
      price: 14.99,
      originalPrice: 18.99,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 112,
      category: 'Fabric Care',
      description: 'Plant-based fabric softener that leaves clothes soft and naturally fresh.',
      inStock: true,
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Discover our complete collection of handcrafted, natural products for your home and body.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer hover:bg-slate-900 hover:text-white transition-colors ${
                    selectedCategory === category ? 'bg-slate-900 text-white' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-slate-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg shadow-lg"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-1">
                      {product.featured && (
                        <Badge className="bg-amber-500 text-white text-xs">Featured</Badge>
                      )}
                      {product.originalPrice && (
                        <Badge className="bg-red-500 text-white text-xs">Sale</Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="secondary" className="text-xs">Out of Stock</Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  {viewMode === 'list' && (
                    <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                  )}

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-slate-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All Products');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
