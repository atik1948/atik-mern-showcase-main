import { Code, GraduationCap, Target, Users } from 'lucide-react';
import { Card } from '@/components/ui/card.jsx';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'MERN Expertise',
      description:
        'Specialized in building full-stack applications with MongoDB, Express, React, and Node.js'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSC in Computer Science & Engineering at Daffodil International University'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description:
        'Passionate about creating intuitive, scalable solutions that solve real-world problems'
    },
    {
      icon: Target,
      title: 'Mission',
      description:
        'Committed to delivering high-quality, maintainable code with exceptional user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by passion, powered by technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Hello! I'm a passionate MERN stack developer
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a knack for building scalable, user-centric web applications that bridge
              the gap between complex technical requirements and seamless user experiences.
              My journey in software development is driven by curiosity, continuous learning,
              and a commitment to crafting solutions that make a meaningful impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my BSC in Computer Science & Engineering at Daffodil
              International University, I combine academic knowledge with hands-on experience
              to deliver robust, maintainable applications. I believe in writing clean,
              efficient code and staying updated with the latest industry trends and best
              practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or collaborating with fellow developers to solve
              challenging problems. I'm passionate about the intersection of technology
              and user experience, always striving to create applications that are not just
              functional, but delightful to use.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth">
              <h4 className="text-xl font-semibold text-foreground mb-3">Work Philosophy</h4>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'User experience drives every technical decision',
                  'Clean, maintainable code is essential for scalability',
                  'Continuous learning keeps skills sharp and relevant',
                  'Collaboration and communication are key to success'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth">
              <h4 className="text-xl font-semibold text-foreground mb-3">Current Focus</h4>
              <p className="text-muted-foreground mb-4">
                Expanding expertise in modern development practices:
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Testing'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <Card
                key={highlight.title}
                className="p-6 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
