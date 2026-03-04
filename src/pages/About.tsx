import React from 'react';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Shield, Award, Sparkles, Sprout, HandHeart, Coffee } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: 'Handcrafted with Love',
      description: 'Each bottle of our liquid soap and floor cleaner is personal. We pour genuine care into every single product we formulate in Ghana.'
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: 'Premium, Safe Ingredients',
      description: 'We source only the finest, skin-friendly materials for our home care products to ensure a premium cleaning experience.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Family & Pet-Friendly',
      description: 'Our cleaning solutions are safe for your home, your pets, and your loved ones. We never compromise on the safety of our products.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Artisanal Quality Control',
      description: 'As a boutique artisan company in Accra, we maintain direct control over every batch of our home and personal care products.'
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 selection:bg-primary/20">
      <SEO
        title="Our Story & Vision"
        description="Learn about the artisan heart behind Fairine Enterprise. Meet our founder Catherine Komey and discover how we craft care for your home."
        keywords="about Fairine, Catherine Komey, artisan home care Ghana, sustainable cleaning products, handmade soap story"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Fairine Enterprise located in Ghana?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our main production and artisan workshop is located in Accra, Ghana. We prioritize local sourcing and handcrafted quality in every batch of our home care products."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer home delivery for liquid soap and floor cleaners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer affordable delivery services across Accra and other major cities in Ghana. You can place an order directly via WhatsApp or by calling our team for a delivery quote."
              }
            },
            {
              "@type": "Question",
              "name": "Is Fairine liquid soap safe for sensitive skin?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We formulate our liquid soaps with skin-friendly ingredients and natural surfactants, making them safe for hands during household chores while remaining tough on grime."
              }
            },
            {
              "@type": "Question",
              "name": "Can Fairine floor cleaner be used on all floor types?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our floor cleaner is specially formulated to be safe for diverse Ghanaian flooring, including tiles, cement, and vinyl. It effectively disinfects while leaving a pleasant, long-lasting fragrance."
              }
            },
            {
              "@type": "Question",
              "name": "How can I purchase Fairine products in bulk for a business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer bulk pack sizes for all our products. For wholesale enquiries or large orders, please reach out to us directly through our Contact page or message us on WhatsApp for specialized rates."
              }
            }
          ]
        }}
      />
      <Header />

      {/* Hero Section - Elegant & Consistent */}
      <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-border/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
              Est. 2021
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black text-foreground mb-8 leading-[1.1] tracking-tight">
              Crafting <span className="relative">
                <span className="relative z-10 text-primary italic">Care</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <title>Swoosh</title>
                  <path d="M0 5 Q 20 0 40 5 T 80 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </span> for Your Home in Ghana
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
              Fairine Enterprise wasn’t built in a boardroom. It was born in a kitchen, fueled by a passion for creating home and personal care products that make life feel a little bit more special.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Floating & Integrated */}
      <section className="relative z-20 -mt-10 sm:-mt-14">
        <div className="container mx-auto px-4">
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] shadow-2xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Care Focus', value: 'Personal' },
              { label: 'Batch Method', value: 'Artisan' },
              { label: 'Years of Care', value: '5' },
              { label: 'Quality Rating', value: '100%' }
            ].map((stat, i) => (
              <div key={i} className="text-center group border-r border-border/30 last:border-0">
                <p className="text-2xl sm:text-3xl font-black text-foreground mb-1 group-hover:scale-110 transition-transform duration-500 uppercase">{stat.value}</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Personal & Clean */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="bg-card p-4 rounded-[2.5rem] shadow-2xl border border-border/30 transform -rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                  <HandHeart className="w-32 h-32 text-primary/30 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-tight">Handcrafted Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight">How Our Passion for Quality <br /><span className="text-primary italic font-serif">Shapes Our Products</span></h2>

              <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Fairine’s roots go back to a single kitchen counter and a simple question: <span className="font-bold text-foreground italic">"Why should our daily cleaning rituals feel like a chore?"</span> Catherine, our founder, believed that the products we use to care for our homes in Ghana should be as carefully crafted as the things we use to care for our skin.
                </p>
                <p>
                  What began as a personal quest to find safer, better-smelling alternatives for her own family soon turned into a fascination with the science of formulation. She spent months studying how natural surfactants interact with essential oils, seeking that perfect balance between uncompromising cleaning power and poetic fragrance in every bottle of liquid soap and floor cleaner.
                </p>
                <p>
                  Today, every bottle of Fairine is a continuation of that quest. We aren't just selling detergents; we are sharing a piece of our commitment to a home that feels as good as it looks, with products made right here in Accra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - Consistent Styling */}
      <section className="py-24 bg-muted/20 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Our Core Values in Home Care</h2>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Small-batch quality & artisan heart in every product</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder - Balanced Theme Card */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border/20 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-[2rem] bg-muted flex items-center justify-center flex-shrink-0 border border-border/50 shadow-inner">
                <HandHeart className="w-12 h-12 sm:w-20 sm:h-20 text-primary opacity-80" />
              </div>
              <div className="text-center md:text-left">
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary font-bold uppercase tracking-tighter">The Visionary</Badge>
                <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4">Catherine Komey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium italic mb-6">
                  "I believe that home is where health begins. Every product Fairine makes is designed to be a dependable companion in your journey toward a better, cleaner living space."
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Badge variant="secondary" className="px-3 py-1">Founder</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Chief Artisan</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - AI-Optimized */}
      <FAQ />

      {/* Final CTA/Vision */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Ready to bring Fairine <br className="hidden sm:block" /> into your home?</h2>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="bg-primary-foreground text-primary font-black px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95">Shop the Catalog</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
