
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Mail, Wrench } from "lucide-react";
import Logo from "./Logo";

const LocationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Къде се намираме</h2>
          <div className="h-1 w-20 bg-david-accent1 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="h-96 neumorphic overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d179.0349921188869!2d27.2556785!3d44.1130728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f007286c059%3A0x45e0fb40f0d9e913!2z0JTQtdC50LLQuNC0IC0g0YLQtdC90LXQutC40LTQttC40LnRgdC60Lgg0YPRgdC70YPQs9C4!5e0!3m2!1sbg!2sbg!4v1744880700200!5m2!1sbg!2sbg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Дейвид Груп - тенекиджийски услуги"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Свържете се с нас</h3>
              <p className="text-david-navy/80 mb-6">
                Заповядайте в нашия офис за консултация или се свържете с нас за въпроси и запитвания.
              </p>
              <p className="text-lg font-medium">
                Гр. Силистра бул. Македония №19
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Working hours */}
              <div className="flex flex-col items-start">
                <div className="bg-david-accent1/10 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-david-accent1" />
                </div>
                <h4 className="text-lg font-medium mb-2">Работно време</h4>
                <p className="text-david-navy/70">Пон-Съб: 09:00-18:00</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start">
                <div className="bg-david-accent1/10 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-david-accent1" />
                </div>
                <h4 className="text-lg font-medium mb-2">Имейл</h4>
                <p className="text-david-navy/70">info@davidgroup.net</p>
              </div>

              {/* Installation options */}
              <div className="flex flex-col items-start">
                <div className="bg-david-accent1/10 p-3 rounded-full mb-4">
                  <Wrench className="h-6 w-6 text-david-accent1" />
                </div>
                <h4 className="text-lg font-medium mb-2">Услуги</h4>
                <p className="text-david-navy/70">Монтаж и консултации</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
