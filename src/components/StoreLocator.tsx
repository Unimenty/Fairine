import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
    {
        name: 'Accra Mall',
        area: 'Tetteh Quarshie',
        address: 'Plot 76, Tetteh Quarshie Interchange',
        phone: '+233 30 282 3066',
        hours: '9:00 AM - 9:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Accra+Mall,+Ghana&output=embed'
    },
    {
        name: 'Marina Mall',
        area: 'Airport City',
        address: 'Airport Residential Area, Accra',
        phone: '+233 30 279 8138',
        hours: '10:00 AM - 10:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Marina+Mall,+Accra+Ghana&output=embed'
    },
    {
        name: 'Achimota Retail Centre',
        area: 'Achimota',
        address: 'Achimota-Ofankor Highway, Accra',
        phone: '+233 30 242 8130',
        hours: '9:00 AM - 9:00 PM',
        mapLink: 'https://maps.google.com/maps?q=Achimota+Retail+Centre,+Accra+Ghana&output=embed'
    },
    {
        name: 'Westhills Mall',
        area: 'Weija',
        address: 'Winneba Rd, Weija',
        phone: '+233 30 286 1000',
        hours: '9:00 AM - 9:00 PM',
        mapLink: 'https://maps.google.com/maps?q=West+Hills+Mall,+Accra+Ghana&output=embed'
    }
];

const StoreLocator = () => {
    const [activeStore, setActiveStore] = useState(locations[0]);

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* List Section */}
                    <div className="lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-hide">
                        {locations.map((store, index) => (
                            <Card
                                key={index}
                                onClick={() => setActiveStore(store)}
                                className={`group cursor-pointer border-border/40 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-[1.5rem] bg-card/80 backdrop-blur-sm overflow-hidden ${activeStore.name === store.name ? 'ring-2 ring-primary border-primary' : ''
                                    }`}
                            >
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className={`text-lg font-black transition-colors ${activeStore.name === store.name ? 'text-primary' : 'text-foreground'}`}>{store.name}</h3>
                                            <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-0 rounded-md text-[9px] font-black uppercase">
                                                {store.area}
                                            </Badge>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeStore.name === store.name ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary group-hover:scale-110'
                                            }`}>
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-2.5 text-sm text-muted-foreground font-medium">
                                        <div className="flex items-start gap-3">
                                            <Navigation className="w-4 h-4 mt-0.5 text-primary/60" />
                                            <span>{store.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-4 h-4 text-primary/60" />
                                            <span>{store.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-4 h-4 text-primary/60" />
                                            <span>{store.hours}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="lg:col-span-7 relative">
                        <div className="h-full min-h-[400px] lg:min-h-0 bg-card rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden group">
                            <iframe
                                key={activeStore.name}
                                src={activeStore.mapLink}
                                className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Google Maps location for ${activeStore.name}`}
                            ></iframe>

                            {/* Floating Info Overlay */}
                            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-64 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-border/50 shadow-xl pointer-events-none">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Selected Location</span>
                                </div>
                                <p className="text-xs font-black text-foreground mb-1">{activeStore.name}</p>
                                <p className="text-[10px] font-medium text-muted-foreground">Fairine products are in-stock and fresh at this location.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreLocator;
