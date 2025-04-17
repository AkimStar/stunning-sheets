
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Clock, Mail, Wrench } from "lucide-react";

const LocationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated coordinates for Дейвид - тенекиджийски услуги
  const center = { lat: 44.1131063, lng: 27.2555687 }; // Coordinates for Дейвид - тенекиджийски услуги in Силистра, Bulgaria

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",  // In a real implementation, you would provide your API key
    // For demo purposes, we'll show a fallback instead
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
            {/* For demo purposes, since we can't provide a real API key */}
            <div className="w-full h-full bg-david-accent4/50 relative flex items-center justify-center">
              <img 
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${center.lng},${center.lat},15,0/600x400?access_token=pk.dummy`}
                alt="Map of Силистра"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-david-navy font-medium mb-2">Интерактивна карта</p>
                <p className="text-david-navy/70 text-sm">Гр. Силистра бул. Македония №19</p>
              </div>
              <div className="absolute top-4 right-4">
                <Logo />
              </div>
            </div>
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
                <p className="text-david-navy/70">info@davidgroup.bg</p>
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

  // Need to fix this component by adding the missing Logo import
};

// Adding the Logo component directly in the file to fix the reference
import Logo from "./Logo";

export default LocationSection;
