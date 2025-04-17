
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
      className="flex-shrink-0 w-64 mx-4"
    >
      <div className="neumorphic overflow-hidden h-full">
        <div className="h-48 overflow-hidden">
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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (emblaApi) {
      // Autoplay functionality
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  // Updated with better images for sheet metal products and roofing
  const materials = [
    {
      title: "Поцинкована ламарина",
      imageSrc: "https://images.unsplash.com/photo-1591972837276-bed99b7a1566?q=80&w=2000&auto=format&fit=crop",
      delay: 0,
    },
    {
      title: "Шапки за комини",
      imageSrc: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2000&auto=format&fit=crop",
      delay: 1,
    },
    {
      title: "Покривни тръби и улуци",
      imageSrc: "https://images.unsplash.com/photo-1570044389283-6713c3c474f0?q=80&w=2000&auto=format&fit=crop",
      delay: 2,
    },
    {
      title: "Неръждаема стомана",
      imageSrc: "https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2000&auto=format&fit=crop",
      delay: 3,
    },
    {
      title: "Прахово боядисани повърхности",
      imageSrc: "https://images.unsplash.com/photo-1583465701507-8fec0bca8826?q=80&w=2000&auto=format&fit=crop",
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

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex py-4">
            {materials.map((material, index) => (
              <MaterialCard
                key={index}
                imageSrc={material.imageSrc}
                title={material.title}
                delay={material.delay}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {materials.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-david-accent1/30 hover:bg-david-accent1 transition-colors duration-300"
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsProducts;
