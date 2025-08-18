import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep learning models for water quality prediction using hybrid LSTM-CNN architecture'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Expert in data cleaning, transformation, and visualization using modern tools'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks and best practices'
    },
    {
      icon: Smartphone,
      title: 'Embedded Systems',
      description: 'RTOS concepts and hardware-software integration expertise'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate technologist from Guntur, Andhra Pradesh, dedicated to pushing 
              the boundaries of what's possible with code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-tech font-semibold text-foreground">
                  Innovative Problem Solver
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated software engineer with a strong commitment to delivering 
                  high-quality work. My expertise spans across multiple domains including 
                  artificial intelligence, data analytics, and web development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What drives me is the opportunity to solve complex problems with innovative 
                  solutions. Whether it's developing AI models for environmental monitoring 
                  or creating intuitive web applications, I bring attention to detail and 
                  a collaborative approach to every project.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="cyber-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">7.1</div>
                  <div className="text-sm text-muted-foreground">GPA B.Tech</div>
                </div>
                <div className="cyber-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyber-green">2+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
              </div>
            </div>

            {/* Right side - Highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="cyber-card group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-tech font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-tech font-semibold mb-6 text-foreground">
              Languages I Speak
            </h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-lg font-medium text-primary">Telugu</div>
                <div className="text-sm text-muted-foreground">Native</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-cyber-green">Hindi</div>
                <div className="text-sm text-muted-foreground">Fluent</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium text-neon-purple">English</div>
                <div className="text-sm text-muted-foreground">Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;