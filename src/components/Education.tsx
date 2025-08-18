import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Vasireddy Venkatadri Institute of Technology',
      duration: '2021 - 2025',
      gpa: '7.1',
      description: 'Specialized in Information Technology with focus on software development, data structures, algorithms, and emerging technologies.',
      highlights: [
        'Relevant coursework in AI/ML, Data Structures, and Software Engineering',
        'Participated in coding competitions and technical workshops',
        'Completed capstone project on deep learning applications',
        'Active member of technical clubs and coding communities'
      ],
      level: 'undergraduate',
      icon: GraduationCap,
      color: 'primary'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Narayana Junior College',
      duration: '2019 - 2021',
      gpa: '83.7%',
      description: 'Mathematics, Physics, and Chemistry (MPC) stream with strong foundation in Mathematical and problem-solving skills.',
      highlights: [
        'Achieved 83.7% in board examinations',
        'Strong foundation in mathematics and physics',
        'Developed analytical thinking and problem-solving abilities',
        'Participated in science exhibitions and academic competitions'
      ],
      level: 'intermediate',
      icon: BookOpen,
      color: 'cyber-green'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Narayana English Medium School',
      duration: '2018 - 2019',
      gpa: '9.7',
      description: 'Excellent academic performance with comprehensive foundation in core subjects and extracurricular activities.',
      highlights: [
        'Outstanding GPA of 9.7 in board examinations',
        'Consistent academic excellence throughout school years',
        'Participated in inter-school competitions and events',
        'Developed strong communication and leadership skills'
      ],
      level: 'secondary',
      icon: Award,
      color: 'neon-purple'
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Academic Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strong educational foundation building expertise in technology and innovation
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="cyber-card overflow-hidden group">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-4 gap-0">
                    {/* Left side - Icon and GPA */}
                    <div className={`bg-${edu.color}/10 p-8 flex flex-col justify-center items-center text-center`}>
                      <div className={`p-4 rounded-lg bg-${edu.color}/20 mb-4`}>
                        <edu.icon className={`h-8 w-8 text-${edu.color}`} />
                      </div>
                      <div className={`text-3xl font-cyber font-bold text-${edu.color} mb-2`}>
                        {edu.gpa}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {edu.level === 'undergraduate' || edu.level === 'secondary' ? 'CGPA' : 'Percentage'}
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="lg:col-span-3 p-8 lg:p-12 space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-tech font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <Badge 
                            variant="outline" 
                            className={`text-${edu.color} border-${edu.color}/20`}
                          >
                            {edu.duration}
                          </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-tech font-semibold mb-3 text-foreground">
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 bg-${edu.color} rounded-full mr-3 mt-2 flex-shrink-0`} />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-tech font-bold text-center mb-8 text-gradient">
              Certifications & Learning
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="cyber-card text-center p-6">
                <CardContent className="p-0">
                  <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-tech font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Actively pursuing online courses in AI/ML and cloud technologies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="cyber-card text-center p-6">
                <CardContent className="p-0">
                  <div className="p-3 rounded-lg bg-cyber-green/10 inline-block mb-4">
                    <Award className="h-6 w-6 text-cyber-green" />
                  </div>
                  <h4 className="font-tech font-semibold mb-2">Technical Workshops</h4>
                  <p className="text-sm text-muted-foreground">
                    Participated in industry workshops and hackathons
                  </p>
                </CardContent>
              </Card>
              
              <Card className="cyber-card text-center p-6">
                <CardContent className="p-0">
                  <div className="p-3 rounded-lg bg-neon-purple/10 inline-block mb-4">
                    <GraduationCap className="h-6 w-6 text-neon-purple" />
                  </div>
                  <h4 className="font-tech font-semibold mb-2">Self-Study Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    Building practical projects to enhance real-world skills
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;