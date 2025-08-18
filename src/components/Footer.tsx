import { Button } from '@/components/ui/button';
import { Heart, Code, Coffee, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="font-cyber text-2xl font-bold text-gradient mb-4">
                VINAY.DEV
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Passionate software engineer crafting innovative solutions with AI, 
                data analytics, and modern web technologies. Always ready for new challenges 
                and exciting collaborations.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                <span>and</span>
                <Code className="w-4 h-4 text-primary mx-1" />
                <span>by Vinay Gottam</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-tech font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-tech font-semibold text-foreground mb-4">Let's Connect</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Email:</span><br />
                  gottamvinay6@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Phone:</span><br />
                  +91 9392850855
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Location:</span><br />
                  Guntur, Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground text-center md:text-left">
                <p>© {currentYear} Vinay Gottam. All rights reserved.</p>
                <p className="flex items-center justify-center md:justify-start mt-1">
                  <span>Powered by React, Tailwind & lots of</span>
                  <Coffee className="w-4 h-4 text-amber-500 mx-1" />
                </p>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="glow-button"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;