import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.jsx';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Atik Wahid
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-smooth ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            variant="default"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
