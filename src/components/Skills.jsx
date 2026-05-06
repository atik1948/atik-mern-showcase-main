import {
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Shield,
  Smartphone
} from 'lucide-react';
import { Card } from '@/components/ui/card.jsx';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Redux/Context API', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Responsive Design', level: 90 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'JWT Authentication', level: 85 },
        { name: 'Socket.io', level: 80 },
        { name: 'Server Optimization', level: 75 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Schema Design', level: 85 },
        { name: 'Aggregation Pipelines', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Data Modeling', level: 85 },
        { name: 'Query Optimization', level: 75 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'AWS/Heroku/Vercel', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD Pipelines', level: 70 },
        { name: 'Linux/Terminal', level: 85 },
        { name: 'NPM/Yarn', level: 90 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalSkills = [
    { icon: Code, title: 'Testing', skills: ['Jest', 'Mocha', 'Unit Testing', 'Integration Testing'] },
    { icon: Smartphone, title: 'Mobile', skills: ['Responsive Design', 'PWA', 'Mobile-First', 'Touch Interfaces'] },
    { icon: Shield, title: 'Security', skills: ['OAuth', 'JWT', 'Data Validation', 'HTTPS'] },
    { icon: GitBranch, title: 'Practices', skills: ['Agile', 'Code Review', 'Documentation', 'Version Control'] }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Card key={category.title} className="p-6 shadow-card hover:shadow-glow transition-smooth">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {additionalSkills.map((skillSet) => {
            const Icon = skillSet.icon;

            return (
              <Card
                key={skillSet.title}
                className="p-6 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{skillSet.title}</h4>
                <div className="space-y-2">
                  {skillSet.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Full-Stack Development</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end application development from concept to deployment
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Performance Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Code optimization, caching strategies, and scalable architecture
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Analytical thinking and creative solutions to complex challenges
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
