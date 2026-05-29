import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/manus-storage/logo_de4ca7cb.png" 
            alt="Retargeting Consultancy Logo" 
            className="h-10 w-10"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">Retargeting</h1>
            <p className="text-xs text-muted-foreground">We Earn When You Earn</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-foreground font-medium hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={() => handleNavClick('#contact')}
            className="cta-button"
          >
            Get Free Analysis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-foreground font-medium hover:text-accent transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('#contact')}
              className="cta-button w-full"
            >
              Get Free Analysis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
