
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <img src="/logo.svg" alt="David Group Logo" className="h-10 w-auto" />
            <p className="text-white/80">
              Copyright © {currentYear} David Group
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <a href="#hero" className="text-white/80 hover:text-white transition-colors">
              Начало
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              За нас
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Контакти
            </a>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
