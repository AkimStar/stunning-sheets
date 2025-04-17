import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Droplet, Wrench } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

interface MaterialCardProps {
  imageSrc: string;
  title: string;
  delay: number;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ imageSrc, title, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex-shrink-0 w-64 mx-4 md:w-52 md:mx-4"
    >
      <div className="bg-white neumorphic overflow-hidden h-full">
        <div className="h-48 md:h-40 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center space-x-2">
    <div className="text-david-accent1">{icon}</div>
    <span className="text-sm">{title}</span>
  </div>
);

const MaterialsProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true });

  useEffect(() => {
    if (emblaApi) {
      // Autoplay functionality
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 1500);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  // Updated with better images for sheet metal products and roofing
  const materials = [
    {
      title: "Поцинкована ламарина",
      imageSrc: "https://i.ibb.co/1pYCF77/Chat-GPT-Image-Apr-17-2025-02-11-20-PM-copy.png",
      delay: 0,
    },
    {
      title: "Шапки за комини",
      imageSrc: "https://i.ibb.co/cSw6X0hp/Chat-GPT-Image-Apr-17-2025-02-19-46-PM.png",
      delay: 1,
    },
    {
      title: "Покривни тръби и улуци",
      imageSrc: "https://i.ibb.co/xt8F8MzP/Chat-GPT-Image-Apr-17-2025-02-28-06-PM.png",
      delay: 2,
    },
    {
      title: "Неръждаема стомана",
      imageSrc: "https://i.ibb.co/1tnTNGkR/Chat-GPT-Image-Apr-17-2025-02-34-29-PM.png",
      delay: 3,
    },
    {
      title: "Прахово боядисани повърхности",
      imageSrc: "https://i.ibb.co/Mx9s8Qsk/Chat-GPT-Image-Apr-17-2025-02-41-01-PM.png",
      delay: 4,
    },
  ];

  const features = [
    { icon: <Shield className="h-4 w-4" />, title: "Дълготрайност" },
    { icon: <Droplet className="h-4 w-4" />, title: "Устойчивост на корозия" },
    { icon: <Wrench className="h-4 w-4" />, title: "Лесна поддръжка" },
  ];

  return (
    <section id="materials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Материали, на които разчитаме</h2>
          <div className="h-1 w-20 bg-david-accent1 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-david-navy/80 max-w-2xl mx-auto">
            Използваме само висококачествени материали от проверени доставчици, за да осигурим издръжливост и дълготрайност на нашите продукти.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            {features.map((feature, index) => (
              <FeatureItem key={index} icon={feature.icon} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile carousel: only visible on mobile */}
      <div className="block md:hidden mx-auto pb-4" style={{ maxWidth: '100vw' }}>
        <div ref={emblaRef}>
          <div className="flex">
            {materials.map((material, index) => (
              <div key={index} className="flex-shrink-0 w-full pl-4 pr-4">
                <div className="bg-white neumorphic overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={material.imageSrc} 
                      alt={material.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{material.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop row: only visible on md+ */}
      <div className="hidden md:flex justify-center gap-8 pb-4">
        {materials.map((material, index) => (
          <div key={index} className="flex-shrink-0 w-52">
            <div className="bg-white neumorphic overflow-hidden h-full">
              <div className="h-40 overflow-hidden">
                <img 
                  src={material.imageSrc} 
                  alt={material.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{material.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsProducts;
