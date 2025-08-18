import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Download,
  MessageCircle 
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  const formDataToSend = {
    access_key: "9c925888-9844-4e48-ab04-af8157e0d7f6", // Replace with your Web3Forms access key
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message

  };
    // Simulate form submission
   try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formDataToSend)
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });

    } else {
      throw new Error(result.message || "Something went wrong");
     }
     } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gottamvinay6@gmail.com',
      href: 'mailto:gottamvinay6@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9392850855',
      href: 'tel:+919392850855',
      color: 'cyber-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Guntur, Andhra Pradesh, India',
      href: '#',
      color: 'neon-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vinay-gottam-06497424a/',
      color: 'electric-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Vinay21bq',
      color: 'cyber-green'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919392850855',
      color: 'neon-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl font-tech font-bold text-gradient flex items-center">
                  <Send className="w-6 h-6 mr-3" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="glow-border"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="glow-border"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glow-border"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glow-border resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full glow-button bg-gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl font-tech font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`p-3 rounded-lg bg-${info.color}/10 group-hover:bg-${info.color}/20 transition-colors`}>
                        <info.icon className={`h-5 w-5 text-${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl font-tech font-bold text-foreground">
                    Connect on Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group glow-button"
                      >
                        <div className={`p-3 rounded-lg bg-${social.color}/10 group-hover:bg-${social.color}/20 transition-colors`}>
                          <social.icon className={`h-5 w-5 text-${social.color}`} />
                        </div>
                        <div className="font-medium text-foreground">{social.label}</div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="cyber-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-tech font-bold mb-4 text-foreground">
                    Download Resume
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <a
                    href="/Resume_Vinay.pdf"
                    download="Resume_Vinay.pdf"
                    className="w-full"
                  >
                  <Button className="w-full glow-button bg-gradient-secondary">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Resume
                  </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Response Info */}
          <div className="mt-16 text-center">
            <Card className="cyber-card p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-xl font-tech font-bold mb-4 text-gradient">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via WhatsApp or phone for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;