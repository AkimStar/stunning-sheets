
import React from "react";
import { motion } from "framer-motion";
import { Home, Fan, Droplets, Factory, Scissors, Wrench } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="neumorphic p-6 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="bg-gradient-to-br from-david-accent1 to-david-accent2 text-white p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-david-navy/80">{description}</p>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Покриви",
      description: "Ремонт и изграждане на качествени покривни конструкции с дългогодишна гаранция.",
      delay: 0,
    },
    {
      icon: <Fan className="h-6 w-6" />,
      title: "Аспирационни системи",
      description: "Професионални решения за индустрии и кухни с висока ефективност.",
      delay: 1,
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Хидроизолации",
      description: "Трайни решения за сгради, защитаващи от влага и повреди.",
      delay: 2,
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Изработка по поръчка",
      description: "Капандури, шапки за комини и други метални елементи по индивидуален проект.",
      delay: 3,
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Обработка на ламарина",
      description: "Прецизно рязане и огъване според вашите спецификации.",
      delay: 4,
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Поддръжка и сервиз",
      description: "Бързи и надеждни екипи за спешни ремонти и редовна поддръжка.",
      delay: 5,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-david-background to-david-accent4/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Какво Правим</h2>
          <div className="h-1 w-20 bg-david-accent1 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-david-navy/80 max-w-2xl mx-auto">
            Предлагаме разнообразни услуги в сферата на металообработката и строителството с фокус върху качество и дълготрайност.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
