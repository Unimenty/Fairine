import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
    {
        name: 'Palace Mall - Tema',
        area: 'Tema',
        address: 'Comm. 25 Mall, Tema',
        phone: '+233 30 290 8599',
        hours: '9:00 AM - 10:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Palace+Mall+Tema+Greenwich+Mag+Ghana&output=embed'
    },
    {
        name: 'Palace Mall - Spintex',
        area: 'Spintex',
        address: 'Coastal Junction, Spintex Rd, Accra',
        phone: '+233 30 281 3943',
        hours: '9:00 AM - 10:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Palace+Mall+Spintex+Accra+Ghana&output=embed'
    },
    {
        name: 'Palace Mall - Labone',
        area: 'Labone',
        address: 'Palace Mall, Labone, Accra',
        phone: '+233 30 279 8138',
        hours: '9:00 AM - 10:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Palace+Mall+Labone+Accra+Ghana&output=embed'
    },
    {
        name: 'Palace Mall - Adenta',
        area: 'Adenta',
        address: 'Palace Mall, Adenta, Accra',
        phone: '+233 30 251 8130',
        hours: '9:00 AM - 10:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Palace+Mall+Atomic+Junction+Accra+Ghana&output=embed'
    }
];

const StoreLocator = () => {
    const [activeStore, setActiveStore] = useState(locations[0]);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": locations.map((store, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "LocalBusiness",
                "name": `Fairine at ${store.name}`,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": store.address,
                    "addressLocality": store.area,
                    "addressRegion": "Greater Accra",
                    "addressCountry": "GH"
                },
                "telephone": store.phone,
                "openingHours": "Mo-Su 09:00-22:00",
                "image": "https://fairine.com/assets/logo-clean.png",
                "priceRange": "GH₵"
            }
        }))
    };

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
                        Stockists & Locations
                    </Badge>
                    <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                        Find Fairine near <span className="text-primary italic">You</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Our premium home care products are available at major retail centers across Greater Accra.
                        Visit any of our partner stores to experience Fairine today.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {/* Top Section: Immersive Map */}
                    <div className="relative w-full">
                        <div className="h-[350px] sm:h-[450px] lg:h-[500px] bg-card rounded-[2rem] sm:rounded-[3rem] border border-border/50 shadow-2xl overflow-hidden group">
                            <iframe
                                key={activeStore.name}
                                src={activeStore.mapLink}
                                className="w-full h-full border-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Google Maps location for ${activeStore.name}`}
                            ></iframe>

                            {/* Floating Active Info Overlay - Desktop */}
                            <div className="absolute top-6 left-6 hidden md:block bg-card/90 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-xl max-w-xs animate-in fade-in slide-in-from-left-4 duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.5)]"></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Selection</span>
                                </div>
                                <h3 className="text-xl font-black text-foreground mb-1">{activeStore.name}</h3>
                                <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                                    Our products are fully stocked at this {activeStore.area} location.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Horizontal Interactive Carousel */}
                    <div className="relative">
                        <div className="flex overflow-x-auto pb-6 gap-4 sm:gap-6 scrollbar-hide snap-x snap-mandatory px-4 -mx-4">
                            {locations.map((store, index) => (
                                <Card
                                    key={index}
                                    onClick={() => setActiveStore(store)}
                                    className={`flex-shrink-0 w-[280px] sm:w-[320px] snap-center cursor-pointer border-border/40 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 rounded-[1.5rem] bg-card/80 backdrop-blur-md relative overflow-hidden group ${activeStore.name === store.name
                                        ? 'ring-2 ring-primary border-primary shadow-xl bg-primary/[0.02]'
                                        : 'hover:translate-y-[-4px]'
                                        }`}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="z-10">
                                                <Badge variant="outline" className={`mb-2 font-black uppercase text-[8px] tracking-widest border-0 px-0 ${activeStore.name === store.name ? 'text-primary' : 'text-muted-foreground'}`}>
                                                    {store.area}
                                                </Badge>
                                                <h3 className={`text-lg font-black leading-tight ${activeStore.name === store.name ? 'text-foreground' : 'text-foreground/80'}`}>
                                                    {store.name}
                                                </h3>
                                            </div>
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${activeStore.name === store.name
                                                ? 'bg-primary text-primary-foreground rotate-12 scale-110'
                                                : 'bg-primary/5 text-primary group-hover:bg-primary/10'
                                                }`}>
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <div className="space-y-3 text-sm text-muted-foreground font-medium">
                                            <div className="flex items-start gap-3">
                                                <Navigation className="w-4 h-4 mt-0.5 text-primary/40" />
                                                <span className="text-[13px] line-clamp-1 group-hover:line-clamp-none transition-all">{store.address}</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-3.5 h-3.5 text-primary/40" />
                                                    <span className="text-[11px] font-bold">{store.hours}</span>
                                                </div>
                                                <div className={`text-[10px] font-black uppercase tracking-tighter ${activeStore.name === store.name ? 'text-primary' : 'text-muted-foreground/60'}`}>
                                                    {activeStore.name === store.name ? 'Currently Viewing' : 'View on Map'}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Subtle active indicator background */}
                                    {activeStore.name === store.name && (
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                    )}
                                </Card>
                            ))}
                        </div>

                        {/* Scroll Indicators - Desktop Only */}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center pointer-events-none">
                            <div className="w-8 h-8 rounded-full bg-card/80 backdrop-blur shadow-lg border border-border/50 flex items-center justify-center text-muted-foreground opacity-50">
                                <span className="text-xs">←</span>
                            </div>
                        </div>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center pointer-events-none">
                            <div className="w-8 h-8 rounded-full bg-card/80 backdrop-blur shadow-lg border border-border/50 flex items-center justify-center text-muted-foreground opacity-50">
                                <span className="text-xs">→</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StoreLocator;
