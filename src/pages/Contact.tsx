
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageSquare, HeadphonesIcon, Heart } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp us',
      info: '+233 26 123 3032',
      description: 'The quickest way to reach our small team',
      primary: true,
      link: 'https://wa.me/233261233032'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Give us a call',
      info: '+233 54 686 5035',
      description: 'Available Mon-Sat, 9AM-6PM',
      primary: true,
      link: 'tel:+233546865035'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      info: 'fairineenterprise@gmail.com',
      description: 'We usually respond within a day',
      link: 'mailto:fairineenterprise@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-background py-10 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-sunset opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            Say <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Hello!</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We're a small team of less than 10 people, personally crafting and packing every order. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Priority: Direct Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.filter(i => i.primary).map((item, index) => (
              <Card key={index} className="rounded-[2rem] border-0 shadow-xl bg-card hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
                <div className="p-8 flex flex-col items-center text-center relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{item.title}</h3>
                  <p className="text-2xl sm:text-3xl font-black text-foreground mb-3">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 w-full"
                  >
                    <Button className="w-full rounded-full px-8 py-6 h-auto font-black text-sm bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                      {item.title.includes('WhatsApp') ? 'Message on WhatsApp' : 'Call us now'}
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Feedback Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-orange-500"></div>
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">Drop us a note</h2>
                  <p className="text-muted-foreground text-sm">Have feedback or just want to say hi? We're all ears.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="What should we call you?"
                        className="rounded-2xl border-border/60 bg-muted/20 focus-visible:ring-primary/20 h-14 px-6 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">How can we reach you?</Label>
                      <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Phone or Email"
                        className="rounded-2xl border-border/60 bg-muted/20 focus-visible:ring-primary/20 h-14 px-6 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">What's on your mind?</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Share your feedback or just say hello..."
                      rows={5}
                      className="rounded-3xl border-border/60 bg-muted/20 focus-visible:ring-primary/20 min-h-[150px] p-6 text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-warm text-white font-black py-8 rounded-2xl shadow-xl hover:scale-[1.01] transition-all text-base mt-4"
                  >
                    Send to the Team
                  </Button>
                </form>
              </div>
            </div>

            {/* Email Support */}
            <div className="space-y-6">
              <Card className="rounded-[2rem] border border-border/40 shadow-xl bg-card overflow-hidden">
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-lg font-black flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Other Ways
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-6 space-y-6">
                  <a href="mailto:fairineenterprise@gmail.com" className="block group/item">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-0.5 group-hover/item:text-primary transition-colors">Email Support</h4>
                        <p className="text-xs text-muted-foreground mb-1">fairineenterprise@gmail.com</p>
                        <p className="text-[10px] text-muted-foreground italic">Best for detailed requests</p>
                      </div>
                    </div>
                  </a>
                  
                  <div className="pt-6 border-t border-border/40">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We're often busy in the workshop, so if we don't pick up right away, just leave a message and we'll get back to you!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-[2rem] p-8 text-center border border-primary/10">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-black text-sm uppercase tracking-wider mb-2">Made with Care</h4>
                <p className="text-xs text-muted-foreground">Every interaction matters to us. Thank you for supporting our small business!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
