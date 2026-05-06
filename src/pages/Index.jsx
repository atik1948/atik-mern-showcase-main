import About from '@/components/About.jsx';
import Contact from '@/components/Contact.jsx';
import Hero from '@/components/Hero.jsx';
import Navigation from '@/components/Navigation.jsx';
import Projects from '@/components/Projects.jsx';
import Skills from '@/components/Skills.jsx';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            Copyright 2024 Atik Wahid. Built with React, JavaScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
