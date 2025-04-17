
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-david-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0 flex items-center gap-3"
          >
            <img src="/logo.svg" alt="Дейвид Груп Logo" className="h-10 w-auto" />
            <p className="text-white/80">
              Copyright © {currentYear} Дейвид Груп
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Начало
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              За нас
            </button>
            <button 
              onClick={() => scrollToSection('materials')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Материали
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Екип
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакти
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Локация
            </button>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
