import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Target, BarChart3, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { toast } from 'sonner';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    monthlyVisitors: '',
    conversionRate: '',
    email: '',
    whatsapp: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, monthlyVisitors: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.businessName) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Thank you! We will contact you within 24 hours');
    setFormData({
      fullName: '',
      businessName: '',
      websiteUrl: '',
      monthlyVisitors: '',
      conversionRate: '',
      email: '',
      whatsapp: '',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="accent-bar mb-6"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Turn Your Returning Visitors Into Real Revenue
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We only earn when YOU earn — Zero Risk, Pure Profit
              </p>
              <p className="text-lg text-foreground mb-8">
                We identify websites with 85% returning traffic and convert 10-15% of those visitors into paying customers. You only pay us 10% commission on the profit we generate.
              </p>
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button"
              >
                Get Your Free Traffic Analysis
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6">
              <Card className="stat-card hover-lift">
                <div className="stat-number">85%</div>
                <div className="stat-label">Returning Traffic Identified</div>
              </Card>
              <Card className="stat-card hover-lift">
                <div className="stat-number">10-15%</div>
                <div className="stat-label">Visitors Converted</div>
              </Card>
              <Card className="stat-card hover-lift">
                <div className="stat-number">10%</div>
                <div className="stat-label">Commission on Your Profit</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users size={32} className="text-accent mb-3" />
              <p className="text-2xl font-bold">100+</p>
              <p className="text-white/70">Clients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={32} className="text-accent mb-3" />
              <p className="text-2xl font-bold">Zero Risk</p>
              <p className="text-white/70">Performance Model</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp size={32} className="text-accent mb-3" />
              <p className="text-2xl font-bold">Proven</p>
              <p className="text-white/70">Results Driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple 3-step process to turn your returning visitors into paying customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'We Analyze Your Traffic',
                description: 'We analyze your returning visitor traffic completely FREE. No cost, no commitment.',
                icon: BarChart3,
              },
              {
                step: 2,
                title: 'Build the Right Strategy',
                description: 'We develop a custom conversion strategy tailored to your business and audience.',
                icon: Target,
              },
              {
                step: 3,
                title: 'You Profit - We Take 10%',
                description: 'You earn the profit. We take only 10% commission on the new revenue we generate.',
                icon: TrendingUp,
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.step} className="p-8 hover-lift text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="text-accent" size={32} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-accent mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Who is this for */}
          <div className="mt-20 bg-blue-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Who Is This For?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'E-commerce websites with high traffic but low conversions',
                'Service-based businesses struggling to convert leads',
                'SaaS companies with returning users but low activation',
                'Any business with 85%+ returning traffic looking to monetize',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive retargeting solutions designed to maximize your conversion potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Retargeting Audit',
                description: 'Free analysis of your returning visitor traffic and conversion opportunities.',
                icon: BarChart3,
              },
              {
                title: 'Audience Segmentation',
                description: 'Identify and segment your most valuable returning visitor groups.',
                icon: Users,
              },
              {
                title: 'Ad Campaign Strategy',
                description: 'Custom retargeting campaigns designed to convert your specific audience.',
                icon: Target,
              },
              {
                title: 'Conversion Rate Optimization',
                description: 'Optimize every step of your funnel to maximize conversion rates.',
                icon: TrendingUp,
              },
              {
                title: 'Performance Tracking',
                description: 'Real-time dashboards showing every conversion and profit metric.',
                icon: Zap,
              },
              {
                title: 'Competitor Analysis',
                description: 'Understand how competitors are retargeting and stay ahead.',
                icon: Target,
              },
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Card key={idx} className="p-8 bg-white/5 border-white/10 hover-lift">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Raj Patel',
                company: 'E-commerce Store Owner',
                quote: 'We went from 2% to 12% conversion rate. The increase in revenue has been incredible, and we only pay commission on actual profit.',
                result: '₹2.4L extra monthly revenue',
              },
              {
                name: 'Priya Singh',
                company: 'SaaS Founder',
                quote: 'Their audience segmentation strategy completely changed how we approach retargeting. Our activation rate jumped significantly.',
                result: '₹1.8L extra monthly profit',
              },
              {
                name: 'Amit Kumar',
                company: 'Service Business Owner',
                quote: 'The zero-risk model gave us confidence to invest in conversion optimization. The results speak for themselves.',
                result: '₹1.2L new monthly revenue',
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.company}</p>
                  <p className="text-accent font-bold">{testimonial.result}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 md:py-32 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed results from businesses we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'E-commerce Store',
                before: '2% conversion',
                after: '12% conversion',
                improvement: '+500%',
                revenue: '₹2.4L extra monthly',
              },
              {
                industry: 'SaaS Company',
                before: '4% activation',
                after: '14% activation',
                improvement: '+250%',
                revenue: '₹1.8L extra monthly',
              },
              {
                industry: 'Service Business',
                before: '3% conversion',
                after: '11% conversion',
                improvement: '+267%',
                revenue: '₹1.2L new monthly',
              },
            ].map((caseStudy, idx) => (
              <Card key={idx} className="p-8 hover-lift">
                <h3 className="text-2xl font-bold text-foreground mb-6">{caseStudy.industry}</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-muted-foreground">Before</span>
                    <span className="font-bold text-foreground">{caseStudy.before}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full"></div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-muted-foreground">After</span>
                    <span className="font-bold text-accent">{caseStudy.after}</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full"></div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-2">Improvement</p>
                  <p className="text-3xl font-bold text-accent mb-4">{caseStudy.improvement}</p>
                  <p className="text-foreground font-semibold">{caseStudy.revenue}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Apply For Your Free Traffic Analysis</h2>
            <p className="text-xl text-muted-foreground">Limited spots available every month</p>
          </div>

          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Business Name *</label>
                <Input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleFormChange}
                  placeholder="Your business name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Website URL</label>
                <Input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleFormChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Monthly Website Visitors</label>
                <Select value={formData.monthlyVisitors} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                    <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                    <SelectItem value="10000-50000">10,000 - 50,000</SelectItem>
                    <SelectItem value="50000-100000">50,000 - 100,000</SelectItem>
                    <SelectItem value="100000+">100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Conversion Rate (%)</label>
                <Input
                  type="number"
                  name="conversionRate"
                  value={formData.conversionRate}
                  onChange={handleFormChange}
                  placeholder="e.g., 2.5"
                  step="0.1"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">WhatsApp Number</label>
                <Input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleFormChange}
                  placeholder="+91 9876543210"
                  className="w-full"
                />
              </div>

              <Button 
                type="submit"
                className="cta-button w-full"
              >
                Claim My Free Analysis
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll contact you within 24 hours with your personalized analysis.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="accent-bar mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How do you earn money?',
                a: 'We only earn 10% commission on the profit we generate for you. If we don\'t generate profit, we don\'t earn anything. Zero risk for you.',
              },
              {
                q: 'What if I don\'t make profit?',
                a: 'You don\'t pay us anything. Our model is completely performance-based. We only succeed when you succeed.',
              },
              {
                q: 'How long does it take?',
                a: 'The initial analysis takes 5-7 days. Strategy implementation and results typically show within 30-60 days.',
              },
              {
                q: 'Is there any upfront cost?',
                a: 'No upfront costs. The initial traffic analysis is completely free. You only pay commission on actual profit generated.',
              },
              {
                q: 'What kind of businesses do you work with?',
                a: 'We work with e-commerce stores, SaaS companies, service-based businesses, and any company with 85%+ returning traffic.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6 last:border-b-0">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
