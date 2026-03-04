
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Box, Package } from 'lucide-react';

interface ProductVariant {
  volume: string;
  price: number;
  bulkPackSize: number;
  image?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  variants: ProductVariant[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  image: string;
}

interface ProductDetailsDialogProps {
  product: Product;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ProductDetailsDialog = ({ product, trigger, open, onOpenChange }: ProductDetailsDialogProps) => {
  const [selectedVolume, setSelectedVolume] = useState(product.variants[0].volume);
  const currentVariant = product.variants.find((v) => v.volume === selectedVolume)!;
  const packSizes = [1, currentVariant.bulkPackSize];
  const [selectedPack, setSelectedPack] = useState(packSizes[0]);

  // Preload all variant images for instant transitions
  useEffect(() => {
    product.variants.forEach((variant) => {
      if (variant.image) {
        const img = new Image();
        img.src = variant.image;
      }
    });
  }, [product]);

  const handleVolumeChange = (vol: string) => {
    setSelectedVolume(vol);
    const newVariant = product.variants.find((v) => v.volume === vol)!;
    if (selectedPack !== 1) {
      setSelectedPack(newVariant.bulkPackSize);
    }
  };

  const totalPrice = (currentVariant.price * selectedPack).toFixed(2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="w-[88vw] sm:max-w-4xl p-0 overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] border-none shadow-2xl max-h-[85vh] sm:max-h-[92vh] flex flex-col md:block">
        <div className="flex flex-col md:grid md:grid-cols-2 h-full md:h-auto overflow-y-auto md:overflow-visible">
          {/* Left Side: Image */}
          <div className="relative bg-white aspect-[1/1] sm:aspect-square md:aspect-auto flex items-center justify-center p-6 sm:p-12 md:p-16 overflow-hidden min-h-[220px] sm:min-h-[250px] md:min-h-0 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <div className="relative group/img">
              <img
                src={currentVariant.image || product.image}
                alt={product.name}
                className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain rounded-[1.5rem] md:rounded-[3rem] shadow-none group-hover/img:scale-105 transition-transform duration-700"
              />
              {/* Floating Badges */}
              <div className="absolute -top-2 -left-2 flex flex-col gap-1.5">
                {product.inStock && (
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-0 font-bold px-2 py-0.5 rounded text-[8px] sm:text-xs">In Stock</Badge>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="p-5 sm:p-8 lg:p-10 flex flex-col bg-card md:bg-transparent relative z-10 -mt-2 sm:mt-0 rounded-t-[1.5rem] sm:rounded-none">
            <div className="flex justify-between items-start mb-2 sm:mb-4">
              <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-2 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>

            <DialogTitle className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-4 leading-tight">
              {product.name}
            </DialogTitle>

            <div className="space-y-4 sm:space-y-8 mb-6 sm:mb-10">
              {/* Description */}
              <div>
                <h4 className="text-[9px] sm:text-sm font-black uppercase tracking-widest text-foreground/50 mb-1.5 sm:mb-3">Overview</h4>
                <p className="text-[11px] sm:text-base text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                  {product.description}
                </p>
              </div>

              {/* Volume Selection */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[9px] sm:text-sm font-black uppercase tracking-widest text-foreground/50 flex items-center gap-1.5">
                  <Box className="w-3 sm:w-4 h-3 sm:h-4" /> Volume Options
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.volume}
                      onClick={() => handleVolumeChange(v.volume)}
                      className={`px-3 py-1 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-2xl text-[10px] sm:text-sm font-black transition-all border-2 ${selectedVolume === v.volume
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                        : 'bg-card border-border hover:border-primary/50 text-muted-foreground'
                        }`}
                    >
                      {v.volume}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pack Selection */}
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-[9px] sm:text-sm font-black uppercase tracking-widest text-foreground/50 flex items-center gap-1.5">
                  <Package className="w-3 sm:w-4 h-3 sm:h-4" /> Size Options
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {packSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedPack(size)}
                      className={`px-3 py-1 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-2xl text-[10px] sm:text-sm font-black transition-all border-2 ${selectedPack === size
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                        : 'bg-card border-border hover:border-slate-900/50 text-muted-foreground'
                        }`}
                    >
                      {size === 1 ? 'Single' : `Pack (${size})`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions / Pricing Info */}
            <div className="mt-auto pt-4 sm:pt-8 border-t border-border/50 flex items-center justify-between">
              <div className="flex-shrink-0">
                <span className="text-[8px] font-black text-muted-foreground uppercase tracking-widest block mb-0.5">Price</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-3xl font-black text-foreground">{totalPrice}</span>
                  <span className="text-[10px] sm:text-sm font-black text-muted-foreground uppercase">GHS</span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[9px] sm:text-xs font-bold text-muted-foreground italic max-w-[150px] sm:max-w-none">
                  * Pricing shown is for information purposes. Visit our physical store or contact us directly to purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
