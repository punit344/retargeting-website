import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/manus-storage/logo_de4ca7cb.png" 
                alt="Retargeting Consultancy Logo" 
                className="h-8 w-8"
              />
              <h3 className="text-lg font-bold">Retargeting</h3>
            </div>
            <p className="text-sm text-white/70">We Earn When You Earn</p>
            <p className="text-xs text-white/50 mt-2">Performance-based retargeting consultancy</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-white/70 hover:text-accent transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Retargeting Audit</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Audience Segmentation</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">Ad Campaign Strategy</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors">CRO Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@retargeting.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                hello@retargeting.com
              </a>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {currentYear} Retargeting Consultancy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
