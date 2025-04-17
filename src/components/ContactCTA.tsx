
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-david-navy to-david-accent1">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Имате проект?</h2>
          <p className="text-xl mb-12 text-white/90">
            Обадете се или изпратете запитване днес — реагираме в рамките на 24 часа.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.a
              href="tel:0897634069"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-david-navy px-6 py-3 rounded-full inline-flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>0897 634 069</span>
            </motion.a>

            <motion.a
              href="tel:0896366865"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glassmorphism text-white px-6 py-3 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>0896 366 865</span>
            </motion.a>
          </div>

          <motion.a
            href="tel:0897634069"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 glassmorphism px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white font-medium"
          >
            <span className="mr-2">Обади се сега</span>
            <Phone className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
