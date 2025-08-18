import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Cpu, TrendingUp, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'Supported by AWS',
      duration: 'Dec 2022 - Feb 2023',
      type: 'Internship',
      description: 'Specialized in data cleaning, transformation, and visualization using industry-standard tools. Developed comprehensive analytics dashboards and automated reporting systems.',
      skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Data Cleaning', 'Visualization'],
      achievements: [
        'Automated data processing workflows reducing manual effort by 60%',
        'Created interactive Power BI dashboards for executive reporting',
        'Implemented data quality checks improving accuracy by 35%',
        'Collaborated with cross-functional teams on data-driven insights'
      ],
      icon: Database,
      color: 'cyber-green'
    },
    {
      title: 'Embedded Systems Developer Intern',
      company: 'Supported by Microchip Technology',
      duration: 'Jul 2024 - Sept 2024',
      type: 'Internship',
      description: 'Focused on RTOS concepts and hardware-software integration. Worked on real-time embedded applications and system optimization for IoT devices.',
      skills: ['C/C++', 'RTOS', 'Microcontrollers', 'Hardware Integration', 'Testing', 'Debugging'],
      achievements: [
        'Developed RTOS-based applications for IoT sensor networks',
        'Optimized system performance improving response time by 40%',
        'Conducted comprehensive hardware-software integration testing',
        'Documented technical specifications and development processes'
      ],
      icon: Cpu,
      color: 'electric-blue'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Professional Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on experience gained through internships and real-world projects
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="cyber-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left side - Icon and basic info */}
                    <div className={`bg-${exp.color}/10 p-8 lg:p-12 flex flex-col justify-center`}>
                      <div className="text-center lg:text-left">
                        <div className={`inline-flex p-4 rounded-lg bg-${exp.color}/20 mb-4`}>
                          <exp.icon className={`h-8 w-8 text-${exp.color}`} />
                        </div>
                        <div className={`text-sm font-tech text-${exp.color} mb-2`}>
                          {exp.type}
                        </div>
                        <div className="text-lg font-tech font-semibold text-foreground mb-1">
                          {exp.title}
                        </div>
                        <div className="text-muted-foreground mb-2">
                          {exp.company}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="lg:col-span-2 p-8 lg:p-12 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-tech font-semibold mb-3 text-foreground flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-tech font-semibold mb-3 text-foreground flex items-center">
                          <Code className="w-4 h-4 mr-2 text-primary" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary" 
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="cyber-card p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-2xl font-tech font-bold mb-4 text-gradient">
                  Looking for New Opportunities
                </h3>
                <p className="text-muted-foreground mb-6">
                  Open to full-time positions in software engineering, data analytics, 
                  and AI/ML development roles where I can contribute to innovative projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="outline" className="text-primary border-primary/20">
                    Available for immediate start
                  </Badge>
                  <Badge variant="outline" className="text-cyber-green border-cyber-green/20">
                    Remote & On-site friendly
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;