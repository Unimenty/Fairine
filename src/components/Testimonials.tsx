
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've tried many cleaning products, but Fairine's Liquid Soap is by far the best. It's gentle on my hands yet tough on grease. The fragrance is just lovely!",
      author: "Sarah A.",
      role: "Home Maker",
      rating: 5
    },
    {
      id: 2,
      text: "The Floor Cleaner is a game-changer! It leaves my tiles sparkling clean and the scent lingers for hours. Truly 'Sparkle & Serenity' as they promise.",
      author: "Kwame O.",
      role: "Restaurant Owner",
      rating: 5
    },
    {
      id: 3,
      text: "I love the Afterwash! My clothes feel so soft and smell amazing. It's great to find such high-quality products made right here. Highly recommended!",
      author: "Ama D.",
      role: "Loyal Customer",
      rating: 5
    },
    {
        id: 4,
        text: "Fairine's Shower Gel is now a staple in our bathroom. It's moisturizing and doesn't dry out my skin like other brands. The bulk packs are great value.",
        author: "John K.",
        role: "Verified Buyer",
        rating: 4
      }
  ];

  return (
    <section className="py-20 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from families who trust Fairine for their homes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:bg-card transition-colors duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <Quote className="w-10 h-10 text-primary/20 mb-6" />
                        
                        <div className="flex mb-4 text-yellow-500">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>

                        <p className="text-muted-foreground text-base italic mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>

                        <div className="mt-auto">
                          <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
                          <span className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                            {testimonial.role}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4 sm:hidden">
                 {/* Mobile navigation controls could go here if needed, but standard arrows are fine */}
            </div>
            <CarouselPrevious className="hidden sm:flex -left-12 h-12 w-12 border-2 hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="hidden sm:flex -right-12 h-12 w-12 border-2 hover:bg-primary hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
