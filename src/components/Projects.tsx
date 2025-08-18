import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Comparative Analysis Of Deep Learning Models For Enhanced Water Quality Prediction',
      description:
        'Advanced hybrid LSTM-CNN deep learning model for predicting water quality with the help of parameters including pH, turbidity, and dissolved oxygen levels with real-time monitoring capabilities.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'CNN', 'Data Science', 'AI/ML'],
      features: [
        'Hybrid neural network architecture',
        'High accuracy predictions',
        'Environmental impact assessment',
      ],
      icon: Brain,
      gradient: 'from-cyber-green to-electric-blue',
      demoUrl: '#',
      githubUrl: 'https://github.com/Vinay21bq/Water-Quality-Prediction',
    },
    {
      title: 'Employee Performance Appraisal System',
      description:
        'Comprehensive web-based HR management system for performance evaluation with modern frontend and robust backend architecture supporting multiple databases.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Node.js', 'MySQL', 'MongoDB'],
      features: [
        'Interactive dashboard design',
        'Multi-database support',
        'Performance analytics',
        'User role management',
      ],
      icon: Users,
      gradient: 'from-neon-purple to-cyber-green',
      demoUrl: '#',
      githubUrl: 'https://github.com/Vinay21bq/Employee-Performance-Appraisal-System',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions showcasing my expertise in AI, web development, and data analytics
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="cyber-card overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                          <project.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-tech font-bold text-foreground">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-tech font-semibold mb-3 text-foreground">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-tech font-semibold mb-3 text-foreground">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="glow-button bg-gradient-primary" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="glow-button">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Visual/Mockup */}
                  <div
                    className={`bg-gradient-to-br ${project.gradient} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center">
                      <project.icon className="h-24 w-24 text-white/80 mx-auto mb-4" />
                      <div className="text-white/60 font-tech">Project Showcase</div>
                    </div>

                    {/* Animated background effect */}
                    <div className="absolute inset-0">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <a href='https://github.com/Vinay21bq?tab=repositories' target='_blank'>
            <Button variant="outline" size="lg" className="glow-button">
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
