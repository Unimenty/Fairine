
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Quality with Love',
      description: 'Each product is made with care and quality ingredients.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Fine Ingredients',
      description: 'We use only the finest carefully selected and organic ingredients, sourced responsibly from trusted suppliers.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Gentle',
      description: 'All our products are formulated to be gentle on your skin and safe for your family and pets.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our products with a satisfaction guarantee and commitment to excellence.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '50+', label: 'Unique Products' },
    { number: '3', label: 'Years of Experience' },
    { number: '100%', label: 'Fine Ingredients' }
  ];

  const team = [
    {
      name: 'Catherine Komey',
      role: 'Founder & Chief Artisan',
      bio: 'With over 10 years of experience in fine product formulation, Catherine started Fairine Enterprise to share her passion for quality, dependable home products.'
    },
    {
      name: 'Edwin Komey',
      role: 'Quality & Sustainability Manager',
      bio: 'Edwin ensures all our products meet the highest standards while maintaining our commitment to environmental responsibility.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-warm text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
            Born from a passion for quality living and fine quality, Fairine Enterprise has grown from homemade chocolates to trusted care 
            and cleaning products that bring quality to your everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that the products you use in your home should be as pure and fine as possible. 
                Our mission is to create quality, dependable products that not only work exceptionally well 
                but also bring comfort and reliability to your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  How It All Started
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                  It all began with a simple curiosity — a desire to learn the art of chocolate making. What started as a passion project quickly grew into something more. 
                  After mastering her own line of delicious custom chocolates, our founder — a determined mother with an eye for quality — expanded her creativity into the world of home care.
                  </p>
                  <p>
                  She began experimenting with liquid soaps and fabric softeners, later perfecting her own formulas for floor cleaners and shower gels. 
                  With every product, she focused on effectiveness, fragrance, and affordability — always thinking about the needs 
                  of everyday families.
                  </p>
                  <p>
                  Today, her products are fully registered for market sale, and she's on a mission to grow — supplying 
                  homes, shops, and businesses with trusted, quality products made with care.
                  </p>
                </div>
              </div>
              <div className="gradient-sunset rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/90 rounded-full shadow-lg flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">Made with love since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind every quality product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-4">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Commitment to Responsible Practices
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
            We believe in doing our part to create quality products that are safe, effective, and made with care . While we're not a fully eco-certified brand yet, 
            here's how we act responsibly:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Practical Packaging Choices</h4>
                    <p className="text-sm text-muted-foreground">We aim to use recyclable or reusable packaging whenever possible, balancing affordability and functionality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">🚫 No Harsh Additives</h4>
                    <p className="text-sm text-muted-foreground">Our formulas avoid unnecessarily harsh ingredients — we focus on safe, effective blends for everyday use.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">🌍 Responsibly Selected Materials</h4>
                    <p className="text-sm text-muted-foreground">We choose suppliers who share our values of honesty, quality, and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">🔁 Small-Scale, Quality-Controlled Production</h4>
                    <p className="text-sm text-muted-foreground">Our products are made in controlled batches to maintain consistency and reduce unnecessary waste.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
