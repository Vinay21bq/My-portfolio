// If you're on Next.js app router, keep this. If not, it's harmless.
'use client';

import { useEffect, useState, useMemo } from 'react';
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

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${10 + Math.random() * 10}s`,
      })),
    []
  );

  useEffect(() => {
    const currentTitle = titles[currentIndex % titles.length];
    const timer =
      displayText.length < currentTitle.length
        ? setTimeout(() => {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          }, 100)
        : setTimeout(() => {
            setDisplayText('');
            setCurrentIndex((p) => p + 1);
          }, 2000);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex]);

  const handleHeroClick = (e) => {
    const container = e.currentTarget; 
    const ripple = document.createElement('span');

    const size = 20;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple'; 

    container.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onClick={handleHeroClick}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-4 py-2 text-sm font-tech text-primary border border-primary/30 rounded-full glow-border">
              👋 Welcome to my digital realm
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-6 animate-slide-up">
            <span className="block text-foreground">VINAY</span>
            <span className="block text-gradient">GOTTAM</span>
          </h1>

          <div className="h-16 md:h-20 mb-8 animate-slide-up">
            <h2 className="text-2xl md:text-4xl font-tech font-medium">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary neon-text">
                {displayText}
                <span className="animate-pulse-glow">|</span>
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up">
            Dedicated software engineer with expertise in{' '}
            <span className="text-electric-blue">data analytics</span>, and{' '}
            <span className="text-neon-purple">web development</span>. Passionate about creating
            innovative solutions that make a difference.
          </p>

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

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a
              href="mailto:gottamvinay6@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="Email"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-gottam-06497424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Vinay21bq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-button p-2"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

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
