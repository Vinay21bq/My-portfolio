import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "blog",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "cyber-card backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="font-cyber text-xl font-bold text-gradient">
            VINAY.DEV
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-tech transition-all duration-300 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <a
            href="/Resume_Vinay.pdf"
            download="Resume_Vinay.pdf"
            className="hidden md:block"
          >
            <Button variant="outline" className="glow-button hidden md:block">
              Download Resume
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </Button>
        </div>
      </nav>

      {/* Right-side Drawer + Overlay */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 w-64 h-full bg-black/90 shadow-lg z-50 flex flex-col p-6 space-y-6 animate-slide-in">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Nav Links */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-tech text-left text-lg transition-all duration-300 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Resume Download */}
            <a href="/Resume_Vinay.pdf" download="Resume_Vinay.pdf">
              <Button className="w-full glow-button bg-gradient-secondary">
                Download Resume
              </Button>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
