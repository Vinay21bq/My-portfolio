import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Environmental Monitoring',
      excerpt: 'Exploring how machine learning models like LSTM-CNN hybrids are revolutionizing water quality prediction and environmental conservation efforts.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI/ML',
      tags: ['Machine Learning', 'Environmental Tech', 'Deep Learning'],
      featured: true
    },
    {
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'A comprehensive guide to creating robust, scalable web applications using React, Node.js, and modern development practices.',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'Full Stack']
    },
    {
      title: 'Data Analytics Best Practices for Beginners',
      excerpt: 'Essential techniques and tools for data cleaning, transformation, and visualization that every data analyst should master.',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Data Science',
      tags: ['Data Analytics', 'Power BI', 'Python']
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Tech Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge and insights about technology, AI, and software development
            </p>
          </div>

          {/* Featured Post */}
          <Card className="cyber-card mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {blogPosts[0].category}
                  </Badge>
                </div>
                
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl lg:text-3xl font-tech font-bold text-foreground leading-tight">
                    {blogPosts[0].title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(blogPosts[0].date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a href='https://ijesat.com/archivesa_view.php?pid=954' target='_blank' className="inline-block">
                  <Button className="glow-button bg-gradient-primary group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  </a>
                </CardContent>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-cyber-green/20 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-background/10" />
                <div className="relative z-10 text-center">
                  <BookOpen className="h-24 w-24 text-primary/60 mx-auto mb-4" />
                  <div className="text-primary/40 font-tech">Featured Article</div>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="cyber-card group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-primary border-primary/20">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-tech font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Posts CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="glow-button">
              View All Posts
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;