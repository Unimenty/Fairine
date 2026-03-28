
export interface ProductVariant {
    volume: string;
    price: number;
    bulkPackSize: number;
    image: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    description: string;
    variants: ProductVariant[];
    inStock: boolean;
    featured: boolean;
    rating: number;
    reviews: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Fairine Liquid Soap',
        slug: 'liquid-soap',
        category: 'Home Care',
        description: 'High-quality multi-purpose liquid soap with a refreshing fragrance. Effective for washing dishes, hands, and various surfaces.',
        variants: [
            { volume: '500ml', price: 8, bulkPackSize: 12, image: '/assets/liquid-soap-500ml.webp' },
            { volume: '1L', price: 12, bulkPackSize: 8, image: '/assets/liquid-soap-1l.webp' },
            { volume: '4L', price: 45, bulkPackSize: 4, image: '/assets/liquid-soap-4l.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 124,
        image: '/assets/liquid-soap-1l.webp'
    },
    {
        id: 2,
        name: 'Fairine Floor Cleaner',
        slug: 'floor-cleaner',
        category: 'Home Care',
        description: 'Powerful disinfectant floor cleaner that removes tough stains and leaves a long-lasting fresh scent. Safe for all floor types.',
        variants: [
            { volume: '1L', price: 15, bulkPackSize: 8, image: '/assets/floor-cleaner-1l.webp' },
            { volume: '5L', price: 60, bulkPackSize: 4, image: '/assets/floor-cleaner-5l.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 4.9,
        reviews: 89,
        image: '/assets/floor-cleaner-1l.webp'
    },
    {
        id: 3,
        name: 'Fairine Fabric Softener',
        slug: 'fabric-softener',
        category: 'Fabric Care',
        description: 'Premium fabric companion that keeps your clothes smelling fresh and feeling soft after every wash. Protects fibers and reduces static.',
        variants: [
            { volume: '500ml', price: 14, bulkPackSize: 12, image: '/assets/afterwash-500ml.webp' },
            { volume: '1L', price: 28, bulkPackSize: 10, image: '/assets/afterwash-1l.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 4.8,
        reviews: 203,
        image: '/assets/afterwash-500ml.webp'
    },
    {
        id: 4,
        name: 'Fairine Shower Gel',
        slug: 'shower-gel',
        category: 'Personal Care',
        description: 'Gentle and moisturizing shower gel formulated for daily use. Leaves skin feeling clean, smooth, and beautifully scented.',
        variants: [
            { volume: '500ml', price: 20, bulkPackSize: 12, image: '/assets/shower-gel-500ml.webp' },
            { volume: '750ml', price: 28, bulkPackSize: 10, image: '/assets/shower-gel-750ml.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 4.7,
        reviews: 156,
        image: '/assets/shower-gel-500ml.webp'
    },
    {
        id: 5,
        name: 'Ikeda Premium Fragrances',
        slug: 'ikeda-perfumes',
        category: 'Fragrances',
        description: 'Elevate your space with premium, long-lasting Ikeda fragrances, now available at Fairine in Accra. Each bottle is designed to create a refreshing and luxurious atmosphere in your home or car. Available at 100 GHS per bottle. High-quality air fresheners for the discerning Ghanaian household.',
        variants: [
            { volume: 'Standard', price: 100, bulkPackSize: 1, image: '/assets/ikeda-products.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 5.0,
        reviews: 42,
        image: '/assets/ikeda-products.webp'
    },
    {
        id: 6,
        name: 'Flo 360 Sanitary Pad',
        slug: 'flo-360-sanitary-pad',
        category: 'Sanitary Care',
        description: 'Experience 360° leak-proof confidence with Flo 360 Sanitary Pads, the best choice for reliable period protection in Ghana. These ultra-thin, breathable pads are hypoallergenic and skin-friendly, keeping you fresh all day. Affordable quality at just 25 GHS per pack. Perfect for an active lifestyle and sensitive skin.',
        variants: [
            { volume: 'Standard', price: 25, bulkPackSize: 1, image: '/assets/flo-360.webp' }
        ],
        inStock: true,
        featured: true,
        rating: 5.0,
        reviews: 24,
        image: '/assets/flo-360.webp'
    }
];
