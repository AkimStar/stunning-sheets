import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: "Локация", section: "location" },
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
      {/* Mobile Menu Overlay - moved to Portal */}
      {mobileMenuOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex flex-col md:hidden animate-fade-in">
          <div className="flex items-center justify-between p-4">
            <div className="bg-white rounded-full p-2 shadow-md">
              <Logo />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-david-navy p-2 rounded focus:outline-none focus:ring-2 focus:ring-david-accent1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 mt-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  scrollToSection(item.section);
                  setMobileMenuOpen(false);
                }}
                className="text-david-navy text-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className="mt-8 px-6 py-3 rounded-full bg-david-navy text-white text-base font-medium shadow-lg"
            >
              Свържи се с нас
            </button>
          </nav>
        </div>,
        document.body
      )}
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Logo />
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
        <button 
          className={`md:hidden ${scrolled ? "text-david-navy" : "text-white"}`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
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
          className={cn(
            "hidden md:flex px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300",
            scrolled 
              ? "bg-david-navy hover:bg-david-navy/90 hover:shadow-lg" 
              : "bg-david-navy/80 hover:bg-david-navy hover:shadow-lg"
          )}
        >
          Свържи се с нас
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
