import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated Background Blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 blob-shape animate-blob" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-warm-accent/20 blob-shape animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="text-accent text-lg font-medium">
                Hello, I'm
              </span>
              <h1 className="text-5xl mt-8 lg:text-6xl font-bold lg:mt-4 mb-4">
                Atik Wahid
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/90">
                MERN Stack Developer
              </h2>
            </div>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Passionate about building scalable, user-centric web applications
              that deliver seamless digital experiences.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["React", "Node.js", "MongoDB", "Express"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
              >
                View My Work
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:atik@example.com"
                className="text-white/70 hover:text-accent transition-smooth"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-white/20">
                <img
                  src={`${import.meta.env.BASE_URL}atik-profile.jpg`}
                  alt="Atik Wahid - MERN Stack Developer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                  onError={(e) => {
                    console.error("Failed to load profile image:", e);
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-warm-accent rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
