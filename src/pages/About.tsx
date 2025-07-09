
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Handcrafted with Love',
      description: 'Every product is carefully made by hand with attention to detail and genuine care for quality.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Natural Ingredients',
      description: 'We use only the finest natural and organic ingredients, sourced responsibly from trusted suppliers.'
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
    { number: '100%', label: 'Natural Ingredients' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Chief Artisan',
      bio: 'With over 10 years of experience in natural product formulation, Sarah started Fairine Enterprise to share her passion for handcrafted, eco-friendly home products.'
    },
    {
      name: 'Michael Chen',
      role: 'Master Chocolatier',
      bio: 'A trained chocolatier with expertise in creating artisanal chocolates using premium ingredients and traditional techniques.'
    },
    {
      name: 'Emma Williams',
      role: 'Quality & Sustainability Manager',
      bio: 'Emma ensures all our products meet the highest standards while maintaining our commitment to environmental responsibility.'
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
              Born from a passion for natural living and handcrafted quality, Fairine Enterprise 
              has been creating exceptional home products that bring goodness to your everyday life.
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
                We believe that the products you use in your home should be as pure and natural as possible. 
                Our mission is to create handcrafted, eco-friendly products that not only work exceptionally well 
                but also contribute to a healthier planet and a more sustainable future.
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

      {/* Stats Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-background/80">{stat.label}</div>
              </div>
            ))}
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
                    Fairine Enterprise began in 2021 when our founder, Sarah, was looking for natural, 
                    effective alternatives to commercial household products. Frustrated by harsh chemicals 
                    and artificial ingredients, she started experimenting in her kitchen.
                  </p>
                  <p>
                    What started as a personal quest for better products quickly grew into a passion project. 
                    Friends and family were amazed by the quality and effectiveness of Sarah's handcrafted 
                    soaps, cleaners, and bath products.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers who share our commitment to natural, 
                    sustainable living. Every product is still made by hand with the same care and attention 
                    to detail that started it all.
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
              The passionate people behind every handcrafted product
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
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in creating products that are good for you and good for the planet. 
              Here's how we're making a difference:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Eco-Friendly Packaging</h4>
                    <p className="text-sm text-muted-foreground">All our packaging is recyclable, biodegradable, or reusable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">No Harmful Chemicals</h4>
                    <p className="text-sm text-muted-foreground">We never use sulfates, parabens, or artificial fragrances.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ethically Sourced</h4>
                    <p className="text-sm text-muted-foreground">All ingredients are sourced from responsible suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Small Batch Production</h4>
                    <p className="text-sm text-muted-foreground">Made fresh in small batches to ensure quality and minimize waste.</p>
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
