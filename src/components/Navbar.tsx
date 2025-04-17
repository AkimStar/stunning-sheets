
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 10);

      // Determine which section is currently in view
      const sections = ["hero", "services", "about", "stats", "materials", "team", "contact", "location"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Начало", section: "hero" },
    { label: "Услуги", section: "services" },
    { label: "За нас", section: "about" },
    { label: "Материали", section: "materials" },
    { label: "Екип", section: "team" },
    { label: "Контакти", section: "contact" },
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-3",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img 
            src="/logo.png"
            alt="Дейвид Груп Logo" 
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className={cn(
                "relative px-1 py-2 text-sm font-medium transition-colors",
                activeSection === item.section
                  ? scrolled ? "text-david-navy" : "text-white" 
                  : scrolled ? "text-david-navy/70 hover:text-david-navy" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
              {activeSection === item.section && (
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 w-full ${scrolled ? "bg-david-navy" : "bg-white"} rounded-full`}
                  layoutId="navbar-indicator"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className={`md:hidden ${scrolled ? "text-david-navy" : "text-white"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Contact Button */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="hidden md:flex glassmorphism px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 hover:shadow-lg transition-all duration-300"
        >
          Свържи се с нас
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
