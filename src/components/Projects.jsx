import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card } from '@/components/ui/card.jsx';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Web App',
      description:
        'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, and Stripe payment integration.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'JWT'],
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Stripe Integration'],
      demoUrl: 'https://github.com/atik1948',
      githubUrl: 'https://github.com/atik1948',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Blog & CMS Platform',
      description:
        'Content management system with rich text editor, image upload capabilities, and role-based authentication for multiple user types.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: ['Rich Text Editor', 'Image Upload', 'Role-based Auth', 'Content Management'],
      demoUrl: 'https://github.com/atik1948',
      githubUrl: 'https://github.com/atik1948',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Portfolio & Resume Builder',
      description:
        'Interactive tool for creating professional portfolios and resumes with real-time preview and PDF export functionality.',
      techStack: ['MERN', 'Tailwind CSS', 'PDF.js'],
      features: ['Real-time Preview', 'PDF Export', 'Template System', 'Responsive Design'],
      demoUrl: 'https://github.com/atik1948',
      githubUrl: 'https://github.com/atik1948',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Modern chat application supporting one-to-one and group messaging with real-time updates and online/offline status.',
      techStack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
      features: ['Real-time Messaging', 'Group Chat', 'Online Status', 'Message History'],
      demoUrl: 'https://github.com/atik1948',
      githubUrl: 'https://github.com/atik1948',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Task Manager / Kanban Board',
      description:
        'Collaborative task management tool with drag-and-drop functionality, team collaboration features, and project organization.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Drag & Drop'],
      features: ['Task Creation', 'Drag & Drop', 'Team Collaboration', 'Project Organization'],
      demoUrl: 'https://github.com/atik1948',
      githubUrl: 'https://github.com/atik1948',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden shadow-card hover:shadow-glow transition-smooth hover:scale-105"
            >
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute top-2 right-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
                <div className="absolute bottom-2 right-8 w-6 h-6 bg-white/30 rounded-full animate-bounce" />
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary-dark"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/atik1948" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
