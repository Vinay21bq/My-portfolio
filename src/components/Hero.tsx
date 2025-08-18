import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const titles = [
    'Software Engineer',
    'Data Analytics Expert',
    'Web Developer',
    'AI Enthusiast'
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentIndex % titles.length];
      
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(prev => prev + 1);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, titles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-4 py-2 text-sm font-tech text-primary border border-primary/30 rounded-full glow-border">
              👋 Welcome to my digital realm
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-6 animate-slide-up">
            <span className="block text-foreground">VINAY</span>
            <span className="block text-gradient">GOTTAM</span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="h-16 md:h-20 mb-8 animate-slide-up">
            <h2 className="text-2xl md:text-4xl font-tech font-medium">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary neon-text">
                {displayText}
                <span className="animate-pulse-glow">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up">
            Dedicated software engineer with expertise in{' '}
            <span className="text-electric-blue">data analytics</span>, and{' '}
            <span className="text-neon-purple">web development</span>. 
            Passionate about creating innovative solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="glow-button bg-gradient-primary hover:shadow-electric"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glow-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a
              href="mailto:gottamvinay6@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-gottam-06497424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Vinay21bq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-float text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;