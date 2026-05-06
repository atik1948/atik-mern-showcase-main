import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { useToast } from '@/hooks/use-toast.js';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({
        title: 'Please complete the form',
        description: 'Name, email, and message are required before sending.'
      });
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:wahidabdul50084@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Email draft opened',
      description: 'Your email app should open with the message pre-filled.'
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'wahidabdul50084@gmail.com',
      href: 'mailto:wahidabdul50084@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+8801537437213',
      href: 'tel:+8801537437213'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/atik1948',
      href: 'https://github.com/atik1948',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/abdul-wahid',
      href: 'https://www.linkedin.com/in/abdul-wahid-2104b6278/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 blob-shape animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 blob-shape animate-blob" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether
                you're a company looking for a dedicated developer or you have a project idea
                you'd like to discuss, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-smooth group"
                    >
                      <Icon
                        className={`w-5 h-5 text-muted-foreground ${social.color} transition-smooth`}
                      />
                      <div>
                        <span className="font-medium text-foreground">{social.title}</span>
                        <p className="text-sm text-muted-foreground">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quick Response Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent inquiries,
                    feel free to reach out via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
                <p className="text-sm text-muted-foreground">
                  This form opens your email app with a pre-filled draft.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Opening email app...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
